import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Contact = () => {
  return (
    <section className=" py-16 lg:section" id="contact">
      <div className=" container mx-auto">
        <div className=" flex flex-col lg:flex-row">
          {/* text */}
          <div>
            <div className=" flex-1">
              <h4 className=" text-xl uppercase text-accent font-medium mb-2 tracking-wide">
                Get in touch
              </h4>
              <h2 className=" text-[45px] lg:text-[90px] uppercase leading-none mb-12">
                Let's Work <br /> Together
              </h2>
            </div>
          </div>
          {/* form */}
          <form className=" flex-1">
            <input
              type="text"
              className=" bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent"
            />
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
