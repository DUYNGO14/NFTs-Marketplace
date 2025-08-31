"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { TiArrowLeftThick, TiArrowRightThick } from "react-icons/ti";
import SliderCard from "./SliderCard/SliderCard";
import Style from "./Slider.module.css";
import images from "../../img";
const Slider = () => {
  const slider = [
  images.creatorbackground7,
  images.creatorbackground2,
  images.creatorbackground11,
  images.creatorbackground5,
  images.creatorbackground1,
  images.creatorbackground9
]
  const [width, setWidth] = useState(0);
  const dragSlider = useRef();

  useEffect(() => {
    if (dragSlider.current) {
      setWidth(
        dragSlider.current.scrollWidth - dragSlider.current.offsetWidth
      );
    }
  }, []); // chỉ chạy 1 lần khi mount

  const handleScroll = (direction) => {
    if (!dragSlider.current) return;
    const { current } = dragSlider;
    const scrollAmount =
      direction === "left"
        ? current.scrollLeft - (current.offsetWidth / 2 + 20)
        : current.scrollLeft + (current.offsetWidth / 2 + 20);

    current.scrollTo({
      left: scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <div className={Style.slider}>
      <div className={Style.slider_box}>
        <h2>Explore NFTs Video</h2>

        {/* Header buttons */}
        <div className={Style.slider_box_button}>
          <p>Click on play icon & enjoy NFTs Video</p>
          <div className={Style.slider_box_button_btn}>
            <div
              className={Style.slider_box_button_btn_icon}
              onClick={() => handleScroll("left")}
            >
              <TiArrowLeftThick />
            </div>
            <div
              className={Style.slider_box_button_btn_icon}
              onClick={() => handleScroll("right")}
            >
              <TiArrowRightThick />
            </div>
          </div>
        </div>

        {/* Slider */}
        <motion.div
          className={Style.slider_box_items}
          ref={dragSlider}
          whileTap={{ cursor: "grabbing" }}
        >
          <motion.div
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
            className={Style.slider_box_item}
          >
            {slider.map((item, index) => (
              <SliderCard key={index} item={item} index={index} />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Slider;
