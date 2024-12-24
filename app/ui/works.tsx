'use client'
import { EyeIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import { useContext, useEffect } from "react";
import WorkModal from "./work-modal";
import { AppContext } from "../Provider/provider";
import { GlobalContextType, MyWork } from "../types/types";

export default function Works() {

  const {state, dispatch} = useContext(AppContext) as GlobalContextType;

  useEffect(() => {
    if(state.modal.isOpen) {
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
      title: "Next js starter project in next.js latest framework, tailwind css for styling",
      photo: "/works/1.jpg",
      link: "https://next-starter-project-woad.vercel.app/",
      modalContent: [
        {
          id: 1,
          title: "Styling",
          description: "It use Tailwind which is a CSS framework that speeds up the development process by allowing you to quickly write utility classes directly in your TSX markup.",
          photo: "/works/1-wo-1.jpg",
        },
        {
          id: 2,
          title: "Database connectivity",
          description: "It connects to database to store dynamic data, it connects to databse directly from vercel postgress sql server",
          photo: "/works/1-wo-2.jpg",
        },
        {
          id: 3,
          title: "Data fetching",
          description: "Using next powerful feature of server compoenents by querying database directly, it populates data coming from server into UI",
          photo: "/works/1-wo-3.jpg",
        },
        {
          id: 4,
          title: "Authonticaion",
          description: "Features Authentication which is about making sure the user is who they say they are. You're proving your identity with something you have like a username and password and Authorization is the next step. Once a user's identity is confirmed, authorization decides what parts of the application they are allowed to use. uses nextAth",
          photo: "/works/1.jpg",
        }

      ]
    },
    {
      id: 2,
      title: "Simple shopping cart application in next js frame work",
      photo: "/works/1.jpg",
      link: "https://next-starter-project-woad.vercel.app/",
      modalContent: [
        {
          id: 1,
          title: "Styling",
          description: "It use Tailwind which is a CSS framework that speeds up the development process by allowing you to quickly write utility classes directly in your TSX markup.",
          photo: "/works/1-wo-1.jpg",
        },
        {
          id: 2,
          title: "Database connectivity",
          description: "It connects to database to store dynamic data, it connects to databse directly from vercel postgress sql server",
          photo: "/works/1-wo-2.jpg",
        },
        {
          id: 3,
          title: "Data fetching",
          description: "Using next powerful feature of server compoenents by querying database directly, it populates data coming from server into UI",
          photo: "/works/1-wo-3.jpg",
        },
        {
          id: 4,
          title: "Authonticaion",
          description: "Features Authentication which is about making sure the user is who they say they are. You're proving your identity with something you have like a username and password and Authorization is the next step. Once a user's identity is confirmed, authorization decides what parts of the application they are allowed to use. uses nextAth",
          photo: "/works/1.jpg",
        }

      ]
    },
    {
      id: 3,
      title: "Dev connect that connects developers across the world",
      photo: "/works/1.jpg",
      link: "https://next-starter-project-woad.vercel.app/",
      modalContent: [
        {
          id: 1,
          title: "Styling",
          description: "It use Tailwind which is a CSS framework that speeds up the development process by allowing you to quickly write utility classes directly in your TSX markup.",
          photo: "/works/1-wo-1.jpg",
        },
        {
          id: 2,
          title: "Database connectivity",
          description: "It connects to database to store dynamic data, it connects to databse directly from vercel postgress sql server",
          photo: "/works/1-wo-2.jpg",
        },
        {
          id: 3,
          title: "Data fetching",
          description: "Using next powerful feature of server compoenents by querying database directly, it populates data coming from server into UI",
          photo: "/works/1-wo-3.jpg",
        },
        {
          id: 4,
          title: "Authonticaion",
          description: "Features Authentication which is about making sure the user is who they say they are. You're proving your identity with something you have like a username and password and Authorization is the next step. Once a user's identity is confirmed, authorization decides what parts of the application they are allowed to use. uses nextAth",
          photo: "/works/1.jpg",
        }

      ]
    },
    {
      id: 4,
      title: "Medico website : frontend only in tailwindcss and react",
      photo: "/works/1.jpg",
      link: "https://next-starter-project-woad.vercel.app/",
      modalContent: [
        {
          id: 1,
          title: "",
          description: "",
          photo: "/works/1.jpg",
        },
        {
          id: 2,
          title: "",
          description: "",
          photo: "/works/1.jpg",
        },
        {
          id: 3,
          title: "",
          description: "",
          photo: "/works/1.jpg",
        },
      ]
    },
    {
      id: 5,
      title: "Company website in tailwin css and next.js",
      photo: "/works/1.jpg",
      link: "https://next-starter-project-woad.vercel.app/",
      modalContent: [
        {
          id: 1,
          title: "",
          description: "",
          photo: "/works/1.jpg",
        },
        {
          id: 2,
          title: "",
          description: "",
          photo: "/works/1.jpg",
        },
        {
          id: 3,
          title: "",
          description: "",
          photo: "/works/1.jpg",
        },
      ]
    },
    {
      id: 6,
      title: "Simple shopping cart application in next js frame work",
      photo: "/works/1.jpg",
      link: "https://next-starter-project-woad.vercel.app/",
      modalContent: [
        {
          id: 1,
          title: "",
          description: "",
          photo: "/works/1.jpg",
        },
        {
          id: 2,
          title: "",
          description: "",
          photo: "/works/1.jpg",
        },
        {
          id: 3,
          title: "",
          description: "",
          photo: "/works/1.jpg",
        },

      ]
    },
    
    
  ]
  return (
    <>
      <section className="w-full py-2 bg-slate-100 dark:bg-black" id="works">
        <div className="mx-auto max-w-screen-sm">

        <h1 className='md:text-xl text-lg font-bold text-center mb-1 dark:text-slate-300'>Works</h1>
        <p className="text-center mb-2 dark:text-slate-400">These are some of the projects I have worked and participated on up until now.</p>
        </div>

        <div className="mx-auto max-w-screen-xl">

          <div className="grid md:grid-cols-3 grid-cols-1 gap-4 ">
            {
              works.map(work => {
                return (
                  <div className="bg-white dark:bg-slate-800 dark:p-2 shadow-sm hover:shadow-lg dark:rounded-lg dark:hover:bg-slate-600 group md:rounded-lg rounded-sm transition duration-500 ease-in-out" key={work.id}>
                    <div className="">
                      <Image
                        src={`${work.photo}`}
                        alt="next starter project"
                        width={200}
                        height={200}

                        className="block w-full h-full group-hover:brightness-90 transition-all duration-300 ease-in-out"
                      />
                    </div>

                    <div className="flex items-center justify-between space-x-4 px-4 pb-3 mt-2">
                      <p className="dark:text-slate-300 w-[70%]">{work.title}</p>
                        <EyeIcon className="md:block hidden w-11 h-11 rounded-full bg-slate-200 p-2 cursor-pointer stroke-black dark:bg-slate-500 dark:group-hover:bg-slate-950 dark:group-hover:stroke-white dark:stroke-white hover:bg-slate-300 " onClick={() => {handelShowModal(work)}}  />
                      <Link href={`${work.link}`} target="_blank" className="p-2 inline-block dark:bg-slate-500 dark:text-slate-300 bg-orange-500 rounded-md text-white dark:group-hover:bg-slate-950 hover:bg-orange-700 hover:text-white text-sm">Visit</Link>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </section>
      <WorkModal modalContent={state.modal.modalContent} work={state.modal.work} isModalOpen={state.modal.isOpen}/>
    </>
  )
}