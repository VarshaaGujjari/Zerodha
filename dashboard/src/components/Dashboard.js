
import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";

import Apps from "./Apps";
import Funds from "./Funds";
import Holdings from "./Holdings";

import Orders from "./Orders";
import Positions from "./Positions";
import Summary from "./Summary";
import WatchList from "./WatchList";
import { GeneralContextProvider } from "./GeneralContext";


const Dashboard = () => {

  // useEffect(() => {
  //   const params = new URLSearchParams(window.location.search);
  //   const token = params.get("token");
  //   const user = params.get("user");

  //   if (token) {
  //       localStorage.setItem("token", token);

  //       // Remove only the query string
  //       window.history.replaceState(
  //           {},
  //           document.title,
  //           window.location.pathname
  //       );
  //     }

  //     if (user) {
  //         localStorage.setItem(
  //             "user",
  //             decodeURIComponent(user)
  //         );
  //     }
  // }, []);

  return (
    <div className="dashboard-container">
      <GeneralContextProvider>
        <WatchList />
      </GeneralContextProvider>
      <div className="content">
        <Routes>
          <Route exact path="/" element={<Summary />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/holdings" element={<Holdings />} />
          <Route path="/positions" element={<Positions />} />
          <Route path="/funds" element={<Funds />} />
          <Route path="/apps" element={<Apps />} />
        </Routes>
      </div>
    </div>
  );
};

export default Dashboard;