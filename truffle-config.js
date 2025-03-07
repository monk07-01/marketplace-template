const HDWalletProvider = require('@truffle/hdwallet-provider');
const fs = require('fs');

module.exports = {
  networks: {
    bfhevm: {
      provider: () => new HDWalletProvider({
        privateKeys: [process.env.PRIVATE_KEY],
        providerOrUrl: 'https://rpc-bfhevm.xyz:8443',
      }),
      network_id: '*', // Matches any network id
    },
  },
  compilers: {
    solc: {
      version: "0.8.4",
    },
  },
};
