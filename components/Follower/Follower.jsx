"use client";
import React, { useState } from "react";
import {
  RiUserFollowFill,
  RiUserUnfollowFill,
  RiAwardLine,
} from "react-icons/ri";
import CollectionHeader from "../CollectionHeader/CollectionHeader";
import Styles from "./Follower.module.css";
import images from "../../img";
import FollowerCard from "./FollowerCard/FollowerCard";
const Follower = ({ topCreator=[] }) => {
  const [activeTab, setActiveTab] = useState("popular");
  const buttons = [
    { key: "popular", label: "Popular", icon: <RiUserUnfollowFill /> },
    { key: "following", label: "Flowing", icon: <RiUserFollowFill /> },
    { key: "noteworthy", label: "Noteworthy", icon: <RiAwardLine /> },
  ];
  const followingArray = [
    { background: images.creatorbackground5, avatar: images.user5 },
    { background: images.creatorbackground6, avatar: images.user6 },
    { background: images.creatorbackground7, avatar: images.user7 },
    { background: images.creatorbackground2, avatar: images.user2 },
  ];
  const noteworthyArray = [
    { background: images.creatorbackground8, avatar: images.user8 },
    { background: images.creatorbackground9, avatar: images.user9 },
    { background: images.creatorbackground10, avatar: images.user10 },
    { background: images.creatorbackground11, avatar: images.user1 }, // thêm lại 1 avatar để đủ background
  ];
  return (
    <div className={Styles.follower}>
      <CollectionHeader
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        title="Top Creator List..."
        buttons={buttons}
      />

      <div className={Styles.follower_box}>
        {activeTab === "popular" &&
          topCreator.map((item, index) => (
            <FollowerCard key={index} i={index} item={item} />
          ))}

        {activeTab === "following" &&
          followingArray.map((item, index) => (
            <FollowerCard key={index} i={index} item={item} />
          ))}

        {activeTab === "noteworthy" &&
          noteworthyArray.map((item, index) => (
            <FollowerCard key={index} i={index} item={item} />
          ))}
      </div>
    </div>
  );
};

export default Follower;
