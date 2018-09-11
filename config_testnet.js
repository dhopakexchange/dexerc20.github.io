/* eslint-env browser */

module.exports = {
  homeURL: 'http://localhost:8080',
  contractdexerc20: 'smart_contract/dexerc20.sol',
  contractToken: 'smart_contract/token.sol',
  contractReserveToken: 'smart_contract/reservetoken.sol',
  contractdexerc20Addrs: [
    { addr: '0x051a4A698b3fA71c2e84B9f1ce5977EA6dD0799e', info: 'Deployed 08/10/2017' },
    
  ],
  ethTestnet: 'ropsten',
  ethProvider: 'http://localhost:8545',
  ethGasPrice: 20000000000,
  ethAddr: '0x0000000000000000000000000000000000000000',
  ethAddrPrivateKey: '',
  gasApprove: 250000,
  gasDeposit: 250000,
  gasWithdraw: 250000,
  gasTrade: 250000,
  gasOrder: 250000,
  ordersOnchain: false,
  apiServer: 'http://localhost:3000',
  userCookie: 'dexerc20',
  eventsCacheCookie: 'dexerc20_eventsCache',
  deadOrdersCacheCookie: 'dexerc20_deadOrdersCache',
  ordersCacheCookie: 'dexerc20_ordersCache',
  etherscanAPIKey: 'P26NHN5HYCQIF9A5D5BEFUIKK8XN7BTSMF',
  tokens: [
    { addr: '0x0000000000000000000000000000000000000000', name: 'ETH', decimals: 18 },
    { addr: '0x40aade55175aaeed9c88612c3ed2ff91d8943964', name: '1ST', decimals: 18 },
  ],
  defaultPair: { token: '1ST', base: 'ETH' },
  pairs: [
    { token: '1ST', base: 'ETH' },
  ],
};
