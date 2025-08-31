import React from 'react'
import Image from 'next/image';
import Styles from "./LikeProfile.module.css";
import images from "../../img";
import { userAgent } from 'next/server';
const LikeProfile = () => {
    const imageArray = [images.user1, images.user2, images.user3, images.user4];
  return (
    <div className={Styles.like}>
      {imageArray.map((i, index) => (
        <div className={Styles.like_box} key={index}>
          <Image
            src={i}
            alt="profile background"
            width={15}
            height={15}
            className={Styles.like_box_img}
          />
        </div>
      ))}
    </div>
  )
}

export default LikeProfile
