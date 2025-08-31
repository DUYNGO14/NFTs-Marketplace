import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaUserAlt, FaRegImage, FaUserEdit } from "react-icons/fa";
import { MdHelpCenter } from "react-icons/md";
import { TbDownloadOff, TbDownload } from "react-icons/tb";
import images from "../../../img";
import Style from "./Profile.module.css";
import { useAppKit, useAppKitAccount } from "@reown/appkit/react";
import { useShortAddress } from "@/hook/useShortAddress";
const Profile = ({toggleMenu}) => {
  const {address,name} = useAppKitAccount();
    const { open } = useAppKit();

  return (
    <div className={Style.profile}>
      <div className={Style.profile_account}>
        <Image
          src={images.user1}
          alt="profile image"
          width={50}
          height={50}
          className={Style.profile_account_img}
        />
        <div className={Style.profile_account_info}>
          <p>{name || "User"}</p>
          <small>{useShortAddress(address)}</small>
        </div>
      </div>
      <div className={Style.profile_menu}>
        <div className={Style.profile_menu_one}>
          <div className={Style.profile_menu_one_item}>
            <FaUserAlt />
            <p>
              <Link href={{ pathname: "/author-profile" }}>My Profile</Link>
            </p>
          </div>
          <div className={Style.profile_menu_one_item}>
            <FaRegImage />
            <p>
              <Link href={{ pathname: "/my-items" }}>My Items</Link>
            </p>
          </div>
          <div className={Style.profile_menu_one_item}>
            <FaUserEdit />
            <p>
              <Link href={{ pathname: "/account" }}>Edit Profile</Link>
            </p>
          </div>
        </div>

        <div className={Style.profile_menu_two}>
          <div className={Style.profile_menu_one_item}>
            <MdHelpCenter />
            <p>
              <Link href={{ pathname: "/help" }}>Help</Link>
            </p>
          </div>
          <div className={Style.profile_menu_one_item} onClick={()=>{{open();toggleMenu(null);}}}>
            <TbDownload />
            <p>
              Wallet
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
