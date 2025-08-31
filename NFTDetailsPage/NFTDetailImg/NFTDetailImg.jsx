"use client";
import React, { useEffect, useRef, useState } from "react";
import Styles from "./NFTDetailImg.module.css";
import Image from "next/image";
import images from "../../img";
import { BsImage } from "react-icons/bs";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";
import { motion, AnimatePresence } from "framer-motion";

// Component toggle chung
const SectionToggle = ({ title, isOpen, onToggle, children }) => {
  const ref = useRef(null);
  const [height, setHeight] = useState(0);

  // cập nhật lại chiều cao khi mở
  useEffect(() => {
    if (isOpen && ref.current) {
      setHeight(ref.current.scrollHeight);
    }
  }, [isOpen, children]);

  return (
    <>
      <div className={Styles.NFTDetailImg_box_section} onClick={onToggle}>
        <p>{title}</p>
        {isOpen ? <TiArrowSortedUp /> : <TiArrowSortedDown />}
      </div>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height, opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            style={{ overflow: "hidden" }}
          >
            <div ref={ref} className={Styles.NFTDetailImg_box_section_content}>{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
const NFTDetailImg = ({ nft}) => {
  const [like, setLike] = useState(false);
  const [open, setOpen] = useState({
    description: true,
    details: true,
  });

  const toggleLike = () => setLike((prev) => !prev);

  const toggleSection = (key) => {
    setOpen((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className={Styles.NFTDetailImg}>
      <div className={Styles.NFTDetailImg_box}>
        {/* NFT Image + Like */}
        <div className={Styles.NFTDetailImg_box_NFT}>
          <div className={Styles.NFTDetailImg_box_NFT_like}>
            <BsImage className={Styles.NFTDetailImg_box_NFT_like_icon} />
            <p onClick={toggleLike}>
              {like ? (
                <AiFillHeart
                  className={Styles.NFTDetailImg_box_NFT_like_icon}
                />
              ) : (
                <AiOutlineHeart
                  className={Styles.NFTDetailImg_box_NFT_like_icon}
                />
              )}
              <span>23</span>
            </p>
          </div>
          <div className={Styles.NFTDetailImg_box_NFT_img}>
            <Image
              className={Styles.NFTDetailImg_box_NFT_img_img}
              src={nft.image || ""}
              alt={nft.name||"NFT Image"}
              width={700}
              height={800}
              priority
            />
          </div>
        </div>

        {/* Description Section */}
        <SectionToggle
          title="Description"
          isOpen={open.description}
          onToggle={() => toggleSection("description")}
        >
          <p>
            {nft.description}
          </p>
        </SectionToggle>

        {/* Details Section */}
        <SectionToggle
          title="Details"
          isOpen={open.details}
          onToggle={() => toggleSection("details")}
        >
          <small>2000 x 2000 px. Image (657 kb)</small>
          <p>
            <small>Contract address</small>
            <br />
            <span>{nft.seller}</span>
          </p>
          <p>
            <small>Token Id</small>
            <br />
            <span>{nft.tokenId}</span>
          </p>
        </SectionToggle>
      </div>
    </div>
  );
};

export default NFTDetailImg;
