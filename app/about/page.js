"use client";
import React from "react";
import Styles from "./About.module.css";
import Image from "next/image";
import images from "../../img";

const AboutPage = () => {
    const founderArray =[
        {
            img: images.founder1,
            name: "Anna Doe",
            position:"Co-Founder and Chief Executive Officer"
        },
        {
            img: images.founder2,
            name: "John Smith",
            position:"Co-Founder and Chief Operating Officer"
        },
        {
            img: images.founder3,
            name: "Michael Lee",
            position:"Co-Founder, Chief Financial Officer"
        },
        {
            img: images.founder4,
            name: "Emily Davis",
            position:"Co-Founder and Chief Marketing Officer"
        },
    ]
  return (
    <div className={Styles.about}>
      
      {/* ABOUT US */}
      <section className={Styles.section1}>
        <div className={Styles.text}>
          <h2>👋 About Us.</h2>
          <p>
            We’re impartial and independent, and every day we create distinctive,
            world-class programmes and content which inform, educate and entertain
            millions of people around the world.
          </p>
        </div>
        <div className={Styles.images}>
          <Image src={images.hero2} alt="about 1" />
        </div>
      </section>

      {/* FOUNDER */}
      <section className={Styles.section}>
        <div className={Styles.text}>
          <h2>🌴 Founder</h2>
          <p>
            We’re impartial and independent, and every day we create distinctive,
            world-class programmes and content.
          </p>
        </div>
        <div className={Styles.founders}>
          <div className={Styles.card}>
            <Image src={images.founder3} alt="founder 1" />
            <h4>Anna Doe</h4>
          </div>
          <div className={Styles.card}>
            <Image src={images.founder2} alt="founder 2" />
            <h4>John Smith</h4>
          </div>
          <div className={Styles.card}>
            <Image src={images.founder3} alt="founder 3" />
            <h4>Michael Lee</h4>
          </div>
          <div className={Styles.card}>
            <Image src={images.founder2} alt="founder 4" />
            <h4>Sophia Brown</h4>
          </div>
        </div>
      </section>

      {/* FAST FACTS */}
      <section className={Styles.section}>
        <div className={Styles.text}>
          <h2>🚀 Fast Facts</h2>
          <p>
            We’re impartial and independent, and every day we create distinctive,
            world-class programmes and content.
          </p>
        </div>
        <div className={Styles.stats}>
          <div className={Styles.statBox}>
            <h3>10 million</h3>
            <p>Articles have been published around the world (as of Sept. 30, 2021)</p>
          </div>
          <div className={Styles.statBox}>
            <h3>100,000</h3>
            <p>Registered user accounts (as of Sept. 30, 2021)</p>
          </div>
          <div className={Styles.statBox}>
            <h3>220+</h3>
            <p>Countries and regions have our presence (as of Sept. 30, 2021)</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
