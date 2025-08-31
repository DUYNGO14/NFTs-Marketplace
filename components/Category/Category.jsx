import React from "react";
import Style from "./Category.module.css";
import images from "../../img";
import Image from "next/image";
import { BsCCircleFill } from "react-icons/bs";
const Category = () => {
  const categories = [
    { name: "Art", count: 1200, img: images.creatorbackground1 },
    { name: "Music", count: 980, img: images.creatorbackground2 },
    { name: "Domain Names", count: 670, img: images.creatorbackground3 },
    { name: "Virtual World", count: 430, img: images.creatorbackground4 },
    { name: "Collectibles", count: 2200, img: images.creatorbackground5 },
  ];

  return (
    <div className={Style.category}>
      {categories.map((cat, index) => (
        <div className={Style.category_box} key={index}>
          <div className={Style.category_box_imgWrapper}>
            <Image
              src={cat.img}
              alt={`${cat.name} image`}
              className={Style.category_box_item_img}
            />
          </div>
          <div className={Style.category_box_title}>
            <span>
              <BsCCircleFill />
            </span>
            <div className={Style.category_box_title_info}>
              <h4>{cat.name}</h4>
              <small>{cat.count} NFTs</small>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Category;
