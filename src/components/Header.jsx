import React from "react";
import logo from "../assets/logo.svg";

const Header = () => {
  return (
    <header className="py-8">
      <div className=" flex justify-center">
        <div className=" container flex justify-between items-center min-w-[350px] max-w-[700px]">
          <a href="#">
            <img src={logo} alt="" />
          </a>
          <button className=" btn btn-sm">Work With Me</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
