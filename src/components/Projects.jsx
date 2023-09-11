import React from "react";
import img from "../assets/servercrudreact.png";

const Projects = () => {
  return (
    <section className="section border-2 overflow-hidden" id="projects">
      <div className=" border-2 border-green-500">
        <h1 className=" text-3xl text-gradient border">MY PROJECTS</h1>
        <div className="border border-red-300">
          <div className="group relative border-white/50 border-2 overflow-hidden rounded-xl">
            <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
            <img src={img} alt="img" width={120} height={120} />
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
