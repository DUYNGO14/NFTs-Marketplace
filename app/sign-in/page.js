"use client";
import React, { useState } from "react";
import Styles from "../sign-up/SignUp.module.css";
import { FaFacebook, FaG, FaGoogle } from "react-icons/fa6";

const SignInPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("SignIn data:", formData);
    // TODO: gọi API signin ở đây
  };

  const handleFacebookLogin = () => {
    // Redirect sang backend OAuth Facebook
    // window.location.href = "http://localhost:5000/auth/facebook";
    console.log("Facebook login");
    // sau khi login xong backend sẽ redirect về FE với token
  };

  return (
    <div className={Styles.container}>
      <h2 className={Styles.title}>Sign In</h2>
      <form onSubmit={handleSubmit} className={Styles.form}>
        <input
          type="email"
          name="email"
          placeholder="Email address"
          value={formData.email}
          onChange={handleChange}
          required
          className={Styles.input}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
          className={Styles.input}
        />
        <button type="submit" className={Styles.button}>Sign In</button>
      </form>
       <div className={Styles.divider}>OR</div>

      <button onClick={handleFacebookLogin} className={Styles.fbButton}>
        <FaFacebook className={Styles.fbIcon} /> Sign in with Facebook
      </button>
      <button onClick={handleFacebookLogin} className={Styles.fbButton}>
        <FaGoogle className={Styles.fbIcon} /> Sign in with Google  
      </button>
      <p className={Styles.link}>
        Don’t have an account? <a href="/sign-up">Sign Up</a>
      </p>
    </div>
  );
};

export default SignInPage;
