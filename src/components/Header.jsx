import React from "react";
import logo from "../assets/logo.svg";

const Header = () => {
  return (
    <header className="py-8">
      <div className=" flex justify-center">
        <div className=" container flex justify-between items-center min-w-[300px] max-w-[990px] px-4">
          {/* <a href="#">
            <img src={logo} alt="" />
          </a> */}
          <div className=" w-[111px] h-[48] text-2xl font-extrabold leading-[23px] font-orbitron">
            <div className=" text-gradient">AMMAR</div>
            MUSTAFA
          </div>
          <button className=" btn btn-sm">Work With Me</button>
        </div>
      </div>
    </header>
  );
};
// border-radius: 49% 51% 69% 31% / 51% 37% 63% 49%;

export default Header;
