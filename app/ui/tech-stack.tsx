'use client'
import Image from "next/image";

export default function TechStacks() {
  return (
    <section className="w-full my-1 md:p-4 p-2" id="skills">

      <div className="mx-auto max-w-screen-sm my-3">
        <h1 className='md:text-3xl text-2xl font-bold text-center my-1'>Tech Stacks</h1>
        <p className="text-slate-600 md:text-center text-justify md:p-0 p-4">Here are a list of tools, libraries and platforms I have had precious experience on. I have rated my experience level out of five</p>
      </div>
      <div className="mx-auto max-w-screen-2xl p-4">
        <div className="grid md:grid-cols-3 grid-cols-2 gap-3 px-3">

          <div className="flex flex-col items-center justify-center">
            <div className="flex items-center justify-center p-3 bg-slate-50 rounded-full w-24 h-24">
              
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
              <p className='text-lg my-2 font-bold text-center text-slate-800'>React</p>
            <div className="w-[50] my-2 h-[2] mx-auto bg-orange-600 md:block hidden"></div>
            </div>
          </div>


          <div className="flex flex-col items-center justify-center">
            <div className="flex items-center justify-center p-3 bg-slate-50 rounded-full w-24 h-24">
              
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
              <p className='text-lg my-2 font-bold text-center text-slate-800'>Next.js</p>
            <div className="w-[50] my-2 h-[2] mx-auto bg-orange-600 md:block hidden"></div>
            </div>
          </div>


          <div className="flex flex-col items-center justify-center">
            <div className="flex items-center justify-center p-3 bg-slate-50 rounded-full w-24 h-24">
              
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
              <p className='text-lg my-2 font-bold text-center text-slate-800'>Node .js</p>
            <div className="w-[50] my-2 h-[2] mx-auto bg-orange-600 md:block hidden"></div>
            </div>
          </div>


          <div className="flex flex-col items-center justify-center">
            <div className="flex items-center justify-center p-3 bg-slate-50 rounded-full w-24 h-24">
              
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
              <p className='text-lg my-2 font-bold text-center text-slate-800'>MongoDb / SQL</p>
            <div className="w-[50] my-2 h-[2] mx-auto bg-orange-600 md:block hidden"></div>
            </div>
          </div>


          <div className="flex flex-col items-center justify-center">
            <div className="flex items-center justify-center p-3 bg-slate-50 rounded-full w-24 h-24">
              
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
              <p className='text-lg my-2 font-bold text-center text-slate-800'>Javascript / Typescript</p>
            <div className="w-[50] my-2 h-[2] mx-auto bg-orange-600 md:block hidden"></div>
            </div>
          </div>


          <div className="flex flex-col items-center justify-center">
            <div className="flex items-center justify-center p-3 bg-slate-50 rounded-full w-24 h-24">
              
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
              <p className='text-lg my-2 font-bold text-center text-slate-800'>Css / TailwindCss</p>
            <div className="w-[50] my-2 h-[2] mx-auto bg-orange-600 md:block hidden"></div>
            </div>
          </div>

        </div>

      </div>

    </section>
  )
}