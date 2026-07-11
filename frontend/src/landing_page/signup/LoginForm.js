import React, { useState } from "react";
import axios from "axios";
// import { useNavigate } from "react-router-dom";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:3002/auth/login",
        // "http://localhost:3002/login",
        {
          email,
          password,
        }
      );

      console.log("Response from backend:", res.data);

      // localStorage.setItem("token", res.data.token);
      // localStorage.setItem("user", JSON.stringify(res.data.user));

      console.log("Token after saving:", localStorage.getItem("token"));

      alert("Login Successful!");

      // window.location.href = "http://localhost:3001";
      // window.location.href =`http://localhost:3001/?token=${token}`;
  //     window.location.href =
  // `http://localhost:3001/?token=${response.data.token}`;
  const token = res.data.token;

localStorage.setItem("token", token);
localStorage.setItem("user", JSON.stringify(res.data.user));

// window.location.href = `http://localhost:3001/?token=${token}`;
const user = encodeURIComponent(JSON.stringify(res.data.user));

window.location.href =
  `http://localhost:3001/?token=${res.data.token}&user=${user}`;
      // window.location.href = "/dashboard";
      // navigate("/dashboard");


      // localStorage.setItem("token", res.data.token);

      // alert("Login Successful!");

      // window.location.href = "http://localhost:3001";
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