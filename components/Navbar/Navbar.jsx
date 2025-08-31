"use client";
import { useState, useEffect, useRef, useContext } from "react";
import Image from "next/image";
import { MdNotifications } from "react-icons/md";
import { BsSearch } from "react-icons/bs";
import { CgMenuLeft, CgMenuRight } from "react-icons/cg";

import Style from "./Navbar.module.css";
import { Discover, HelpCenter, Notification, Profile, SideBar } from "./index";
import { Button, Error } from "../componentsindex";
import images from "../../img";
import Link from "next/link";
import { useAppKit, useAppKitAccount } from "@reown/appkit/react";
import { useShortAddress } from "@/hook/useShortAddress";
import { useRouter } from "next/navigation";
import { NFTMarketplaceContext } from "@/context/NFTMarketplaceContext";

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(null); // "discover" | "help" | "notification" | "profile" | null
  const [openSideMenu, setOpenSideMenu] = useState(false);
  const { open } = useAppKit();
  const {isConnected } = useAppKitAccount();
  const menuRef = useRef(null);
  const router = useRouter();
  const { error} = useContext(NFTMarketplaceContext);
  const handleConnectWallet = () => {
    open();
  };
  // Đóng dropdown khi click outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setActiveMenu(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleMenu = (menu) => {
    setActiveMenu((prev) => (prev === menu ? null : menu));
  };

  return (
    <div className={Style.navbar}>
      <div className={Style.navbar_container}>
        {/* LEFT */}
        <div className={Style.navbar_container_left}>
          <div className={Style.logo}>
            <Link href="/" passHref>
              <Image
                src={images.logo}
                alt="logo"
                width={100}
                height={100}
                priority
                style={{ cursor: "pointer" }}
              />
            </Link>
          </div>
          <div className={Style.navbar_container_left_box_input}>
            <div className={Style.navbar_container_left_box_input_box}>
              <input type="text" placeholder="Search NFTs" />
              <BsSearch className={Style.search_icon} />
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className={Style.navbar_container_right} ref={menuRef}>
          {/* Discover */}
          <div className={Style.navbar_container_right_discover}>
            <p onClick={() => toggleMenu("discover")}>Discover</p>
            {activeMenu === "discover" && (
              <div className={Style.navbar_container_right_discover_box}>
                <Discover />
              </div>
            )}
          </div>

          {/* Help */}
          <div className={Style.navbar_container_right_help}>
            <p onClick={() => toggleMenu("help")}>Help</p>
            {activeMenu === "help" && (
              <div className={Style.navbar_container_right_help_box}>
                <HelpCenter />
              </div>
            )}
          </div>

          {/* Notification */}
          <div className={Style.navbar_container_right_notification}>
            <MdNotifications
              onClick={() => toggleMenu("notification")}
              className={Style.notify}
            />
            {activeMenu === "notification" && <Notification />}
          </div>

          {/* Create button */}
          <div className={Style.navbar_container_right_button}>
            {isConnected ? (
              // <Button btnName={shortAddress} handleClick={() => handleConnectWallet()} />
              <Button
                btnName="Create"
                handleClick={() => router.push("/create-nft")}
              />
            ) : (
              <Button
                btnName="Connect Wallet"
                handleClick={() => handleConnectWallet()}
              />
            )}
          </div>

          {/* Profile */}
          <div className={Style.navbar_container_right_profile_box}>
            <Image
              src={images.user1}
              alt="profile"
              width={40}
              height={40}
              onClick={() => toggleMenu("profile")}
              className={Style.navbar_container_right_profile}
            />
            {activeMenu === "profile" && <Profile toggleMenu={toggleMenu} />}
          </div>

          {/* Sidebar toggle */}
          <div className={Style.navbar_container_right_menuBtn}>
            {openSideMenu ? (
              <CgMenuRight
                className={Style.menuIcon}
                onClick={() => setOpenSideMenu(false)}
              />
            ) : (
              <CgMenuLeft
                className={Style.menuIcon}
                onClick={() => setOpenSideMenu(true)}
              />
            )}
          </div>
        </div>
      </div>

      {/* SIDEBAR */}
      {openSideMenu && (
        <div className={Style.sideBar}>
          <SideBar setOpenSideMenu={setOpenSideMenu} />
        </div>
      )}
      {error && <Error />}
    </div>
  );
};

export default Navbar;