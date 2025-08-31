"use client";
import React, { useState } from "react";
import Image from "next/image";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { TbPlayerPlay, TbPlayerPause } from "react-icons/tb";
import Styles from "./AudioCard.module.css";
import images from "../../../img";
import { LikeProfile } from "@/components/componentsindex";
const AudioCard = ({item}) => {
  const [play, setPlay] = useState(false);
  const [like, setLike] = useState(false);
  const playAudio = () => {
    setPlay(!play);
  }
  const likeNFT = () => {
    setLike(!like);
  }
  return (
    <div className={Styles.audioCard}>
      <div className={Styles.audioCard_box}>
        <div className={Styles.audioCard_box_like_time}>
          <div className={Styles.audioCard_box_like} onClick={() => likeNFT()}>
            {like ? (
              <AiFillHeart className={Styles.audioCard_box_like_icon} />
            ) : (
              <AiOutlineHeart
                className={Styles.audioCard_box_like_icon_unlike}
              />
            )}
            <span>24</span>
          </div>
          <div className={Styles.audioCard_box_time}>
            <div className={Styles.audioCard_box_like_time_remaing}>
              <small>Remaining time</small>
              <h5>3h : 23m : 45s</h5>
            </div>
          </div>
        </div>
        <div className={Styles.audioCard_box_player}>
          <Image src={images.musiceWave} alt="music" width={200}  />
          <div
            className={Styles.audioCard_box_musicPlayer}
            onClick={() => playAudio()}
          >
            {play ? (
              <div className={Styles.audioCard_box_musicPlayer_icon}>
                <TbPlayerPause />
              </div>
            ) : (
              <div className={Styles.audioCard_box_musicPlayer_icon}>
                <TbPlayerPlay />
              </div>
            )}
          </div>
        </div>
        <div className={Styles.audioCard_box_details}>
          <div className={Styles.audioCard_box_details_info}>
            <h4>NFT music #2144</h4>
            <div className={Styles.audioCard_box_details_info_price}>
              <small>Price</small>
              <p>0.25 ETH</p>
            </div>
          </div>
          <div className={Styles.audioCard_box_details_stock}>
            <small>24 in stock</small>
          </div>
        </div>
        <div className={Styles.audioCard_box_img}>
          <Image
            src={item}
            alt="NFT"
            width={500}
            height={500}
            className={Styles.audioCard_box_img_img}
          />
        </div>
      </div>
    </div>
  );
};

export default AudioCard;
