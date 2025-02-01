'use client'

import { useContext, useEffect, useRef, useState } from "react"
import clsx from "clsx";
import Link from "next/link";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";
import { AppContext } from "../Provider/provider";
import { GlobalContextType } from "../types/types";


export default function Navbar() {
    const { state, dispatch } = useContext(AppContext) as GlobalContextType;
    const [showCollapse, setShowCollapse] = useState(false);
    const navbar = useRef<HTMLElement>(null);
    const [isNavBarSticky, setisNavBarSticky] = useState<boolean>(false);
    const handelCollapse = () => {
        setShowCollapse(!showCollapse);
    }
    const hadelScroll = (e: React.MouseEvent<HTMLElement>, name: string) => {
        e.preventDefault()
        window.scrollTo({
            // @ts-expect-error: Object is possibly 'null'.
            top: document.querySelector(`#${name}`).offsetTop - 60,
            behavior: "smooth"
        });
        setShowCollapse(false);
    }
    const handelDarkMode = () => {
        if (state.modal?.isDark) {
            dispatch({ type: "SET_DARK", payload: false });
        } else {
            dispatch({ type: "SET_DARK", payload: true });
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

    const handelScrollnavbar = () => {
        window.addEventListener("scroll", function () {
            if (this.document.body.scrollTop > 200 || this.document.documentElement.scrollTop > 200) {
                setisNavBarSticky(true);
            } else {
                setisNavBarSticky(false);
            }
        });
    }

    useEffect(() => {
        handelScrollnavbar();
        return () => {
            handelScrollnavbar();
        }
    }, [])
    return (
        <nav className={`md:border-b-2 md:border-b-orange-300 ${isNavBarSticky ? 'fixed top-0 left-0 right-0 z-20 bg-white dark:fixed dark:top-0 dark:left-0 dark:right-0 dark:z-20 dark:bg-black/70' : 'static dark:static'}`} ref={navbar}>
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-2 relative z-50">
                <Link href={`#`} onClick={(e) => { hadelScroll(e, "home") }} className="flex items-center space-x-3 md:pl-0 pl-5">

                    <span className={`self-center md:text-2xl text-lg whitespace-nowrap dark:text-white ${isNavBarSticky ? 'text-black' : 'md:text-white text-black'}`}>Amanuel Ferede</span>
                </Link>

                <div className={
                    clsx("w-full md:bg-transparent bg-orange-50 md:block md:w-auto md:static absolute top-14 right-0 left-0 z-10 md:dark:bg-transparent dark:bg-black",
                        {
                            "hidden": showCollapse === false
                        }

                    )
                }>
                    <ul className="flex flex-col mt-4 md:flex-row md:space-x-2 rtl:space-x-reverse md:mt-0 md:border-0">
                        <li>
                            <Link href="#" onClick={(e) => { hadelScroll(e, "home") }} className={`block py-2 md:px-3 px-5  border-b-2 border-b-transparent md:hover:border-b-orange-600 md:dark:hover:bg-transparent dark:hover:bg-gray-600 dark:text-white transition duration-500 ease-in-out ${isNavBarSticky ? 'text-black' : 'md:text-white text-black'}`} aria-current="page">Home</Link>
                        </li>
                        <li>
                            <Link href="#" onClick={(e) => { hadelScroll(e, "about-me") }} className={`block py-2 md:px-3 px-5  border-b-2 border-b-transparent md:hover:border-b-orange-600 md:dark:hover:bg-transparent dark:hover:bg-gray-600 dark:text-white transition duration-500 ease-in-out ${isNavBarSticky ? 'text-black' : 'md:text-white text-black'}`} aria-current="page">About Me</Link>
                        </li>
                        <li>
                            <Link href="#" onClick={(e) => { hadelScroll(e, "works") }} className={`block py-2 md:px-3 px-5  border-b-2 border-b-transparent md:hover:border-b-orange-600 md:dark:hover:bg-transparent dark:hover:bg-gray-600 dark:text-white transition duration-500 ease-in-out ${isNavBarSticky ? 'text-black' : 'md:text-white text-black'}`} aria-current="page">Works</Link>
                        </li>

                        <li>
                            <Link href="#" onClick={(e) => { hadelScroll(e, "skills") }} className={`block py-2 md:px-3 px-5  border-b-2 border-b-transparent md:hover:border-b-orange-600 md:dark:hover:bg-transparent dark:hover:bg-gray-600 dark:text-white transition duration-500 ease-in-out ${isNavBarSticky ? 'text-black' : 'md:text-white text-black'}`} aria-current="page">Skills</Link>
                        </li>
                        <li>
                            <Link href="#" onClick={(e) => { hadelScroll(e, "certificates") }} className={`block py-2 md:px-3 px-5  border-b-2 border-b-transparent md:hover:border-b-orange-600 md:dark:hover:bg-transparent dark:hover:bg-gray-600 dark:text-white transition duration-500 ease-in-out ${isNavBarSticky ? 'text-black' : 'md:text-white text-black'}`} aria-current="page">Certificates</Link>
                        </li>
                    </ul>
                </div>

                {
                    state.modal.isDark === false && (<MoonIcon className="h-8 w-8 cursor-pointer stroke-white" onClick={handelDarkMode} />)
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