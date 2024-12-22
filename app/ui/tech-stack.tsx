'use client'
import Image from "next/image";

export default function TechStacks() {
  return (
    <section className="w-full py-2" id="skills">

      <div className="mx-auto max-w-screen-sm">
        <h1 className='md:text-3xl text-2xl font-bold text-center mb-1'>Tech Stacks</h1>
        <p className="text-center mb-2">Here are a list of tools, libraries and platforms I have had precious experience on. I have rated my experience level out of five</p>
      </div>
      <div className="mx-auto max-w-screen-xl p-4">
        <div className="grid md:grid-cols-3 grid-cols-2 gap-3">

          <div className="flex flex-col items-center justify-center md:bg-gray-50 md:hover:drop-shadow-md transition duration-200 ease-out rounded-lg p-5">
            <div className="flex items-center justify-center bg-slate-100 rounded-full w-20 h-20">

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
              <p className='text-lg my-1 font-bold text-center text-slate-800'>React</p>
              <div className="w-[50] h-[2] mx-auto bg-orange-600 md:block hidden"></div>
            </div>
          </div>


          <div className="flex flex-col items-center justify-center md:bg-gray-50 md:hover:drop-shadow-md transition duration-200 ease-out rounded-lg p-5">
            <div className="flex items-center justify-center bg-slate-100 rounded-full w-20 h-20">

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
              <p className='text-lg my-1 font-bold text-center text-slate-800'>Next.js</p>
              <div className="w-[50] h-[2] mx-auto bg-orange-600 md:block hidden"></div>
            </div>
          </div>


          <div className="flex flex-col items-center justify-center md:bg-gray-50 md:hover:drop-shadow-md transition duration-200 ease-out rounded-lg p-5">
            <div className="flex items-center justify-center bg-slate-100 rounded-full w-20 h-20">

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
              <p className='text-lg my-1 font-bold text-center text-slate-800'>Node .js</p>
              <div className="w-[50] h-[2] mx-auto bg-orange-600 md:block hidden"></div>
            </div>
          </div>


          <div className="flex flex-col items-center justify-center md:bg-gray-50 md:hover:drop-shadow-md transition duration-200 ease-out rounded-lg p-5">
            <div className="flex items-center justify-center bg-slate-100 rounded-full w-20 h-20">

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
              <p className='text-lg my-1 font-bold text-center text-slate-800'>MongoDb / SQL</p>
              <div className="w-[50] h-[2] mx-auto bg-orange-600 md:block hidden"></div>
            </div>
          </div>


          <div className="flex flex-col items-center justify-center md:bg-gray-50 md:hover:drop-shadow-md transition duration-200 ease-out rounded-lg p-5">
            <div className="flex items-center justify-center bg-slate-100 rounded-full w-20 h-20">

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
              <p className='text-lg my-1 font-bold text-center text-slate-800'>Javascript / Typescript</p>
              <div className="w-[50] h-[2] mx-auto bg-orange-600 md:block hidden"></div>
            </div>
          </div>


          <div className="flex flex-col items-center justify-center md:bg-gray-50 md:hover:drop-shadow-md transition duration-200 ease-out rounded-lg p-5">
            <div className="flex items-center justify-center bg-slate-100 rounded-full w-20 h-20">

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
              <p className='text-lg my-1 font-bold text-center text-slate-800'>Css / TailwindCss</p>
              <div className="w-[50] h-[2] mx-auto bg-orange-600 md:block hidden"></div>
            </div>
          </div>

        </div>

      </div>

    </section>
  )
}