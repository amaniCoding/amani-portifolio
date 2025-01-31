'use client'
import Image from 'next/image';
import Link from 'next/link';
import Navbar from './nav-bar';

export default function HeroImage() {
    return (
        <section className="w-full dark:bg-gray-900 md:bg-slate-600 md:bg-[url('/99.jpg')] md:h-screen md:bg-no-repeat relative dark:brightness-75 bg-center bg-cover" id='home'>
            <Navbar />
            <div className='md:block hidden absolute top-0 bottom-0 left-0 right-0 bg-black/65 dark:bg-black/80'></div>
            <div className='md:hidden flex  space-x-3 px-3'>
                <Image
                    src={`/99.jpg`}
                    width={0}
                    height={0}
                    sizes='100vh'
                    alt='Amanuel Ferede'
                    className='w-16 h-16 rounded-full border-2 border-orange-700 object-cover dark:border-white'
                />
                <div className='grow'>
                    <p className='md:hidden block font-bold dark:text-white'>Amanuel Ferede</p>
                    <p className='md:hidden blockdark:text-white text-sm dark:text-white'>Fullstack software engineer | Front-end developer | React developer | Javascript developer</p>

                    <div className='md:hidden flex space-x-2 items-center'>
                        <span className='p-2  md:text-white dark:text-white text-black'>+251918634810</span>
                        <Link href={`https://drive.google.com/file/d/11Zg7h75GUix9JXe8XI-KyCV-RAjaWb2I/view?usp=drive_link`} target='_blank' className='p-2  md:text-white text-black dark:text-white text-nowrap'>My CV</Link>
                    </div>
                </div>
            </div>



            <div className='md:block hidden w-[50%] absolute right-5 top-32 dark:bg-black/55 bg-orange-900/55 px-5 py-4'>
                <div className='w-full flex flex-col space-y-4 p-4'>
                    <h1 className='md:text-xl text-lg font-bold md:text-white text-black md:block hidden dark:text-white'>Hi there, I am Amanuel 👋</h1>
                    <p className="md:text-xl  text-white w-[100%] dark:text-orange-100">Fullstack software engineer | Front-end developer | React developer | Javascript developer</p>


                    <p className='text-lg text-orange-300 font-bold'>{'"'} Perfection is impossible; just strive to do your best. {'"'}</p>

                    <div className='flex space-x-4 items-center'>
                        <span className='p-2  md:text-white dark:text-white text-black'>+251918634810</span>
                        <Link href={`https://drive.google.com/file/d/11Zg7h75GUix9JXe8XI-KyCV-RAjaWb2I/view?usp=drive_link`} target='_blank' className='p-2 block border-2 border-white rounded-lg  md:text-white text-black dark:text-white text-nowrap'>My CV</Link>
                    </div>
                </div>

            </div>


        </section>
    )
}