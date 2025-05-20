"use client";
import { motion } from "motion/react";
import { DiJavascript1, DiPostgresql } from "react-icons/di";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa6";
import { FiGithub } from "react-icons/fi";
import { LiaGit, LiaHtml5 } from "react-icons/lia";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiRedux, SiSocketdotio } from "react-icons/si";
import {
  TbBrandCss3,
  TbBrandMongodb,
  TbBrandMysql,
  TbBrandNextjs,
  TbBrandTypescript,
} from "react-icons/tb";

export default function TechStacks() {
  return (
    <section className="w-full py-10 dark:bg-gray-800" id="skills">
      <motion.div
        initial={{ translateY: 75, opacity: 0 }}
        viewport={{ once: true }}
        whileInView={{
          translateY: 0,
          opacity: 1,
          transition: { duration: 0.6, delay: 0.6 },
        }}
      >
        <div className="mx-auto max-w-screen-sm mb-4">
          <h1 className="md:text-xl text-lg font-bold text-center mb-1 dark:text-slate-400">
            Tech Stacks
          </h1>
          <p className="text-center mb-2 dark:text-slate-200 px-3">
            Here are a list of tools, libraries and platforms I have had
            precious experience on.
          </p>
        </div>
      </motion.div>
      <div className="mx-auto max-w-screen-2xl py-2 md:py-10">
        <div className="grid md:grid-cols-5 grid-cols-3 md:gap-6 gap-1">
          <motion.div
            initial={{ translateY: 90, opacity: 0 }}
            viewport={{ once: true }}
            whileInView={{
              translateY: 0,
              opacity: 1,
              transition: { duration: 0.6, delay: 0.6 },
            }}
          >
            <div className="flex flex-col items-center justify-center">
              <div className="p-4 w-24 h-24 bg-slate-50 transition-all duration-200 ease-in-out rounded-full  flex items-center justify-center dark:group-hover:bg-gray-50/5 hover:bg-blue-600 dark:hover:bg-gray-600 group">
                <FaReact className="w-full h-full text-blue-600 dark:text-gray-600 group-hover:text-white" />
              </div>
              <div>
                <p className="my-1 font-bold text-center text-slate-800 dark:text-slate-300">
                  React
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ translateY: 90, opacity: 0 }}
            viewport={{ once: true }}
            whileInView={{
              translateY: 0,
              opacity: 1,
              transition: { duration: 0.6, delay: 0.7 },
            }}
          >
            <div className="flex flex-col items-center justify-center">
              <div className="p-4 w-24 h-24 bg-slate-50 transition-all duration-200 ease-in-out rounded-full  flex items-center justify-center dark:group-hover:bg-gray-50/5 hover:bg-blue-600 dark:hover:bg-gray-600 group">
                <TbBrandNextjs className="w-full h-full text-blue-600 dark:text-gray-600 group-hover:text-white" />
              </div>
              <div>
                <p className="my-1 font-bold text-center text-slate-800 dark:text-slate-300">
                  Next.js
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ translateY: 90, opacity: 0 }}
            viewport={{ once: true }}
            whileInView={{
              translateY: 0,
              opacity: 1,
              transition: { duration: 0.6, delay: 0.8 },
            }}
          >
            <div className="flex flex-col items-center justify-center">
              <div className="p-4 w-24 h-24 bg-slate-50 transition-all duration-200 ease-in-out rounded-full  flex items-center justify-center dark:group-hover:bg-gray-50/5 hover:bg-blue-600 dark:hover:bg-gray-600 group">
                <FaNodeJs className="w-full h-full text-blue-600 dark:text-gray-600 group-hover:text-white" />
              </div>
              <div>
                <p className="my-1 font-bold text-center text-slate-800 dark:text-slate-300">
                  Node Js
                </p>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ translateY: 90, opacity: 0 }}
            viewport={{ once: true }}
            whileInView={{
              translateY: 0,
              opacity: 1,
              transition: { duration: 0.6, delay: 0.9 },
            }}
          >
            <div className="flex flex-col items-center justify-center">
              <div className="p-4 w-24 h-24 bg-slate-50 transition-all duration-200 ease-in-out rounded-full  flex items-center justify-center dark:group-hover:bg-gray-50/5 hover:bg-blue-600 dark:hover:bg-gray-600 group">
                <TbBrandMongodb className="w-full h-full text-blue-600 dark:text-gray-600 group-hover:text-white" />
              </div>
              <div>
                <p className="my-1 font-bold text-center text-slate-800 dark:text-slate-300">
                  Mongo Db
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ translateY: 90, opacity: 0 }}
            viewport={{ once: true }}
            whileInView={{
              translateY: 0,
              opacity: 1,
              transition: { duration: 0.6, delay: 1 },
            }}
          >
            <div className="flex flex-col items-center justify-center">
              <div className="p-4 w-24 h-24 bg-slate-50 transition-all duration-200 ease-in-out rounded-full  flex items-center justify-center dark:group-hover:bg-gray-50/5 hover:bg-blue-600 dark:hover:bg-gray-600 group">
                <TbBrandMysql className="w-full h-full text-blue-600 dark:text-gray-600 group-hover:text-white" />
              </div>
              <div>
                <p className="my-1 font-bold text-center text-slate-800 dark:text-slate-300">
                  SQL
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ translateY: 90, opacity: 0 }}
            viewport={{ once: true }}
            whileInView={{
              translateY: 0,
              opacity: 1,
              transition: { duration: 0.6, delay: 1.1 },
            }}
          >
            <div className="flex flex-col items-center justify-center">
              <div className="p-4 w-24 h-24 bg-slate-50 transition-all duration-200 ease-in-out rounded-full  flex items-center justify-center dark:group-hover:bg-gray-50/5 hover:bg-blue-600 dark:hover:bg-gray-600 group">
                <DiPostgresql className="w-full h-full text-blue-600 dark:text-gray-600 group-hover:text-white" />
              </div>
              <div>
                <p className="my-1 font-bold text-center text-slate-800 dark:text-slate-300">
                  Postgresql
                </p>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ translateY: 90, opacity: 0 }}
            viewport={{ once: true }}
            whileInView={{
              translateY: 0,
              opacity: 1,
              transition: { duration: 0.6, delay: 1.2 },
            }}
          >
            <div className="flex flex-col items-center justify-center">
              <div className="p-4 w-24 h-24 bg-slate-50 transition-all duration-200 ease-in-out rounded-full  flex items-center justify-center dark:group-hover:bg-gray-50/5 hover:bg-blue-600 dark:hover:bg-gray-600 group">
                <DiJavascript1 className="w-full h-full text-blue-600 dark:text-gray-600 group-hover:text-white" />
              </div>
              <div>
                <p className="my-1 font-bold text-center text-slate-800 dark:text-slate-300">
                  JavaScript
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ translateY: 90, opacity: 0 }}
            viewport={{ once: true }}
            whileInView={{
              translateY: 0,
              opacity: 1,
              transition: { duration: 0.6, delay: 1.3 },
            }}
          >
            <div className="flex flex-col items-center justify-center">
              <div className="p-4 w-24 h-24 bg-slate-50 transition-all duration-200 ease-in-out rounded-full  flex items-center justify-center dark:group-hover:bg-gray-50/5 hover:bg-blue-600 dark:hover:bg-gray-600 group">
                <TbBrandTypescript className="w-full h-full text-blue-600 dark:text-gray-600 group-hover:text-white" />
              </div>
              <div>
                <p className="my-1 font-bold text-center text-slate-800 dark:text-slate-300">
                  TypeScript
                </p>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ translateY: 90, opacity: 0 }}
            viewport={{ once: true }}
            whileInView={{
              translateY: 0,
              opacity: 1,
              transition: { duration: 0.6, delay: 1.4 },
            }}
          >
            <div className="flex flex-col items-center justify-center">
              <div className="p-4 w-24 h-24 bg-slate-50 transition-all duration-200 ease-in-out rounded-full  flex items-center justify-center dark:group-hover:bg-gray-50/5 hover:bg-blue-600 dark:hover:bg-gray-600 group">
                <RiTailwindCssFill className="w-full h-full text-blue-600 dark:text-gray-600 group-hover:text-white" />
              </div>
              <div>
                <p className="my-1 font-bold text-center text-slate-800 dark:text-slate-300">
                  Tailwind Css
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ translateY: 90, opacity: 0 }}
            viewport={{ once: true }}
            whileInView={{
              translateY: 0,
              opacity: 1,
              transition: { duration: 0.6, delay: 1.5 },
            }}
          >
            <div className="flex flex-col items-center justify-center">
              <div className="p-4 w-24 h-24 bg-slate-50 transition-all duration-200 ease-in-out rounded-full  flex items-center justify-center dark:group-hover:bg-gray-50/5 hover:bg-blue-600 dark:hover:bg-gray-600 group">
                <TbBrandCss3 className="w-full h-full text-blue-600 dark:text-gray-600 group-hover:text-white" />
              </div>
              <div>
                <p className="my-1 font-bold text-center text-slate-800 dark:text-slate-300">
                  CSS
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ translateY: 90, opacity: 0 }}
            viewport={{ once: true }}
            whileInView={{
              translateY: 0,
              opacity: 1,
              transition: { duration: 0.6, delay: 1.6 },
            }}
          >
            <div className="flex flex-col items-center justify-center">
              <div className="p-4 w-24 h-24 bg-slate-50 transition-all duration-200 ease-in-out rounded-full  flex items-center justify-center dark:group-hover:bg-gray-50/5 hover:bg-blue-600 dark:hover:bg-gray-600 group">
                <LiaHtml5 className="w-full h-full text-blue-600 dark:text-gray-600 group-hover:text-white" />
              </div>
              <div>
                <p className="my-1 font-bold text-center text-slate-800 dark:text-slate-300">
                  HTML
                </p>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ translateY: 90, opacity: 0 }}
            viewport={{ once: true }}
            whileInView={{
              translateY: 0,
              opacity: 1,
              transition: { duration: 0.6, delay: 1.7 },
            }}
          >
            <div className="flex flex-col items-center justify-center">
              <div className="p-4 w-24 h-24 bg-slate-50 transition-all duration-200 ease-in-out rounded-full  flex items-center justify-center dark:group-hover:bg-gray-50/5 hover:bg-blue-600 dark:hover:bg-gray-600 group">
                <SiRedux className="w-full h-full text-blue-600 dark:text-gray-600 group-hover:text-white" />
              </div>
              <div>
                <p className="my-1 font-bold text-center text-slate-800 dark:text-slate-300">
                  Redux
                </p>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ translateY: 90, opacity: 0 }}
            viewport={{ once: true }}
            whileInView={{
              translateY: 0,
              opacity: 1,
              transition: { duration: 0.6, delay: 1.8 },
            }}
          >
            <div className="flex flex-col items-center justify-center">
              <div className="p-4 w-24 h-24 bg-slate-50 transition-all duration-200 ease-in-out rounded-full  flex items-center justify-center dark:group-hover:bg-gray-50/5 hover:bg-blue-600 dark:hover:bg-gray-600 group">
                <LiaGit className="w-full h-full text-blue-600 dark:text-gray-600 group-hover:text-white" />
              </div>
              <div>
                <p className="my-1 font-bold text-center text-slate-800 dark:text-slate-300">
                  Git
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ translateY: 90, opacity: 0 }}
            viewport={{ once: true }}
            whileInView={{
              translateY: 0,
              opacity: 1,
              transition: { duration: 0.6, delay: 1.9 },
            }}
          >
            <div className="flex flex-col items-center justify-center">
              <div className="p-4 w-24 h-24 bg-slate-50 transition-all duration-200 ease-in-out rounded-full  flex items-center justify-center dark:group-hover:bg-gray-50/5 hover:bg-blue-600 dark:hover:bg-gray-600 group">
                <FiGithub className="w-full h-full text-blue-600 dark:text-gray-600 group-hover:text-white" />
              </div>
              <div>
                <p className="my-1 font-bold text-center text-slate-800 dark:text-slate-300">
                  GitHub
                </p>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ translateY: 90, opacity: 0 }}
            viewport={{ once: true }}
            whileInView={{
              translateY: 0,
              opacity: 1,
              transition: { duration: 0.6, delay: 2 },
            }}
          >
            <div className="flex flex-col items-center justify-center">
              <div className="p-4 w-24 h-24 bg-slate-50 transition-all duration-200 ease-in-out rounded-full  flex items-center justify-center dark:group-hover:bg-gray-50/5 hover:bg-blue-600 dark:hover:bg-gray-600 group">
                <SiSocketdotio className="w-full h-full text-blue-600 dark:text-gray-600 group-hover:text-white" />
              </div>
              <div>
                <p className="my-1 font-bold text-center text-slate-800 dark:text-slate-300">
                  Soket Io
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
