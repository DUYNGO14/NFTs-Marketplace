"use client";

import { createAppKit } from "@reown/appkit/react";
import { EthersAdapter } from "@reown/appkit-adapter-ethers";
import { mainnet, arbitrum, sepolia } from "@reown/appkit/networks";
import { useState, useEffect } from "react";

// Metadata cho Dapp
const metadata = {
  name: "My Website",
  description: "My Website description",
  url: "https://mywebsite.com",
  icons: ["https://avatars.mywebsite.com/"],
};

// Thêm mạng local
const localNetwork = {
  id: 31337,
  name: "Localhost",
  nativeCurrency: {
    name: "Ether",
    symbol: "ETH",
    decimals: 18,
  },
  rpcUrls: {
    default: { http: ["http://127.0.0.1:8545"] },
    public: { http: ["http://127.0.0.1:8545"] },
  },
  blockExplorers: {
    default: { name: "Local Explorer", url: "http://localhost:8545" },
  },
  testnet: true,
};

const networks = [mainnet, arbitrum, sepolia, localNetwork];

// ✅ Khởi tạo AppKit 1 lần duy nhất
const projectId = process.env.NEXT_PUBLIC_PROJECT_ID;
if (!projectId) {
  console.error("❌ Missing NEXT_PUBLIC_PROJECT_ID in .env.local");
} else {
  createAppKit({
    adapters: [new EthersAdapter()],
    metadata,
    networks,
    projectId,
    features: { analytics: true },
  });
}

export function AppKitProvider({ children }) {
  if (!projectId) {
    return (
      <div className="p-4 bg-red-100 text-red-800 rounded">
        ❌ Thiếu biến môi trường <b>NEXT_PUBLIC_PROJECT_ID</b> trong
        <code>.env.local</code>
      </div>
    );
  }

  // Không cần `ready` nữa vì AppKit đã được init khi module load
  return <>{children}</>;
}
