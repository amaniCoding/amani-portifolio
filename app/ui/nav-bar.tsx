'use client'

import { useContext, useEffect, useState } from "react"
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";
import { AppContext } from "../Provider/provider";
import { GlobalContextType } from "../types/types";
import Image from "next/image";
import { Bars3Icon } from "@heroicons/react/24/outline";


export default function Navbar() {
    const { state, dispatch } = useContext(AppContext) as GlobalContextType;
    const [showCollapse, setShowCollapse] = useState(false);
    const [navItems, setNavItems] = useState(
        [
            {
                name: 'Amanuel Ferede',
                id: 'home',
                isActive: true
            },
            {
                name: 'About Me',
                id: 'about-me',
                isActive: false
            },
            {
                name: 'Works',
                id: 'works',
                isActive: false
            },
            {
                name: 'Skills',
                id: 'skills',
                isActive: false
            },
            {
                name: 'Certificates',
                id: 'certificates',
                isActive: false
            },
            {
                name: 'Contact Me',
                id: 'contact-me',
                isActive: false
            }
        ]
    )
    const handelCollapse = () => {
        setShowCollapse(!showCollapse);
    }
    const hadelScroll = (e: React.MouseEvent<HTMLElement>, name: string, index: number) => {
        e.preventDefault()
        window.scrollTo({
            // @ts-expect-error: Object is possibly 'null'.
            top: document.querySelector(`#${name}`).offsetTop + 10,
            behavior: "smooth"
        });
        setShowCollapse(false);
        const newNavItems = navItems.map((el, i) => {
            if (index === i) {
                return { ...el, isActive: true };
            } else {
                return { ...el, isActive: false };
            }
        });

        setNavItems(newNavItems);
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
    return (

        <nav className="dark:bg-gray-950 fixed top-0 left-0 right-0 bg-white shadow-md z-50 md:py-4 py-2 md:px-0 px-6">
            <div className={`md:hidden flex-col space-y-3 fixed top-[67px] left-0  pb-3 right-0 bottom-0 z-[200] w-full h-screen shadow-lg rounded-br-lg rounded-bl-lg bg-white dark:bg-gray-950 ${showCollapse ? 'flex' : 'hidden'}`}>
                        {
                            navItems.map((el, index) => {
                                return (
                                    <span className={`p-2 px-3 mx-5 rounded-3xl cursor-pointer ${el.isActive ? 'bg-blue-500 text-white dark:bg-gray-600' : 'bg-transparent text-black dark:text-white'}`} onClick={(e) => { hadelScroll(e, el.id, index) }} key={index}>{el.name}</span>
                                )
                            })
                        }



                    </div>
            <div className="max-w-screen-lg mx-auto">
                <div className="flex items-center justify-between space-x-3">

                    <Image
                        src={`/bg.jpg`}
                        alt="next starter project"
                        width={0}
                        height={0}
                        sizes="100vh"

                        className=" w-12 h-12 rounded-full"
                    />
                    <h5 className="md:hidden block text-nowrap dark:text-white">Amanuel Ferede</h5>

                    <div className="md:flex hidden items-center justify-between">
                        {
                            navItems.map((el, index) => {
                                return (
                                    <span className={`p-2 px-3 ml-5 rounded-3xl cursor-pointer ${el.isActive ? 'bg-blue-500 text-white dark:bg-gray-600' : 'bg-transparent text-black dark:text-white'}`} onClick={(e) => { hadelScroll(e, el.id, index) }} key={index}>{el.name}</span>
                                )
                            })
                        }



                    </div>
                    <div className="flex items-center justify-between">

                        {
                            state.modal.isDark === false && (<MoonIcon className="h-8 w-8 cursor-pointer stroke-white" onClick={handelDarkMode} />)
                        }

                        {
                            state.modal?.isDark === true && (<SunIcon className="h-8 w-8 cursor-pointer stroke-white dark:stroke-white" onClick={handelDarkMode} />)
                        }
                        <Bars3Icon className="w-10 h-10 ml-5 md:hidden block dark:stroke-white" onClick={handelCollapse} />
                    </div>

                </div>
            </div>
        </nav>

    )
}