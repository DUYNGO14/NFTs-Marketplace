"use client";
import React, { useState } from "react";
import DaysComponents from "./DaysComponents/DaysComponents";
import Styles from "./Collection.module.css";
import CollectionHeader from "../CollectionHeader/CollectionHeader";
import {
  BsCalendar3,
  BsFillAlarmFill,
  BsFillCalendarDateFill,
} from "react-icons/bs";
import images from "../../img";
const Collection = () => {
  const [activeTab, setActiveTab] = useState("popular");

  const cardArray = [
    {
      backMain: images.creatorbackground1,
      backExtra: [
        images.creatorbackground2,
        images.creatorbackground3,
        images.creatorbackground4,
      ],
      avatar: images.user1,
    },
    {
      backMain: images.creatorbackground5,
      backExtra: [
        images.creatorbackground6,
        images.creatorbackground7,
        images.creatorbackground8,
      ],
      avatar: images.user2,
    },
    {
      backMain: images.creatorbackground9,
      backExtra: [
        images.creatorbackground10,
        images.creatorbackground11,
        images.creatorbackground3,
      ],
      avatar: images.user3,
    },
    {
      backMain: images.creatorbackground4,
      backExtra: [
        images.creatorbackground5,
        images.creatorbackground6,
        images.creatorbackground7,
      ],
      avatar: images.user4,
    },
  ];

  const followingArray = [
    {
      backMain: images.creatorbackground1,
      backExtra: [
        images.creatorbackground2,
        images.creatorbackground3,
        images.creatorbackground4,
      ],
      avatar: images.user1,
    },
    {
      backMain: images.creatorbackground5,
      backExtra: [
        images.creatorbackground6,
        images.creatorbackground7,
        images.creatorbackground8,
      ],
      avatar: images.user2,
    },
    {
      backMain: images.creatorbackground9,
      backExtra: [
        images.creatorbackground10,
        images.creatorbackground11,
        images.creatorbackground3,
      ],
      avatar: images.user3,
    },
    {
      backMain: images.creatorbackground4,
      backExtra: [
        images.creatorbackground5,
        images.creatorbackground6,
        images.creatorbackground7,
      ],
      avatar: images.user4,
    },
    {
      backMain: images.creatorbackground7,
      backExtra: [
        images.creatorbackground2,
        images.creatorbackground3,
        images.creatorbackground4,
      ],
      avatar: images.user1,
    },
    {
      backMain: images.creatorbackground8,
      backExtra: [
        images.creatorbackground5,
        images.creatorbackground6,
        images.creatorbackground9,
      ],
      avatar: images.user2,
    },
    {
      backMain: images.creatorbackground9,
      backExtra: [
        images.creatorbackground10,
        images.creatorbackground11,
        images.creatorbackground1,
      ],
      avatar: images.user3,
    },
    {
      backMain: images.creatorbackground10,
      backExtra: [
        images.creatorbackground2,
        images.creatorbackground5,
        images.creatorbackground11,
      ],
      avatar: images.user4,
    },
  ];

  const newsArray = [
    {
      backMain: images.creatorbackground7,
      backExtra: [
        images.creatorbackground2,
        images.creatorbackground3,
        images.creatorbackground4,
      ],
      avatar: images.user1,
    },
    {
      backMain: images.creatorbackground8,
      backExtra: [
        images.creatorbackground5,
        images.creatorbackground6,
        images.creatorbackground9,
      ],
      avatar: images.user2,
    },
    {
      backMain: images.creatorbackground9,
      backExtra: [
        images.creatorbackground10,
        images.creatorbackground11,
        images.creatorbackground1,
      ],
      avatar: images.user3,
    },
    {
      backMain: images.creatorbackground10,
      backExtra: [
        images.creatorbackground2,
        images.creatorbackground5,
        images.creatorbackground11,
      ],
      avatar: images.user4,
    },
  ];
  const buttons = [
    { key: "popular", label: "Last 24 hours", icon: <BsFillAlarmFill /> },
    {
      key: "following",
      label: "Last 7 days",
      icon: <BsFillCalendarDateFill />,
    },
    { key: "news", label: "Last 30 days", icon: <BsCalendar3 /> },
  ];
  return (
    <div className={Styles.collection}>
      {/* Header tái sử dụng */}
      <CollectionHeader
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        title="Top List Creator"
        buttons={buttons}
      />

      <div className={Styles.collection_box}>
        {activeTab === "popular" &&
          cardArray.map((item, index) => (
            <DaysComponents key={index} item={item} />
          ))}

        {activeTab === "following" &&
          followingArray.map((item, index) => (
            <DaysComponents key={index} item={item} />
          ))}

        {activeTab === "news" &&
          newsArray.map((item, index) => (
            <DaysComponents key={index} item={item} />
          ))}
      </div>
    </div>
  );
};

export default Collection;
