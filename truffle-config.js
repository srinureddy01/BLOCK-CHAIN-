module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",     // Localhost
      port: 7545,            // The port Ganache CLI is running on
      network_id: "*",       // Match any network id
      gas: 6721975,          // Gas limit (adjust as needed)
      gasPrice: 2000000000   // Gas price (adjust as needed)
    }
  },

  compilers: {
    solc: {
      version: "0.8.0",  // Use the correct Solidity version
    }
  }
};