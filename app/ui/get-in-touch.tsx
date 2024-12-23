'use client'
import Link from "next/link";

export default function GetInTouch() {
  return (
    <section className="w-full md:py-2 p-6" id="contact-me">

      <div className="mx-auto max-w-screen-sm">
        <h1 className='md:text-3xl text-xl font-bold text-center mb-1'>Get In Touch</h1>
        <p className="text-center mb-2"> I am usually active on the mediums listed below. Use your preference to contact me.</p>

      </div>
      <div className="mx-auto max-w-screen-sm">
        <div className="flex flex-row md:flex-nowrap flex-wrap gap-x-5 w-full">
          <div className="flex md:mb-0 mb-2 md:flex-col gap-y-3 gap-x-4 md:justify-start md:items-start justify-center items-center">
            <Link href={`https://github.com/amaniCoding`}
              target="_blank" className="md:w-40 w-32 block text-white bg-black py-2 px-3 rounded-md text-center"
            >
              <button>Github</button>
            </Link>
            <Link href={`https://web.facebook.com/ze.amanuel.ferede`}
              target="_blank" className="md:w-40 w-32 block text-white bg-blue-700 py-2 px-3 rounded-md text-center"
            >
              <button>Facebook</button>
            </Link>
            <Link href={`https://www.instagram.com/ze.amanuel.f/`} className="md:w-40 w-32 block text-white bg-pink-700 py-2 px-3 rounded-md text-center">
              <button>Instagram</button>
            </Link>
          </div>
          <div className="w-0.5 md:block hidden min-h-full bg-black"></div>
          <div className="flex flex-col">
            <p className="md:mt-0 mb-2">Do you prefer an email ? Reach out at my address below

              <span className="block">amanuelfrm@gmail.com</span>
            </p>
            <Link
              href={`mailto:amanuelfrm@gmail.com`}
              className="block"
            >
              <button className="py-2 rounded-md px-3 w-24 block bg-orange-600 text-white">Compose</button>
            </Link>

          </div>
        </div>
      </div>
    </section>
  )
}