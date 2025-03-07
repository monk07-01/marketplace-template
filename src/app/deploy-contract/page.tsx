import { ThirdwebSDK } from "@thirdweb-dev/sdk";
import fs from "fs";

// Private key for your wallet (do not hardcode this in production)
const privateKey = "<your-private-key-here>";

// RPC URL for your EVM-compatible Cosmos chain (replace with your actual RPC URL)
const chainRPC = "https://rpc-bfhevm.xyz:8443";  // Replace with your actual RPC URL

// Instantiate the SDK using the private key and your chain RPC
const sdk = ThirdwebSDK.fromPrivateKey(privateKey, chainRPC);

const deployNFTCollection = async () => {
  try {
    // Deploy the NFT collection (ERC-721 contract)
    const deployedAddress = await sdk.deployer.deployNFTCollection({
      name: "My NFT Collection",
      primary_sale_recipient: "0x...", // Replace with the actual recipient address
    });

    console.log("Deployed contract at address:", deployedAddress);

    // Access the deployed contract
    const contract = await sdk.getContract(deployedAddress);

    // Mint an NFT
    const tx = await contract.erc721.mint({
      name: "Cool NFT",
      description: "Minted NFT from code!",
      image: fs.readFileSync("path/to/image.png"), // This can be an image url or a local file
    });

    console.log("NFT minted:", tx);
  } catch (error) {
    console.error("Error deploying or minting NFT:", error);
  }
};

// Call the deployNFTCollection function
deployNFTCollection();
