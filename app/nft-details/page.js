"use client";
import React, { useEffect, useState } from "react";
import { Category, Brand } from "@/components/componentsindex";
import NFTDetailsPage from "@/NFTDetailsPage/NFTDetailsPage";
import { useSearchParams } from "next/navigation";

const NFTsDetails = () => {
  const searchParams = useSearchParams();
console.log("searchParams:", searchParams.get("tokenURI"));
  const [nft, setNft] = useState({
    name: "",
    description: "",
    image: "",
    price: "",
    tokenId: "",
    seller: "",
    owner: "",
    tokenURI: "",
  });

  useEffect(() => {
    if (!searchParams) return;
    const nftData = {
      name: searchParams.get("name") || "",
      description: searchParams.get("description") || "",
      image: searchParams.get("image") || "",
      price: searchParams.get("price") || "",
      tokenId: searchParams.get("tokenId") || "",
      seller: searchParams.get("seller") || "",
      owner: searchParams.get("owner") || "",
      tokenURI: searchParams.get("tokenURI") || "",
    };
    setNft(nftData);
  }, [searchParams]);

  return (
    <div>
      <NFTDetailsPage nft={nft} />
      <Category />
      <Brand />
    </div>
  );
};

export default NFTsDetails;
