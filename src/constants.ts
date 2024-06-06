import { ChainId } from '../packages/address-book/address-book';
import { ApiChain } from './utils/chain';
import ReadOnlyDict = NodeJS.ReadOnlyDict;

const API_BASE_URL = process.env.API_BASE_URL || 'http://localhost:3000';

const BASE_HPY = 2190;
const MINUTELY_HPY = 525600;
const HOURLY_HPY = 8760;
const DAILY_HPY = 365;
const ETH_HPY = DAILY_HPY / 3;
const WEEKLY_HPY = 52;
const MONTH_HPY = 12;
const HALF_HPY = 2;

const FORTUBE_REQ_TOKENS = 'https://bsc.for.tube/api/v2/bank_tokens';
const FORTUBE_REQ_MARKETS = 'https://bsc.for.tube/api/v1/bank/markets?mode=extended';
const FORTUBE_API_TOKEN = process.env.FORTUBE_API_TOKEN;

const MAINNET_BSC_RPC_ENDPOINTS = [
  'https://bsc-dataseed.binance.org',
  'https://bsc-dataseed1.defibit.io',
  'https://bsc-dataseed1.ninicoin.io',
  'https://bsc-dataseed2.defibit.io',
  'https://bsc-dataseed3.defibit.io',
  'https://bsc-dataseed4.defibit.io',
  'https://bsc-dataseed2.ninicoin.io',
  'https://bsc-dataseed3.ninicoin.io',
  'https://bsc-dataseed4.ninicoin.io',
  'https://bsc-dataseed1.binance.org',
  'https://bsc-dataseed2.binance.org',
  'https://bsc-dataseed3.binance.org',
  'https://bsc-dataseed4.binance.org',
];

const CUSTOM_BSC_RPC_ENDPOINTS = [process.env.BSC_RPC].filter(item => item);

const BSC_RPC_ENDPOINTS = CUSTOM_BSC_RPC_ENDPOINTS.length
  ? CUSTOM_BSC_RPC_ENDPOINTS
  : MAINNET_BSC_RPC_ENDPOINTS;

const BSC_RPC = process.env.BSC_RPC || BSC_RPC_ENDPOINTS[0];
const HECO_RPC = process.env.HECO_RPC || 'https://http-mainnet.hecochain.com';
const AVAX_RPC = process.env.AVAX_RPC || 'https://rpc.ankr.com/avalanche';
const POLYGON_RPC = process.env.POLYGON_RPC || 'https://polygon-rpc.com/';
const FANTOM_RPC = process.env.FANTOM_RPC || 'https://rpc.ankr.com/fantom';
const ONE_RPC = process.env.ONE_RPC || 'https://api.harmony.one/';
const ARBITRUM_RPC = process.env.ARBITRUM_RPC || 'https://arb1.arbitrum.io/rpc';
const CELO_RPC = process.env.CELO_RPC || 'https://forno.celo.org';
const MOONRIVER_RPC = process.env.MOONRIVER_RPC || 'https://rpc.api.moonriver.moonbeam.network';
const CRONOS_RPC = process.env.CRONOS_RPC || 'https://cronos.blockpi.network/v1/rpc/public';
const AURORA_RPC =
  process.env.AURORA_RPC ||
  'https://mainnet.aurora.dev/Fon6fPMs5rCdJc4mxX4kiSK1vsKdzc3D8k6UF8aruek';
const FUSE_RPC = process.env.FUSE_RPC || 'https://rpc.fuse.io';
const METIS_RPC = process.env.METIS_RPC || 'https://andromeda.metis.io/?owner=1088';
const MOONBEAM_RPC = process.env.MOONBEAM_RPC || 'https://rpc.api.moonbeam.network';
const EMERALD_RPC = process.env.EMERALD_RPC || 'https://emerald.oasis.dev';
const OPTIMISM_RPC = process.env.OPTIMISM_RPC || 'https://rpc.ankr.com/optimism';
const KAVA_RPC = process.env.KAVA_RPC || 'https://kava-evm.publicnode.com';
const ETH_RPC = process.env.ETH_RPC || 'https://rpc.ankr.com/eth';
const CANTO_RPC = process.env.CANTO_RPC || 'https://canto.slingshot.finance';
const ZKSYNC_RPC = process.env.ZKSYNC_RPC || 'https://mainnet.era.zksync.io';
const ZKEVM_RPC = process.env.ZKEVM_RPC || 'https://zkevm-rpc.com';
const BASE_RPC = process.env.BASE_RPC || 'https://mainnet.base.org';
const GNOSIS_RPC = process.env.GNOSIS_RPC || 'https://gnosis.publicnode.com';
const LINEA_RPC = process.env.LINEA_RPC || 'https://rpc.linea.build';
const MANTLE_RPC = process.env.MANTLE_RPC || 'https://rpc.mantle.xyz';

