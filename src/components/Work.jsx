import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import img1 from "../assets/portfolio-img1.png";

const Work = () => {
  return (
    <section className="section" id="work">
      <div className=" container mx-auto">
        <div>
          <div className=" flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0">
            <div>
              <h2 className=" font-orbitron text-[27px] mb-2 tracking-[10%] uppercase leading-tight text-accent">
                My Latest <br />
                Work
              </h2>
              <p className="max-w-sm mb-16">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere
                voluptatibus perspiciatis placeat, reiciendis magnam harum
              </p>
              <button className=" btn btn-sm">View All Projects</button>
            </div>
            <div className=" group relative border-white/50 border-2 overflow-hidden rounded-xl">
              <div className=" group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              <img src="" alt="" />
              <div>UI/UX Design</div>
              <div>
                <span>Project Title</span>
              </div>
            </div>
          </div>
          <div>2</div>
        </div>
      </div>
    </section>
  );
};

export default Work;
