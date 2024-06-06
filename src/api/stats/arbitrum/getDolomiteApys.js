const BigNumber = require('bignumber.js');
const { arbitrumWeb3: web3 } = require('../../../utils/web3');
const pools = require('../../../data/arbitrum/dolomitePools.json');
import getApyBreakdown from '../common/getApyBreakdown';

const url =
  'https://gateway-arbitrum.network.thegraph.com/api/5103e882e2294b33795a88793070dac3/deployments/id/QmYwQjfKN65mf656hRXA6KZoCB3svKEET9eTdKvem2eKTN';
const headers = new Headers({
  Accept: '*/*',
  'Accept-Encoding': 'gzip, deflate, br, zstd',
  'Accept-Language': 'en-US,en;q=0.9',
  'Content-Type': 'application/json',
  Origin: 'https://app.dolomite.io',
  Referer: 'https://app.dolomite.io/',
  'Sec-Ch-Ua': '"Google Chrome";v="123", "Not:A-Brand";v="8", "Chromium";v="123"',
  'Sec-Ch-Ua-Mobile': '?0',
  'Sec-Ch-Ua-Platform': '"Windows"',
  'Sec-Fetch-Dest': 'empty',
  'Sec-Fetch-Mode': 'cors',
  'Sec-Fetch-Site': 'cross-site',
  'User-Agent':
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36',
});

const options = blockNumber => {
  return {
    method: 'POST',
    headers: headers,
    body: `{"operationName":"allInterestRates","variables":{"blockNumber":${Number(
      blockNumber.toString()
    )}},"query":"query allInterestRates($blockNumber: Int!) {  interestRates(block: {number_gte: $blockNumber}) {    id    borrowInterestRate    supplyInterestRate    token {      id      marketId      __typename    }    interestSetter    optimalUtilizationRate    lowerOptimalRate    upperOptimalRate    __typename  }}"}`,
  };
};

const getDolomiteApys = async () => {
  const blockNumber = await web3.eth.getBlockNumber();
  const res = await fetch(url, await options(blockNumber));
  const data = await res.json();
  const farmAprs = pools.map(pool => {
    return new BigNumber(
      data.data.interestRates.find(
        el => el.id.toLowerCase() == pool.address.toLowerCase()
      ).supplyInterestRate
    );
  });
  console.log(blockNumber, data, farmAprs[0].toNumber());

  return getApyBreakdown(pools, {}, farmAprs);
};

module.exports = getDolomiteApys;