const BSC_CHAIN_ID = ChainId.bsc;
const HECO_CHAIN_ID = ChainId.heco;
const POLYGON_CHAIN_ID = ChainId.polygon;
const AVAX_CHAIN_ID = ChainId.avax;
const FANTOM_CHAIN_ID = ChainId.fantom;
const ONE_CHAIN_ID = ChainId.one;
const ARBITRUM_CHAIN_ID = ChainId.arbitrum;
const CELO_CHAIN_ID = ChainId.celo;
const MOONRIVER_CHAIN_ID = ChainId.moonriver;
const CRONOS_CHAIN_ID = ChainId.cronos;
const AURORA_CHAIN_ID = ChainId.aurora;
const FUSE_CHAIN_ID = ChainId.fuse;
const METIS_CHAIN_ID = ChainId.metis;
const MOONBEAM_CHAIN_ID = ChainId.moonbeam;
const EMERALD_CHAIN_ID = ChainId.emerald;
const OPTIMISM_CHAIN_ID = ChainId.optimism;
const KAVA_CHAIN_ID = ChainId.kava;
const ETH_CHAIN_ID = ChainId.ethereum;
const CANTO_CHAIN_ID = ChainId.canto;
const ZKSYNC_CHAIN_ID = ChainId.zksync;
const ZKEVM_CHAIN_ID = ChainId.zkevm;
const BASE_CHAIN_ID = ChainId.base;
const GNOSIS_CHAIN_ID = ChainId.gnosis;
const LINEA_CHAIN_ID = ChainId.linea;
const MANTLE_CHAIN_ID = ChainId.mantle;

const DFYN_LPF = 0.003;
const SUSHI_LPF = 0.003;
const SPIRIT_LPF = 0.003;
const QUICK_LPF = 0.003;
const APEPOLY_LPF = 0.002;
const COMETH_LPF = 0.005;
const PCS_LPF = 0.0017;
const APE_LPF = 0.002;
const SPOOKY_LPF = 0.002;
const JOE_LPF = 0.003;
const SOLAR_LPF = 0.0025;
const FUSEFI_LPF = 0.003;
const NET_LPF = 0.003;
const PANGOLIN_LPF = 0.003;
const TETHYS_LPF = 0.002;
const BEAMSWAP_LPF = 0.0017;
const TOMBSWAP_LPF = 0.005;
const BISWAP_LPF = 0.0005;
const HOP_LPF = 0.0004;

const MULTICHAIN_RPC: Record<ChainId, string> = {
  [ChainId.bsc]: BSC_RPC,
  [ChainId.heco]: HECO_RPC,
  [ChainId.polygon]: POLYGON_RPC,
  [ChainId.avax]: AVAX_RPC,
  [ChainId.fantom]: FANTOM_RPC,
  [ChainId.one]: ONE_RPC,
  [ChainId.arbitrum]: ARBITRUM_RPC,
  [ChainId.celo]: CELO_RPC,
  [ChainId.moonriver]: MOONRIVER_RPC,
  [ChainId.cronos]: CRONOS_RPC,
  [ChainId.aurora]: AURORA_RPC,
  [ChainId.fuse]: FUSE_RPC,
  [ChainId.metis]: METIS_RPC,
  [ChainId.moonbeam]: MOONBEAM_RPC,
  [ChainId.emerald]: EMERALD_RPC,
  [ChainId.optimism]: OPTIMISM_RPC,
  [ChainId.kava]: KAVA_RPC,
  [ChainId.ethereum]: ETH_RPC,
  [ChainId.canto]: CANTO_RPC,
  [ChainId.zksync]: ZKSYNC_RPC,
  [ChainId.zkevm]: ZKEVM_RPC,
  [ChainId.base]: BASE_RPC,
  [ChainId.gnosis]: GNOSIS_RPC,
  [ChainId.linea]: LINEA_RPC,
  [ChainId.mantle]: MANTLE_RPC,
};

const BSC_VAULTS_ENDPOINT =
  'https://raw.githubusercontent.com/beefyfinance/beefy-v2/prod/src/config/vault/bsc.json';
const HECO_VAULTS_ENDPOINT =
  'https://raw.githubusercontent.com/beefyfinance/beefy-v2/prod/src/config/vault/heco.json';
const AVAX_VAULTS_ENDPOINT =
  'https://raw.githubusercontent.com/beefyfinance/beefy-v2/prod/src/config/vault/avax.json';
const POLYGON_VAULTS_ENDPOINT =
  'https://raw.githubusercontent.com/beefyfinance/beefy-v2/prod/src/config/vault/polygon.json';
const FANTOM_VAULTS_ENDPOINT =
  'https://raw.githubusercontent.com/beefyfinance/beefy-v2/prod/src/config/vault/fantom.json';
