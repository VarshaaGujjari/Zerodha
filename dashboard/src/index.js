import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import Home from "./components/Home";

const root = ReactDOM.createRoot(document.getElementById("root"));
const params = new URLSearchParams(window.location.search);

const token = params.get("token");
const user = params.get("user");

if (token) {
  localStorage.setItem("token", token);
}

if (user) {
  localStorage.setItem("user", decodeURIComponent(user));
}

if (token || user) {
  window.history.replaceState(
    {},
    document.title,
    window.location.pathname
  );
}
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);