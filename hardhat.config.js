require('@nomiclabs/hardhat-ethers');
require('dotenv').config();

module.exports = {
  solidity: "0.8.4",
  networks: {
    bfhevm: {
      url: "https://rpc-bfhevm.xyz:8443", // Replace with your Cosmos chain's RPC
      accounts: [process.env.PRIVATE_KEY],
    },
  },
};
