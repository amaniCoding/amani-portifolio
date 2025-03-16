'use client'

import Link from "next/link"
import { CiViewTimeline } from "react-icons/ci"
import { FaFacebook, FaLinkedinIn, FaTelegram, FaWhatsapp } from "react-icons/fa"

export default function ContactMe() {
    return (
        <section className="w-full py-5 dark:mb-0 mb-4  dark:bg-gray-800" id="contact-me">
            <div className="mx-auto max-w-screen-lg mb-4">
                <h1 className='md:text-xl text-lg font-bold text-center mb-1 dark:text-slate-400'>Let us build together</h1>


                <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
                    <div className="my-2 max-w-screen-sm mx-auto p-3 w-full">
                        <div className="my-2">
                            <label htmlFor="name" className="my-1 block dark:text-white">Your Name</label>
                            <div className="my-3">
                                <input className="focus:border-blue-700 p-3 block w-full outline-none border-[1.9px] dark:border-2 dark:border-gray-600 dark:placeholder:text-gray-500 dark:focus:placeholder:text-white focus:border-[1.99px] transition-all durationb-500 ease-in-out border-black/20 rounded-xl placeholder:text-slate-400 dark:placeholder:text-white dark:bg-transparent dark:focus:border-white dark:text-white" placeholder="Your Name"></input>
                            </div>
                        </div>

                        <div className="my-2">
                            <label htmlFor="name" className="my-1 block dark:text-white">Your Email</label>
                            <div className="my-3">
                                <input className=" focus:border-blue-700 p-3 block w-full outline-none border-[1.9px] dark:border-2 dark:border-gray-600 dark:placeholder:text-gray-500 dark:focus:placeholder:text-white focus:border-[1.99px] transition-all durationb-500 ease-in-out border-black/20 rounded-xl placeholder:text-slate-400 dark:placeholder:text-white dark:bg-transparent dark:focus:border-white dark:text-white" placeholder="Your Email you@example.com"></input>
                            </div>
                        </div>

                        <div className="my-2">
                            <label htmlFor="name" className="my-1 block dark:text-white">Message</label>
                            <div className="my-3">
                                <textarea rows={5} className="focus:border-blue-700 p-3 block w-full outline-none border-[1.9px] dark:border-2 dark:border-gray-600 dark:placeholder:text-gray-500 dark:focus:placeholder:text-white focus:border-[1.99px] transition-all durationb-500 ease-in-out border-black/20 rounded-xl placeholder:text-slate-400 dark:placeholder:text-white dark:bg-transparent dark:focus:border-white dark:text-white" placeholder="Your Message"></textarea>
                            </div>
                        </div>
                        <div className="my-2">

                            <div className="my-3">
                                <button className="w-52 py-2.5 block hover:shadow-lg border-[2px] border-transparent hover:border-white bg-blue-500 rounded-3xl text-white text-center transition-all ease-in-out duration-300 dark:bg-gray-950 dark:text-white">Send Message</button>

                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col space-y-3 items-center justify-center">
                        <h1 className='md:text-xl text-lg font-bold text-center mb-1 dark:text-slate-400'>Get me on</h1>


                        <div className="grid md:grid-cols-5 grid-cols-3 gap-6">
                            <div className="flex flex-col items-center justify-center">

                                <Link href={`https://web.facebook.com/amanuel.ferede.mekonnen`} target="_blank"><FaFacebook className="h-12 w-12 hover:text-blue-800 transition-all duration-500 ease-in-out m-2 text-blue-600 dark:text-white dark:hover:text-gray-200" /></Link>

                                <h2 className="mt-2 dark:text-white text-center">Facebook</h2>
                            </div>

                            <div className="flex flex-col items-center justify-center">

                                <Link href={`https://t.me/+zVNZv5ldN9Q2ZjU5`} target="_blank"><FaTelegram className="h-12 w-12 hover:text-blue-800 transition-all duration-500 ease-in-out m-2 text-blue-600 dark:text-white dark:hover:text-gray-200" /></Link>

                                <h2 className="mt-2 dark:text-white text-center">Telegram</h2>
                            </div>

                            <div className="flex flex-col items-center justify-center">

                                <Link href={`https://t.me/+zVNZv5ldN9Q2ZjU5`} target="_blank"><FaLinkedinIn className="h-12 w-12 hover:text-blue-800 transition-all duration-500 ease-in-out m-2 text-blue-600 dark:text-white dark:hover:text-gray-200" /></Link>

                                <h2 className="mt-2 dark:text-white text-center">Linkdein</h2>
                            </div>

                            <div className="flex flex-col items-center justify-center">

                                <Link href={`https://t.me/+zVNZv5ldN9Q2ZjU5`} target="_blank"><FaWhatsapp className="h-12 w-12 hover:text-blue-800 transition-all duration-500 ease-in-out m-2 text-blue-600 dark:text-white dark:hover:text-gray-200" /></Link>

                                <h2 className="mt-2 dark:text-white text-center">Whatsup</h2>
                            </div>

                            <div className="flex flex-col items-center justify-center">

                                <Link href={`https://drive.google.com/file/d/11Zg7h75GUix9JXe8XI-KyCV-RAjaWb2I/view`} target="_blank"><CiViewTimeline className="h-12 w-12 hover:text-blue-800 transition-all duration-500 ease-in-out m-2 text-blue-600 dark:text-white dark:hover:text-gray-200" /></Link>

                                <h2 className="mt-2 dark:text-white text-center">CV</h2>
                            </div>
                        </div>

                    </div>
                </div>


            </div>


        </section>
    )
}