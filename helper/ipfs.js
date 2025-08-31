import { PINATA_JWT, PINATA_GATEWAY } from "@/utils/pinata.config";

export const resolveIPFS = (uri) => {
  if (!uri) return null;
  if (uri.startsWith("ipfs://")) {
    // Chuyển ipfs://Qm... => https://gateway.pinata.cloud/ipfs/Qm...
    return uri.replace("ipfs://", PINATA_GATEWAY + "/ipfs/");
  }
  return uri; // nếu đã là https
};
// Upload file trực tiếp lên Pinata
export const uploadFileToIPFS = async (file) => {
  try {
    const formData = new FormData();
    formData.append("file", file);

    const res = await fetch("https://api.pinata.cloud/pinning/pinFileToIPFS", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${PINATA_JWT}`, // dùng JWT
      },
      body: formData,
    });

    if (!res.ok) throw new Error("Upload file failed!");

    const data = await res.json();
    const cid = data.IpfsHash;

    return {
      name: file.name,
      cid,
      url: `${PINATA_GATEWAY}/ipfs/${cid}`,
      ipfsURI: `ipfs://${cid}`,
    };
  } catch (err) {
    console.error("🚨 Error uploading file:", err);
    throw err;
  }
};

// Upload JSON (metadata NFT)
export const uploadJSONToIPFS = async (obj) => {
  try {
    const res = await fetch("https://api.pinata.cloud/pinning/pinJSONToIPFS", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${PINATA_JWT}`,
      },
      body: JSON.stringify(obj),
    });

    if (!res.ok) throw new Error("Upload JSON failed!");

    const data = await res.json();
    const cid = data.IpfsHash;

    return {
      cid,
      url: `${PINATA_GATEWAY}/ipfs/${cid}`,
      ipfsURI: `ipfs://${cid}`,
    };
  } catch (err) {
    console.error("🚨 Error uploading JSON:", err);
    throw err;
  }
};
