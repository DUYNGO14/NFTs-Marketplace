import React from "react";
import { HiOutlineMail } from "react-icons/hi";
import { MdOutlineHttp, MdOutlineContentCopy,MdOutlineFileUpload } from "react-icons/md";
import {
  TiSocialFacebook,
  TiSocialLinkedin,
  TiSocialTwitter,
  TiSocialInstagram,
} from "react-icons/ti";

import Styles from "./Form.module.css";
import { Button } from "@/components/componentsindex";
const Form = () => {
    
  return (
    <div className={Styles.form}>
      <div className={Styles.form_box}>
        <form>
          <div className={Styles.form_box_input}>
            <label htmlFor="name">Username</label>
            <input
              type="text"
              placeholder="Duy Ngo"
              className={Styles.form_box_input_userName}
            />
          </div>
          <div className={Styles.form_box_input}>
            <label htmlFor="email">Email</label>
            <div className={Styles.form_box_input_box}>
              <HiOutlineMail className={Styles.form_box_input_icon} />
              <input
                type="email"
                placeholder="DuyNgo@gmail.com"
                className={Styles.form_box_input_email}
              />
            </div>
          </div>
          <div className={Styles.form_box_input}>
            <label htmlFor="description">Description</label>
            <textarea
              cols={30}
              rows={6}
              placeholder="Write your description"
              className={Styles.form_box_input_description}
            ></textarea>
          </div>
          <div className={Styles.form_box_input}>
            <label htmlFor="website">Website</label>
            <div className={Styles.form_box_input_box}>
              <div className={Styles.form_box_input_box_icon}>
                <MdOutlineHttp />
              </div>
              <input type="text" placeholder="www.example.com" />
            </div>
          </div>
          <div className={Styles.form_box_input_social}>
            <div className={Styles.form_box_input}>
              <label htmlFor="facebook">Facebook</label>
              <div className={Styles.form_box_input_box}>
                <div className={Styles.form_box_input_box_icon}>
                  <TiSocialFacebook />
                </div>
                <input type="text" placeholder="https://www.facebook.com/" />
              </div>
            </div>
            <div className={Styles.form_box_input}>
              <label htmlFor="linkedin">Linkedin</label>
              <div className={Styles.form_box_input_box}>
                <div className={Styles.form_box_input_box_icon}>
                  <TiSocialLinkedin />
                </div>
                <input type="text" placeholder="https://www.linkedin.com/" />
              </div>
            </div>
            <div className={Styles.form_box_input}>
              <label htmlFor="twitter">Twitter</label>
              <div className={Styles.form_box_input_box}>
                <div className={Styles.form_box_input_box_icon}>
                  <TiSocialTwitter />
                </div>
                <input type="text" placeholder="https://www.twitter.com/" />
              </div>
            </div>
            <div className={Styles.form_box_input}>
              <label htmlFor="instagram">Instagram</label>
              <div className={Styles.form_box_input_box}>
                <div className={Styles.form_box_input_box_icon}>
                  <TiSocialInstagram />
                </div>
                <input type="text" placeholder="https://www.instagram.com/" />
              </div>
            </div>
          </div>
          <div className={Styles.form_box_input}>
            <label htmlFor="wallet">Wallet address</label>
            <div className={Styles.form_box_input_box}>
              <div className={Styles.form_box_input_box_icon}>
                <MdOutlineHttp />
              </div>
              <input type="text" placeholder="0xJHDF7DSFDGF67BDHJ0BSJDH543G" />
              <div className={Styles.form_box_input_box_icon}>
                <MdOutlineContentCopy />
              </div>
            </div>
          </div>
          <div className={Styles.form_box_button}>
            <Button btnName="Upload Profile" handleClick={() => {}} icon={<MdOutlineFileUpload />} />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
