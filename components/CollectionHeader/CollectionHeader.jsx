"use client";
import React from "react";
import Styles from "./CollectionHeader.module.css";

const CollectionHeader = ({ activeTab, setActiveTab, title, buttons }) => {
  return (
    <div className={Styles.collection_title}>
      <h2>{title}</h2>
      <div className={Styles.collection_collections}>
        <div className={Styles.collection_collections_btn}>
          {buttons.map((btn) => (
            <button
              key={btn.key}
              onClick={() => setActiveTab(btn.key)}
              className={activeTab === btn.key ? Styles.active : ""}
            >
              {btn.icon} {btn.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CollectionHeader;
