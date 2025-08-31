"use client";
import React, { useState, useEffect, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import Styles from "./DropZone.module.css";
import images from "../../img";
import Image from "next/image";
import { uploadFileToIPFS } from "../../helper/ipfs";

const DropZone = ({ 
  title,
  heading,
  subheading,
  formData,
  handleChange,
  preview,
}) => {
  const [fileUrl, setFileUrl] = useState(null);
  const onDrop = useCallback(async (acceptedFiles) => {
    const file = acceptedFiles[0];
    if (file) {
      console.log("Uploading file:", file);
      const res = await uploadFileToIPFS(file); // return object
      console.log("Uploaded:", res);
      setFileUrl(res.url);
      handleChange("image", res.url); // hoặc handleChange({ ...formData, image: res.url })
    }
  }, [handleChange, formData]);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: { "image/*": [] },
    maxFiles: 1,
    maxSize: 5 * 1024 * 1024,
  });

  return (
    <div className={Styles.DropZone}>
      <div className={Styles.DropZone_box} {...getRootProps()}>
        <input {...getInputProps()} />
        <div className={Styles.DropZone_box_input}>
          <p>{title}</p>
          <div className={Styles.DropZone_box_input_img}>
            <Image src={images.upload} alt="Upload" width={100} height={100} />
          </div>
          <p>{heading}</p>
          <p>{subheading}</p>
        </div>
      </div>

      {fileUrl && preview && (
        <aside className={Styles.DropZone_box_aside}>
          <div className={Styles.DropZone_box_aside_box}>
            <Image src={fileUrl} alt="preview" width={200} height={200} />
            <div className={Styles.DropZone_box_aside_box_preview}>
              <div className={Styles.DropZone_box_aside_box_preview_one}>
                <p><span>NFT name: {formData.name || " "}</span></p>
                <p><span>Website: {formData.website || " "}</span></p>
              </div>
              <div className={Styles.DropZone_box_aside_box_preview_two}>
                <p><span>Description: {formData.description || " "}</span></p>
              </div>
              <div className={Styles.DropZone_box_aside_box_preview_two}>
                <p><span>Propertie: {formData.propertie || " "}</span></p>
              </div>
              <div className={Styles.DropZone_box_aside_box_preview_three}>
                <p><span>Royalties: {formData.royalty || " "}</span></p>
                <p><span>File Size: {formData.fileSize || " "}</span></p>
                <p><span>Category: {formData.category || " "}</span></p>
                <p><span>Price: {formData.price || " "}</span></p>
              </div>
            </div>
          </div>
        </aside>
      )}
    </div>
  );
};

export default DropZone;
