import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import img1 from "../assets/portfolio.png";
import social from "../assets/socialmedia.png";
import chat from "../assets/chatui.png";
import { Link } from "react-scroll";

const Work = () => {
  return (
    <section className="section" id="work">
      <div className=" container mx-auto">
        <div className=" flex flex-col lg:flex-row gap-x-10">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className=" flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0"
          >
            <div>
              <h2 className=" font-orbitron text-[27px] mb-2 tracking-[10%] uppercase leading-tight text-accent">
                Upcoming <br />
                Projects
              </h2>
              <p className="max-w-sm mb-8">
                Prjocets under the work to showcase{" "}
              </p>
              <Link to="projects" smooth={true} spy={true}>
                <button className=" btn btn-sm">View All Projects</button>
              </Link>
            </div>
            <div className=" group relative border-white/50 border-2 overflow-hidden rounded-xl">
              <div className=" group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              <img
                src={img1}
                alt="work"
                className=" group-hover:scale-125 transition-all duration-500"
              />
              <div className=" absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className=" text-gradient">UI/UX Design</span>
              </div>
              <div className=" absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                <span className=" text-2xl text-gradient">Project Title</span>
              </div>
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className=" flex-1 flex flex-col gap-y-10"
          >
            <div className=" group relative border-white/50 border-2 overflow-hidden rounded-xl">
              <div className=" group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              <img
                src={social}
                alt="work"
                className=" group-hover:scale-125 transition-all duration-500 h-80 w-full"
              />
              <div className=" absolute -bottom-full left-20 lg:left-52 group-hover:bottom-36 lg:group-hover:bottom-40 transition-all duration-500 z-50">
                <span className=" text-gradient text-xl lg:text-3xl">
                  Coming Soon...
                </span>
              </div>
              <div className=" absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className=" text-gradient">MERN STACK</span>
              </div>
              <div className=" absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                <span className=" text-2xl text-gradient">
                  Social Media App
                </span>
              </div>
            </div>
            <div className=" group relative border-white/50 border-2 overflow-hidden rounded-xl">
              <div className=" group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>

              <img
                src={chat}
                alt="work"
                className=" group-hover:scale-125 transition-all duration-500 h-80 w-full"
              />
              <div className=" absolute -bottom-full left-20 lg:left-52 group-hover:bottom-36 lg:group-hover:bottom-40 transition-all duration-500 z-50">
                <span className=" text-gradient text-xl lg:text-3xl">
                  Coming Soon...
                </span>
              </div>
              <div className=" absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className=" text-gradient">UI/UX Design</span>
              </div>
              <div className=" absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                <span className=" text-2xl text-gradient">Project Title</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Work;
