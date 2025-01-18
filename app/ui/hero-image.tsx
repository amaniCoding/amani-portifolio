'use client'
import Image from 'next/image';
import Link from 'next/link';

export default function HeroImage() {
    return (
        <section className="w-full dark:bg-gray-900 md:bg-slate-600 md:mt-[64px] mt-[64px] md:pt-0 pt-5 md:bg-[url('/99.jpg')] md:h-screen md:bg-no-repeat relative dark:brightness-75 md:bg-cover" id='home'>
            <div className='md:block hidden absolute top-0 bottom-0 left-0 right-0 bg-black/60'></div>
            <div className='md:hidden flex items-center justify-center space-x-3 px-3'>
                <Image
                    src={`/99.jpg`}
                    width={0}
                    height={0}
                    sizes='100vh'
                    alt='Amanuel Ferede'
                    className='w-24 h-24 rounded-full border-2 border-orange-700 object-cover dark:border-white'
                />
                <p className='text-lg md:hidden block text-orange-600 font-bold dark:text-slate-300'>{'"'} Perfection is impossible; just strive to do your best. {'"'}</p>
            </div>
            <p className='md:hidden block text-center font-bold dark:text-white'>Amanuel Ferede</p>
            <p className='md:hidden block text-center  dark:text-white text-sm'>Fullstack software engineer | Front-end developer | React developer | Javascript developer</p>
            <div className='md:block hidden w-[32%] absolute right-2 top-32'>
                
            </div>
            <div className='md:block hidden w-[80%] absolute left-28 top-28'>
                <div className='w-full flex flex-col space-y-4 p-4'>
                    <h1 className='md:text-3xl text-2xl font-bold md:text-white text-black md:block hidden dark:text-white'>Hi there, I am Amanuel 👋</h1>
                    <p className="md:text-2xl text-lg  text-orange-300 w-[60%] dark:text-orange-100">Fullstack software engineer | Front-end developer | React developer | Javascript developer</p>
                    <p className='md:text-xl text-lg w-[66%]  md:text-white text-blackdark:text-slate-400'> with a passion to create marvelous software and programming solutions to different real life problems. But i am not perfect ! 😁</p>
                    
                    <p className='text-xl text-orange-300 font-bold'>{'"'} Perfection is impossible; just strive to do your best. {'"'}</p>

                    <div className='flex space-x-4 items-center'>
                        <span className='p-2  md:text-white dark:text-white text-black'>+251918634810</span>
                        <Link href={`https://drive.google.com/file/d/11Zg7h75GUix9JXe8XI-KyCV-RAjaWb2I/view?usp=drive_link`} target='_blank' className='p-2 block border-2 border-white rounded-lg  md:text-white text-black dark:text-white text-nowrap'>My CV</Link>
                    </div>
                </div>

            </div>
            <div className='md:hidden flex space-x-4 items-center justify-center py-1 dark:border-b-[1.7px] dark:border-b-gray-50'>
                <span className='p-2  md:text-white dark:text-white text-black'>+251918634810</span>
                <Link href={`https://drive.google.com/file/d/11Zg7h75GUix9JXe8XI-KyCV-RAjaWb2I/view?usp=drive_link`} target='_blank' className='p-2  md:text-white text-black dark:text-white text-nowrap'>My CV</Link>
            </div>
            
        </section>
    )
}