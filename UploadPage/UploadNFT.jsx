"use client";
import React, { useContext, useState } from "react";
import {
  MdOutlineHttp,
  MdOutlineAttachFile,
  MdUpload,
  MdPreview,
} from "react-icons/md";
import { FaPercent } from "react-icons/fa6";
import { AiTwotonePropertySafety } from "react-icons/ai";
import { TiTick } from "react-icons/ti";
import Image from "next/image";
import { motion } from "framer-motion";
import Styles from "./UploadNFT.module.css";
import { Button } from "@/components/componentsindex";
import { DropZone } from "./index";
import images from "../img";
import { useRouter } from "next/navigation";

const UploadNFT = ({ createNFT, loading }) => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    image: "",
    website: "",
    description: "",
    royalty: "",
    category: "",
    fileSize: "",
    propertie: "",
  });
  const [preview, setPreview] = useState(true);
  const [active, setActive] = useState(null);

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const categoryArray = [
    { id: 1, name: "Art", img: images.nft_image_3 },
    { id: 2, name: "Music", img: images.nft_image_1 },
    { id: 3, name: "Domain Names", img: images.creatorbackground3 },
    { id: 4, name: "Virtual Worlds", img: images.creatorbackground4 },
    { id: 5, name: "Trading Cards", img: images.creatorbackground5 },
    { id: 6, name: "Collectibles", img: images.creatorbackground6 },
    { id: 7, name: "Sports", img: images.nft_image_2 },
  ];

  return (
    <motion.div
      className={Styles.uploadNFT}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* DropZone */}
      
        <DropZone
          title="Upload your file"
          heading="Drag & Drop your file"
          subheading="Or browse media on your computer"
          formData={formData}
          handleChange={handleChange}
          preview={preview}
          setPreview={setPreview}
        />

      {/* Form */}
      <div className={Styles.uploadNFT_box}>
        {/* Item Name */}
        <div className={Styles.form_box_input}>
          <label>Item Name</label>
          <input
            type="text"
            placeholder="Duy Ngo"
            value={formData.name}
            onChange={(e) => handleChange("name", e.target.value)}
          />
        </div>

        {/* Website */}
        <div className={Styles.form_box_input}>
          <label>Website</label>
          <div className={Styles.form_box_input_box}>
            <MdOutlineHttp />
            <input
              type="text"
              placeholder="www.example.com"
              value={formData.website}
              onChange={(e) => handleChange("website", e.target.value)}
            />
          </div>
        </div>

        {/* Description */}
        <div className={Styles.form_box_input}>
          <label>Description</label>
          <textarea
            rows={6}
            placeholder="Write your description"
            value={formData.description}
            onChange={(e) => handleChange("description", e.target.value)}
          />
        </div>

        {/* Collection */}
        <div className={Styles.form_box_input}>
          <label>Choose collection</label>
          <div className={Styles.uploadNFT_box_slider_box}>
            {categoryArray.map((item, index) => (
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                key={item.id}
                className={`${Styles.uploadNFT_box_slider_box_item} ${
                  active === index ? Styles.active : ""
                }`}
                onClick={() => {
                  setActive(index);
                  handleChange("category", item.name);
                }}
              >
                <div className={Styles.uploadNFT_box_slider_box_item_img}>
                  <Image
                    src={item.img}
                    width={70}
                    height={70}
                    alt={item.name}
                  />
                  <div className={Styles.uploadNFT_box_slider_box_item_icon}>
                    <TiTick />
                  </div>
                </div>
                <p>Crypto Legend - {item.name}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Royalties / Size / Properties */}
        <div className={Styles.form_box_input_social}>
          <div>
            <label>Royalties</label>
            <div className={Styles.form_box_input_box}>
              <FaPercent />
              <input
                type="number"
                placeholder="20"
                value={formData.royalty}
                onChange={(e) => handleChange("royalty", e.target.value)}
              />
            </div>
          </div>

          <div>
            <label>Size</label>
            <div className={Styles.form_box_input_box}>
              <MdOutlineAttachFile />
              <input
                type="number"
                placeholder="0.00 MB"
                step="0.01"
                value={formData.fileSize}
                onChange={(e) => handleChange("fileSize", e.target.value)}
              />
            </div>
          </div>

          <div>
            <label>Propertie</label>
            <div className={Styles.form_box_input_box}>
              <AiTwotonePropertySafety />
              <input
                type="text"
                placeholder="Propertie"
                value={formData.propertie}
                onChange={(e) => handleChange("propertie", e.target.value)}
              />
            </div>
          </div>
          <div>
            <label>Price</label>
            <div className={Styles.form_box_input_box}>
              <AiTwotonePropertySafety />
              <input
                type="text"
                placeholder="Price"
                value={formData.price}
                onChange={(e) => handleChange("price", e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* Upload Button */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className={Styles.uploadNFT_box_button}
        >
          <Button
            btnName={loading ? "Uploading..." : "Upload"}
            handleClick={async () => createNFT(formData, router)}
            icon={<MdUpload />}
          />
          <Button
            btnName="Preview"
            handleClick={()=>{setPreview(!preview)}}
            icon={<MdPreview />}
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default UploadNFT;
