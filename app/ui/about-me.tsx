"use client";

import { motion } from "motion/react";

export default function AboutMe() {
  return (
    <section className="w-full p-2 py-6  dark:bg-gray-700" id="about-me">
      <motion.div
        initial={{ translateY: 77, opacity: 0 }}
        viewport={{ once: true }}
        whileInView={{
          translateY: 1,
          opacity: 1,
          transition: { duration: 0.8, delay: 0.2 },
        }}
      >
        <div className="mx-auto max-w-screen-md">
          <h1 className="md:text-2xl text-lg font-bold text-center mb-1 md:text-black text-black dark:text-slate-400">
            About Me
          </h1>
          <p className="md:text-black text-black text-center md:p-0 p-2 w-full dark:text-slate-300">
            A Full Stack Software Engineer with a passion to create marvelous
            software and programming solutions to different real life problems.
            I have an intuitive desire to learn new technologies and how they
            work in depth.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
