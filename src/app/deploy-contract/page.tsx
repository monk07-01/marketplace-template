"use client";

import { useState } from "react";

export default function DeployNFTPage() {
  const [loading, setLoading] = useState(false);
  const [contractAddress, setContractAddress] = useState("");
  const [error, setError] = useState("");

  const deployContract = async () => {
    setLoading(true);
    setError("");
    setContractAddress("");

    try {
      const response = await fetch("/api/deploy-nft", {
        method: "POST",
      });

      const data = await response.json();

      if (response.ok) {
        setContractAddress(data.contractAddress);
      } else {
        setError(data.error || "Failed to deploy NFT contract");
      }
    } catch (err) {
      setError("Error connecting to the API");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">Deploy NFT Collection</h1>
      <button
        onClick={deployContract}
        disabled={loading}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
      >
        {loading ? "Deploying..." : "Deploy NFT Contract"}
      </button>

      {contractAddress && (
        <p className="mt-4 text-green-600">
          ✅ Deployed at: <span className="font-mono">{contractAddress}</span>
        </p>
      )}
      {error && <p className="mt-4 text-red-600">❌ {error}</p>}
    </div>
  );
}
