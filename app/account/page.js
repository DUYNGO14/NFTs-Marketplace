"use client";
import React, { useState, useCallback, useEffect } from "react";
import Image from "next/image";
import { useDropzone } from "react-dropzone";
import Styles from "./account.module.css";
import images from "../../img";
import { Form } from "@/AccountPage";

const Account = () => {
  const [fileUrl, setFileUrl] = useState(null);

  // Xử lý drop file
  const onDrop = useCallback((acceptedFiles) => {
    const file = acceptedFiles[0];
    if (file) {
      setFileUrl(Object.assign(file, { preview: URL.createObjectURL(file) }));
    }
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: { "image/*": [] },
    maxFiles: 1,
    maxSize: 5 * 1024 * 1024, // 5MB
  });

  // cleanup preview url khi component unmount
  useEffect(() => {
    return () => {
      if (fileUrl?.preview) {
        URL.revokeObjectURL(fileUrl.preview);
      }
    };
  }, [fileUrl]);

  return (
    <div className={Styles.account}>
      <div className={Styles.account_info}>
        <h1>Profile Settings</h1>
        <p>
          You can set preferred display name, create your profile URL and manage
          other personal settings.
        </p>
      </div>

      <div className={Styles.account_box}>
        {/* Upload avatar */}
        <div className={Styles.account_box_img} {...getRootProps()}>
          <input {...getInputProps()} />
          <Image
            src={fileUrl?.preview || images.user1}
            alt="profile image"
            width={150}
            height={150}
            className={Styles.account_box_img_img}
          />
          <p className={Styles.account_box_img_change}>Change Image</p>
        </div>

        {/* Form profile */}
        <div className={Styles.account_box_form}>
          <Form />
        </div>
      </div>
    </div>
  );
};

export default Account;
