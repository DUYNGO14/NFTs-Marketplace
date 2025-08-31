'use client';
import React, { useContext } from "react";
import { UploadNFT } from "@/UploadPage";
import Styles from "./UploadNFT.module.css";
import {NFTMarketplaceContext} from "@/context/NFTMarketplaceContext";
const UploadNFTPage = () => {
  const {createNFT, loading} = useContext(NFTMarketplaceContext);
  return (
    <div className={Styles.uploadNFT}>
      <div className={Styles.uploadNFT_box}>
        <div className={Styles.uploadNFT_box_heading}>
          <h1>Create New NFT</h1>
          <p>
            You can set preference display name, create your profile URL and
            manage others personal information settings
          </p>
        </div>
        <div className={Styles.uploadNFT_box_content}>
          <h2>Image, Video, Audio, or 3D Model</h2>
          <p>
            File types supported: JPG, PNG, GIF, SVG, MP4, WEBM, MP3, WAV, OGG,
            GLB, GLTF. Max size: 100 MB
          </p>
        </div>
        <div className={Styles.uploadNFT_box_form}>
          <UploadNFT createNFT={createNFT} />
        </div>
      </div>
    </div>
  );
};

export default UploadNFTPage;
