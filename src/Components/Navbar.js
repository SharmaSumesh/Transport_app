import React, { useState } from "react";
import "./styles/Navbar.css"; 
import { Link } from "react-router-dom";

const Navbar = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (index) => {
    setActiveTab(index);
    const activeWidthNewAnimWidth = document.getElementById(`tab-${index}`).offsetWidth;
    const itemPosNewAnimLeft = document.getElementById(`tab-${index}`).offsetLeft;

    document.getElementById("hori-selector").style.left = `${itemPosNewAnimLeft}px`;
    document.getElementById("hori-selector").style.width = `${activeWidthNewAnimWidth}px`;
  };

  return (
    <div>
      <div id="navbar-animmenu">
        <ul className="show-dropdown main-navbar">
          <div className="hori-selector" id="hori-selector">
            <div className="left"></div>
            <div className="right"></div>
          </div>
          <li
            id="tab-1"
            className={activeTab === 1 ? "active" : ""}
            onClick={() => handleTabClick(1)}
          >
            <Link to="/">Login</Link>
          </li>
          <li
            id="tab-2"
            className={activeTab === 2 ? "active" : ""}
            onClick={() => handleTabClick(2)}
          >
            <Link to="/signup">Sign Up</Link>
          </li>
          <li
            id="tab-3"
            className={activeTab === 3 ? "active" : ""}
            onClick={() => handleTabClick(3)}
          >
            <Link to="/registration">Vihicle Registration</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
