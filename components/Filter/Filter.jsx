"use client";
import React, { useState } from "react";
import {
  FaFilter,
  FaAngleDown,
  FaAngleUp,
  FaWallet,
  FaMusic,
  FaVideo,
  FaImages,
  FaUserAlt,
} from "react-icons/fa";
import { MdVerified } from "react-icons/md";
import { TiTick } from "react-icons/ti";
import Style from "./Filter.module.css";

const Filter = () => {
  const [filter, setFilter] = useState(true);
  const [options, setOptions] = useState({
    image: false,
    music: false,
    video: false,
  });
  const [activeCategory, setActiveCategory] = useState("NFTs"); // 👈 lưu button đang chọn

  const toggleOption = (key) => {
    setOptions((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const categories = ["NFTs", "Musics", "Sports", "Artists", "Photography"];

  return (
    <div className={Style.filter}>
      {/* Top buttons */}
      <div className={Style.filter_box}>
        <div className={Style.filter_box_left}>
          {categories.map((btn, i) => (
            <button
              key={i}
              className={activeCategory === btn ? Style.activeBtn : ""}
              onClick={() => setActiveCategory(btn)}
            >
              {btn}
            </button>
          ))}
        </div>
        <div className={Style.filter_box_right}>
          <div
            className={Style.filter_box_right_box}
            onClick={() => setFilter(!filter)}
          >
            <FaFilter />
            <span>Filter</span> {filter ? <FaAngleUp /> : <FaAngleDown />}
          </div>
        </div>
      </div>

      {/* Filter content */}
      {filter && (
        <div className={Style.filter_box_item}>
          {/* Price */}
          <div className={Style.filter_box_item_box}>
            <div className={Style.filter_box_item_box_item}>
              <FaWallet /> <span>0.01 ETH - 10 ETH</span>
            </div>
          </div>

          {/* Image */}
          <div className={Style.filter_box_item_box}>
            <div
              className={`${Style.filter_box_item_box_item_trans} ${
                options.image ? Style.active : ""
              }`}
              onClick={() => toggleOption("image")}
            >
              <FaImages /> <span>Image</span>
              {options.image ? <TiTick /> : null}
            </div>
          </div>

          {/* Video */}
          <div className={Style.filter_box_item_box}>
            <div
              className={`${Style.filter_box_item_box_item_trans} ${
                options.video ? Style.active : ""
              }`}
              onClick={() => toggleOption("video")}
            >
              <FaVideo /> <span>Videos</span>
              {options.video ? <TiTick /> : null}
            </div>
          </div>

          {/* Music */}
          <div className={Style.filter_box_item_box}>
            <div
              className={`${Style.filter_box_item_box_item_trans} ${
                options.music ? Style.active : ""
              }`}
              onClick={() => toggleOption("music")}
            >
              <FaMusic /> <span>Music</span>
              {options.music ? <TiTick /> : null}
            </div>
          </div>

          {/* Verified */}
          <div className={Style.filter_box_item_box}>
            <div className={Style.filter_box_item_box_item}>
              <FaUserAlt /> <span>Verified</span>
              <MdVerified />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Filter;
