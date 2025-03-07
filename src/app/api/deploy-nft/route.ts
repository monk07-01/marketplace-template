import { NextResponse } from "next/server";
import { ThirdwebSDK } from "@thirdweb-dev/sdk";
import fs from "fs";
import path from "path";
import "dotenv/config"; // Load environment variables

export async function POST() {
  try {
    const privateKey = process.env.PRIVATE_KEY; // Store in .env (DO NOT hardcode)
    const chainRPC = "https://rpc-bfhevm.xyz:8443"; // Your RPC URL

    if (!privateKey) {
      return NextResponse.json({ error: "Missing private key" }, { status: 500 });
    }

    const sdk = ThirdwebSDK.fromPrivateKey(privateKey, chainRPC);

    // Deploy NFT contract
    const deployedAddress = await sdk.deployer.deployNFTCollection({
      name: "My NFT Collection",
      primary_sale_recipient: "0x...", // Replace with actual recipient address
    });

    console.log("Deployed contract at address:", deployedAddress);

    // Load image file
    const imagePath = path.join(process.cwd(), "public/image.png");
    const imageBuffer = fs.readFileSync(imagePath);

    // Access deployed contract
    const contract = await sdk.getContract(deployedAddress);

    // Mint NFT
    const tx = await contract.erc721.mint({
      name: "Cool NFT",
      description: "Minted NFT from code!",
      image: imageBuffer,
    });

    return NextResponse.json({
      success: true,
      contractAddress: deployedAddress,
      nftMinted: tx,
    });
} catch (error) {
    console.error("Error deploying or minting NFT:", error);
  
    // Ensure error is an instance of Error
    const errorMessage = error instanceof Error ? error.message : "An unknown error occurred";
  
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
  
}