const ONE_VAULTS_ENDPOINT =
  'https://raw.githubusercontent.com/beefyfinance/beefy-v2/prod/src/config/vault/harmony.json';
const ARBITRUM_VAULTS_ENDPOINT =
  'https://raw.githubusercontent.com/beefyfinance/beefy-v2/prod/src/config/vault/arbitrum.json';
const CELO_VAULTS_ENDPOINT =
  'https://raw.githubusercontent.com/beefyfinance/beefy-v2/prod/src/config/vault/celo.json';
const MOONRIVER_VAULTS_ENDPOINT =
  'https://raw.githubusercontent.com/beefyfinance/beefy-v2/prod/src/config/vault/moonriver.json';
const CRONOS_VAULTS_ENDPOINT =
  'https://raw.githubusercontent.com/beefyfinance/beefy-v2/prod/src/config/vault/cronos.json';
const AURORA_VAULTS_ENDPOINT =
  'https://raw.githubusercontent.com/beefyfinance/beefy-v2/prod/src/config/vault/aurora.json';
const FUSE_VAULTS_ENDPOINT =
  'https://raw.githubusercontent.com/beefyfinance/beefy-v2/prod/src/config/vault/fuse.json';
const METIS_VAULTS_ENDPOINT =
  'https://raw.githubusercontent.com/beefyfinance/beefy-v2/prod/src/config/vault/metis.json';
const MOONBEAM_VAULTS_ENDPOINT =
  'https://raw.githubusercontent.com/beefyfinance/beefy-v2/prod/src/config/vault/moonbeam.json';
const EMERALD_VAULTS_ENDPOINT =
  'https://raw.githubusercontent.com/beefyfinance/beefy-v2/prod/src/config/vault/emerald.json';
const OPTIMISM_VAULTS_ENDPOINT =
  'https://raw.githubusercontent.com/beefyfinance/beefy-v2/prod/src/config/vault/optimism.json';
const KAVA_VAULTS_ENDPOINT =
  'https://raw.githubusercontent.com/beefyfinance/beefy-v2/prod/src/config/vault/kava.json';
const ETHEREUM_VAULTS_ENDPOINT =
  'https://raw.githubusercontent.com/beefyfinance/beefy-v2/prod/src/config/vault/ethereum.json';
const CANTO_VAULTS_ENDPOINT =
  'https://raw.githubusercontent.com/beefyfinance/beefy-v2/prod/src/config/vault/canto.json';
const ZKSYNC_VAULTS_ENDPOINT =
  'https://raw.githubusercontent.com/beefyfinance/beefy-v2/prod/src/config/vault/zksync.json';
const ZKEVM_VAULTS_ENDPOINT =
  'https://raw.githubusercontent.com/beefyfinance/beefy-v2/prod/src/config/vault/zkevm.json';
const BASE_VAULTS_ENDPOINT =
  'https://raw.githubusercontent.com/beefyfinance/beefy-v2/prod/src/config/vault/base.json';
const GNOSIS_VAULTS_ENDPOINT =
  'https://raw.githubusercontent.com/beefyfinance/beefy-v2/prod/src/config/vault/gnosis.json';
const LINEA_VAULTS_ENDPOINT =
  'https://raw.githubusercontent.com/beefyfinance/beefy-v2/prod/src/config/vault/linea.json';
const MANTLE_VAULTS_ENDPOINT =
  'https://raw.githubusercontent.com/beefyfinance/beefy-v2/prod/src/config/vault/mantle.json';

const MULTICHAIN_ENDPOINTS: Partial<Record<ApiChain, string>> = {
  // bsc: BSC_VAULTS_ENDPOINT,
  // avax: AVAX_VAULTS_ENDPOINT,
  // polygon: POLYGON_VAULTS_ENDPOINT,
  // fantom: FANTOM_VAULTS_ENDPOINT,
  // one: ONE_VAULTS_ENDPOINT,
  // arbitrum: ARBITRUM_VAULTS_ENDPOINT,
  // celo: CELO_VAULTS_ENDPOINT,
  // moonriver: MOONRIVER_VAULTS_ENDPOINT,
  // cronos: CRONOS_VAULTS_ENDPOINT,
  // aurora: AURORA_VAULTS_ENDPOINT,
  // fuse: FUSE_VAULTS_ENDPOINT,
  // metis: METIS_VAULTS_ENDPOINT,
  // moonbeam: MOONBEAM_VAULTS_ENDPOINT,
  // emerald: EMERALD_VAULTS_ENDPOINT,
  // optimism: OPTIMISM_VAULTS_ENDPOINT,
  // heco: HECO_VAULTS_ENDPOINT,
  // kava: KAVA_VAULTS_ENDPOINT,
  // ethereum: ETHEREUM_VAULTS_ENDPOINT,
  // canto: CANTO_VAULTS_ENDPOINT,
  // zksync: ZKSYNC_VAULTS_ENDPOINT,
  // zkevm: ZKEVM_VAULTS_ENDPOINT,
  // base: BASE_VAULTS_ENDPOINT,
  // gnosis: GNOSIS_VAULTS_ENDPOINT,
  // linea: LINEA_VAULTS_ENDPOINT,
  // mantle: MANTLE_VAULTS_ENDPOINT,
} as const;

