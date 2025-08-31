"use client";
import React, { useContext, useEffect, useState } from "react";
import Styles from "./Resell.module.css";
import Image from "next/image";
import { AiOutlineReload } from "react-icons/ai";
import { NFTMarketplaceContext } from "@/context/NFTMarketplaceContext";
import { useRouter, useSearchParams } from "next/navigation";
import axios from "axios";
import { resolveIPFS } from "@/helper/ipfs";
import { Button } from "@/components/componentsindex";

const ResellPage = () => {
  const { createSale, contract } = useContext(NFTMarketplaceContext);
  const [price, setPrice] = useState("");
  const [nft, setNft] = useState(null); // khởi tạo null thay vì undefined
  const searchParams = useSearchParams();
  const router = useRouter();

  const id = searchParams.get("id");
  const tokenURI = searchParams.get("tokenURI");

  const fetchNFT = async () => {
    if (!tokenURI) return;
    try {
      const tokenuri = await resolveIPFS(tokenURI);
      const res = await axios.get(tokenuri);
      setNft(res.data);
    } catch (err) {
      console.error("Lỗi fetch NFT:", err);
    }
  };

  useEffect(() => {
    fetchNFT();
  }, [id, tokenURI]);

  const handleResell = async () => {
  if (!contract) return;
  if (!price || Number(price) <= 0) {
    alert("Please enter a valid price");
    return;
  }
  try {
    await createSale({
      tokenURI,
      priceEther: price,
      isReselling: true,
      tokenId: id,
    });
    router.push("/author-profile");
    alert("Resell successfully");
  } catch (err) {
    console.error("Resell error:", err);
  }
};


  return (
    <div className={Styles.resell}>
      <div className={Styles.resell_box}>
        {/* Chỉ render nếu nft đã load */}
        {nft ? (
          <>
            {/* Thông tin NFT */}
            <div className={Styles.resell_box_left}>
              <Image
                src={resolveIPFS(nft.image) || ""}
                alt="NFT"
                width={400}
                height={400}
                className={Styles.resell_box_img}
              />
            </div>

            {/* Form nhập giá */}
            <div className={Styles.resell_box_right}>
              <h2>Resell NFT</h2>
              <div className={Styles.resell_box_right_info}>
                <p>
                  <strong>Name:</strong> {nft.name}
                </p>
                <p>
                  <strong>Description:</strong> {nft.description}
                </p>
                <p>
                  <strong>Token ID:</strong> #{id}
                </p>
              </div>

              <div className={Styles.resell_box_right_input}>
                <label htmlFor="price">Price resell (ETH)</label>
                <input
                  type="number"
                  id="price"
                  placeholder="Enter price"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
              </div>

              <Button
                btnName="Resell"
                handleClick={handleResell}
                icon={<AiOutlineReload />}
              />
            </div>
          </>
        ) : (
          <p>Loading NFT...</p>
        )}
      </div>
    </div>
  );
};

export default ResellPage;
