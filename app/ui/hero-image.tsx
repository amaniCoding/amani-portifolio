'use client'
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function HeroImage() {
    //@typescript-eslint/no-unused-vars
    const [, setShowCollapse] = useState(false);
    const hadelScroll = (e: React.MouseEvent<HTMLElement>, name: string) => {
        e.preventDefault()
        window.scrollTo({
            // @ts-expect-error: Object is possibly 'null'.
            top: document.querySelector(`#${name}`).offsetTop + 10,
            behavior: "smooth"
        });
        setShowCollapse(false);
    }
    return (
        <section className="w-full mt-[87px] md:dark:mt-[81px] dark:mt-[57px] md:bg-[url('/re.png')] md:h-screen md:bg-no-repeat relative bg-center bg-cover dark:brightness-50" id='home'>


            <div className='md:hidden flex space-x-3 px-3 dark:bg-gray-900 py-10'>
                <Image
                    src={`/66.jpg`}
                    width={0}
                    height={0}
                    sizes='100vh'
                    alt='Amanuel Ferede'
                    className='w-16 h-16 rounded-full object-cover'
                />
                <div className='grow '>
                    <p className='md:hidden block font-bold dark:text-white'>Amanuel Ferede</p>
                    <p className='md:hidden block text-sm dark:text-white'>Fullstack software engineer | Front-end developer | React developer | Javascript developer</p>

                    <button className="mt-4 md:hidden w-64 py-2.5 block hover:shadow-lg border-[2px] border-transparent hover:border-white bg-blue-500 rounded-3xl text-white text-center transition-all ease-in-out duration-300 dark:bg-gray-950 dark:text-white" onClick={(e) => { hadelScroll(e, 'contact-me') }}>Let us work together</button>

                </div>
            </div>



            <div className='md:block hidden w-[40%] absolute -left-5 top-10 px-5 py-4 z-20'>
                <div className='w-full flex flex-col space-y-4 p-4'>
                    <h1 className='md:text-xl text-lg font-bold text-black md:block hidden dark:text-black'>Hi there, I am Amanuel 👋</h1>
                    <p className="md:text-xl  text-black dark:text-black">Fullstack software engineer | Front-end developer | React developer | Javascript developer</p>
                    <button className="w-64 py-2.5 block hover:shadow-lg border-[2px] border-transparent hover:border-white bg-blue-500 rounded-3xl text-white text-center transition-all ease-in-out duration-300 dark:bg-gray-950 dark:text-white" onClick={(e) => { hadelScroll(e, 'contact-me') }}>Let us work together</button>

                    <div className='flex space-x-4 items-center'>
                        <span className='p-2  md:text-white dark:text-white text-black'>+251918634810</span>
                        <Link href={`https://drive.google.com/file/d/11Zg7h75GUix9JXe8XI-KyCV-RAjaWb2I/view?usp=drive_link`} target='_blank' className='p-2 block border-2 border-white rounded-lg  md:text-white text-black dark:text-white text-nowrap'>My CV</Link>
                    </div>
                </div>

            </div>


        </section>
    )
}