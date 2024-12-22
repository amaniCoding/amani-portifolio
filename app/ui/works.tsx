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
      title: "Simple shopping cart application in next js frame work",
      photo: "/works/1.jpg",
      link: "https://next-starter-project-woad.vercel.app/",
      modalContent: [
        {
          id: 1,
          title: "data fetching",
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, perspiciatis id vero odio distinctio accusantium iste nihil, modi facere in dolore",
          photo: "/works/1.jpg",
        },
        {
          id: 2,
          title: "data fetching",
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, perspiciatis id vero odio distinctio accusantium iste nihil, modi facere in dolore",
          photo: "/works/1.jpg",
        },
        {
          id: 3,
          title: "data fetching",
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, perspiciatis id vero odio distinctio accusantium iste nihil, modi facere in dolore",
          photo: "/works/1.jpg",
        },
        {
          id: 4,
          title: "data fetching",
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, perspiciatis id vero odio distinctio accusantium iste nihil, modi facere in dolore",
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
          title: "data fetching",
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, perspiciatis id vero odio distinctio accusantium iste nihil, modi facere in dolore",
          photo: "/works/1.jpg",
        },
        {
          id: 2,
          title: "data fetching",
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, perspiciatis id vero odio distinctio accusantium iste nihil, modi facere in dolore",
          photo: "/works/1.jpg",
        },
        {
          id: 3,
          title: "data fetching",
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, perspiciatis id vero odio distinctio accusantium iste nihil, modi facere in dolore",
          photo: "/works/1.jpg",
        },
        {
          id: 4,
          title: "data fetching",
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, perspiciatis id vero odio distinctio accusantium iste nihil, modi facere in dolore",
          photo: "/works/1.jpg",
        }

      ]
    },
    {
      id: 3,
      title: "Simple shopping cart application in next js frame work",
      photo: "/works/1.jpg",
      link: "https://next-starter-project-woad.vercel.app/",
      modalContent: [
        {
          id: 1,
          title: "data fetching",
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, perspiciatis id vero odio distinctio accusantium iste nihil, modi facere in dolore",
          photo: "/works/1.jpg",
        },
        {
          id: 2,
          title: "data fetching",
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, perspiciatis id vero odio distinctio accusantium iste nihil, modi facere in dolore",
          photo: "/works/1.jpg",
        },
        {
          id: 3,
          title: "data fetching",
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, perspiciatis id vero odio distinctio accusantium iste nihil, modi facere in dolore",
          photo: "/works/1.jpg",
        },
        {
          id: 4,
          title: "data fetching",
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, perspiciatis id vero odio distinctio accusantium iste nihil, modi facere in dolore",
          photo: "/works/1.jpg",
        }

      ]
    },
    {
      id: 4,
      title: "Simple shopping cart application in next js frame work",
      photo: "/works/1.jpg",
      link: "https://next-starter-project-woad.vercel.app/",
      modalContent: [
        {
          id: 1,
          title: "data fetching",
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, perspiciatis id vero odio distinctio accusantium iste nihil, modi facere in dolore",
          photo: "/works/1.jpg",
        },
        {
          id: 2,
          title: "data fetching",
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, perspiciatis id vero odio distinctio accusantium iste nihil, modi facere in dolore",
          photo: "/works/1.jpg",
        },
        {
          id: 3,
          title: "data fetching",
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, perspiciatis id vero odio distinctio accusantium iste nihil, modi facere in dolore",
          photo: "/works/1.jpg",
        },
        {
          id: 4,
          title: "data fetching",
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, perspiciatis id vero odio distinctio accusantium iste nihil, modi facere in dolore",
          photo: "/works/1.jpg",
        }

      ]
    },
    {
      id: 5,
      title: "Simple shopping cart application in next js frame work",
      photo: "/works/1.jpg",
      link: "https://next-starter-project-woad.vercel.app/",
      modalContent: [
        {
          id: 1,
          title: "data fetching",
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, perspiciatis id vero odio distinctio accusantium iste nihil, modi facere in dolore",
          photo: "/works/1.jpg",
        },
        {
          id: 2,
          title: "data fetching",
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, perspiciatis id vero odio distinctio accusantium iste nihil, modi facere in dolore",
          photo: "/works/1.jpg",
        },
        {
          id: 3,
          title: "data fetching",
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, perspiciatis id vero odio distinctio accusantium iste nihil, modi facere in dolore",
          photo: "/works/1.jpg",
        },
        {
          id: 4,
          title: "data fetching",
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, perspiciatis id vero odio distinctio accusantium iste nihil, modi facere in dolore",
          photo: "/works/1.jpg",
        }

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
          title: "data fetching",
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, perspiciatis id vero odio distinctio accusantium iste nihil, modi facere in dolore",
          photo: "/works/1.jpg",
        },
        {
          id: 2,
          title: "data fetching",
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, perspiciatis id vero odio distinctio accusantium iste nihil, modi facere in dolore",
          photo: "/works/1.jpg",
        },
        {
          id: 3,
          title: "data fetching",
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, perspiciatis id vero odio distinctio accusantium iste nihil, modi facere in dolore",
          photo: "/works/1.jpg",
        },
        {
          id: 4,
          title: "data fetching",
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, perspiciatis id vero odio distinctio accusantium iste nihil, modi facere in dolore",
          photo: "/works/1.jpg",
        }

      ]
    },
    
    
  ]
  return (
    <>
      <section className="w-full py-2 bg-slate-100" id="works">
        <div className="mx-auto max-w-screen-sm">

        <h1 className='md:text-3xl text-xl font-bold text-center mb-1'>Works</h1>
        <p className="text-center mb-2">These are some of the projects I have worked and participated on up until now.</p>
        </div>

        <div className="mx-auto max-w-screen-xl">

          <div className="grid md:grid-cols-3 grid-cols-1 gap-4 ">
            {
              works.map(work => {
                return (
                  <div className="bg-white shadow-sm hover:shadow-lg group" key={work.id}>
                    <div className="">
                      <Image
                        src={`${work.photo}`}
                        alt="next starter project"
                        width={200}
                        height={200}

                        className="block w-full h-full group-hover:brightness-75 transition-all duration-300 ease-in-out"
                      />
                    </div>

                    <div className="flex items-center justify-between space-x-5 px-5 pb-4 mt-1">
                      <p className="grow">{work.title}</p>
                      <div className="md:flex hidden items-center justify-center p-2 bg-slate-300 rounded-full w-10 h-10 cursor-pointer" title="Show more" onClick={() => {handelShowModal(work)}}>
                        <EyeIcon className="h-10 w-10" color="black" />
                      </div>
                      <Link href={`${work.link}`} className="p-2 block rounded-md bg-orange-500 text-white">Visit</Link>
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