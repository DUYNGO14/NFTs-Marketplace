"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { ethers } from "ethers";
import axios from "axios";

import { contractAddress, contractABI } from "../contract/contractData.js";
import { resolveIPFS, uploadJSONToIPFS } from "../helper/ipfs";

// AppKit hooks
import { useAppKitAccount, useAppKitProvider } from "@reown/appkit/react";

// ================== CONTEXT ==================
export const NFTMarketplaceContext = createContext();

export const NFTMarketplaceProvider = ({ children }) => {
  const titleData = "Discover, collect, and sell NFTs";

  // Wallet từ AppKit
  const { address, isConnected } = useAppKitAccount();
  const { walletProvider } = useAppKitProvider("eip155");

  // State signer & contract
  const [signer, setSigner] = useState(null);
  const [contract, setContract] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // ================== SETUP PROVIDER & CONTRACT ==================
  useEffect(() => {
    const setup = async () => {
      if (walletProvider && isConnected) {
        try {
          const ethersProvider = new ethers.BrowserProvider(walletProvider);
          const s = await ethersProvider.getSigner();
          setSigner(s);

          const c = new ethers.Contract(contractAddress, contractABI, s);
          setContract(c);
        } catch (err) {
          setError(err.message || "❌ Lỗi khởi tạo contract");
        }
      } else {
        setSigner(null);
        setContract(null);
      }
    };
    setup();
  }, [walletProvider, isConnected]);

  // ================== CREATE SALE & NFT ==================
  const createSale = async ({ tokenURI, priceEther, isReselling = false, tokenId = null }) => {
    if (!contract) throw new Error("❌ Contract chưa sẵn sàng");

    try {
      const price = ethers.parseUnits(priceEther.toString(), "ether");

      // Lấy listingFee (nếu contract có feePercent)
      let listingFee = 0n;
      try {
        listingFee = await contract.feePercent();
      } catch {
        listingFee = 0n;
      }

      const tx = isReselling
        ? await contract.reSellToken(tokenId, price)
        : await contract.createToken(tokenURI, price);

      const receipt = await tx.wait();
      return { hash: tx.hash, receipt };
    } catch (err) {
      setError(err.message || "❌ createSale error");
      throw err;
    }
  };

  const createNFT = async (formData) => {
    setLoading(true);
    setError(null);
    try {
      const { name, description, price, image, category } = formData;
      if (!name || !description || !price || !image || !category)
        throw new Error("⚠️ Vui lòng điền đủ thông tin");

      const metadata = { name, description, image, category, attributes: [] };
      const { ipfsURI, url } = await uploadJSONToIPFS(metadata);

      const priceEther = ethers.parseUnits(price.toString(), "ether");
      const tx = await contract.createToken(ipfsURI, priceEther);
      const receipt = await tx.wait();

      return { ipfsURI, metadataUrl: url, txHash: tx.hash, receipt };
    } catch (err) {
      setError(err.message || "❌ createNFT error");
      throw err;
    } finally {
      setLoading(false);
    }
  };

  // ================== HELPER PARSE NFT ITEM ==================
  const parseNFTItem = async (i) => {
    const tokenId = Number(i.tokenId);
    const price = ethers.formatEther(i.price);

    const tokenURI = await contract.tokenURI(tokenId);
    const tokenuri = resolveIPFS(tokenURI);
    const res = await axios.get(tokenuri);
    const meta = res.data;

    return {
      tokenId,
      seller: i.seller,
      owner: i.owner,
      price,
      sold: i.sold,
      tokenURI,
      image: meta.image,
      name: meta.name,
      description: meta.description,
    };
  };

  // ================== FETCH NFTS ==================
  const fetchNFTs = async () => {
    if (!contract) throw new Error("❌ Contract chưa sẵn sàng");
    setLoading(true);
    setError(null);
    try {
      const data = await contract.fetchMarketItems();
      const items = await Promise.all(data.map(parseNFTItem));
      return items;
    } catch (err) {
      setError(err.message || "❌ fetchNFTs error");
      return [];
    } finally {
      setLoading(false);
    }
  };

  const fetchMyNFTsOrListedNFT = async (type = "fetchMyNFTs") => {
    if (!contract) throw new Error("❌ Contract chưa sẵn sàng");
    setLoading(true);
    setError(null);
    try {
      const data =
        type === "fetchItemsListed"
          ? await contract.fetchItemsListed()
          : await contract.fetchMyNFTs();

      const items = await Promise.all(data.map(parseNFTItem));
      return items;
    } catch (err) {
      setError(err.message || "❌ fetchMyNFTsOrListedNFT error");
      return [];
    } finally {
      setLoading(false);
    }
  };

  // ================== BUY NFT ==================
  const buyNFTS = async (nft) => {
    if (!contract) throw new Error("❌ Contract chưa sẵn sàng");
    setLoading(true);
    setError(null);
    try {
      const price = ethers.parseUnits(nft.price.toString(), "ether");
      const tx = await contract.createMarketSale(nft.tokenId, { value: price });
      const receipt = await tx.wait();
      return { hash: tx.hash, receipt };
    } catch (err) {
      setError(err.message || "❌ buyNFTS error");
      throw err;
    } finally {
      setLoading(false);
    }
  };

  // ================== CONTEXT VALUE ==================
  return (
    <NFTMarketplaceContext.Provider
      value={{
        titleData,
        address,
        isConnected,
        signer,
        contract,
        createSale,
        createNFT,
        fetchNFTs,
        fetchMyNFTsOrListedNFT,
        buyNFTS,
        loading,
        error, // ✅ expose error ra ngoài
        setError,
      }}
    >
      {children}
    </NFTMarketplaceContext.Provider>
  );
};

