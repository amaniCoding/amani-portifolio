'use client'
import Image from "next/image";
import Link from "next/link";

export default function Certificates() {
  return (
    <section className="w-full my-1 dark:pt-4 dark:mb-0 dark:mt-0 dark:bg-slate-800" id="certificates">

      <div className="mx-auto max-w-screen-sm">
        <h1 className='md:text-xl text-lg font-bold text-center my-1 dark:text-slate-400'>Certificates</h1>
      </div>
      <div className="mx-auto max-w-screen-lg">
        <div className="grid md:grid-cols-5 grid-cols-3 gap-3">
          <div className="rounded-xl shadow-sm group relative overflow-hidden h-44 w-full">
            <div className="absolute top-0 bottom-0 right-0 left-0 z-40 items-center hidden md:flex md:opacity-0 justify-center bg-slate-200/95 md:group-hover:opacity-100 transition-all duration-500 ease-out dark:md:group-hover:bg-slate-500">
              <Link
                href={`https://drive.google.com/file/d/1dIh8GzqCrVIhRDBdL8UJg_AoWbjECaO6/view?usp=drive_link`}
                target="_blank"
              >
                <button className="rounded-lg p-2 bg-gray-900 text-white border-2 border-white dark:bg-slate-900 da dark:text-slate-200">Show More</button>
              </Link>
            </div>
            <div className="flex flex-col items-center justify-center h-full">

              <Image
                src="/cert/programming.png"
                width={0}
                height={0}
                sizes="100vh"
                className="w-20 h-20 object-cover group-hover:brightness-75 md:group-hover:scale-105 md:transition duration-300 ease-in-out md:block hidden"

                alt="Screenshots of the dashboard project showing desktop version"
              />
              <Link
                href={`https://drive.google.com/file/d/1dIh8GzqCrVIhRDBdL8UJg_AoWbjECaO6/view?usp=drive_link`}
                target="_blank"
                className="md:hidden block"
              >
                <Image
                  src="/cert/programming.png"
                  width={0}
                  height={0}
                  sizes="100vh"
                  className="w-20 h-20 block object-cover group-hover:brightness-75 md:group-hover:scale-105 md:transition duration-300 ease-in-out"

                  alt="Screenshots of the dashboard project showing desktop version"
                />
              </Link>

              <p className="text-sm font-bold text-center text-black dark:text-slate-400 mt-2">Fundamentals Of Programming</p>
            </div>
          </div>
          <div className="rounded-xl shadow-sm group relative overflow-hidden h-44 w-full">
            <div className="absolute top-0 bottom-0 right-0 left-0 z-40 items-center hidden md:flex md:opacity-0 justify-center bg-slate-200/95 md:group-hover:opacity-100 transition-all duration-500 ease-out dark:md:group-hover:bg-slate-500">
              <Link
                href={`https://drive.google.com/file/d/1-drrQKZyWwPapXiK0zSy81mg4k42E2bG/view?usp=drive_link`}
                target="_blank"
              >
                <button className="rounded-lg p-2 bg-gray-900 text-white border-2 border-white dark:bg-slate-900 dark:text-slate-200">Show More</button>
              </Link>
            </div>
            <div className="flex flex-col items-center justify-center h-full">

              <Image
                src="/cert/pro.png"
                width={0}
                height={0}
                sizes="100vh"
                className="w-20 h-20 md:block hidden object-cover group-hover:brightness-75 md:group-hover:scale-105 md:transition duration-300 ease-in-out"

                alt="Screenshots of the dashboard project showing desktop version"
              />
              <Link
                href={`https://drive.google.com/file/d/1-drrQKZyWwPapXiK0zSy81mg4k42E2bG/view?usp=drive_link`}
                target="_blank"
                className="md:hidden block"
              >
                <Image
                  src="/cert/pro.png"
                  width={0}
                  height={0}
                  sizes="100vh"
                  className="w-20 h-20 block object-cover group-hover:brightness-75 md:group-hover:scale-105 md:transition duration-300 ease-in-out"

                  alt="Screenshots of the dashboard project showing desktop version"
                />
              </Link>
              <p className="text-sm font-bold text-center text-black dark:text-slate-400 mt-2">Fundamentals Of Android Programming
              </p>
            </div>
          </div>
          <div className="rounded-xl shadow-sm group relative overflow-hidden h-44 w-full">
            <div className="absolute top-0 bottom-0 right-0 left-0 z-40 items-center hidden md:flex md:opacity-0 justify-center bg-slate-200/95 md:group-hover:opacity-100 transition-all duration-500 ease-out dark:md:group-hover:bg-slate-500">
              <Link
                href={`https://drive.google.com/file/d/1tnA9YlmapjNED_DaiJhgAX8-rARAScgq/view?usp=drive_link`}
                target="_blank"
              >
                <button className="rounded-lg p-2 bg-gray-900 text-white border-2 border-white dark:bg-slate-900 dark:text-slate-200">Show More</button>
              </Link>
            </div>
            <div className="flex flex-col items-center justify-center h-full">

              <Image
                src="/cert/exploration.png"
                width={0}
                height={0}
                sizes="100vh"
                className="w-20 h-20 md:block hidden object-cover group-hover:brightness-75 md:group-hover:scale-105 md:transition duration-300 ease-in-out"

                alt="Screenshots of the dashboard project showing desktop version"
              />
              <Link
                href={`https://drive.google.com/file/d/1tnA9YlmapjNED_DaiJhgAX8-rARAScgq/view?usp=drive_link`}
                target="_blank"
                className="md:hidden block"
              >
                <Image
                  src="/cert/exploration.png"
                  width={0}
                  height={0}
                  sizes="100vh"
                  className="w-20 h-20 block object-cover group-hover:brightness-75 md:group-hover:scale-105 md:transition duration-300 ease-in-out"

                  alt="Screenshots of the dashboard project showing desktop version"
                />
              </Link>
              <p className="text-sm font-bold text-center text-black dark:text-slate-400 mt-2">Data Analysis Fundamentals</p>
            </div>
          </div>
          <div className="rounded-xl shadow-sm group relative overflow-hidden h-44 w-full">
            <div className="absolute top-0 bottom-0 right-0 left-0 z-40 items-center hidden md:flex md:opacity-0 justify-center bg-slate-200/95 md:group-hover:opacity-100 transition-all duration-500 ease-out dark:md:group-hover:bg-slate-500">
              <Link
                href={`/cert/4.jpg`}
                target="_blank"
              >
                <button className="rounded-lg p-2 bg-gray-900 text-white border-2 border-white dark:bg-slate-900 dark:text-slate-200">Show More</button>
              </Link>
            </div>
            <div className="flex flex-col items-center justify-center h-full">

              <Image
                src="/cert/certificate.png"
                width={0}
                height={0}
                sizes="100vh"
                className="w-20 h-20 md:block hidden object-cover group-hover:brightness-75 md:group-hover:scale-105 md:transition duration-300 ease-in-out"

                alt="Screenshots of the dashboard project showing desktop version"
              />
              <Link
                href={`/cert/4.jpg`}
                target="_blank"
                className="md:hidden block"
              >
                <Image
                  src="/cert/certificate.png"
                  width={0}
                  height={0}
                  sizes="100vh"
                  className="w-20 h-20 block object-cover group-hover:brightness-75 md:group-hover:scale-105 md:transition duration-300 ease-in-out"

                  alt="Screenshots of the dashboard project showing desktop version"
                />
              </Link>
              <p className="text-sm font-bold text-center text-black dark:text-slate-400 mt-2">Degree Certificate</p>
            </div>
          </div>
          <div className="rounded-xl shadow-sm group relative overflow-hidden h-44 w-full">
            <div className="absolute top-0 bottom-0 right-0 left-0 z-40 items-center hidden md:flex md:opacity-0 justify-center bg-slate-200/95 md:group-hover:opacity-100 transition-all duration-500 ease-out dark:md:group-hover:bg-slate-500">
              <Link
                href={`/cert/5.jpg`}
                target="_blank"
              >
                <button className="rounded-lg p-2 bg-gray-900 text-white border-2 border-white dark:bg-slate-900 dark:text-slate-200">Show More</button>
              </Link>
            </div>
            <div className="flex flex-col items-center justify-center h-full">

              <Image
                src="/cert/programming.png"
                width={0}
                height={0}
                sizes="100vh"
                className="w-20 h-20 md:block hidden object-cover group-hover:brightness-75 md:group-hover:scale-105 md:transition duration-300 ease-in-out"

                alt="Screenshots of the dashboard project showing desktop version"
              />
              <Link
                href={`/cert/5.jpg`}
                target="_blank"
                className="md:hidden block"
              >
                <Image
                  src="/cert/certificate.png"
                  width={0}
                  height={0}
                  sizes="100vh"
                  className="w-20 h-20 block object-cover group-hover:brightness-75 md:group-hover:scale-105 md:transition duration-300 ease-in-out"

                  alt="Screenshots of the dashboard project showing desktop version"
                />
              </Link>
              <p className="text-sm font-bold text-center text-black dark:text-slate-400 mt-2">Student Record</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}