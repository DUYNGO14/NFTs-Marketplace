"use client";
import React, { use, useContext, useEffect, useState } from "react";
import Styles from "./Search.module.css";
import { Slider, Brand, Filter } from "@/components/componentsindex";
import { SearchBar } from "@/SearchPage";
import { NFTCardTwo, Banner } from "@/CollectionPage";
import images from "../../img";
import { NFTMarketplaceContext } from "@/context/NFTMarketplaceContext";
const SearchPage = () => {
  const { fetchNFTs, contract, loading } = useContext(NFTMarketplaceContext);
  const [nfts, setNfts] = useState([]);
  const [nftsCopy, setNftsCopy] = useState([]);

  useEffect(() => {
    const loadNFTs = async () => {
      if (!contract) return;
      try {
        const items = await fetchNFTs();
        setNfts(items.reverse());
        setNftsCopy(items);
      } catch (error) {
        console.error("Error fetching NFTs:", error);
      }
    };

    loadNFTs();
  }, []); 
  console.log("nfts:", nfts);
  const handleSearch = (search) => {
    const filteredNFTs = nftsCopy.filter((nft) =>
      nft.name.toLowerCase().includes(search.toLowerCase())
    );
    if (search === "") {
      setNfts(nftsCopy);
    } else {
      setNfts(filteredNFTs);
    }
  };
  const onClearSearch = () => {
    if (nfts.length && nftsCopy.length) {
      setNfts(nftsCopy);
    }
  };
  return (
    <div className={Styles.searchPage}>
      <Banner bannerImage={images.creatorbackground2} />
      <SearchBar handleSearch={handleSearch} onClearSearch={onClearSearch} />
      <Filter />
      <NFTCardTwo collectionArray={nfts} loading={loading} />
      <Slider />
      <Brand />
    </div>
  );
};

export default SearchPage;
