"use client";
import React from "react";
import Style from "./NFTCardSkeleton.module.css";

const NFTCardSkeleton = ({ count = 4 }) => {
  return (
    <div className={Style.NFTCard}>
      {Array(count)
        .fill(0)
        .map((_, index) => (
          <div className={Style.NFTCard_box} key={index}>
            {/* Hình ảnh */}
            <div
              className={`${Style.NFTCard_box_img} animate-pulse bg-gray-300`}
              style={{ width: "100%", height: "300px", borderRadius: "12px" }}
            ></div>

            {/* Like + Time */}
            <div className={Style.NFTCard_box_update}>
              <div className={Style.NFTCard_box_update_left}>
                <div
                  className={`${Style.NFTCard_box_update_left_like} animate-pulse bg-gray-300`}
                  style={{ width: "60px", height: "20px", borderRadius: "6px" }}
                ></div>
              </div>
              <div className={Style.NFTCard_box_update_right}>
                <div
                  className="animate-pulse bg-gray-300"
                  style={{ width: "100px", height: "20px", borderRadius: "6px" }}
                ></div>
              </div>
            </div>

            {/* Chi tiết */}
            <div className={Style.NFTCard_box_update_details}>
              <div className={Style.NFTCard_box_update_details_price}>
                <div
                  className="animate-pulse bg-gray-300"
                  style={{ width: "120px", height: "20px", borderRadius: "6px" }}
                ></div>
                <div
                  className="animate-pulse bg-gray-300 mt-2"
                  style={{ width: "80px", height: "20px", borderRadius: "6px" }}
                ></div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default NFTCardSkeleton;
