import React from "react";
import Home from "../../Pages/Home/Home";
import logo from "./../../assets/logo.png";
const Header = () => {
  return (
    <div className="flex ju items-center flex-col">
      <img src={logo} alt="" />
      <p>Journalism Without Fear or Favour</p>
      <p>Date Niye asbo pore</p>
    </div>
  );
};

export default Header;
