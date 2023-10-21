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
      "Web development, also known as website development, refers to the tasks associated with creating, building, and maintaining websites and web applications that run online on a browser. It may, however, also include web design, web programming, and database management.",
    link: "Learn more",
  },
  {
    field: "App Development",
    description:
      "Mobile app development is the act or process by which a mobile app is developed for one or more mobile devices, which can include personal digital assistants (PDA), enterprise digital assistants (EDA), or mobile phones.",
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
            className=" flex-1 lg:bg-services bg-contain lg:bg-bottom pb-8 bg-no-repeat mix-blend-lighten mb-12 lg:mb-0"
          >
            <h2 className="font-orbitron text-[27px] mb-2 tracking-[10%] uppercase text-accent">
              What I Do
            </h2>
            <h3 className="font-orbitron  font-semibold text-[24px] leading-[46px] max-w-[455px] mb-16">
              As a Mern-Stack developer designing interactive ui on React and
              building secure server turning ideas into reality
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
                    className=" flex border-b border-white/20 h-[176px] mb-[38px]"
                  >
                    <div className=" max-w-[476px]">
                      <h4 className=" text-[20px] tracking-wider font-orbitron font-semibold mb-6">
                        {field}
                      </h4>
                      <div className=" font-rajdhani leading-tight">
                        {description}
                      </div>
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
