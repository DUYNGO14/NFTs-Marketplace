import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  TiSocialFacebook,
  TiSocialLinkedin,
  TiSocialTwitter,
  TiSocialYoutube,
  TiSocialInstagram,
  TiArrowSortedDown,
  TiArrowSortedUp,
} from "react-icons/ti";
import { RiSendPlaneFill } from "react-icons/ri";
import images from "../../img";
import { Discover, HelpCenter } from "../Navbar";
import Style from "./Footer.module.css";
const Footer = () => {
  return (
    <div className={Style.footer}>
      <div className={Style.footer_box}>
        <div className={Style.footer_box_social}>
          <Image
            src={images.logo}
            alt="NFT Marketplace Logo"
            width={150}
            height={150}
          />
          <p>
            The world's first and largest digital marketplace for crypto
            collectibles and non-fungible tokens (NFTs). Buy, trade, and
            discover exclusive digital assets.
          </p>
          <div className={Style.footer_social}>
            <a href="#" target="_blank">
              <TiSocialFacebook />
            </a>
            <a href="#" target="_blank">
              <TiSocialLinkedin />
            </a>
            <a href="#" target="_blank">
              <TiSocialTwitter />
            </a>
            <a href="#" target="_blank">
              <TiSocialYoutube />
            </a>
            <a href="#" target="_blank">
              <TiSocialInstagram />
            </a>
          </div>
        </div>
        <div className={Style.footer_box_discover}>
          <h3>Discover</h3>
          <Discover />
        </div>
        <div className={Style.footer_box_help}>
          <h3>Help Center</h3>
          <HelpCenter />
        </div>
        <div className={Style.subscribe}>
          <h3>Subscribe</h3>
          <div className={Style.subscribe_box}>
            <input type="email" placeholder="Enter email address" />
            <button>
              <RiSendPlaneFill className={Style.subscribe_box_icon} />
            </button>
          </div>
          <div className={Style.subscribe_box_info}>
            <p>
              Discover, collect, and sell NFTs OpenSea is the world's first and
              largest NFT marketplace
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
