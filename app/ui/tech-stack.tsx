'use client'
import Image from "next/image";

export default function TechStacks() {
  return (
    <section className="w-full py-2 dark:bg-black dark:mt-0.5" id="skills">

      <div className="mx-auto max-w-screen-sm">
        <h1 className='md:text-xl text-lg font-bold text-center mb-1 dark:text-slate-400'>Tech Stacks</h1>
        <p className="text-center mb-2 dark:text-slate-200 px-3">Here are a list of tools, libraries and platforms I have had precious experience on.</p>
      </div>
      <div className="mx-auto max-w-screen-xl">
        <div className="grid md:grid-cols-3 grid-cols-2 md:gap-3 gap-1">

          <div className="flex flex-col items-center justify-center md:bg-gray-50 md:hover:drop-shadow-md transition duration-200 ease-out md:rounded-md p-5 dark:bg-gray-900">
            <div className="flex items-center justify-center bg-slate-100 rounded-full w-20 h-20 dark:bg-gray-600 dark:p-4">

              <Image
                src="/physics.png"
                width={0}
                height={0}
                sizes="100vh"
                className="w-full h-full object-cover"

                alt="Screenshots of the dashboard project showing desktop version"
              />
            </div>
            <div>
              <p className='my-1 font-bold text-center text-slate-800 dark:text-slate-300'>React</p>
              <div className="w-[50] h-[2] mx-auto bg-orange-600 md:block hidden"></div>
            </div>
          </div>


          <div className="flex flex-col items-center justify-center md:bg-gray-50 md:hover:drop-shadow-md transition duration-200 ease-out rounded-lg p-5 dark:bg-gray-900">
            <div className="flex items-center justify-center bg-slate-100 rounded-full w-20 h-20 dark:bg-gray-600 dark:p-4">

              <Image
                src="/nextjs-icon.png"
                width={0}
                height={0}
                sizes="100vh"
                className="w-full h-full object-cover"

                alt="Screenshots of the dashboard project showing desktop version"
              />
            </div>
            <div>
              <p className='my-1 font-bold text-center text-slate-800 dark:text-slate-300'>Next.js</p>
              <div className="w-[50] h-[2] mx-auto bg-orange-600 md:block hidden"></div>
            </div>
          </div>


          <div className="flex flex-col items-center justify-center md:bg-gray-50 md:hover:drop-shadow-md transition duration-200 ease-out rounded-lg p-5 dark:bg-gray-900">
            <div className="flex items-center justify-center bg-slate-100 rounded-full w-20 h-20 dark:bg-gray-600 dark:p-4">

              <Image
                src="/pngwing.com.png"
                width={0}
                height={0}
                sizes="100vh"
                className="w-full h-full object-cover"

                alt="Screenshots of the dashboard project showing desktop version"
              />
            </div>
            <div>
              <p className='my-1 font-bold text-center text-slate-800 dark:text-slate-300'>Node .js</p>
              <div className="w-[50] h-[2] mx-auto bg-orange-600 md:block hidden"></div>
            </div>
          </div>


          <div className="flex flex-col items-center justify-center md:bg-gray-50 md:hover:drop-shadow-md transition duration-200 ease-out rounded-lg p-5 dark:bg-gray-900">
            <div className="flex items-center justify-center bg-slate-100 rounded-full w-20 h-20 dark:bg-gray-600 dark:p-4">

              <Image
                src="/pngwing.com (1).png"
                width={0}
                height={0}
                sizes="100vh"
                className="w-full h-full object-cover"

                alt="Screenshots of the dashboard project showing desktop version"
              />
            </div>
            <div>
              <p className='my-1 font-bold text-center text-slate-800 dark:text-slate-300'>MongoDb / SQL</p>
              <div className="w-[50] h-[2] mx-auto bg-orange-600 md:block hidden"></div>
            </div>
          </div>


          <div className="flex flex-col items-center justify-center md:bg-gray-50 md:hover:drop-shadow-md transition duration-200 ease-out rounded-lg p-5 dark:bg-gray-900">
            <div className="flex items-center justify-center bg-slate-100 rounded-full w-20 h-20 dark:bg-gray-600 dark:p-4">

              <Image
                src="/pngegg.png"
                width={0}
                height={0}
                sizes="100vh"
                className="w-full h-full object-cover"

                alt="Screenshots of the dashboard project showing desktop version"
              />
            </div>
            <div>
              <p className='my-1 font-bold text-center text-slate-800 dark:text-slate-300'>Javascript / Typescript</p>
              <div className="w-[50] h-[2] mx-auto bg-orange-600 md:block hidden"></div>
            </div>
          </div>


          <div className="flex flex-col items-center justify-center md:bg-gray-50 md:hover:drop-shadow-md transition duration-200 ease-out rounded-lg p-5 dark:bg-gray-900">
            <div className="flex items-center justify-center bg-slate-100 rounded-full w-20 h-20 dark:bg-gray-600 dark:p-4">

              <Image
                src="/Tailwind CSS.png"
                width={0}
                height={0}
                sizes="100vh"
                className="w-full h-full object-cover"

                alt="Screenshots of the dashboard project showing desktop version"
              />
            </div>
            <div>
              <p className='my-1 font-bold text-center text-slate-800 dark:text-slate-300'>Css / TailwindCss</p>
              <div className="w-[50] h-[2] mx-auto bg-orange-600 md:block hidden"></div>
            </div>
          </div>

        </div>

      </div>

    </section>
  )
}