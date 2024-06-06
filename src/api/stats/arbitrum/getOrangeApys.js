const BigNumber = require('bignumber.js');
const puppeteer = require('puppeteer');

const pools = require('../../../data/arbitrum/orangePools.json');
import getApyBreakdown from '../common/getApyBreakdown';

const getOrangeApys = async () => {
  let promises = [];
  pools.forEach(pool => promises.push(getPoolApy(pool)));
  const farmAprs = await Promise.all(promises);

  const res = getApyBreakdown(pools, {}, farmAprs);
  console.log(res)

  return res;
};

const getPoolApy = async pool => {
  const merkl = await fetch("https://api.merkl.xyz/v3/merkl?chainIds=42161").then(async(res) => await res.json());
  const meanAPR = merkl[42161].pools["0xC6962004f452bE9203591991D15f6b388e09E8D0"].meanAPR;
  console.log("#**************************#", meanAPR)
  
  console.log(`https://app.orangefinance.io/arbitrum/${pool.address}`)
  //initiate the browser 
  const browser = await puppeteer.launch({args: ['--no-sandbox']});

  console.log("#1")
  //create a new in headless chrome 
  const page = await browser.newPage();

  console.log("#2")
  //go to target website 
  await page.goto(`https://app.orangefinance.io/arbitrum/${pool.address}`, {
    //wait for content to load 
    waitUntil: 'networkidle0',
  });

  console.log("#3")
  //get full page html 
  const values = await page.evaluate(() => Array.from(document.querySelectorAll(".type-xl-semibold.text-white.font-mono")).map(div => div.textContent))
  console.log("#4", values)
  const apr = Math.max(Number(values[1].match(/\d+/)[0]), meanAPR);
  //store html content in the reactstorefront file
  console.log("#5", apr)
  //close headless chrome 
  await browser.close();

  return new BigNumber(apr / 100);
};

module.exports = getOrangeApys;
