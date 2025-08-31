'use client';
import React from 'react'
import Image from 'next/image'
import images from '../../img'
import Style from "./Brand.module.css"
import { Button } from "../componentsindex";
const Brand = () => {
  return (
    <div className={Style.brand}>
        <div className={Style.brand_box}>
            <div className={Style.brand_box_left}>
                <Image src={images.logo} alt="brand" width={500} height={500} className={Style.brand_box_left_img} />
                <h1>Earn free crypto with Ciscrypt</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, quae.</p>
                <div className={Style.brand_box_left_btn}>
                    <Button btnName={"Create"} handleClick={() => {}} />
                    <Button btnName={"Discover"} handleClick={() => {}} />
                </div>
            </div>
            <div className={Style.brand_box_right}>
                <Image src={images.eran} alt="brand" width={800} height={600} className={Style.brand_box_right_img} />
            </div>
        </div>
      
    </div>
  )
}

export default Brand
