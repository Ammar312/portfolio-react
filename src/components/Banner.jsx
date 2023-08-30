import React from "react";
import image from "../assets/avatar.svg";
import { FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

const Banner = () => {
  return (
    <div className="section" id="home">
      <div className=" container mx-auto">
        <div>
          {/* text */}
          <div>Text</div>
          <div>
            <img src={image} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
