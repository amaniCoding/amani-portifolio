'use client'
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";

export default function Certificates() {
  return (
    <section className="w-full my-1 dark:pt-4 dark:mb-0 dark:mt-0 dark:bg-slate-800" id="certificates">

      <div className="mx-auto max-w-screen-sm">
        <motion.div
          initial={{ translateY: 80, opacity: 0 }}
          viewport={{ once: true }}

          whileInView={{
            translateY: 0,
            opacity: 1,
            transition: { duration: 0.7, delay: 0.2 }
          }}>
          <h1 className='md:text-xl text-lg font-bold text-center my-1 dark:text-slate-400'>Certificates</h1>
        </motion.div>
      </div>
      <div className="mx-auto max-w-screen-lg">
        <div className="grid md:grid-cols-3 grid-cols-1 gap-6">
          <div className="">
            <div className="group relative rounded-xl overflow-hidden w-full p-5">
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                viewport={{ once: true }}

                whileInView={{
                  scale: 1,
                  opacity: 1,
                  transition: { duration: 0.5 }
                }}>
                <Image
                  src="/cert/programming.png"
                  width={0}
                  height={0}
                  sizes="100vh"
                  className="w-full h-48 object-scale-down"
                  alt="Screenshots of the dashboard project showing desktop version"
                />
              </motion.div>
              <div className="md:flex absolute dark:bg-gray-900/55 top-0 bottom-0 right-0 left-0 z-10 hidden items-center justify-center bg-blue-900/20 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out">

                <Link
                  href={`https://drive.google.com/file/d/1dIh8GzqCrVIhRDBdL8UJg_AoWbjECaO6/view?usp=drive_link`}
                  target="_blank"

                >

                  <button className="border-2 border-white absolute z-50 -translate-x-1/2 top-1/2 -translate-y-1/2 left-1/2 w-16 h-9 rounded-lg bg-blue-600 flex items-center justify-center dark:border-white font-bold dark:bg-gray-700 dark:text-white text-white">View</button>
                  <button className="absolute -translate-x-1/2 top-1/2  bg-white scale-100 -translate-y-1/2 left-1/2 w-16 h-9 rounded-lg group-hover:scale-150 opacity-100 group-hover:opacity-0  flex items-center justify-center transition-all duration-500 ease-in-out"></button>

                </Link>
              </div>

            </div>
            <motion.div
              initial={{ translateY: 30, opacity: 0 }}
              viewport={{ once: true }}

              whileInView={{
                translateY: 0,
                opacity: 1,
                transition: { duration: 0.5, delay: 0.2 }
              }}>
              <div className="my-2">
                <h2 className="text-lg font-bold text-center dark:text-white">Programming Fundamentals</h2>
                <p className="text-center dark:text-white"> Skills that all programmers use, whether they build apps, web pages, or analyze data.</p>
              </div>
            </motion.div>
            <Link
              href={`https://drive.google.com/file/d/1dIh8GzqCrVIhRDBdL8UJg_AoWbjECaO6/view?usp=drive_link`}
              target="_blank" className="mt-4 md:ml-1 ml-4 md:hidden w-36 py-2.5 block hover:shadow-lg border-[2px] border-transparent hover:border-white bg-blue-500 rounded-3xl text-white dark:bg-gray-700 dark:text-white text-center transition-all ease-in-out duration-300">View</Link>
          </div>

          <div className="">
            <div className="group relative rounded-xl overflow-hidden w-full p-5">
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                viewport={{ once: true }}

                whileInView={{
                  scale: 1,
                  opacity: 1,
                  transition: { duration: 0.5, delay: 0.3 }
                }}>
                <Image
                  src="/cert/pro.png"
                  width={0}
                  height={0}
                  sizes="100vh"
                  className="w-full h-48 object-scale-down"

                  alt="Screenshots of the dashboard project showing desktop version"
                />
              </motion.div>
              <div className="md:flex absolute dark:bg-gray-900/55 top-0 bottom-0 right-0 left-0 z-10 hidden items-center justify-center bg-blue-900/20 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out">

                <Link
                  href={`https://drive.google.com/file/d/1-drrQKZyWwPapXiK0zSy81mg4k42E2bG/view?usp=drive_link`}
                  target="_blank"

                >
                  <button className="border-2 border-white absolute z-50 -translate-x-1/2 top-1/2 -translate-y-1/2 left-1/2 w-16 h-9 rounded-lg bg-blue-600 flex items-center justify-center dark:border-white font-bold dark:bg-gray-700 dark:text-white text-white">View</button>
                  <button className="absolute -translate-x-1/2 top-1/2  bg-white scale-100 -translate-y-1/2 left-1/2 w-16 h-9 rounded-lg group-hover:scale-150 opacity-100 group-hover:opacity-0  flex items-center justify-center transition-all duration-500 ease-in-out"></button>
                </Link>
              </div>

            </div>
            <motion.div
              initial={{ translateY: 30, opacity: 0 }}
              viewport={{ once: true }}

              whileInView={{
                translateY: 0,
                opacity: 1,
                transition: { duration: 0.5, delay: 0.4 }
              }}>
              <div className="my-2">
                <h2 className="text-lg font-bold text-center dark:text-white">Android Developer Fundamentals.</h2>
                <p className="text-center dark:text-white">Learn the latest in development technology using Android Studio.</p>
              </div>
            </motion.div>

            <Link
              href={`https://drive.google.com/file/d/1-drrQKZyWwPapXiK0zSy81mg4k42E2bG/view?usp=drive_link`}
              target="_blank" className="mt-4 md:ml-1 ml-4 md:hidden w-36 py-2.5 block hover:shadow-lg border-[2px] border-transparent hover:border-white bg-blue-500 rounded-3xl text-white dark:bg-gray-700 dark:text-white text-center transition-all ease-in-out duration-300">View</Link>
          </div>
          <div className="">
            <div className="group relative rounded-xl overflow-hidden w-full p-5">
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                viewport={{ once: true }}

                whileInView={{
                  scale: 1,
                  opacity: 1,
                  transition: { duration: 0.5, delay: 0.4 }
                }}>
                <Image
                  src="/cert/exploration.png"
                  width={0}
                  height={0}
                  sizes="100vh"
                  className="w-full h-48 object-scale-down"

                  alt="Screenshots of the dashboard project showing desktop version"
                />
              </motion.div>
              <div className="md:flex absolute dark:bg-gray-900/55 top-0 bottom-0 right-0 left-0 z-10 hidden items-center justify-center bg-blue-900/20 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out">

                <Link
                  href={`https://drive.google.com/file/d/1tnA9YlmapjNED_DaiJhgAX8-rARAScgq/view?usp=drive_link`}
                  target="_blank"

                >
                  <button className="border-2 border-white absolute z-50 -translate-x-1/2 top-1/2 -translate-y-1/2 left-1/2 w-16 h-9 rounded-lg bg-blue-600 flex items-center justify-center dark:border-white font-bold dark:bg-gray-700 dark:text-white text-white">View</button>
                  <button className="absolute -translate-x-1/2 top-1/2  bg-white scale-100 -translate-y-1/2 left-1/2 w-16 h-9 rounded-lg group-hover:scale-150 opacity-100 group-hover:opacity-0  flex items-center justify-center transition-all duration-500 ease-in-out"></button>
                </Link>
              </div>

            </div>
            <motion.div
              initial={{ translateY: 30, opacity: 0 }}
              viewport={{ once: true }}

              whileInView={{
                translateY: 0,
                opacity: 1,
                transition: { duration: 0.5, delay: 0.5 }
              }}>
              <div className="my-2">
                <h2 className="text-lg font-bold text-center dark:text-white">Data Analysis Fundamentals.</h2>
                <p className="text-center dark:text-white">Explore a variety of datasets, posing and answering your own questions about each.</p>
              </div>
            </motion.div>
            <Link
              href={`https://drive.google.com/file/d/1tnA9YlmapjNED_DaiJhgAX8-rARAScgq/view?usp=drive_link`}
              target="_blank" className="mt-4 md:ml-1 ml-4 md:hidden w-36 py-2.5 block hover:shadow-lg border-[2px] border-transparent hover:border-white bg-blue-500 rounded-3xl text-white dark:bg-gray-700 dark:text-white text-center transition-all ease-in-out duration-300">View</Link>
          </div>



        </div>
        <div className="mx-auto max-w-screen-sm my-4">
          <h1 className='md:text-xl text-lg font-bold text-center dark:text-white my-1'>College</h1>
        </div>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
          <div className="">
            <div className="rounded-xl group relative overflow-hidden w-full p-4">
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                viewport={{ once: true }}

                whileInView={{
                  scale: 1,
                  opacity: 1,
                  transition: { duration: 0.5 }
                }}>
                <Image
                  src="/cert/certificate.png"
                  width={0}
                  height={0}
                  sizes="100vh"
                  className="w-full h-48 object-scale-down"

                  alt="Screenshots of the dashboard project showing desktop version"
                />
              </motion.div>
              <div className="md:flex absolute dark:bg-gray-900/55 top-0 bottom-0 right-0 left-0 z-10 hidden items-center justify-center bg-blue-900/20 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out">

                <Link
                  href={`/cert/4.jpg`}
                  target="_blank"

                >
                  <button className="border-2 border-white absolute z-50 -translate-x-1/2 top-1/2 -translate-y-1/2 left-1/2 w-16 h-9 rounded-lg bg-blue-600 flex items-center justify-center dark:border-white font-bold dark:bg-gray-700 dark:text-white text-white">View</button>
                  <button className="absolute -translate-x-1/2 top-1/2  bg-white scale-100 -translate-y-1/2 left-1/2 w-16 h-9 rounded-lg group-hover:scale-150 opacity-100 group-hover:opacity-0  flex items-center justify-center transition-all duration-500 ease-in-out"></button>
                </Link>
              </div>

            </div>
            <motion.div
              initial={{ translateY: 80, opacity: 0 }}
              viewport={{ once: true }}

              whileInView={{
                translateY: 0,
                opacity: 1,
                transition: { duration: 0.7, delay: 0.2 }
              }}>
              <div className="my-2">
                <h2 className="text-lg font-bold text-center dark:text-white">A degree certificate </h2>
                <p className="text-center dark:text-white md:p-0 p-3">Diploma awarded by an educational establishment showing that I have successfully completed Information Technology</p>
                <Link
                  href={`/cert/4.jpg`}
                  target="_blank" className="mt-4 md:ml-1 ml-4 md:hidden w-36 py-2.5 block hover:shadow-lg border-[2px] border-transparent hover:border-white bg-blue-500 rounded-3xl text-white dark:bg-gray-700 dark:text-white text-center transition-all ease-in-out duration-300">View</Link>
              </div>
            </motion.div>
          </div>
          <div className="">



            <div className="rounded-xl group relative overflow-hidden w-full p-4">
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                viewport={{ once: true }}

                whileInView={{
                  scale: 1,
                  opacity: 1,
                  transition: { duration: 0.7, delay: 0.2 }
                }}>
                <Image
                  src="/cert/gpa.png"
                  width={0}
                  height={0}
                  sizes="100vh"
                  className="w-full h-48 object-scale-down"

                  alt="Screenshots of the dashboard project showing desktop version"
                />
              </motion.div>
              <div className="md:flex absolute dark:bg-gray-900/55 top-0 bottom-0 right-0 left-0 z-10 hidden items-center justify-center bg-blue-900/20 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out">

                <Link
                  href={`/cert/5.jpg`}
                  target="_blank"

                >
                  <button className="border-2 border-white absolute z-50 -translate-x-1/2 top-1/2 -translate-y-1/2 left-1/2 w-16 h-9 rounded-lg bg-blue-600 flex items-center justify-center dark:border-white font-bold dark:bg-gray-700 dark:text-white text-white">View</button>
                  <button className="absolute -translate-x-1/2 top-1/2  bg-white scale-100 -translate-y-1/2 left-1/2 w-16 h-9 rounded-lg group-hover:scale-150 opacity-100 group-hover:opacity-0  flex items-center justify-center transition-all duration-500 ease-in-out"></button>
                </Link>
              </div>

            </div>
            <motion.div
              initial={{ translateY: 80, opacity: 0.8 }}
              viewport={{ once: true }}

              whileInView={{
                translateY: 0,
                opacity: 1,
                transition: { duration: 0.7, delay: 0.3 }
              }}>
              <div className="my-2">
                <h2 className="text-lg font-bold text-center dark:text-white">A degree student record </h2>
                <p className="text-center dark:text-white md:p-0 p-3">Official document maintained by an educational institution that details a students entire academic history throughout their pursuit of a specific degree, including all courses taken, grades received</p>
                <Link
                  href={`/cert/5.jpg`} target="_blank" className="mt-4 md:ml-1 ml-4 md:hidden w-36 py-2.5 block hover:shadow-lg border-[2px] border-transparent hover:border-white bg-blue-500 rounded-3xl text-white dark:bg-gray-700 dark:text-white text-center transition-all ease-in-out duration-300">View</Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}