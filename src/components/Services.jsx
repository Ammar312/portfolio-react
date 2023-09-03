import React from "react";
import { BsArrowUpRight } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const services = [
  {
    field: "UI/UX Design",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas maiores recusandae dolorem laudantium, a molestias aliquid iusto ratione suscipit?",
    link: "Learn more",
  },
  {
    field: "Web Development",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas maiores recusandae dolorem laudantium, a molestias aliquid iusto ratione suscipit?",
    link: "Learn more",
  },
  {
    field: "App Development",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas maiores recusandae dolorem laudantium, a molestias aliquid iusto ratione suscipit?",
    link: "Learn more",
  },
];

const Services = () => {
  return (
    <section className="section" id="services">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          <div className=" flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0">
            <h2 className="font-orbitron text-[27px] mb-2 tracking-[10%] uppercase text-accent">
              What I Do
            </h2>
            <h3 className="font-orbitron  font-semibold text-[24px] leading-[46px] max-w-[455px] mb-16">
              {" "}
              I'm Mern-Stack developer with over 0 years of experience
            </h3>
            <button className="btn btn-sm">See My Work</button>
          </div>
          <div>
            <div>
              {services.map((service, index) => {
                const { field, description, link } = service;
                return (
                  <div key={index}>
                    <div className=" max-w-[476px]">
                      <h4 className=" text-[20px] tracking-wider font-orbitron font-semibold mb-6">
                        {field}
                      </h4>
                      <p className=" font-rajdhani leading-tight">
                        {description}
                      </p>
                    </div>
                    <div>link</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
