"use client";
import React, { useState, useEffect, useContext } from "react";
import Styles from "./NFTDescription.module.css";
import Image from "next/image";
import {
  MdVerified,
  MdCloudUpload,
  MdReportProblem,
  MdOutlineDeleteSweep,
} from "react-icons/md";
import { FcApproval } from "react-icons/fc";
import { BsThreeDots } from "react-icons/bs";
import { FaWallet, FaPercentage } from "react-icons/fa";
import {
  TiSocialFacebook,
  TiSocialLinkedin,
  TiSocialTwitter,
  TiSocialInstagram,
} from "react-icons/ti";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import { BiDollar } from "react-icons/bi";
import { Button } from "@/components/componentsindex";
import { NFTTabs } from "../index";
import images from "../../img";
import { motion, AnimatePresence } from "framer-motion";
import { NFTMarketplaceContext } from "@/context/NFTMarketplaceContext";
import { useAppKitAccount } from "@reown/appkit/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
const NFTDescription = ({ nft }) => {
  console.log(nft);
  const [activeTab, setActiveTab] = useState("history");
  const [dropdown, setDropdown] = useState(null);
  const router = useRouter();
  const historyArray = [
    {
      name: "CryptoKitties1",
      image: images.user4,
      time: "Jun 15 - 20:20 PM",
      price: "0.04001 ETH",
    },
    {
      name: "CryptoKitties2",
      image: images.user2,
      time: "July 03 - 13:20 PM",
      price: "0.04437 ETH",
    },
    {
      name: "CryptoKitties3",
      image: images.user5,
      time: "Jun 23 - 16:30 PM",
      price: "0.04559 ETH",
    },
    {
      name: "CryptoKitties4",
      image: images.user2,
      time: "July 03 - 13:20 PM",
      price: "0.04437 ETH",
    },
  ];
  const ownerArray = [...historyArray];
  const provananceArray = [...historyArray];

  const toggleDropdown = (type) => {
    setDropdown((prev) => (prev === type ? null : type));
  };

  // 🔥 Countdown Timer Logic
  const calculateTimeLeft = () => {
    const targetDate = new Date("2025-08-30T23:59:59"); // ngày kết thúc auction
    const now = new Date();
    const diff = targetDate - now;

    let timeLeft = {};
    if (diff > 0) {
      timeLeft = {
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / 1000 / 60) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  //smart contract
  const { buyNFTS } = useContext(NFTMarketplaceContext);
  const { address } = useAppKitAccount();
  return (
    <div className={Styles.NFTDescription}>
      <div className={Styles.NFTDescription_box}>
        {/* Share & Menu */}
        <div className={Styles.NFTDescription_box_share}>
          <p>Virtual Worlds</p>
          <div className={Styles.NFTDescription_box_share_box}>
            {/* Share */}
            <MdCloudUpload
              className={Styles.NFTDescription_box_share_box_icon}
              onClick={() => toggleDropdown("social")}
            />
            {dropdown === "social" && (
              <div className={Styles.NFTDescription_box_share_box_social}>
                <a href="#">
                  <TiSocialFacebook /> Facebook
                </a>
                <a href="#">
                  <TiSocialLinkedin /> LinkedIn
                </a>
                <a href="#">
                  <TiSocialTwitter /> Twitter
                </a>
                <a href="#">
                  <TiSocialInstagram /> Instagram
                </a>
              </div>
            )}

            {/* Menu */}
            <BsThreeDots
              className={Styles.NFTDescription_box_share_box_icon}
              onClick={() => toggleDropdown("menu")}
            />
            {dropdown === "menu" && (
              <div className={Styles.NFTDescription_box_share_box_social}>
                <a href="#">
                  <BiDollar /> Change Price
                </a>
                <a href="#">
                  <FaMoneyBillTransfer /> Transfer NFT
                </a>
                <a href="#">
                  <MdReportProblem /> Report NFT
                </a>
                <a href="#">
                  <MdOutlineDeleteSweep /> Delete NFT
                </a>
              </div>
            )}
          </div>
        </div>

        {/* Profile & Auction */}
        <div className={Styles.NFTDescription_box_profile}>
          <h1>
            {nft.name} #{nft.tokenId}
          </h1>
          <div className={Styles.NFTDescription_box_profile_box}>
            {/* Creator */}
            <div className={Styles.NFTDescription_box_profile_box_left}>
              <Image
                src={images.user1}
                alt="creator"
                width={50}
                height={50}
                className={Styles.profile_img}
              />
              <div>
                <small>Creator: </small>
                <Link
                  href={{ pathname: "/author-profile", query: `${nft.seller}` }}
                >
                  <span>
                    John Doe <FcApproval />
                  </span>
                </Link>
              </div>
            </div>
            {/* Owner */}
            <div className={Styles.NFTDescription_box_profile_box_right}>
              <Image
                src={images.user2}
                alt="owner"
                width={50}
                height={50}
                className={Styles.profile_img}
              />
              <div>
                <small>Collection</small>
                <span>
                  Duy Ngo <FcApproval />
                </span>
              </div>
            </div>
          </div>

          {/* Auction countdown */}
          <div className={Styles.NFTDescription_box_profile_biding}>
            <p>
              <MdVerified /> <span>Auction ending in:</span>
            </p>
            <div className={Styles.timer}>
              {Object.entries(timeLeft).map(([label, value], i) => (
                <motion.div
                  key={label}
                  className={Styles.timer_box}
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.8, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <AnimatePresence mode="wait">
                    <motion.h4
                      key={value}
                      initial={{ y: -20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: 20, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {value ?? "0"}
                    </motion.h4>
                  </AnimatePresence>
                  <small>{label}</small>
                </motion.div>
              ))}
            </div>

            {/* Current Bid */}
            <div className={Styles.bid_box}>
              <div>
                <small>Current Bid</small>
                <p>
                  {nft.price} ETH <span>(~ $3,232.21)</span>
                </p>
              </div>
              <span>[32 in stock]</span>
            </div>

            {/* Buttons */}
            <div className={Styles.btn_group}>
              {address.toLowerCase() === nft.seller.toLowerCase() ? (
                <p>You cannot buy your own NFT</p>
              ) : address.toLowerCase() === nft.owner.toLowerCase() ? (
                <Button
                  btnName="List on Marketplace"
                  handleClick={() => router.push(`/resell?id=${nft.tokenId}&tokenURI=${nft.tokenURI}`)}
                />
              ) : (
                <>
                  <Button
                    icon={<FaWallet />}
                    btnName="Buy Now"
                    handleClick={() => buyNFTS(nft)}
                  />
                  <Button icon={<FaPercentage />} btnName="Make an offer" />
                </>
              )}
            </div>
            {/* Tabs */}
            <div className={Styles.tabs}>
              {["history", "provanance", "owner"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={activeTab === tab ? Styles.activeTab : ""}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            {activeTab === "history" && <NFTTabs dataTab={historyArray} />}
            {activeTab === "provanance" && (
              <NFTTabs dataTab={provananceArray} />
            )}
            {activeTab === "owner" && (
              <NFTTabs dataTab={ownerArray} icon={<FcApproval />} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NFTDescription;
