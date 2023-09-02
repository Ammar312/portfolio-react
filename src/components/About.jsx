import React from "react";
import CountUp from "react-countup";
import { InView, useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const About = () => {
  const [ref, InView] = useInView({
    threshold: 0.5,
  });
  return (
    <section className="section" id="about" ref={ref}>
      <div className=" container mx-auto">
        <div>
          <div className=" flex-1 bg-about bg-contain bg-no-repeat h-[450px] mix-blend-lighten bg-top"></div>
          <div>
            <h2>About me</h2>
            <h3>I'm Mern-Stack developer with over 0 years of experience</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
              temporibus, neque mollitia corporis odit est magnam magni.
            </p>
            <div className=" flex gap-x-6 lg:gap-x-10 mb-10">
              <div>
                <div className=" font-aldrich text-[40px] text-gradient mb-2">
                  {InView ? <CountUp start={0} end={13} duration={3} /> : null}
                </div>
                <div className=" font-orbitron text-sm tracking-[2px]">
                  Years of <br />
                  Experience
                </div>
              </div>
              <div>
                <div className=" font-aldrich text-[40px] text-gradient mb-2">
                  {InView ? <CountUp start={0} end={15} duration={3} /> : null}
                  k+
                </div>
                <div className=" font-orbitron text-sm tracking-[2px]">
                  Projects <br />
                  Completed
                </div>
              </div>
              <div>
                <div className=" font-aldrich text-[40px] text-gradient mb-2">
                  {InView ? <CountUp start={0} end={12} duration={3} /> : null}
                  k+
                </div>
                <div className=" font-orbitron text-sm tracking-[2px]">
                  Satisfied <br />
                  Clients
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