const EXCLUDED_IDS_FROM_TVL = ['venus-wbnb'];

export {
  API_BASE_URL,
  BSC_RPC,
  BSC_RPC_ENDPOINTS,
  BSC_CHAIN_ID,
  BSC_VAULTS_ENDPOINT,
  HECO_RPC,
  HECO_CHAIN_ID,
  HECO_VAULTS_ENDPOINT,
  AVAX_RPC,
  AVAX_CHAIN_ID,
  AVAX_VAULTS_ENDPOINT,
  POLYGON_RPC,
  POLYGON_CHAIN_ID,
  POLYGON_VAULTS_ENDPOINT,
  FANTOM_RPC,
  FANTOM_CHAIN_ID,
  FANTOM_VAULTS_ENDPOINT,
  ONE_RPC,
  ONE_CHAIN_ID,
  ONE_VAULTS_ENDPOINT,
  ARBITRUM_RPC,
  ARBITRUM_CHAIN_ID,
  ARBITRUM_VAULTS_ENDPOINT,
  CELO_RPC,
  CELO_CHAIN_ID,
  CELO_VAULTS_ENDPOINT,
  MOONRIVER_RPC,
  MOONRIVER_CHAIN_ID,
  MOONRIVER_VAULTS_ENDPOINT,
  CRONOS_RPC,
  CRONOS_CHAIN_ID,
  CRONOS_VAULTS_ENDPOINT,
  AURORA_RPC,
  AURORA_CHAIN_ID,
  AURORA_VAULTS_ENDPOINT,
  FUSE_RPC,
  FUSE_CHAIN_ID,
  FUSE_VAULTS_ENDPOINT,
  METIS_RPC,
  METIS_CHAIN_ID,
  METIS_VAULTS_ENDPOINT,
  MOONBEAM_RPC,
  MOONBEAM_CHAIN_ID,
  MOONBEAM_VAULTS_ENDPOINT,
  EMERALD_RPC,
  EMERALD_CHAIN_ID,
  EMERALD_VAULTS_ENDPOINT,
  OPTIMISM_RPC,
  OPTIMISM_CHAIN_ID,
  OPTIMISM_VAULTS_ENDPOINT,
  KAVA_RPC,
  KAVA_CHAIN_ID,
  KAVA_VAULTS_ENDPOINT,
  ETH_RPC,
  ETH_CHAIN_ID,
  ETHEREUM_VAULTS_ENDPOINT,
  CANTO_RPC,
  CANTO_CHAIN_ID,
  CANTO_VAULTS_ENDPOINT,
  ZKSYNC_RPC,
  ZKSYNC_CHAIN_ID,
  ZKSYNC_VAULTS_ENDPOINT,
  ZKEVM_RPC,
  ZKEVM_CHAIN_ID,
  ZKEVM_VAULTS_ENDPOINT,
  BASE_RPC,
  BASE_CHAIN_ID,
  BASE_VAULTS_ENDPOINT,
  GNOSIS_RPC,
  GNOSIS_CHAIN_ID,
  GNOSIS_VAULTS_ENDPOINT,
  LINEA_RPC,
  LINEA_CHAIN_ID,
  LINEA_VAULTS_ENDPOINT,
  MANTLE_RPC,
  MANTLE_CHAIN_ID,
  MANTLE_VAULTS_ENDPOINT,
  HALF_HPY,
  BASE_HPY,
  MINUTELY_HPY,
  HOURLY_HPY,
  DAILY_HPY,
  WEEKLY_HPY,
  MONTH_HPY,
  FORTUBE_REQ_TOKENS,
  FORTUBE_REQ_MARKETS,
  FORTUBE_API_TOKEN,
  MULTICHAIN_RPC,
  MULTICHAIN_ENDPOINTS,
  DFYN_LPF,
  SUSHI_LPF,
  SPIRIT_LPF,
  QUICK_LPF,
  APEPOLY_LPF,
  COMETH_LPF,
  PCS_LPF,
  APE_LPF,
  SPOOKY_LPF,
  JOE_LPF,
  SOLAR_LPF,
  FUSEFI_LPF,
  NET_LPF,
  PANGOLIN_LPF,
  TETHYS_LPF,
  BEAMSWAP_LPF,
  BISWAP_LPF,
  TOMBSWAP_LPF,
  HOP_LPF,
  EXCLUDED_IDS_FROM_TVL,
};
