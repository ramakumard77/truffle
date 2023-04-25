module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 6545,
      network_id: "*",
    },
    test: { 
      host: "127.0.0.1",
      port: 7545,
      network_id: "*", 
    }, 
    dashboard: {},
    loc_development_development: {
      network_id: "*",
      port: 8877,
      host: "127.0.0.1"
    }
  },
  compilers: {
    solc: {
      version: "0.8.13"
    }
  },
  db: {
    enabled: false,
    host: "127.0.0.1"
  }
};
