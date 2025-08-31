"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import {
  MdVerified,
  MdCloudUpload,
  MdOutlineReportProblem,
} from "react-icons/md";
import { FiCopy } from "react-icons/fi";
import {
  TiSocialFacebook,
  TiSocialLinkedin,
  TiSocialTwitter,
  TiSocialInstagram,
} from "react-icons/ti";
import { BsThreeDots } from "react-icons/bs";
import Style from "./AuthorProfileCard.module.css";
import images from "../../img";
import { Button } from "@/components/componentsindex";
import { useShortAddress } from "@/hook/useShortAddress";

// ---------------------- Sub Components ---------------------- //
const SocialLinks = () => (
  <div className={Style.AuthorProfileCard_box_info_social}>
    <a href="https://www.facebook.com/" target="_blank" aria-label="Facebook">
      <TiSocialFacebook />
    </a>
    <a href="https://www.linkedin.com/" target="_blank" aria-label="LinkedIn">
      <TiSocialLinkedin />
    </a>
    <a href="https://www.twitter.com/" target="_blank" aria-label="Twitter">
      <TiSocialTwitter />
    </a>
    <a href="https://www.instagram.com/" target="_blank" aria-label="Instagram">
      <TiSocialInstagram />
    </a>
  </div>
);

const ShareMenu = () => (
  <div className={Style.AuthorProfileCard_box_share_upload}>
    <p><span><TiSocialFacebook /> Facebook</span></p>
    <p><span><TiSocialLinkedin /> LinkedIn</span></p>
    <p><span><TiSocialTwitter /> Twitter</span></p>
    <p><span><TiSocialInstagram /> Instagram</span></p>
  </div>
);

const ReportMenu = () => (
  <div className={Style.AuthorProfileCard_box_share_upload}>
    <p><span><MdOutlineReportProblem /> Report</span></p>
  </div>
);

// ---------------------- Main Component ---------------------- //
const AuthorProfileCard = ({address}) => {
  const [share, setShare] = useState(false);
  const [report, setReport] = useState(false);
  const [copied, setCopied] = useState(false);

  const menuRef = useRef(null);

  // Copy address handler
  const copyAddress = () => {
    navigator.clipboard.writeText(address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Toggle independent menus
  const openShare = () => {
    setShare(!share);
    setReport(false);
  };

  const openReport = () => {
    setReport(!report);
    setShare(false);
  };

  // Click outside handler
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setShare(false);
        setReport(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className={Style.AuthorProfileCard}>
      <div className={Style.AuthorProfileCard_box} ref={menuRef}>
        
        {/* Left Avatar */}
        <div className={Style.AuthorProfileCard_box_left}>
          <Image
            src={images.nft_image_1}
            alt="profile"
            width={220}
            height={220}
            className={Style.AuthorProfileCard_box_left_img}
          />
        </div>

        {/* Author Info */}
        <div className={Style.AuthorProfileCard_box_info}>
          <h2>
            Abdul Rehman <span><MdVerified /></span>
          </h2>

          <div className={Style.AuthorProfileCard_box_info_address}>
            <input
              type="text"
              value={useShortAddress(address)}
              readOnly
              aria-label="Wallet Address"
            />
            <FiCopy
              onClick={copyAddress}
              className={Style.AuthorProfileCard_box_info_address_icon}
              aria-label="Copy address"
            />
            {copied && <span className={Style.copiedText}>Copied!</span>}
          </div>

          <p>
            Lorem #4532 ipsum dolor sit amet consectetur, adipisicing elit.
            Expedita voluptates temporibus reprehenderit ut fugit qui molestias
            dolore eligendi vero similique molestiae mollitia nulla in nobis
            eos, possimus aliquam?
          </p>

          {/* Social links */}
          <SocialLinks />
        </div>

        {/* Right Actions */}
        <div className={Style.AuthorProfileCard_box_share}>
          <Button btnName={"Follow"} handleClick={() => {}} />

          {/* Share */}
          <MdCloudUpload
            className={Style.AuthorProfileCard_box_share_icon}
            onClick={openShare}
            aria-label="Share"
          />
          {share && <ShareMenu />}

          {/* Report */}
          <BsThreeDots
            className={Style.AuthorProfileCard_box_share_icon}
            onClick={openReport}
            aria-label="More options"
          />
          {report && <ReportMenu />}
        </div>
      </div>
    </div>
  );
};

export default AuthorProfileCard; 