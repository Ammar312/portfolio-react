import React from "react";
import pdf from "../assets/cv.pdf";
import { Tooltip } from "antd";

const Header = () => {
  return (
    <header className="py-8">
      <div className=" flex justify-center">
        <div className=" container flex justify-between items-center min-w-[300px] max-w-[990px] px-4">
          {/* <a href="#">
            <img src={logo} alt="" />
          </a> */}
          <Tooltip title="Ammar Ul Mustafa" color="#b936ee">
            <div className=" w-[111px] h-[48] text-2xl font-extrabold leading-[23px] font-orbitron">
              <div className=" text-gradient">AMMAR</div>
              MUSTAFA
            </div>
          </Tooltip>
          <Tooltip title="Download My CV" color="#b936ee">
            <a href={pdf} download="ammarcv" target="_blank" rel="noreferrer">
              <button className=" btn btn-sm">Download CV</button>
            </a>
          </Tooltip>
        </div>
      </div>
    </header>
  );
};
// border-radius: 49% 51% 69% 31% / 51% 37% 63% 49%;

export default Header;
