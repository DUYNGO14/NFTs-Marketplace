import React from "react";
import Image from "next/image";
import images from "../../img";
import Style from "./Service.module.css";

const services = [
  {
    img: images.service1,
    step: "Step 1",
    title: "Filter & Discover",
    desc: "Find NFTs that match your taste using our advanced filters.",
  },
  {
    img: images.service2,
    step: "Step 2",
    title: "Connect Wallet",
    desc: "Securely connect your crypto wallet to start trading NFTs.",
  },
  {
    img: images.service3,
    step: "Step 3",
    title: "Start Trading",
    desc: "Buy, sell, and collect NFTs in just a few clicks.",
  },
  {
    img: images.service4,
    step: "Step 4",
    title: "Enjoy Benefits",
    desc: "Access exclusive perks and grow your NFT collection.",
  },
];

const Service = () => {
  return (
    <div className={Style.service}>
      <div className={Style.service_box}>
        {services.map((item, index) => (
          <div className={Style.service_box_item} key={index}>
            <Image src={item.img} alt={item.title} width={100} height={100} />
            <p className={Style.service_box_item_step}>
              <span>{item.step}</span>
            </p>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;