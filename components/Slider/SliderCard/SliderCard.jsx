import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Style from "./SliderCard.module.css";
import images from "../../../img";
import { LikeProfile } from "@/components/componentsindex";
const SliderCard = ({ item, index }) => {
  return (
    <motion.div className={Style.SliderCard}>
      <div className={Style.SliderCard_box}>
        <motion.div className={Style.SliderCard_box_img}>
          <Image
            src={item}
            alt="slider image"
            width={500}
            height={500}
            className={Style.SliderCard_box_img_img}
          />
        </motion.div>
        <div className={Style.SliderCard_box_title}>
            <p>NFT Video #1234</p>
            <div className={Style.SliderCard_box_title_like}>
              {/* <LikeProfile /> */}
              <small>1 of 100</small>
            </div>
        </div>
        <div className={Style.SliderCard_box_price}>
            <div className={Style.SliderCard_box_price_box}>
              <small>Current Bid</small>
              <p>0.25 ETH</p>
            </div>
            <div className={Style.SliderCard_box_price_time}>
              <small>Reaming time</small>
              <p>3h : 23m : 45s</p>
            </div>
        </div>
      </div>
    </motion.div>
  );
};

export default SliderCard;
