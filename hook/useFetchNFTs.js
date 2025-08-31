"use client";
import { useEffect, useState } from "react";
import { useNFTMarketplace } from "../context/NFTMarketplaceContext";

export const useFetchNFTs = () => {
  const { fetchNFTs, contract } = useNFTMarketplace();
  const [nfts, setNfts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Hàm refetch
  const refetch = async () => {
    if (!contract) return;
    setLoading(true);
    setError(null);
    try {
      const items = await fetchNFTs();
      setNfts(items);
    } catch (err) {
      setError(err.message || "❌ Lỗi khi fetch NFT");
    } finally {
      setLoading(false);
    }
  };

  // Tự động fetch khi contract sẵn sàng
  useEffect(() => {
    if (contract) {
      refetch();
    }
  }, [contract]);

  return { nfts, loading, error, refetch };
};
