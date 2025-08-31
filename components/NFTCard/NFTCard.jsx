"use client";
import React, { useState } from "react";
import Image from "next/image";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { BsImages } from "react-icons/bs";
import Style from "./NFTCard.module.css";
import NFTCardSkeleton from "../NFTCardSkeleton/NFTCardSkeleton";

const NFTCard = ({ nfts = [], loading }) => {
  const [likes, setLikes] = useState(Array(nfts.length).fill(false));

  const toggleLike = (index) => {
    const newLikes = [...likes];
    newLikes[index] = !newLikes[index];
    setLikes(newLikes);
  };

  // Khi đang loading
  if (loading) {
    return <NFTCardSkeleton count={4} />;
  }

  // Khi không có NFT
  if (!loading && (!nfts || nfts.length === 0)) {
    return (
      <div className={Style.NFTCard_empty}>
        <p>🚀 Không có NFT nào được tìm thấy!</p>
      </div>
    );
  }

  return (
    <div className={Style.NFTCard}>
      {nfts.map((item, index) => (
        <div className={Style.NFTCard_box} key={index}>
          <div className={Style.NFTCard_box_img}>
            <Image
              src={item.image}
              alt="NFT"
              width={500}
              height={500}
              className={Style.NFTCard_box_img_img}
            />
          </div>
          <div className={Style.NFTCard_box_update}>
            <div className={Style.NFTCard_box_update_left}>
              <div
                className={Style.NFTCard_box_update_left_like}
                onClick={() => toggleLike(index)}
              >
                {likes[index] ? (
                  <AiFillHeart
                    className={Style.NFTCard_box_update_left_like_icon}
                  />
                ) : (
                  <AiOutlineHeart
                    className={Style.NFTCard_box_update_left_like_icon}
                  />
                )}{" "}
                22
              </div>
            </div>
            <div className={Style.NFTCard_box_update_right}>
              <div className={Style.NFTCard_box_update_right_info}>
                <small>Remaining time</small>
                <p>3h : 15m : 21s</p>
              </div>
            </div>
          </div>
          <div className={Style.NFTCard_box_update_details}>
            <div className={Style.NFTCard_box_update_details_price}>
              <div className={Style.NFTCard_box_update_details_price_box}>
                <h4>{item.name} #{item.tokenId}</h4>
                <div className={Style.NFTCard_box_update_details_price_box_box}>
                  <div
                    className={Style.NFTCard_box_update_details_price_box_bid}
                  >
                    <small>Current Bid</small>
                    <p>{item.price} ETH</p>
                  </div>
                  <div
                    className={
                      Style.NFTCard_box_update_details_price_box_stocks
                    }
                  >
                    <small>61 in stock</small>
                  </div>
                </div>
              </div>
            </div>
            <div className={Style.NFTCard_box_update_details_category}>
              <BsImages />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NFTCard;
