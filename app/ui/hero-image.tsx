'use client'

import Image from 'next/image';
import Link from 'next/link';

export default function HeroImage() {
    return (
        <section className="w-full md:bg-slate-600" style={{marginTop: '74px'}}>
            <div className='max-w-screen-xl mx-auto relative overflow-hidden'>

                <div className='flex md:flex-row flex-col md:min-h-screen'>
                    <div className='md:w-1/2 felx md:p-4 p-0 content-center'>
                        <div className='flex w-full flex-col space-y-1 md:space-y-4 p-4'>
                            <h1 className='md:text-3xl text-2xl font-bold md:text-white text-black md:block hidden'>Hi there, I am Amanuel 👋</h1>
                            <p className='md:text-2xl text-lg  md:text-white text-black w-full'>A Full Stack Software Engineer ! <small> with a passion to create marvelous software and programming solutions to different real life problems. I have an intuitive desire to learn new technologies and how they work in depth.</small></p>

                            <div className='flex md:flex-col flex-row md:space-y-4 space-x-4'>
                                <Link href={`http://localhost:3000/#get-in-touch`} className="md:grow-0 grow md:py-3 py-2 rounded-md px-1 md:w-52 w-32 md:bg-orange-600 bg-transparent md:text-white ring-orange-600 border-2 md:border-white border-black text-center block">Contact Me</Link>
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
                                        <p className='p-2 text-lg md:text-white '>+251918634810</p>
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

                            className="md:hidden block w-32 h-32 rounded-full object-cover mt-4 border-2 border-orange-700 p-1"
                        />
                    </div>
                    <Image
                            src="/9.png"
                            alt="next starter project"
                            width={0}
                            height={0}
                            sizes='100vh'
                            className="w-9/12 h-auto md:block hidden bg-center absolute top-1 -right-24 z-10"
                        />
                </div>
            </div>
        </section>
    )
}