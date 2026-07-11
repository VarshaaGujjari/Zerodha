import React, { useState } from "react";
import axios from "axios";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:3002/auth/login",
        {
          email,
          password,
        }
      );

      console.log("Response from backend:", res.data);

      console.log("Token after saving:", localStorage.getItem("token"));

      alert("Login Successful!");
  const token = res.data.token;

localStorage.setItem("token", token);
localStorage.setItem("user", JSON.stringify(res.data.user));

const user = encodeURIComponent(JSON.stringify(res.data.user));

window.location.href =
  `http://localhost:3001/?token=${res.data.token}&user=${user}`;
  
    } catch (err) {
      console.log(err);

      alert(
        err.response?.data?.message ||
          "Invalid Email or Password"
      );
    }
  };

  return (
    <form onSubmit={handleLogin} className="auth-form">

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
        Login
      </button>

    </form>
  );
}

export default LoginForm;