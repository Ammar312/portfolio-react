import React from "react";
import { BsArrowUpRight } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { Link } from "react-scroll";

const services = [
  // {
  //   field: "UI/UX Design",
  //   description:
  //     "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas maiores recusandae dolorem laudantium, a molestias aliquid iusto ratione suscipit?",
  //   link: "Learn more",
  // },
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
      <div className="container mx-auto max-w-[1280px]">
        <div className="flex flex-col lg:flex-row gap-x-4">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className=" flex-1  lg:bg-bottom pb-8 bg-no-repeat mix-blend-lighten mb-12 lg:mb-0"
          >
            <h2 className="font-orbitron text-[27px] mb-2 tracking-[10%] uppercase text-accent">
              What I Do
            </h2>
            <h3 className="font-orbitron  font-semibold text-[24px] leading-[46px] max-w-[455px] mb-16">
              {" "}
              I'm Mern-Stack developer with over 0 years of experience
            </h3>
            <Link to="projects" smooth={true} spy={true}>
              <button className="btn btn-sm">See My Work</button>
            </Link>
          </motion.div>
          <motion.div
            className="flex-1"
            variants={fadeIn("up", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.5 }}
          >
            <div>
              {services.map((service, index) => {
                const { field, description, link } = service;
                return (
                  <div
                    key={index}
                    className=" flex border-b border-white/20 h-[146px] mb-[38px]"
                  >
                    <div className=" max-w-[476px]">
                      <h4 className=" text-[20px] tracking-wider font-orbitron font-semibold mb-6">
                        {field}
                      </h4>
                      <p className=" font-rajdhani leading-tight">
                        {description}
                      </p>
                    </div>
                    <div className=" flex flex-col flex-1 items-end">
                      <a
                        href="#"
                        className="flex justify-center items-center btn w-9 h-9 mb-[39]"
                      >
                        <BsArrowUpRight />
                      </a>
                      <a href="#" className=" text-gradient text-sm">
                        {link}
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
