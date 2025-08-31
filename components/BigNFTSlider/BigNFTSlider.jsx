"use client";
import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { AiFillFire, AiOutlineHeart } from "react-icons/ai";
import { MdVerified, MdTimer } from "react-icons/md";
import { TbArrowBigLeftLines, TbArrowBigRightLines } from "react-icons/tb";
import Style from "./BigNFTSlider.module.css";
import images from "../../img";
import Button from "../Button/Button";

const sliderData = [
  {
    id: 1,
    title: "CryptoKitties",
    name: "CryptoKitties",
    collection: "CryptoKitties",
    price: "0.04559 ETH",
    like: 234,
    image: images.user1,
    nftImages: images.nft_image_1,
    time: { days: 27, hours: 3, minutes: 12, seconds: 55 },
  },
  {
    id: 2,
    title: "CryptoKitties",
    name: "CryptoKitties",
    collection: "CryptoKitties",
    price: "0.05559 ETH",
    like: 324,
    image: images.user2,
    nftImages: images.nft_image_2,
    time: { days: 23, hours: 5, minutes: 45, seconds: 34 },
  },
  {
    id: 3,
    title: "CryptoKitties",
    name: "CryptoKitties",
    collection: "CryptoKitties",
    price: "0.04559 ETH",
    like: 198,
    image: images.user3,
    nftImages: images.nft_image_3,
    time: { days: 12, hours: 6, minutes: 30, seconds: 15 },
  },
  {
    id: 4,
    title: "CryptoKitties",
    name: "CryptoKitties",
    collection: "CryptoKitties",
    price: "0.06000 ETH",
    like: 412,
    image: images.user4,
    nftImages: images.nft_image_1,
    time: { days: 8, hours: 12, minutes: 20, seconds: 5 },
  },
];

const BigNFTSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentNFT = sliderData[currentIndex];

  const increment = useCallback(() => {
    setCurrentIndex((prev) => (prev === sliderData.length - 1 ? 0 : prev + 1));
  }, []);

  const decrement = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? sliderData.length - 1 : prev - 1));
  }, []);

  useEffect(() => {
    const interval = setInterval(increment, 5000);
    return () => clearInterval(interval);
  }, [increment]);

  return (
    <div className={Style.bigNFTSlider}>
      <div className={Style.bigNFTSlider_box}>
        {/* Left content */}
        <div className={Style.bigNFTSlider_box_left}>
          <h2>
            {currentNFT.title} 
          </h2>

          {/* Creator & Collection */}
          <div className={Style.bigNFTSlider_box_left_creator}>
            <div className={Style.bigNFTSlider_box_left_creator_profile}>
              <Image
                className={Style.bigNFTSlider_box_left_creator_profile_img}
                src={currentNFT.image}
                alt="profile"
                width={50}
                height={50}
              />
              <div className={Style.bigNFTSlider_box_left_creator_profile_name}>
                <p>Creator</p>
                <h4>
                  {currentNFT.name} <MdVerified />
                </h4>
              </div>
            </div>

            <div className={Style.bigNFTSlider_box_left_creator_collection}>
              <AiFillFire
                className={Style.bigNFTSlider_box_left_creator_collection_icon}
              />
              <div
                className={Style.bigNFTSlider_box_left_creator_collection_info}
              >
                <p>Collection</p>
                <h4>{currentNFT.collection}</h4>
              </div>
            </div>
          </div>

          {/* Price & Auction */}
          <div className={Style.bigNFTSlider_box_left_price}>
            <div className={Style.bigNFTSlider_box_left_price_box}>
              <small>Current Price</small>
              <p>
                {currentNFT.price} <span>$221.21</span>
              </p>
            </div>

            <p className={Style.bigNFTSlider_box_left_price_box_auction}>
              <MdTimer className={Style.bigNFTSlider_box_left_price_box_icon} />
              <span>Auction ending in</span>
            </p>

            <div className={Style.bigNFTSlider_box_left_price_box_timer}>
              {Object.entries(currentNFT.time).map(([unit, value]) => (
                <div
                  key={unit}
                  className={Style.bigNFTSlider_box_left_price_box_timer_item}
                >
                  <p>{value}</p>
                  <small>{unit.charAt(0).toUpperCase() + unit.slice(1)}</small>
                </div>
              ))}
            </div>

            <div className={Style.bigNFTSlider_box_left_button}>
              <Button btnName="Place" handleClick={() => {}} />
              <Button btnName="View" handleClick={() => {}} />
            </div>
          </div>

          {/* Slider buttons */}
          <div className={Style.bigNFTSlider_box_left_sliderBtn}>
            <TbArrowBigLeftLines
              className={Style.bigNFTSlider_box_left_sliderBtn_icon}
              onClick={decrement}
            />
            <TbArrowBigRightLines
              className={Style.bigNFTSlider_box_left_sliderBtn_icon}
              onClick={increment}
            />
          </div>
        </div>

        {/* Right content */}
        <div className={Style.bigNFTSlider_box_right}>
          <div className={Style.bigNFTSlider_box_right_box}>
            <Image src={currentNFT.nftImages} alt="nft" />
            <div className={Style.bigNFTSlider_box_right_box_like}>
              <AiOutlineHeart />
              <span>{currentNFT.like}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BigNFTSlider;
