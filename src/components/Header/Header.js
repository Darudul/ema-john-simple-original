import React from "react";
import logo from "../../images/Logo.svg";
import "./Header.css";
const Header = () => {
  return (
    <nav className="header">
      <div>
        <img src={logo} alt="" />
      </div>
      <div>
        <a href="/other">other</a>
        <a href="/order overview">order overview</a>
        <a href="/Manage Inventory">Manage Inventory</a>
        <a href="/Manage Inventory">About</a>

      </div>
    </nav>
  );
};

export default Header;
