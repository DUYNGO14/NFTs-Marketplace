"use client";
import React, { useContext, useEffect, useState } from "react";
import Styles from "./page.module.css";
import {
  BigNFTSlider,
  Category,
  HeroSection,
  Service,
  Subscribe,
  Title,
  Filter,
  NFTCard,
  Collection,
  Follower,
  AudioLive,
  Slider,
  Brand,
  Video,
} from "@/components/componentsindex";
import { NFTMarketplaceContext } from "@/context/NFTMarketplaceContext";
import { useTopCreators } from "@/hook/useGetCreator";
const Home = () => {
  const { fetchNFTs, contract, loading } = useContext(NFTMarketplaceContext);
  const [nfts, setNfts] = useState([]);
  const [nftsCopy, setNftsCopy] = useState([]);
  const topCreator = useTopCreators(nftsCopy);
  console.log("topCreator:", topCreator);
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
  }, [contract]);
  return (
    <div className={Styles.homePage}>
      <HeroSection />
      <Service />
      <BigNFTSlider />
      <Title
        heading={"Audio Collection"}
        paragraph={"Discover the most outstanding NFTs in all topics of life."}
      />
      <AudioLive />
      <Slider />
      <Follower topCreator={topCreator} />
      <Collection />
      <Title
        heading={"Featured NFTs"}
        paragraph={"Discover the most outstanding NFTs in all topics of life."}
      />
      <Filter />
      <NFTCard nfts={nfts} loading={loading} />
      <Title
        heading={"Browse by category"}
        paragraph={"Explore the NFT marketplace by category"}
      />
      <Category />
      <Subscribe />
      <Brand />
    </div>
  );
};

export default Home;
