import React from "react";
import Link from "next/link";
import Style from "./Discover.module.css";
const Discover = () => {
  const discover = [
    { name: "Collection", link: "/collection" },
    { name: "Search", link: "/search" },
    { name: "Author Profile", link: "/author-profile" },
    { name: "NFT Details", link: "/nft-details" },
    { name: "Account Setting", link: "/account" },
    { name: "Connect Wallet", link: "/connect-wallet" },
    { name: "Create NFT", link: "/create-nft" },
    { name: "Blog", link: "/blog" },
  ];
  return (
    <div>
      {discover.map((item, index) => (
        <div key={index} className={Style.discover}>
          <Link href={{ pathname: `${item.link}`}}>{item.name}</Link>
        </div>
      ))}
    </div>
  );
};

export default Discover;
