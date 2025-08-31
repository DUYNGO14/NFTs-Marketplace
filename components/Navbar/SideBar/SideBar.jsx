"use client";
import React, { use, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { GrClose } from "react-icons/gr";
import {
  TiSocialFacebook,
  TiSocialLinkedin,
  TiSocialTwitter,
  TiSocialYoutube,
  TiSocialInstagram,
  TiArrowSortedDown,
  TiArrowSortedUp,
} from "react-icons/ti";
import Style from "./SideBar.module.css";
import images from "../../../img";
import Button from "../../Button/Button";
import { useRouter } from "next/navigation";
import { useAppKitAccount } from "@reown/appkit/react";

// ========================
// Menu Data
// ========================
const discover = [
  { name: "Collection", link: "/collection" },
  { name: "Search", link: "/search" },
  { name: "Author Profile", link: "/author-profile" },
  { name: "NFT Details", link: "/nft-details" },
  { name: "Account Setting", link: "/account-setting" },
  { name: "Connect Wallet", link: "/connect-wallet" },
  { name: "Blog", link: "/blog" },
];

const helpCenter = [
  { name: "About", link: "/about" },
  { name: "Contact Us", link: "/contact-us" },
  { name: "Sign Up", link: "/sign-up" },
  { name: "Sign In", link: "/sign-in" },
  { name: "Subscription", link: "/subscription" },
];

// ========================
// Reusable Menu Group
// ========================
const MenuGroup = ({ title, isOpen, onToggle, items }) => (
  <div>
    <div className={Style.sideBar_menu_box} onClick={onToggle}>
      <p>{title}</p>
      {isOpen ? <TiArrowSortedUp /> : <TiArrowSortedDown />}
    </div>
    {isOpen && (
      <div className={Style.sideBar_menu_list}>
        {items.map((item, i) => (
          <p key={i}>
            <Link href={item.link}>{item.name}</Link>
          </p>
        ))}
      </div>
    )}
  </div>
);

// ========================
// Main Component
// ========================
const SideBar = ({ setOpenSideMenu }) => {
  const [openDiscover, setOpenDiscover] = useState(false);
  const [openHelp, setOpenHelp] = useState(false);
  const { address } = useAppKitAccount();
  const router = useRouter();
  const closeSideBar = () => setOpenSideMenu(false);

  return (
    <div className={Style.sideBar}>
      {/* Close Button */}
      <GrClose className={Style.sideBar_closeBtn} onClick={closeSideBar} />

      {/* Logo + Intro */}
      <div className={Style.sideBar_box}>
        <Image
          src={images.logo}
          alt="NFT Marketplace Logo"
          width={150}
          height={150}
        />
        <p>
          Discover the most outstanding NFTs in all topics of NFT & your own
          stories and share them.
        </p>

        {/* Social Icons */}
        <div className={Style.sideBar_social}>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className={Style.sideBar_social_icon}
          >
            <TiSocialFacebook />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className={Style.sideBar_social_icon}
          >
            <TiSocialLinkedin />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className={Style.sideBar_social_icon}
          >
            <TiSocialTwitter />
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className={Style.sideBar_social_icon}
          >
            <TiSocialYoutube />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className={Style.sideBar_social_icon}
          >
            <TiSocialInstagram />
          </a>
        </div>
      </div>

      {/* Menu Groups */}
      <div className={Style.sideBar_menu}>
        <MenuGroup
          title="Discover"
          isOpen={openDiscover}
          onToggle={() => setOpenDiscover(!openDiscover)}
          items={discover}
        />
        <MenuGroup
          title="Help & Support"
          isOpen={openHelp}
          onToggle={() => setOpenHelp(!openHelp)}
          items={helpCenter}
        />
      </div>

      {/* Action Buttons */}
      <div className={Style.sideBar_button}>
        {address ? (
          <Button
            btnName="Create"
            handleClick={() => {
              router.push("/create-nft");
            }}
          />
        ) : (
          <Button
            btnName="Create"
            handleClick={() => {
              router.push("/connect-wallet");
            }}
          />
        )}
      </div>
    </div>
  );
};

export default SideBar;
