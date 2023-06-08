require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config();

/** @type import('hardhat/config').HardhatUserConfig */
const NODE_PROVIDER = process.env.QUICK_NODE_PROVIDER;
const MUMBAI_PROVIDER = process.env.QUICK_NODE_MUMBAI;
const PRIVATE_KEYS = process.env.PRIVATE_KEY;
const ETHERSCAN_API = process.env.ETHERSCAN_API;
const POLYGON_API = process.env.POLYGON_API;
module.exports = {
  solidity: "0.8.0",
  etherscan: {
    apiKey: POLYGON_API,
  },
  networks: {
    sepolia: {
      url: NODE_PROVIDER,
      accounts: [PRIVATE_KEYS]
    },
    mumbai: {
      url: MUMBAI_PROVIDER,
      accounts: [PRIVATE_KEYS]
    }
  }
};
