import React from "react";
import "./Header.css";
import logo from "../../images/Logo.svg";

const Header = () => {
  return (
    <nav className="header">
      <img src={logo} alt="" />
      <div>
        <a href="/shop" header="1">
          Shop
        </a>
        <a href="/order" header="2">
          Order
        </a>
        <a href="/inventory" header="3">
          Inventory
        </a>
        <a href="/login" header="4">
          Login
        </a>
      </div>
    </nav>
  );
};

export default Header;
