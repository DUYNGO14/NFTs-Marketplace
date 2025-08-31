// // lib/pinata.js
// import { PinataSDK } from "pinata";

// export const pinata = new PinataSDK({
//   pinataJwt: process.env.NEXT_PUBLIC_PINATA_JWT,   // JWT lấy từ Pinata
//   pinataGateway: process.env.NEXT_PUBLIC_GATEWAY_URL || "https://gateway.pinata.cloud"
// });
// utils/pinata.config.js
export const PINATA_JWT = process.env.NEXT_PUBLIC_PINATA_JWT;
export const PINATA_GATEWAY = process.env.NEXT_PUBLIC_GATEWAY_URL || "https://gateway.pinata.cloud";
