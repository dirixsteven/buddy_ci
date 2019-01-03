let HDWalletProvider = require('truffle-hdwallet-provider');
let mnemonic = process.env.PRIV_SEED;

module.exports = {
  networks: {
    development: {
      host: "localhost",
      port: 8545,
      network_id: "*" // Match any network id
    },
    buddy: {
      host: "ganache",
      port: 8545,
      network_id: "*" // Match any network id
    },
    rinkby: {
      provider: function() {
        return new HDWalletProvider(mnemonic, "https://rinkeby.infura.io/v3/c52c934a835f480a9e117a1a728c7997");
      },
      network_id: '4',
    }
  }
};
