"use client";
import React, { useState } from "react";
import { TiArrowSortedDown, TiArrowSortedUp, TiTick } from "react-icons/ti";
import Styles from "./AuthorTaps.module.css";

const AuthorTaps = ({
  setCollectiables,
  setCreated,
  setLiked,
  setFollowing,
  setFollower,
  setType,
}) => {
  const [activeTab, setActiveTab] = useState(1);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState("Most Recent");

  const listArray = [
    { id: 1, name: "Created By Admin" },
    { id: 2, name: "Most Appreciated" },
    { id: 3, name: "Most Discussed" },
    { id: 4, name: "Most Viewed" },
  ];

  const handleTabClick = (id) => {
    setActiveTab(id);

    // Reset tất cả về false trước
    setCollectiables?.(false);
    setCreated?.(false);
    setLiked?.(false);
    setFollowing?.(false);
    setFollower?.(false);

    // Chỉ set cái đang click = true
    if (id === 1) {
      setCollectiables?.(true);
      setType?.("fetchItemsListed");
    }
    if (id === 2) {
      setCreated?.(true);
      setType?.("fetchMyNFTs");
    }
    if (id === 3) setLiked?.(true);
    if (id === 4) setFollowing?.(true);
    if (id === 5) setFollower?.(true);
  };

  const handleMenuClick = (name) => {
    setSelectedMenu(name);
    setIsDropdownOpen(false);
  };

  return (
    <div className={Styles.authorTaps}>
      <div className={Styles.authorTaps_box}>
        {/* Tabs bên trái */}
        <div className={Styles.authorTaps_box_left}>
          <div className={Styles.authorTaps_box_left_btn}>
            {["Listed NFTs", "Own NFTs", "Liked", "Following", "Follower"].map(
              (tab, index) => (
                <button
                  key={index}
                  className={activeTab === index + 1 ? Styles.active : ""}
                  onClick={() => handleTabClick(index + 1)}
                >
                  {tab}
                </button>
              )
            )}
          </div>
        </div>

        {/* Dropdown bên phải */}
        <div className={Styles.authorTaps_box_right}>
          <div
            className={Styles.authorTaps_box_right_para}
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            <p>{selectedMenu}</p>
            {isDropdownOpen ? (
              <TiArrowSortedUp size={20} />
            ) : (
              <TiArrowSortedDown size={20} />
            )}
          </div>

          {isDropdownOpen && (
            <div className={Styles.authorTaps_box_right_list}>
              {listArray.map((item) => (
                <div
                  key={item.id}
                  onClick={() => handleMenuClick(item.name)}
                  className={Styles.authorTaps_box_right_list_item}
                >
                  <p>{item.name}</p>
                  <span>{selectedMenu === item.name && <TiTick />}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthorTaps;
