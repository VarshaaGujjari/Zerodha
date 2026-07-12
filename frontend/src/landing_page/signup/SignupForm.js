

import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function SignupForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
    await axios.post(
      // "http://localhost:3002/auth/register",
      "https://zerodha-ky1a.onrender.com/auth/register",
      { name, email, password });
    alert("Signup Successful! Please log in.");
    // window.location.href = "/Signup"; 
    navigate("/signup");
    // back to the auth page, now showing login
  } catch (err) {
    alert(err.response?.data?.message || "Signup Failed");
  }


  };

  return (
    <form onSubmit={handleSignup} className="auth-form">

      <input
        type="text"
        placeholder="Enter Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />

      <input
        type="email"
        placeholder="Enter Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <input
        type="password"
        placeholder="Enter Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />

      <button type="submit">
        Sign Up
      </button>

    </form>
  );
}

export default SignupForm;


