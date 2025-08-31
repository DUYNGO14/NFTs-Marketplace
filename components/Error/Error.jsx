"use client";
import React, { useContext } from "react";
import Image from "next/image";

import Styles from "./Error.module.css";
import { NFTMarketplaceContext } from "@/context/NFTMarketplaceContext";
import images from "../../img";
const Error = () => {
  const { error, setError } = useContext(NFTMarketplaceContext);
  if (!error) return null;
  return (
    <div className={Styles.container} onClick={() => setError(null)}>
      <div className={Styles.error}>
        <div className={Styles.error_img}>
          <Image src={images.error} alt="404" width={500} height={500} />

        </div>
        <h1>ERROR</h1>
      </div>
    </div>
  );
};

export default Error;
