"use client";
import React from "react";
import Styles from "./ContactUs.module.css";
import {
  TiSocialFacebook,
  TiSocialLinkedin,
  TiSocialTwitter,
  TiSocialInstagram,
} from "react-icons/ti";
import { MdOutlineMail, MdPhone } from "react-icons/md";
import Image from "next/image";
import images from "../../img";
import { Button } from "@/components/componentsindex";

const ContactUs = () => {
  return (
    <div className={Styles.contact}>
      <div className={Styles.contact_box}>
        <div className={Styles.contact_info}>
          <h1>Contact Us</h1>
          <p>
            We are here to help and answer any question you might have. We look
            forward to hearing from you.
          </p>

          <div className={Styles.contact_details}>
            <div className={Styles.contact_details_info}>
              <p>
                <MdOutlineMail /> support@nftmarket.com
              </p>
              <p>
                <MdPhone /> +1 234 567 890
              </p>
            </div>

            <div className={Styles.contact_social}>
              <a href="#">
                <TiSocialFacebook />
              </a>
              <a href="#">
                <TiSocialTwitter />
              </a>
              <a href="#">
                <TiSocialLinkedin />
              </a>
              <a href="#">
                <TiSocialInstagram />
              </a>
            </div>
          </div>
        </div>

        {/* RIGHT FORM */}
        <div className={Styles.contact_form}>
          <h2>Contact Form</h2>
          <form>
            <input type="text" placeholder="Full Name" required />
            <input type="email" placeholder="Email" required />
            <textarea placeholder="Your Message" rows="5" required />
            <Button btnName="Send" handleClick={() => {}} />
          </form>
        </div>
      </div>
      {/* LEFT INFO */}
    </div>
  );
};

export default ContactUs;
