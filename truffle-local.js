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
    
    }
  }
};
