'use client'

import Link from "next/link"
import { CiViewTimeline } from "react-icons/ci"
import { FaFacebook, FaLinkedinIn, FaTelegram, FaWhatsapp } from "react-icons/fa"

export default function ContactMe() {
    return (
        <section className="w-full py-2 dark:mb-0 mb-4  dark:bg-gray-800" id="contact-me">
            <div className="mx-auto max-w-screen-lg mb-4">
                <h1 className='md:text-xl text-lg font-bold text-center mb-1 dark:text-slate-400'>Let us build together</h1>
                <p className="text-center mb-2 dark:text-slate-200 px-3">Contact Me on</p>

                <div className="my-2 max-w-screen-sm mx-auto p-3 w-full">
                    <div className="my-2">
                        <label htmlFor="name" className="my-1 block dark:text-white">Your Name</label>
                        <div className="my-3">
                            <input className="p-3 block w-full outline-none border-[1.7px] border-gray-300 rounded-2xl placeholder:text-slate-400" placeholder="Your Name"></input>
                        </div>
                    </div>

                    <div className="my-2">
                        <label htmlFor="name" className="my-1 block dark:text-white">Your Email</label>
                        <div className="my-3">
                            <input className="p-3 block w-full outline-none border-[1.7px] border-gray-300 rounded-2xl placeholder:text-slate-400" placeholder="Your Email you@example.com"></input>
                        </div>
                    </div>

                    <div className="my-2">
                        <label htmlFor="name" className="my-1 block dark:text-white">Message</label>
                        <div className="my-3">
                            <textarea className="p-3 block w-full outline-none border-[1.7px] border-gray-300 rounded-2xl placeholder:text-slate-400" placeholder="Your Message"></textarea>
                        </div>
                    </div>
                    <div className="my-2">

                        <div className="my-3">
                            <button className="w-52 py-2.5 block hover:shadow-lg border-[2px] border-transparent hover:border-white bg-blue-500 rounded-3xl text-white text-center transition-all ease-in-out duration-300 dark:bg-gray-950 dark:text-white">Send Message</button>

                        </div>
                    </div>
                </div>
                <div className="grid md:grid-cols-5 grid-cols-3 gap-6">
                    <div className="flex flex-col items-center justify-center">

                        <Link href={`https://web.facebook.com/amanuel.ferede.mekonnen`} className="bg-slate-50 w-20 h-20 rounded-full flex items-center justify-center hover:shadow-lg transition-all duration-300 ease-in-out" target="_blank"><FaFacebook className="w-full h-full m-4 text-blue-600 dark:text-gray-600" /></Link>

                        <h2 className="mt-2 dark:text-white">Facebook</h2>
                    </div>

                    <div className="flex flex-col items-center justify-center">

                        <Link href={`https://t.me/+zVNZv5ldN9Q2ZjU5`} className="bg-slate-50 w-20 h-20 rounded-full flex items-center justify-center hover:shadow-lg transition-all duration-300 ease-in-out" target="_blank"><FaTelegram className="w-full h-full m-4 text-blue-600 dark:text-gray-600" /></Link>

                        <h2 className="mt-2 dark:text-white">Telegram</h2>
                    </div>

                    <div className="flex flex-col items-center justify-center">

                        <Link href={`https://t.me/+zVNZv5ldN9Q2ZjU5`} className="bg-slate-50 w-20 h-20 rounded-full flex items-center justify-center hover:shadow-lg transition-all duration-300 ease-in-out" target="_blank"><FaLinkedinIn className="w-full h-full m-4 text-blue-600 dark:text-gray-600" /></Link>

                        <h2 className="mt-2 dark:text-white">Linkdein</h2>
                    </div>

                    <div className="flex flex-col items-center justify-center">

                        <Link href={`https://t.me/+zVNZv5ldN9Q2ZjU5`} className="bg-slate-50 w-20 h-20 rounded-full flex items-center justify-center hover:shadow-lg transition-all duration-300 ease-in-out" target="_blank"><FaWhatsapp className="w-full h-full m-4 text-blue-600 dark:text-gray-600" /></Link>

                        <h2 className="mt-2 dark:text-white">Whatsup</h2>
                    </div>

                    <div className="flex flex-col items-center justify-center">

                        <Link href={`https://drive.google.com/file/d/11Zg7h75GUix9JXe8XI-KyCV-RAjaWb2I/view`} className="bg-slate-50 w-20 h-20 rounded-full flex items-center justify-center hover:shadow-lg transition-all duration-300 ease-in-out" target="_blank"><CiViewTimeline className="w-full h-full m-4 text-blue-600 dark:text-gray-600" /></Link>

                        <h2 className="mt-2 dark:text-white">CV</h2>
                    </div>
                </div>
            </div>


        </section>
    )
}