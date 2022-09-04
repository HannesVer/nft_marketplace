require("@nomiclabs/hardhat-waffle");
require("dotenv").config();
require("@nomiclabs/hardhat-ethers");

const { privateKey, mumbai_url, mainnet_url } = process.env;




module.exports = {
  networks: {
    hardhat: {
      chainId: 1337
    },
    mumbai: {
      url: mumbai_url,
      accounts: [privateKey]
    },
    mainnet: {
      url: mainnet_url,
      accounts: [privateKey]
    }
  },
  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
};

