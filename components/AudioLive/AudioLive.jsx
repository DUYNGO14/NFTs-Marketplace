import React from "react";
import Styles from "./AudioLive.module.css";
import AudioCard from "./AudioCard/AudioCard";
import AudioCardSmall from "./AudioCardSmall/AudioCardSmall";
import images from "../../img";
const AudioLive = () => {
    const audio = [images.creatorbackground1,images.creatorbackground6]
    const audioSmall =[images.creatorbackground11,images.creatorbackground10,images.creatorbackground7]
  return <div className={Styles.audioLive}>
    <div className={Styles.audioLive_box}>
        <div className={Styles.audioLive_box_left}>
           {
               audio.map((item,i)=>(<AudioCard key={i} item={item}/>))
           }
        </div>
        <div className={Styles.audioLive_box_right}>
            {audioSmall.map((item,i)=>(<AudioCardSmall key={i} item={item}/>))}
        </div>
    </div>
    </div>;
};

export default AudioLive;
