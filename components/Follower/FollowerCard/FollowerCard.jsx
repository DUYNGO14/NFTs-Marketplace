"use client";
import Image from "next/image";
import { MdVerified } from "react-icons/md";
import { TiTick } from "react-icons/ti";

import Styles from "./FollowerCard.module.css";
import images from "../../../img";
import { useState } from "react";
import { useShortAddress } from "@/hook/useShortAddress";


const FollowerCard = ({ item, i }) => {
  console.log("item:", item);
  const [following, setFollowing] = useState(false);
  const followMe = () => {
    setFollowing(!following);
  };

  return (
    <div className={Styles.followerCard}>
      <div className={Styles.followerCard_rank}>
        <p>
          #{i + 1} <span>🥇</span>
        </p>
      </div>

      <div className={Styles.followerCard_box}>
        {/* Background */}
        <div className={Styles.followerCard_box_img}>
          <Image
            className={Styles.followerCard_box_img_img}
            src={item.background || images.creatorbackground1}
            alt="profile background"
            width={500}
            height={300}
            style={{ objectFit: "cover" }}
          />
        </div>

        {/* Avatar */}
        <div className={Styles.followerCard_box_profile}>
          <Image
            className={Styles.followerCard_box_profile_img}
            src={item.avatar || images.user1}
            alt="profile image"
            width={50}
            height={50}
            style={{ objectFit: "cover" }}
          />
        </div>

        {/* Info */}
        <div className={Styles.followerCard_box_info}>
          <div className={Styles.followerCard_box_info_name}>
            <h4>
              <span className={Styles.nameWithIcon}>
                {useShortAddress(item.seller)} <MdVerified className={Styles.verifiedIcon} />
              </span>
            </h4>
            <p>{item.total} ETH</p>
          </div>

          {/* Follow button */}
          <div className={Styles.followerCard_box_info_follow}>
            {following ? (
              <button
                className={Styles.followerCard_box_info_follow_btn}
                onClick={followMe}
              >
                Following <TiTick />
              </button>
            ) : (
              <button
                className={Styles.followerCard_box_info_follow_btn}
                onClick={followMe}
              >
                Follow
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FollowerCard;
