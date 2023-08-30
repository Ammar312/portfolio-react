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
          <div>
            <h1>
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
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus, aut autem? Deserunt, totam id suscipit
            </p>
            <div>
              <button className=" btn btn-lg">Contact Me</button>
              <a href="#" className=" text-gradient text-base">
                My Portfolio
              </a>
            </div>
            <div>
              <a href="#">
                <FaGithub />
              </a>
            </div>
          </div>
          <div>
            <img src={image} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
