'use client';
import React, { useContext } from "react";
import Image from "next/image";
import images from "../../img";
import { Button } from "../componentsindex";
import Style from "./HeroSection.module.css";
import { NFTMarketplaceContext } from "@/context/NFTMarketplaceContext";
const HeroSection = () => {
  const {titleData} = useContext(NFTMarketplaceContext);
  return (
    <div className={Style.heroSection}>
      <div className={Style.heroSection_box}>
        <div className={Style.heroSection_box_left}>
          <h1>{titleData} </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
            laboriosam, magni animi, dignissimos ducimus natus similique
          </p>
          <Button btnName={"Start your search"} />
        </div>
        <div className={Style.heroSection_box_right}>
            <Image src={images.hero} alt="hero" width={500} height={500} />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
