'use client'
import { EyeIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

export default function Works() {
  return (
    <section className="w-full bg-slate-100 my-1 md:p-4 p-2" id="works">

      <div className="mx-auto max-w-screen-sm p-5">

        <h1 className='md:text-3xl text-2xl font-bold text-center mb-1'>Works</h1>
        <p className="text-slate-700 md:text-center text-justify md:p-0 p-4 w-full">These are some of the projects I have worked and participated on up until now.</p>
      </div>

      <div className="mx-auto max-w-screen-xl">

        <div className="grid md:grid-cols-3 grid-cols-1 gap-4 ">

          <div className="p-2 bg-white shadow-sm hover:shadow-lg group">
            <div className=""> 
              <Image
                src="/3.png"
                alt="next starter project"
                width={200}
                height={200}
                
                className="block w-full h-full group-hover:brightness-75 transition-all duration-300 ease-in-out"
              />
            </div>

            <div className="py-2 mt-2 px-4">
              <p>Simple shopping cart application in next js frame work</p>
              <div className="flex">
                <div className="mt-2">
                  <EyeIcon className="cursor-pointer" color="orange" width={25} height={25} />
                </div>
              </div>
            </div>
          </div>

          <div className="p-2 bg-white shadow-sm hover:shadow-lg group">
            <div>
            <Image
                src="/3.png"
                alt="next starter project"
                width={200}
                height={200}
                
                className="block w-full h-full group-hover:brightness-75 transition-all duration-300 ease-in-out"
              />
            </div>

            <div className="py-2 mt-2 px-4">
              <p>Simple shopping cart application in next js frame work</p>
              <div className="flex">
                <div className="mt-2">
                  <EyeIcon className="cursor-pointer" color="orange" width={25} height={25} />
                </div>
              </div>
            </div>
          </div>

          <div className="p-2 bg-white shadow-sm hover:shadow-lg group">
            <div>
            <Image
                src="/3.png"
                alt="next starter project"
                width={200}
                height={200}
                
                className="block w-full h-full group-hover:brightness-75 transition-all duration-300 ease-in-out"
              />
            </div>

            <div className="py-2 mt-2 px-4">
              <p>Simple shopping cart application in next js frame work</p>
              <div className="flex">
                <div className="mt-2">
                  <EyeIcon className="cursor-pointer" color="orange" width={25} height={25} />
                </div>
              </div>
            </div>
          </div>

          <div className="p-2 bg-white shadow-sm hover:shadow-lg group">
            <div>
            <Image
                src="/3.png"
                alt="next starter project"
                width={200}
                height={200}
                
                className="block w-full h-full group-hover:brightness-75 transition-all duration-300 ease-in-out"
              />
            </div>

            <div className="py-2 mt-2 px-4">
              <p>Simple shopping cart application in next js frame work</p>
              <div className="flex">
                <div className="mt-2">
                  <EyeIcon className="cursor-pointer" color="orange" width={25} height={25} />
                </div>
              </div>
            </div>
          </div>

          <div className="p-2 bg-white shadow-sm hover:shadow-lg group">
            <div>
            <Image
                src="/3.png"
                alt="next starter project"
                width={200}
                height={200}
                
                className="block w-full h-full group-hover:brightness-75 transition-all duration-1000 ease-in-out"
              />
            </div>

            <div className="py-3 mt-2 px-4">
              <p>Simple shopping cart application in next js frame work</p>
              <div className="flex">
                <div className="mt-2">
                  <EyeIcon className="cursor-pointer" color="orange" width={25} height={25} />
                </div>
              </div>
            </div>
          </div>

          <div className="p-2 bg-white shadow-sm hover:shadow-lg group">
            <div>
            <Image
                src="/3.png"
                alt="next starter project"
                width={200}
                height={200}
                
                className="block w-full h-full group-hover:brightness-75 transition-all duration-300 ease-in-out"
              />
            </div>

            <div className="py-2 mt-2 px-4">
              <p>Simple shopping cart application in next js frame work</p>
              <div className="flex">
                <div className="mt-2">
                  <EyeIcon className="cursor-pointer" color="orange" width={25} height={25} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>




    </section>
  )
}