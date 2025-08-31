import React from "react";
import Image from "next/image";
import Styles from "./NFTTabs.module.css";
const NFTTabs = ({ dataTab, icon }) => {
  return (
    <div className={Styles.NFTTabs}>
      {dataTab.map((i, index) => (
        <div className={Styles.NFTTabs_box} key={index}>
          <Image
            src={i.image}
            alt="profile background"
            width={40}
            height={40}
            className={Styles.NFTTabs_box_img}
          />
          <div className={Styles.NFTTabs_box_info}>
            <div className={Styles.NFTTabs_box_info_box}>
              <span>
                Offer by {i.price} by <small>{i.name}</small>
              </span>
              {icon}
            </div>

            <small>{i.time}</small>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NFTTabs;
