'use client'

import Image from "next/image";
import Link from "next/link";
import { useContext, useEffect } from "react";
import WorkModal from "./work-modal";
import { AppContext } from "../Provider/provider";
import { GlobalContextType, MyWork } from "../types/types";
import { motion } from "motion/react";

export default function Works() {

  const { state, dispatch } = useContext(AppContext) as GlobalContextType;

  useEffect(() => {
    if (state.modal.isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [state.modal.isOpen])

  const handelShowModal = (work: MyWork) => {
    console.log(work.title);
    dispatch({
      type: 'SHOW_MODAL',
      payload: {
        modal: {
          isOpen: true,
          work: work,
          modalContent: work.modalContent
        }
      }
    })
  }

  const works = [
    {
      id: 1,
      title: 'Next Js Starter Project',
      description: "nextjs-dashboard in next.js latest framework, from official website used tailwind css for styling",
      photo: "/works/wo-1/wall.jpg",
      link: "https://next-starter-project-woad.vercel.app",
      modalContent: [
        {
          id: 1,
          title: "Styling",
          description: "It use Tailwind which is a CSS framework that speeds up the development process by allowing you to quickly write utility classes directly in your TSX markup.",
          photo: "/works/wo-1/1.jpg",
        },
        {
          id: 2,
          title: "Database connectivity",
          description: "It connects to database to store dynamic data, it connects to databse directly from vercel postgress sql server",
          photo: "/works/wo-1/2.jpg",
        },
        {
          id: 3,
          title: "Data fetching",
          description: "Using next powerful feature of server compoenents by querying database directly, it populates data coming from server into UI",
          photo: "/works/wo-1/3.jpg",
        },
        {
          id: 4,
          title: "Authentication",
          description: "Features Authentication which is about making sure the user is who they say they are. You're proving your identity with something you have like a username and password and Authorization is the next step. Once a user's identity is confirmed, authorization decides what parts of the application they are allowed to use, uses nextAth, ofcourse i will work it as long as there is time and as long as i can !",
          photo: "/works/wo-1/4.jpg",
        }

      ]
    },
    {
      id: 2,
      title: "NordStorm",
      description: 'Online fashion shopping application inspired by NordStorm official website used Next.Js and tailwind for styling',
      photo: "/works/wo-2/wall.jpg",
      link: "https://nordstorm-ten.vercel.app",

      modalContent: [
        {
          id: 1,
          title: "Styling",
          description: "It use Tailwind which is a CSS framework that speeds up the development process by allowing you to quickly write utility classes directly in your TSX markup.",
          photo: "/works/wo-2/1.jpg",
        },
        {
          id: 2,
          title: "Database connectivity",
          description: "It connects to database to store dynamic data, it connects to databse directly from vercel postgress sql server, ofcourse i will work it as long as there is time and as long as i can !",
          photo: "/works/wo-2/2.jpg",
        },
        {
          id: 3,
          title: "Data fetching",
          description: "Using next powerful feature of server compoenents by querying database directly, it populates data coming from server into UI, ofcourse i will work it as long as there is time and as long as i can !",
          photo: "/works/wo-2/3.jpg",
        },
        {
          id: 4,
          title: "Authentication",
          description: "Features Authentication which is about making sure the user is who they say they are. You're proving your identity with something you have like a username and password and Authorization is the next step. Once a user's identity is confirmed, authorization decides what parts of the application they are allowed to use. uses nextAth, ofcourse i will work it as long as there is time and as long as i can !",
          photo: "/works/wo-2/4.jpg",
        }

      ]
    },
    {
      id: 3,
      title: "Fakebook",
      description: 'Facebook like application which connects people across the world and share thier ideas made using latest Next.js framework and tailwindcss for styling',
      photo: "/works/wo-3/wall.jpg",
      link: "https://divconnector.vercel.app",

      modalContent: [
        {
          id: 1,
          title: "Styling",
          description: "It use Tailwind which is a CSS framework that speeds up the development process by allowing you to quickly write utility classes directly in your TSX markup.",
          photo: "/works/wo-3/1.jpg",
        },
        {
          id: 2,
          title: "Database connectivity",
          description: "It connects to database to store dynamic data, it connects to databse directly from vercel postgress sql server, ofcourse i will work it as long as there is time and as long as i can !",
          photo: "/works/wo-3/2.jpg",
        },
        {
          id: 3,
          title: "Data fetching",
          description: "Using next powerful feature of server compoenents by querying database directly, it populates data coming from server into UI, ofcourse i will work it as long as there is time and as long as i can !",
          photo: "/works/wo-3/3.jpg",
        },
        {
          id: 4,
          title: "Authentication",
          description: "Features Authentication which is about making sure the user is who they say they are. You're proving your identity with something you have like a username and password and Authorization is the next step. Once a user's identity is confirmed, authorization decides what parts of the application they are allowed to use. uses nextAth, ofcourse i will work it as long as there is time and as long as i can !",
          photo: "/works/wo-3/4.jpg",
        }

      ]
    },
    {
      id: 4,
      title: "Medical compnay website",
      description: 'Medico static website : Frontend only using react and tailwind for styling',
      photo: "/works/wo-4/wall.jpg",
      link: "https://medico-alpha.vercel.app",

      modalContent: [
        {
          id: 1,
          title: "",
          description: "",
          photo: "/works/wo-4/1.jpg",
        },
        {
          id: 2,
          title: "",
          description: "",
          photo: "/works/wo-4/2.jpg",
        },
        {
          id: 3,
          title: "",
          description: "",
          photo: "/works/wo-4/3.jpg",
        },
      ]
    },
    {
      id: 5,
      title: "News compnay website",
      description: 'Static Website made using Next.js and tailwindcss for styling',
      photo: "/works/wo-5/wall.jpg",
      link: "https://my-news-app-rho.vercel.app",

      modalContent: [
        {
          id: 1,
          title: "Styling",
          description: "It use Tailwind which is a CSS framework that speeds up the development process by allowing you to quickly write utility classes directly in your TSX markup.",
          photo: "/works/wo-5/1.jpg",
        },
        {
          id: 2,
          title: "Database connectivity",
          description: "It connects to database to store dynamic data, it connects to databse directly from vercel postgress sql server, ofcourse i will work it as long as there is time and as long as i can !",
          photo: "/works/wo-5/2.jpg",
        },
        {
          id: 3,
          title: "Data fetching",
          description: "Using next powerful feature of server compoenents by querying database directly, it populates data coming from server into UI, ofcourse i will work it as long as there is time and as long as i can !",
          photo: "/works/wo-5/3.jpg",
        },
        {
          id: 4,
          title: "Authentication",
          description: "Features Authentication which is about making sure the user is who they say they are. You're proving your identity with something you have like a username and password and Authorization is the next step. Once a user's identity is confirmed, authorization decides what parts of the application they are allowed to use. uses nextAth, ofcourse i will work it as long as there is time and as long as i can !",
          photo: "/works/wo-5/4.jpg",
        }

      ]
    },
    {
      id: 6,
      title: "My Tube",
      description: 'Video and audio streaming application using Next.js framework and tailwind css for designing the website',
      photo: "/works/wo-6/wall.jpg",
      link: "https://mytube-cyan-theta.vercel.app",

      modalContent: [
        {
          id: 1,
          title: "Styling",
          description: "It use Tailwind which is a CSS framework that speeds up the development process by allowing you to quickly write utility classes directly in your TSX markup.",
          photo: "/works/wo-6/1.jpg",
        },
        {
          id: 2,
          title: "Database connectivity",
          description: "It connects to database to store dynamic data, it connects to databse directly from vercel postgress sql server, ofcourse i will work it as long as there is time and as long as i can !",
          photo: "/works/wo-6/2.jpg",
        },
        {
          id: 3,
          title: "Data fetching",
          description: "Using next powerful feature of server compoenents by querying database directly, it populates data coming from server into UI, ofcourse i will work it as long as there is time and as long as i can !",
          photo: "/works/wo-6/3.jpg",
        },
        {
          id: 4,
          title: "Authentication",
          description: "Features Authentication which is about making sure the user is who they say they are. You're proving your identity with something you have like a username and password and Authorization is the next step. Once a user's identity is confirmed, authorization decides what parts of the application they are allowed to use. uses nextAth, ofcourse i will work it as long as there is time and as long as i can !",
          photo: "/works/wo-6/4.jpg",
        }

      ]
    },


  ]
  return (
    <>
      <section className="w-full py-4 dark:bg-gray-800" id="works">
        <div className="mx-auto max-w-screen-sm">

          <h1 className='md:text-xl text-lg font-bold text-center mb-1 dark:text-slate-300'>Works</h1>
          <p className="text-center mb-2 dark:text-slate-400">These are some of the projects I have worked and practiced on up until now.</p>
        </div>

        <div className="mx-auto max-w-screen-lg bg-white pt-3 dark:bg-gray-800 dark:text-white">



          <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
            {
              works.map(work => {
                return (
                  <motion.div key={work.id}
                    initial={{ translateY: 120, opacity: 0 }}
                    viewport={{ once: true }}
                    whileInView={{
                      translateY: 0,
                      opacity: 1,
                      transition: { duration: 0.7 }
                    }}

                  >
                    <div className="shadow-md rounded-lg group hover:shadow-lg transition-all duration-300 ease-in-out">
                      <Image
                        src={`${work.photo}`}
                        alt="next starter project"
                        width={0}
                        height={0}
                        sizes="100vh"

                        className="block w-full h-[250px] group-hover:brightness-50 transition-all duration-300 ease-in-out"
                      />




                      <div className="flex flex-col px-6 pb-6">
                        <div className="md:pl-0 my-3 flex-grow">
                          <p className="dark:text-slate-300 font-bold md:text-lg">{work.title}</p>
                          <p className="dark:text-slate-300">{work.description.length > 100 ? `${work.description.substring(0, 100)} ...` : work.description}</p>
                        </div>


                        <div className="flex items-center space-x-5">
                          <button className="md:block hidden border-[2px] dark:border-white dark:text-white border-blue-600 rounded-lg py-1.5 px-4 text-center hover:shadow-lg hover:text-black hover:border-transparent transition-all ease-in-out duration-300" onClick={() => { handelShowModal(work) }}>
                            More
                          </button>
                          <Link href={`${work.link}`} target="_blank" className="md:ml-1 py-1.5 px-4 block hover:shadow-lg border-[2px] border-transparent hover:border-white bg-blue-500 rounded-md text-white text-center transition-all ease-in-out duration-300 dark:bg-gray-950 dark:text-white">Visit</Link>
                        </div>
                      </div>

                    </div>
                  </motion.div>
                )
              })

            }

          </div>


        </div>
      </section>
      <WorkModal modalContent={state.modal.modalContent} work={state.modal.work} isModalOpen={state.modal.isOpen} />
    </>
  )
}