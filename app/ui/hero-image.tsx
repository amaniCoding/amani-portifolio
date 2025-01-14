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
        <section className="w-full dark:bg-gray-900 md:bg-slate-600 md:mt-[65px] pt-[88px] md:bg-[url('/tt.png')] md:h-screen md:bg-no-repeat relative dark:brightness-75 md:bg-cover" id='home'>
            <div className='md:hidden flex items-center justify-center'>
                <Image
                    src={`/99.png`}
                    width={0}
                    height={0}
                    sizes='100vh'
                    alt='Amanuel Ferede'
                    className='w-36 h-36 rounded-full border-2 border-orange-700 object-cover'
                />
            </div>
            <div className='md:block hidden w-[32%] absolute right-2 top-32'>
                <p className='text-4xl text-orange-600 font-bold'>{'"'} Everything is perfect and there is always room for improvement. {'"'}</p>
            </div>
            <div className='md:block hidden w-[45%] absolute left-5 top-32'>
                <div className='w-full flex flex-col space-y-4 p-4'>
                    <h1 className='md:text-3xl text-2xl font-bold md:text-white text-black md:block hidden dark:text-white'>Hi there, I am Amanuel Ferede 👋</h1>
                    <p className='md:text-xl text-lg  md:text-white text-black w-full dark:text-slate-400'>A Full Stack Software Engineer<small> with a passion to create marvelous software and programming solutions to different real life problems. I have an intuitive desire to learn new technologies and how they work in depth. But i am not perfect 😁 </small></p>
                    <div className='my-3'>
                        <Link href={`#`} onClick={(e) => { handelScroll(e) }} className=" py-3 block rounded-md px-3 w-56 bg-orange-600 text-white text-center dark:bg-black dark:text-white dark:hover:bg-slate-600 dark:hover:text-white hover:bg-orange-400">Contact Me</Link>
                    </div>
                    <div className='flex space-x-4 items-center'>
                        <span className='p-2  md:text-white dark:text-white text-black'>+251918634810</span>
                        <Link href={`https://drive.google.com/file/d/1ohIyY6rr44uTVCIWJbe5SyhXh-8fQBGN/view?usp=drive_link`} target='_blank' className='p-2  md:text-white text-black dark:text-white text-nowrap'>My CV</Link>
                    </div>
                </div>

            </div>
            <div className='md:hidden flex space-x-4 items-center justify-center py-3'>
                <span className='p-2  md:text-white dark:text-white text-black'>+251918634810</span>
                <Link href={`https://drive.google.com/file/d/1ohIyY6rr44uTVCIWJbe5SyhXh-8fQBGN/view?usp=drive_link`} target='_blank' className='p-2  md:text-white text-black dark:text-white text-nowrap'>My CV</Link>
            </div>
        </section>
    )
}