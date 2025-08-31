import React from "react";
import Styles from "./AuthorNFTCard.module.css";
import { NFTCardTwo } from "@/CollectionPage";
import { FollowerCard } from "@/components/componentsindex";
import images from "../../img";
const AuthorNFTCard = ({
  collectiables,
  created,
  liked,
  following,
  follower,
  nfts,
}) => {
  
  const followerArray = [
    images.creatorbackground1,
    images.creatorbackground2,
    images.creatorbackground5,
    images.creatorbackground6,
    images.creatorbackground7,
    images.creatorbackground8,
  ];
  const followingArray = [
    images.creatorbackground1,
    images.creatorbackground2,
    images.creatorbackground3,
    images.creatorbackground4,
    images.creatorbackground5,
    images.creatorbackground6,
  ];
  const likedArray = [
    images.creatorbackground1,
    images.creatorbackground2,
    images.creatorbackground3,
    images.creatorbackground4,
    images.nft_image_3,
    images.nft_image_1,
    images.nft_image_2,
    images.creatorbackground8,
  ];
  return (
    <div className={Styles.authorNFTCard}>
      {collectiables ? <NFTCardTwo collectionArray={nfts} /> : ""}
      {created ? <NFTCardTwo collectionArray={nfts} /> : ""}
      {liked ? <NFTCardTwo collectionArray={likedArray} /> : ""}
      {following ? <NFTCardTwo collectionArray={followingArray} /> : ""}
      {follower ? <NFTCardTwo collectionArray={followerArray} /> : ""}
    </div>
  );
};

export default AuthorNFTCard;
