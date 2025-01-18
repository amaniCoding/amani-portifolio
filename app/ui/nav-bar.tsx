'use client'

import { useContext, useEffect, useState } from "react"
import clsx from "clsx";
import Image from 'next/image';
import Link from "next/link";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";
import { AppContext } from "../Provider/provider";
import { GlobalContextType } from "../types/types";


export default function Navbar() {
    const { state, dispatch } = useContext(AppContext) as GlobalContextType;
    const [showCollapse, setShowCollapse] = useState(false);


    const handelCollapse = () => {
        setShowCollapse(!showCollapse);
    }
    const hadelScroll = (e: React.MouseEvent<HTMLElement>, name: string) => {
        e.preventDefault()
        window.scrollTo({
            // @ts-expect-error: Object is possibly 'null'.
            top: document.querySelector(`#${name}`).offsetTop,
            behavior: "smooth"
        });
        setShowCollapse(false);
    }
    const handelDarkMode = () => {
        if (state.modal?.isDark) {
            dispatch({ type: "SET_DARK", payload: false });
        } else {
            dispatch({ type: "SET_DARK", payload: true});
        }
        document.body.classList.toggle("dark");

    }

    useEffect(() => {
        if (state.modal?.isDark) {
            document.body.classList.add("dark");
        } else {
            document.body.classList.remove("dark");
        }
        console.log(localStorage.getItem("isDark"));

    }, [state.modal?.isDark])

    
    return (
        <nav className="bg-white shadow-md fixed w-full z-20 top-0 left-0 right-0 dark:bg-black">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-2 relative">
                <Link href={`#`} onClick={(e) => { hadelScroll(e, "home") }} className="flex items-center space-x-3 md:pl-0 pl-5">
                    <Image
                        src="/99.jpg"
                        alt="Amanuel Ferede"
                        width={0}
                        height={0}
                        sizes='100vh'

                        className="block w-12 h-12 rounded-full object-cover border-6 border-orange-700 bg-orange-600"
                    />
                    <span className="self-center md:text-2xl text-lg whitespace-nowrap dark:text-white">Amanuel Ferede</span>
                </Link>

                <div className={
                    clsx("w-full bg-orange-50 md:block md:w-auto md:static absolute top-16 right-0 left-0 z-10 dark:bg-black",
                        {
                            "hidden": showCollapse === false
                        }

                    )
                }>
                    <ul className="flex flex-col mt-4 dark:bg-black md:bg-white md:flex-row md:space-x-2 rtl:space-x-reverse md:mt-0 md:border-0 dark:md:bg-black">
                        <li>
                            <Link href="#" onClick={(e) => { hadelScroll(e, "home") }} className="block py-2 md:px-3 px-5 text-black rounded-md md:hover:bg-orange-700 dark:hover:bg-gray-600 md:hover:text-white hover:bg-slate-200 hover:text-black dark:text-white transition duration-500 ease-in-out" aria-current="page">Home</Link>
                        </li>
                        <li>
                            <Link href="#" onClick={(e) => { hadelScroll(e, "about-me") }} className="block py-2 md:px-3 px-5 text-black rounded-md md:hover:bg-orange-700 dark:hover:bg-gray-600 md:hover:text-white hover:bg-slate-200 hover:text-black dark:text-white transition duration-500 ease-in-out" aria-current="page">About Me</Link>
                        </li>
                        <li>
                            <Link href="#" onClick={(e) => { hadelScroll(e, "works") }} className="block py-2 md:px-3 px-5 text-black rounded-md md:hover:bg-orange-700 dark:hover:bg-gray-600 md:hover:text-white hover:bg-slate-200 hover:text-black dark:text-white transition duration-500 ease-in-out" aria-current="page">Works</Link>
                        </li>
                       
                        <li>
                            <Link href="#" onClick={(e) => { hadelScroll(e, "skills") }} className="block py-2 md:px-3 px-5 text-black rounded-md md:hover:bg-orange-700 dark:hover:bg-gray-600 md:hover:text-white hover:bg-slate-200 hover:text-black dark:text-white transition duration-500 ease-in-out" aria-current="page">Skills</Link>
                        </li>
                        <li>
                            <Link href="#" onClick={(e) => { hadelScroll(e, "certificates") }} className="block py-2 md:px-3 px-5 text-black rounded-md md:hover:bg-orange-700 dark:hover:bg-gray-600 md:hover:text-white hover:bg-slate-200 hover:text-black dark:text-white transition duration-500 ease-in-out" aria-current="page">Certificates</Link>
                        </li>
                    </ul>
                </div>

                {
                    state.modal.isDark === false && (<MoonIcon className="h-8 w-8 cursor-pointer stroke-black" onClick={handelDarkMode} />)
                }
                
                {
                    state.modal?.isDark === true && (<SunIcon className="h-8 w-8 cursor-pointer stroke-white dark:stroke-white" onClick={handelDarkMode} />) 
                }

                
       
                <button onClick={handelCollapse} type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-white mr-5" aria-controls="navbar-default" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                </button>
            </div>
        </nav>
    )
}