import React from "react";
import Image from "next/image";
import Style from "./collectionProfile.module.css";
import {
  TiSocialFacebook,
  TiSocialLinkedin,
  TiSocialTwitter,
  TiSocialInstagram,
} from "react-icons/ti";
import images from "../../img";
const CollectionProfile = ({NFTData}) => {
  const cardArray = [1, 2, 3, 4];
  return (
    <div className={Style.collectionProfile}>
      <div className={Style.collectionProfile_box}>
        <div className={Style.collectionProfile_box_left}>
          <Image
            src={images.creatorbackground1}
            alt="profile"
            width={800}
            height={800}
            className={Style.collectionProfile_box_left_img}
          />
          <div className={Style.collectionProfile_box_left_social}>
            <a href="#">
              <TiSocialFacebook />
            </a>
            <a href="#">
              <TiSocialLinkedin />
            </a>
            <a href="#">
              <TiSocialTwitter />
            </a>
            <a href="#">
              <TiSocialInstagram />
            </a>
          </div>
        </div>
        <div className={Style.collectionProfile_box_middle}>
          <h1>Awesome NFTs Collection</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, quae.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, quae.
          </p>
          <div className={Style.collectionProfile_box_middle_box}>
            {cardArray.map((card, index) => (
              <div
                className={Style.collectionProfile_box_middle_box_item}
                key={index}
              >
                <small>Floor price</small>
                <p>${index+1}63,343</p>
                <span>+{index+2}.23%</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollectionProfile;
