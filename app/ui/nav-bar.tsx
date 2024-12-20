'use client'

import React, { useState } from "react"
import clsx from "clsx";
import Image from 'next/image';
import Link from "next/link";

export default function Navbar() {
    const [showCollapse, setShowCollapse] = useState(false);
    const handelCollapse = () => {
        setShowCollapse(!showCollapse);
    }
    const hadelScroll = (e: React.MouseEvent<HTMLElement> ,name: string) => {
        e.preventDefault()
        window.scrollTo({
            // @ts-ignore: Object is possibly 'null'.
            top: document.querySelector(`#${name}`).offsetTop-72,
            behavior: "smooth"
        });
        setShowCollapse(false);
    }
    return (
        <nav className="bg-white shadow-md fixed w-full z-20 top-0 left-0 right-0">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 relative">
                <Link href={`https://zeamanuel.vercel.app/`} className="flex items-center space-x-3">
                    <Image
                        src="/7.png"
                        alt="Amanuel Ferede"
                        width={0}
                        height={0}
                        sizes='100vh'

                        className="block w-10 h-10 rounded-full object-cover border-1 border-orange-700 p-1"
                    />
                    <span className="self-center text-2xl whitespace-nowrap dark:text-white">Amanuel</span>
                </Link>
                <button onClick={handelCollapse} type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                </button>
                <div className={
                    clsx("w-full md:block md:w-auto md:static absolute top-14 right-0 left-0 z-10",
                        {
                            "hidden": showCollapse === false
                        }

                    )
                }>
                    <ul className="flex flex-col mt-4 border border-gray-100 rounded-lg bg-orange-50 md:flex-row md:space-x-2 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white">
                        <li>
                            <Link href="#" onClick={(e) => {hadelScroll(e, "home")}} className="block py-2 px-3 text-whit rounded md:hover:bg-orange-500 md:hover:text-white hover:bg-slate-200 hover:text-black" aria-current="page">Home</Link>
                        </li>
                        <li>
                            <Link href="#" onClick={(e) => {hadelScroll(e, "about-me")}} className="block py-2 px-3 text-whit rounded md:hover:bg-orange-500 md:hover:text-white hover:bg-slate-200 hover:text-black" aria-current="page">About Me</Link>
                        </li>
                        <li>
                            <Link href="#" onClick={(e) => {hadelScroll(e, "works")}} className="block py-2 px-3 text-whit rounded md:hover:bg-orange-500 md:hover:text-white hover:bg-slate-200 hover:text-black" aria-current="page">Works</Link>
                        </li>
                        <li>
                            <Link href="#" onClick={(e) => {hadelScroll(e, "contact-me")}} className="block py-2 px-3 text-whit rounded md:hover:bg-orange-500 md:hover:text-white hover:bg-slate-200 hover:text-black" aria-current="page">Contact Me</Link>
                        </li>
                        <li>
                            <Link href="#" onClick={(e) => {hadelScroll(e, "skills")}}  className="block py-2 px-3 text-whit rounded md:hover:bg-orange-500 md:hover:text-white hover:bg-slate-200 hover:text-black" aria-current="page">Skills</Link>
                        </li>
                        <li>
                            <Link href="#" onClick={(e) => {hadelScroll(e, "certificates")}}  className="block py-2 px-3 text-whit rounded md:hover:bg-orange-500 md:hover:text-white hover:bg-slate-200 hover:text-black" aria-current="page">Certificates</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}