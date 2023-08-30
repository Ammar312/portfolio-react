import React from "react";
import image from "../assets/avatar.svg";
import { FaGithub, FaLinkedin, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

const Banner = () => {
  return (
    <div className="section overflow-hidden" id="home">
      <div className=" container mx-auto">
        <div className=" flex flex-col gap-y-8 lg:flex-row">
          {/* text */}
          <div className=" flex-1 flex flex-col font-rajdhani items-center lg:items-start">
            <h1 className=" text-[45px] font-bold max-lg:leading-[50px] leading-[85px] lg:text-[100px] mb-8">
              AMMAR <span>UL</span> MUSTAFA
            </h1>
            <div className=" mb-6 text-[36px] lg:text-[60px] font-rajdhani font-semibold uppercase leading-[1]">
              <span className=" mr-3">I AM A </span>
              <TypeAnimation
                sequence={[
                  "Front-End Developer",
                  2000,
                  "Back-End Developer",
                  2000,
                  "Mern-Stack Developer",
                  2000,
                ]}
                speed={50}
                repeat={Infinity}
                wrapper="span"
                className=" text-accent"
              />
            </div>
            <p className=" max-w-lg  lg:mx-0">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus, aut autem? Deserunt, totam id suscipit
            </p>
            <div className=" flex items-center gap-6 my-12  lg:mx-0">
              <button className=" btn btn-lg">Contact Me</button>
              <a href="#" className=" text-gradient text-base">
                My Portfolio
              </a>
            </div>
            <div className=" border-2 border-blue-400 flex gap-5 text-[20px] max-w-max">
              <a href="#">
                <FaGithub />
              </a>
              <a href="#">
                <FaLinkedin />
              </a>
              <a href="#">
                <FaWhatsapp />
              </a>
            </div>
          </div>
          <div>
            <img src={image} alt="image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
