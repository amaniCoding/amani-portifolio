'use client'
import { PhoneArrowDownLeftIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import Link from 'next/link';
export default function HeroImage() {
    const handelScroll = (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault();
        window.scrollTo({
            // @ts-expect-error: Object is possibly 'null'.
            top: document.querySelector("#contact-me").offsetTop - 72,
            behavior: "smooth"
        });
    }
    return (
        <section className="w-full dark:bg-black md:bg-slate-600 md:mt-[64px] mt-[72px]" id='home'>
            <div className='max-w-screen-xl mx-auto relative overflow-hidden'>
                <div className='flex md:flex-row flex-col md:min-h-[99vh]'>
                    <div className='md:w-1/2 felx md:p-4 p-0 content-center'>
                        <div className='flex w-full flex-col space-y-1 md:space-y-4 p-4'>
                            <h1 className='md:text-3xl text-2xl font-bold md:text-white text-black md:block hidden dark:text-white'>Hi there, I am Amanuel 👋</h1>
                            <p className='md:text-xl text-lg  md:text-white text-black w-full dark:text-slate-400'>A Full Stack Software Engineer ! <small> with a passion to create marvelous software and programming solutions to different real life problems. I have an intuitive desire to learn new technologies and how they work in depth.</small></p>

                            <div className='flex md:flex-col flex-row md:space-y-4 space-x-4'>
                                <Link href={`#`} onClick={(e) => { handelScroll(e) }} className=" md:py-3 md:block py-2 rounded-md px-1 md:w-52 w-32 md:bg-orange-600 bg-transparent md:text-white ring-orange-600 border-2 md:border-white border-black text-center hidden dark:bg-black dark:text-white dark:hover:bg-slate-600 dark:hover:text-white hover:bg-orange-400">Contact Me</Link>

                                <Link href={`#`} onClick={(e) => { handelScroll(e) }} className='md:hidden block'>
                                    <PhoneArrowDownLeftIcon className='w-11 h-11 p-3 bg-orange-500 rounded-full stroke-slate-50 dark:bg-slate-600 dark:text-white' />
                                </Link>
                                <div className='flex flex-row space-x-4 items-center'>
                                    <div className="flex items-center justify-center bg-slate-50 rounded-full w-10 h-10">

                                        <Image
                                            src="/whatsapp-color-icon.png"
                                            width={0}
                                            height={0}
                                            sizes="100vh"
                                            className="w-full h-full object-cover"

                                            alt="Screenshots of the dashboard project showing desktop version"
                                        />

                                    </div>
                                    <div className="flex items-center justify-center bg-slate-50 rounded-full w-10 h-10">

                                        <Image
                                            src="/telegram-icon.png"
                                            width={0}
                                            height={0}
                                            sizes="100vh"
                                            className="w-full h-full object-cover"

                                            alt="Screenshots of the dashboard project showing desktop version"
                                        />

                                    </div>
                                    <div>
                                        <p className='p-2  md:text-white dark:text-white'>+251918634810</p>
                                    </div>

                                    <div>
                                        <Link href={`https://drive.google.com/file/d/1ohIyY6rr44uTVCIWJbe5SyhXh-8fQBGN/view?usp=drive_link`} target='_blank' className='p-2  md:text-white dark:text-white'>My CV</Link>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                    <div className='md:w-1/2 w-full flex  justify-center items-center md:order-last order-first'>
                        <Image
                            src="/7.png"
                            alt="next starter project"
                            width={0}
                            height={0}
                            sizes='100vh'

                            className="md:hidden block w-32 h-32 rounded-full object-cover mt-4 border-2 border-orange-700 p-1 dark:border-white"
                        />
                    </div>
                    <Image
                        src="/99.png"
                        alt="next starter project"
                        width={0}
                        height={0}
                        sizes='100vh'
                        className="w-9/12 h-auto md:block hidden bg-center absolute -top-6 -right-24 z-10 dark:brightness-75"
                    />
                </div>
            </div>
        </section>
    )
}