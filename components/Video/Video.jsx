import React from 'react'
import Image from 'next/image'
import images from '../../img'
import Style from './Video.module.css'
const Video = () => {
  return (
    <div className={Style.video}>
        <div className={Style.video_box}>
            <h1>
                <span>🎬</span> The Videos
            </h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, quae.adipisicing elit. Quos, quae.
            </p>
            <div className={Style.video_box_frame}>
                <div className={Style.video_box_frame_left}>
                    <Image src={images.NftVideo} alt="video" width={1920} height={1080} objectFit='cover' className={Style.video_box_frame_left_img} />
                </div>
                <div className={Style.video_box_frame_right}>
                    Hey
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Video
