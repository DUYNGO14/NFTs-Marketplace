import React from "react";
import Image from "next/image";
import Style from "./Banner.module.css";
const Banner = ({ bannerImage }) => {
  return (
    <div className={Style.banner}>
      <div className={Style.banner_img}>
        <Image
          src={bannerImage}
          alt="banner"
          className={Style.banner_img_img}
        />
      </div>
      <div className={Style.banner_img_mobile}>
        <Image
          src={bannerImage}
          alt="banner"
          className={Style.banner_img_img}
        />
      </div>
    </div>
  );
};

export default Banner;
