import React from "react";
import { RiSendPlaneFill } from "react-icons/ri";
import Image from "next/image";
import images from "../../img";
import Style from "./Subscribe.module.css";
const Subscribe = () => {
  return (
    <div className={Style.subscribe}>
      <div className={Style.subscribe_box}>
        <div className={Style.subscribe_box_left}>
          <h2>Never miss a drop</h2>
          <p>
            Subscribe to our newsletter to get the latest news in your inbox.
          </p>
          <div className={Style.subscribe_box_left_box}>
            <span>01</span>
            <small>Get more discount</small>
          </div>
          <div className={Style.subscribe_box_left_box}>
            <span>02</span>
            <small>Get premium magazines</small>
          </div>

          <div className={Style.subscribe_box_left_input}>
            <input type="email" placeholder="Enter your email address" />
            <RiSendPlaneFill className={Style.subscribe_box_left_input_icon} />
          </div>
        </div>
        <div className={Style.subscribe_box_right}>
          <Image
            src={images.update}
            alt="get update"
            width={500}
            height={500}
          />
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
