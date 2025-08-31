import React from "react";
import Styles from "./NFTDetailsPage.module.css";
import { NFTDescription, NFTTabs, NFTDetailImg } from "./index";
const NFTDetailsPage = ({ nft}) => {
  return (
    <div className={Styles.NFTDetailsPage}>
      <div className={Styles.NFTDetailsPage_box}>
        <NFTDetailImg nft={nft}  />
        <NFTDescription nft={nft} />
      </div>
    </div>
  );
};

export default NFTDetailsPage;
