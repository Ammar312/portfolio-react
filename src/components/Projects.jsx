import React from "react";
import img from "../assets/servercrudreact.png";

const Projects = () => {
  return (
    <section
      className="py-8 lg:py-16 px-8 lg:h-screen flex border-2 overflow-hidden"
      id="projects"
    >
      <div className=" border-2 border-green-500 ">
        <h1 className=" text-3xl text-gradient border mb-10">MY PROJECTS</h1>
        <div className="border border-red-300 flex flex-1">
          <div className="group relative border-white/50 border-2 overflow-hidden rounded-xl max-w-[450px]">
            <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
            <img src={img} alt="img" className=" w-full" />
            <div className=" absolute -bottom-full left-8 group-hover:bottom-16 transition-all duration-500 z-50">
              <span className=" text-gradient text-2xl">React CRUD</span>
            </div>
            <div className=" absolute -bottom-full left-8 group-hover:bottom-8 transition-all duration-700 z-50">
              <span className="text-gradient">REACT, TAILWIND, EXPRESSJS</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
