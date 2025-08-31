import React from "react";
import Styles from "./collectionPage.module.css";
import images from "../../img";
import {
  Banner,
  CollectionProfile,
  NFTCardTwo,
} from "../../CollectionPage/index";
import { Filter, Brand, Slider } from "@/components/componentsindex";
const collection = () => {
  const collectionArray = [
    images.nft_image_1,
    images.nft_image_2,
    images.nft_image_3,
    images.nft_image_1,
    images.nft_image_2,
    images.nft_image_3,
    images.nft_image_1,
    images.nft_image_2,
    images.nft_image_3,
  ];
  return (
    <div className={Styles.collection}>
      <Banner bannerImage={images.creatorbackground1} />
      <CollectionProfile/>
      <Filter />
      <NFTCardTwo collectionArray={collectionArray} />
      <Slider />
      <Brand />
    </div>
  );
};

export default collection;
