'use client'
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
        <section className="w-full dark:bg-gray-900 md:bg-slate-600 md:mt-[64px] mt-[64px] md:pt-0 pt-5 md:bg-[url('/tt.png')] md:h-screen md:bg-no-repeat relative dark:brightness-75 md:bg-cover" id='home'>
            <div className='md:hidden flex items-center justify-center space-x-3 px-3'>
                <Image
                    src={`/99.png`}
                    width={0}
                    height={0}
                    sizes='100vh'
                    alt='Amanuel Ferede'
                    className='w-24 h-24 rounded-full border-2 border-orange-700 object-cover dark:border-white'
                />
                <p className='text-lg md:hidden block text-orange-600 font-bold dark:text-slate-300'>{'"'} Everything is perfect and there is always room for improvement. {'"'}</p>
            </div>
            <p className='md:hidden block text-center font-bold dark:text-white'>Amanuel Ferede</p>
            <p className='md:hidden block text-center  dark:text-white text-sm'>Fullstack software engineer | Front-end developer | React developer | Javascript developer</p>
            <div className='md:block hidden w-[32%] absolute right-2 top-32'>
                <p className='text-4xl text-orange-300 font-bold'>{'"'} Everything is perfect and there is always room for improvement. {'"'}</p>
            </div>
            <div className='md:block hidden w-[45%] absolute left-5 top-32'>
                <div className='w-full flex flex-col space-y-4 p-4'>
                    <h1 className='md:text-3xl text-2xl font-bold md:text-white text-black md:block hidden dark:text-white'>Hi there, I am Amanuel 👋</h1>
                    <p className="md:text-xl text-lg  text-orange-300 w-full dark:text-orange-100">Fullstack software engineer | Front-end developer | React developer | Javascript developer</p>
                    <p className='md:text-xl text-lg  md:text-white text-black w-full dark:text-slate-400'> with a passion to create marvelous software and programming solutions to different real life problems. But i am not perfect ! 😁</p>
                    
                    <div className='my-3'>
                        <Link href={`#`} onClick={(e) => { handelScroll(e) }} className=" py-3 block rounded-md px-3 w-56 bg-orange-600 text-white text-center dark:bg-black dark:text-white dark:hover:bg-slate-600 dark:hover:text-white hover:bg-orange-400">Contact Me</Link>
                    </div>
                    <div className='flex space-x-4 items-center'>
                        <span className='p-2  md:text-white dark:text-white text-black'>+251918634810</span>
                        <Link href={`https://drive.google.com/file/d/1ohIyY6rr44uTVCIWJbe5SyhXh-8fQBGN/view?usp=drive_link`} target='_blank' className='p-2  md:text-white text-black dark:text-white text-nowrap'>My CV</Link>
                    </div>
                </div>

            </div>
            <div className='md:hidden flex space-x-4 items-center justify-center py-1 dark:border-b-[1.7px] dark:border-b-gray-50'>
                <span className='p-2  md:text-white dark:text-white text-black'>+251918634810</span>
                <Link href={`https://drive.google.com/file/d/1ohIyY6rr44uTVCIWJbe5SyhXh-8fQBGN/view?usp=drive_link`} target='_blank' className='p-2  md:text-white text-black dark:text-white text-nowrap'>My CV</Link>
            </div>
            
        </section>
    )
}