'use client'
import Image from "next/image";
import Link from "next/link";
import { SocialIcon } from "react-social-icons";

export default function Footer() {
  return (
    <section className="w-full pt-3 bg-slate-900 dark:bg-black">

      <div className="mx-auto w-full text-white">
        <div className="p-3 pt-3">
          <div className="flex flex-row md:flex-nowrap flex-wrap gap-x-4 md:items-center md:justify-center">
          <div className="w-16 h-16 felx items-center justify-center">
            <Image
              src="/99.png"
              alt="Amanuel Ferede"
              width={0}
              height={0}
              sizes="100vh"
              className="w-full h-full rounded-full object-cover bg-orange-500"
              />
            </div>
            <div className="flex flex-col">
              <p className="dark:text-slate-300">Amanuel Ferede</p>
              <p className="dark:text-slate-300">Fullstack Software Engineer</p>
              
            </div>
            
            <div className="md:mt-0 mt-4 dark:text-slate-300">
              Site made with Next.Js and tailwindcss, hosted on Vercel.
            </div>
            
          </div>
        </div>
      </div>

    </section>
  )
}