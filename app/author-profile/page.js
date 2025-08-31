"use client";
import React, { useState, useEffect, useContext, use } from "react";
import Styles from "./author.module.css";
import images from "../../img";
import { Banner, NFTCardTwo } from "@/CollectionPage";
import { Brand, Title, FollowerCard } from "@/components/componentsindex";
import { AuthorProfileCard, AuthorTaps, AuthorNFTCard } from "@/AuthorPage";
import { useSearchParams } from "next/navigation";
import { useAppKitAccount } from "@reown/appkit/react";
import { NFTMarketplaceContext } from "@/context/NFTMarketplaceContext";
const Author = () => {
  const searchParams = useSearchParams();
  const routerAddress = searchParams.get("address"); // lấy từ URL ?address=...
  const { address: walletAddress } = useAppKitAccount();

  // ưu tiên routerAddress, nếu không có thì fallback walletAddress
  const address = routerAddress || walletAddress;
  const { fetchMyNFTsOrListedNFT } = useContext(NFTMarketplaceContext);
  const popularArray = [
    { background: images.creatorbackground1, avatar: images.user1 },
    { background: images.creatorbackground2, avatar: images.user2 },
    { background: images.creatorbackground3, avatar: images.user3 },
    { background: images.creatorbackground4, avatar: images.user4 },
  ];

  const [collectiables, setCollectiables] = useState(true);
  const [created, setCreated] = useState(false);
  const [liked, setLiked] = useState(false);
  const [following, setFollowing] = useState(false);
  const [follower, setFollower] = useState(false);
  const [nfts, setNfts] = useState([]);
  const [type, setType] = useState("fetchItemsListed");
  useEffect(() => {
    fetchMyNFTsOrListedNFT(type).then((items) => setNfts(items));
  }, [type]);
  return (
    <div className={Styles.author}>
      <Banner bannerImage={images.creatorbackground3} />
      <AuthorProfileCard address={address} />
      <AuthorTaps
        setCollectiables={setCollectiables}
        setCreated={setCreated}
        setLiked={setLiked}
        setFollowing={setFollowing}
        setFollower={setFollower}
        setType={setType}
      />
      <AuthorNFTCard
        collectiables={collectiables}
        created={created}
        liked={liked}
        following={following}
        follower={follower}
        nfts={nfts}
      />
      <Title
        heading={"Popular Creators"}
        paragraph={"Click on music icon and enjoy the music or video."}
      />
      <div className={Styles.author_popular_box}>
        {popularArray.map((item, index) => (
          <FollowerCard key={index} item={item} i={index} />
        ))}
      </div>
      <Brand />
    </div>
  );
};

export default Author;
