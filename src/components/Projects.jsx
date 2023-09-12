import React from "react";
import { BsArrowUpRight } from "react-icons/bs";
import constant from "../constants/Constant";

const Projects = () => {
  return (
    <section
      className="py-8 lg:py-10 px-8 lg:h-screen flex border-2 overflow-hidden"
      id="projects"
    >
      <div className=" border-2 border-green-500 h-full max-w-full overflow-hidden ">
        <h1 className=" text-3xl text-gradient border mb-10">MY PROJECTS</h1>
        <div className="border border-red-300 flex flex-1 gap-4 flex-wrap h-full overflow-y-auto scrollbar">
          {constant.map((card) => (
            <div className="group relative border-white/50 border-2 overflow-hidden rounded-xl max-w-[380px]">
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              <div className=" absolute -top-full right-4 group-hover:top-8 transition-all duration-500 z-50">
                <a
                  href={card.link}
                  className=" text-purple-500 text-2xl"
                  target="_blank"
                >
                  <BsArrowUpRight />
                </a>
              </div>
              <img
                src={card.img}
                alt="img"
                className=" w-full group-hover:scale-125 transition-all duration-500 brightness-90"
              />
              <div className=" absolute -bottom-full left-8 group-hover:bottom-16 transition-all duration-500 z-50">
                <span className=" text-gradient text-2xl">{card.title}</span>
              </div>
              <div className=" absolute -bottom-full left-8 group-hover:bottom-4 transition-all duration-700 z-50 ">
                <span className=" text-white">{card.description}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
