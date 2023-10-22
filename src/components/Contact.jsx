import React, { useRef } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { message } from "antd";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_y5208go",
        "template_bl48rqu",
        formRef.current,
        "uMcl3yAGqH-JtmrcS"
      )
      .then(
        (result) => {
          console.log(result.text);
          message.success("Email Sent");
        },
        (error) => {
          console.log(error.text);
          message.error("Error in sending mail");
        }
      );
  };
  return (
    <section className=" py-16 lg:section" id="contact">
      <div className=" container mx-auto">
        <motion.div
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.5 }}
          className=" flex flex-col lg:flex-row gap-x-16 lg:justify-evenly lg:items-center mx-4"
        >
          {/* text */}
          <div>
            <div className=" flex-1">
              <h4 className=" text-xl uppercase text-accent font-medium mb-2 tracking-wide">
                Get in touch
              </h4>
              <h2 className=" text-[45px] lg:text-[75px] leading-none mb-8">
                Let's work <br /> together!
              </h2>
            </div>
            <motion.div
              variants={fadeIn("up", 0.7)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className=" flex gap-5 text-[30px] md:text-[40px] max-w-max mb-4"
            >
              <a href="https://github.com/Ammar312/" target="_blank">
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/ammar-ul-mustafa-728b5820b/"
                className="text-blue-500"
                target="_blank"
              >
                <FaLinkedin />
              </a>
              <a
                href=" https://wa.me/3104160942"
                className="text-green-500"
                target="_blank"
              >
                <FaWhatsapp />
              </a>
            </motion.div>
          </div>
          {/* form */}
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className=" flex-1 flex border pb-20 p-6 items-start rounded-2xl flex-col gap-y-6 max-w-lg "
          >
            <input
              type="text"
              className=" bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all"
              placeholder="Your Name"
              name="user_name"
            />
            <input
              type="email"
              className=" bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all"
              placeholder="Your Email"
              name="user_email"
            />
            <textarea
              className=" bg-transparent border-b py-6 outline-none w-full placeholder:text-white focus:border-accent transition-all resize-none mb-8"
              placeholder="Your Message"
              name="message"
            ></textarea>
            <button className=" btn btn-lg" type="submit">
              Send Message
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
