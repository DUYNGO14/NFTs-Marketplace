import React from "react";
import Image from "next/image";
import { MdVerified } from "react-icons/md";

import Style from "./DaysComponents.module.css";
import images from "../../../img";

const DaysComponents = ({item}) => {
  return (
    <div className={Style.daysComponents}>
      <div className={Style.daysComponents_box}>
        {/* Ảnh chính */}
        <div className={Style.mainImage}>
          <Image
            src={item.backMain}
            alt="main background"
            className={Style.mainImage_img}
          />
        </div>

        {/* Ảnh phụ */}
        <div className={Style.subImages}>
       
          {
            item.backExtra.map((item, i) => (
              <Image
                key={i}
                src={item}
                alt="sub1"
                className={Style.subImg}
              />
            ))
          }
        </div>

        {/* Thông tin */}
        <div className={Style.infoBox}>
          <h2>Awesome Collection</h2>
          <div className={Style.creator}>
            <div className={Style.creator_box}>
              <Image
                src={item.avatar}
                alt="creator"
                width={30}
                height={30}
                className={Style.creator_img}
              />
              <div className={Style.creator_text}>
                <span className={Style.creator_label}>Creator</span>
                <span className={Style.creator_name}>
                  Duy Ngo{" "}
                  <small>
                    <MdVerified />
                  </small>
                </span>
              </div>
            </div>
            <div className={Style.price}>
              <small>1.3554 ETH</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DaysComponents;
