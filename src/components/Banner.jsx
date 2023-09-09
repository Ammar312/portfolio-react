import React from "react";
import image from "../assets/avatar.svg";
import { FaGithub, FaLinkedin, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { Link } from "react-scroll";

const Banner = () => {
  return (
    <section
      className=" min-h-[85vh] lg:min-h-[78vh] flex items-center overflow-hidden lg:mt-10"
      id="home"
    >
      <div className=" container mx-auto max-w-[990px]">
        <div className=" flex flex-col justify-center gap-y-8 lg:flex-row lg:gap-x-12 items-center lg:items-start">
          {/* text */}
          <div className=" flex-1 flex flex-col font-rajdhani items-center lg:items-start">
            <motion.h1
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className=" text-[45px] font-bold max-lg:leading-[50px] leading-[85px] lg:text-[80px] mb-6 lg:mb-5"
            >
              AMMAR <span>MUSTAFA</span>
            </motion.h1>
            <motion.div
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className=" mb-6 text-[39px] lg:text-[53px] font-rajdhani font-semibold uppercase leading-[1]"
            >
              <span className=" mr-3">I AM A </span>
              <TypeAnimation
                sequence={[
                  "Front-End ",
                  2000,
                  "Back-End ",
                  2000,
                  "Mern-Stack ",
                  2000,
                ]}
                speed={50}
                repeat={Infinity}
                wrapper="span"
                className=" text-accent"
              />
            </motion.div>
            <motion.p
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className=" max-w-lg  lg:mx-0"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus, aut autem? Deserunt, totam id suscipit
            </motion.p>
            <motion.div
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className=" flex items-center gap-6 mb-10 mt-4  lg:mx-0"
            >
              <Link to="contact" smooth={true} spy={true}>
                <button className=" btn btn-lg cursor-pointer">
                  Contact Me
                </button>
              </Link>
              <a href="#" className=" text-gradient text-base">
                My Portfolio
              </a>
            </motion.div>
            <motion.div
              variants={fadeIn("up", 0.7)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className=" flex gap-5 text-[20px] max-w-max"
            >
              <a href="#">
                <FaGithub />
              </a>
              <a href="#">
                <FaLinkedin />
              </a>
              <a href="#">
                <FaWhatsapp />
              </a>
            </motion.div>
          </div>
          <motion.div
            variants={fadeIn("down", 0.6)}
            initial="hidden"
            whileInView={"show"}
            className=" hidden lg:flex flex-1 max-w-[320px] lg:max-w-[380px]"
          >
            <img src={image} alt="image" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
