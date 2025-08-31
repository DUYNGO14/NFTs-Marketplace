"use client";

import React, { useState } from "react";
import Image from "next/image";
import { BsImages } from "react-icons/bs";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { MdVerified, MdTimer } from "react-icons/md";
import Style from "./NFTCardTwo.module.css";
import images from "../../img";
import { LikeProfile } from "@/components/componentsindex";
import Link from "next/link";
const NFTCardTwo = ({ collectionArray = [], loading }) => {
  // Track like state cho từng NFT (map theo index hoặc tokenId)
  const [likes, setLikes] = useState({});

  const toggleLike = (id) => {
    setLikes((prev) => {
      const current = prev[id] || { liked: false, count: 21 };
      return {
        ...prev,
        [id]: {
          liked: !current.liked,
          count: current.liked ? current.count - 1 : current.count + 1,
        },
      };
    });
  };

  if (loading) {
    return (
      <div className={Style.NFTCard}>
        {Array.from({ length: 4 }).map((_, idx) => (
          <div className={Style.NFTCard_box} key={idx}>
            {/* Skeleton cho hình ảnh NFT */}
            <div className={Style.skeleton} />

            {/* Skeleton cho text */}
            <div style={{ padding: "1rem" }}>
              <div className={Style.skeletonText} style={{ width: "60%" }} />
              <div className={Style.skeletonText} style={{ width: "40%" }} />
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (!loading && collectionArray.length === 0) {
    return (
      <div className={Style.NFTCard_box_empty}>
        <p>There are no NFTs in this collection</p>
      </div>
    );
  }

  return (
    <div className={Style.NFTCard}>
      {collectionArray.map((item, index) => {
        const { liked, count } = likes[item.tokenId || index] || {
          liked: false,
          count: 21,
        };

        return (
          <div className={Style.NFTCard_box} key={item.tokenId || index}>
            {/* LIKE */}
            <div className={Style.NFTCard_box_like}>
              <div className={Style.NFTCard_box_like_box}>
                <div className={Style.NFTCard_box_like_box_box}>
                  <BsImages className={Style.NFTCard_box_like_box_box_icon} />
                  <p onClick={() => toggleLike(item.tokenId || index)}>
                    {liked ? (
                      <AiFillHeart
                        className={Style.NFTCard_box_like_box_box_icon_like}
                      />
                    ) : (
                      <AiOutlineHeart
                        className={Style.NFTCard_box_like_box_box_icon_like}
                      />
                    )}
                    {count}
                  </p>
                </div>
              </div>
            </div>
            <Link href={{pathname:"/nft-details", query: item}}>
              {/* IMAGE */}
              <div className={Style.NFTCard_box_img}>
                <Image
                  src={item.image}
                  alt={item.name || "NFT image"}
                  width={500}
                  height={500}
                  className={Style.NFTCard_box_img_img}
                />
              </div>

              {/* INFO */}
              <div className={Style.NFTCard_box_info}>
                <div className={Style.NFTCard_box_info_left}>
                  <LikeProfile />
                  <p>{item.name || `Clone #${index + 1}`}</p>
                </div>
                <small>{index + 100}</small>
              </div>

              {/* PRICE */}
              <div className={Style.NFTCard_box_price}>
                <div className={Style.NFTCard_box_price_box}>
                  <small>Current Bid</small>
                  <p>{item.price} ETH</p>
                </div>
                <p className={Style.NFTCard_box_price_stock}>
                  <MdTimer /> <span>{index + 1} hours left</span>
                </p>
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default NFTCardTwo;
