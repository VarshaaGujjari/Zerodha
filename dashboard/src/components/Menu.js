import React, { useState } from "react";

import { Link , useNavigate } from "react-router-dom";

const Menu = () => {

  const navigate = useNavigate();


  const [selectedMenu, setSelectedMenu] = useState(0);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

  const handleMenuClick = (index) => {
    setSelectedMenu(index);
  };

  const handleProfileClick = (index) => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };

  const handleLogout = () => {
  localStorage.removeItem("token");
  // window.location.href = "https://zerodha-ky1a.onrender.com/signup";
  window.location.href = "https://zerodha-kite-idll.onrender.com/signup";
};

  const menuClass = "menu";
  const activeMenuClass = "menu selected";
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="menu-container">
      <img src="logo.png" style={{ width: "50px" }} />
      <div className="menus">
        <ul>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/"
              onClick={() => handleMenuClick(0)}
            >
              <p className={selectedMenu === 0 ? activeMenuClass : menuClass}>
                Dashboard
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/orders"
              onClick={() => handleMenuClick(1)}
            >
              <p className={selectedMenu === 1 ? activeMenuClass : menuClass}>
                Orders
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/holdings"
              onClick={() => handleMenuClick(2)}
            >
              <p className={selectedMenu === 2 ? activeMenuClass : menuClass}>
                Holdings
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/positions"
              onClick={() => handleMenuClick(3)}
            >
              <p className={selectedMenu === 3 ? activeMenuClass : menuClass}>
                Positions
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="funds"
              onClick={() => handleMenuClick(4)}
            >
              <p className={selectedMenu === 4 ? activeMenuClass : menuClass}>
                Funds
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/apps"
              onClick={() => handleMenuClick(6)}
            >
              <p className={selectedMenu === 6 ? activeMenuClass : menuClass}>
                Apps
              </p>
            </Link>
          </li>
        </ul>
        <hr />

        <div className="profile">

          <div
            className="profile-header"
            onClick={handleProfileClick}
          >
            <div className="avatar">ZU</div>
            <p className="username">{user ? user.name : "User"}</p>
          </div>

  {isProfileDropdownOpen && (

    <div className="profile-menu">

      <button>
        Profile
      </button>

      <button>
        Settings
      </button>

      <button onClick={handleLogout}>
        Logout
      </button>

    </div>

  )}

</div>
      </div>
    </div>
  );
};

export default Menu;