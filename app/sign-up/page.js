"use client";
import React, { useState } from "react";
import Styles from "./SignUp.module.css";
import { FaFacebook } from "react-icons/fa6";

const SignUpPage = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("SignUp data:", formData);
    // TODO: gọi API signup ở đây
  };

  const handleFacebookLogin = () => {
    // Redirect sang backend OAuth Facebook
    // window.location.href = "http://localhost:5000/auth/facebook";
    console.log("Facebook login");
    // sau khi login xong backend sẽ redirect về FE với token
  };


  return (
    <div className={Styles.container}>
      <h2 className={Styles.title}>Create Account</h2>
      <form onSubmit={handleSubmit} className={Styles.form}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
          required
          className={Styles.input}
        />
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
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm password"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
          className={Styles.input}
        />
        <button type="submit" className={Styles.button}>
          Sign Up
        </button>
      </form>
      <div className={Styles.divider}>OR</div>

      <button onClick={handleFacebookLogin} className={Styles.fbButton}>
        <FaFacebook className={Styles.fbIcon} /> Sign in with Facebook
      </button>
      <p className={Styles.link}>
        Already have an account? <a href="/sign-in">Sign In</a>
      </p>
    </div>
  );
};

export default SignUpPage;
