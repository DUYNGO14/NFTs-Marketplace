"use client";
import React, { useState } from "react";
import { TbPlayerPlay, TbPlayerPause } from "react-icons/tb";
import Styles from "./AudioCardSmall.module.css";
import Image from "next/image";
import images from "../../../img";
import { LikeProfile } from "@/components/componentsindex";
const AudioCardSmall = ({item}) => {
  const [play, setPlay] = useState(false);
  const playMusic = () => {
    setPlay(!play);
  };
  return (
    <div className={Styles.audioCardSmall}>
      <div className={Styles.audioCardSmall_box}>
        <Image
          src={item}
          alt="profile background"
          width={100}
          height={100}
          className={Styles.audioCardSmall_box_img}
        />
        <div className={Styles.audioCardSmall_box_info}>
          <h4>NFT Music #342353</h4>
          <div className={Styles.audioCardSmall_box_info_box}>
            <LikeProfile />
            <div className={Styles.audioCardSmall_box_info_box_price}>
              <small>Price</small>
              <p>0.25 ETH</p>
            </div>
          </div>
        </div>

        <div
          className={Styles.audioCardSmall_box_playBtn}
          onClick={() => playMusic()}
        >
          {play ? (
            <TbPlayerPause className={Styles.audioCardSmall_box_playBtn_icon} />
          ) : (
            <TbPlayerPlay className={Styles.audioCardSmall_box_playBtn_icon} />
          )}
        </div>
      </div>
    </div>
  );
};

export default AudioCardSmall;
