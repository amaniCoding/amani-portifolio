'use client'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { GlobalContextType, Modalcontent, MyWork } from "../types/types"
import { XMarkIcon } from "@heroicons/react/24/outline"

import Slider from "react-slick";
import Image from "next/image";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import { useContext, useRef } from "react";
import { AppContext } from "../Provider/provider";
import Link from "next/link";

export default function (props: { work?: MyWork, modalContent?: Modalcontent[], isModalOpen: boolean }) {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,

  };

  const sliderRef = useRef<Slider>(null);

  const { dispatch } = useContext(AppContext) as GlobalContextType;

  const handelCloseModal = () => {
    dispatch({
      type: "CLOSE_MODAL",
      payload: { modal: { isOpen: false, modalContent: [], work: undefined } }
    });
  }

  const handelNext = () => {
    sliderRef?.current?.slickNext();
  }

  const handelPrev = () => {
    sliderRef?.current?.slickPrev();
  }

  return (
    <div className={`bg-black/50 fixed z-30 top-0 bottom-0 left-0 right-0 flex items-center justify-center ${props.isModalOpen ? ' block' : 'hidden'}`}>
      <div className="p-5 max-w-screen-sm block bg-white relative rounded-md"
      >
        <div className="w-9 h-9 flex items-center justify-center absolute top-1/2 z-20 left-3 bg-orange-200 rounded-full p-2 text-slate-800 cursor-pointer hover:bg-orange-500 hover:text-white " onClick={handelPrev}><ArrowLeftIcon /></div>
        <div className="w-9 h-9 flex items-center justify-center absolute top-1/2 right-3 z-20 bg-orange-200 cursor-pointer rounded-full p-2 text-slate-800 hover:bg-orange-500 hover:text-white" onClick={handelNext}><ArrowRightIcon /></div>
        <div className="h-10 w-10 flex items-center justify-center absolute top-2 right-3 cursor-pointer hover:bg-slate-300 p-2 rounded-full" onClick={handelCloseModal}>
          <XMarkIcon />
        </div>
        <div className="flex flex-col">

          <div className="w-[95%]"><p className="font-semibold text-lg text-cente text-black">Features for {props.work?.title} include </p></div>
          <div className="mb-7">
            <Slider {...settings} ref={sliderRef}>
              {
                props.modalContent?.map(modal => {
                  return (
                    <div className="flex flex-col" key={modal.id}>
                      <p className="px-3 text-center font-serif text-xl">{modal.title}</p>
                      <p className="px-3">{modal.description}</p>
                      <Image
                        src={`${modal.photo}`}
                        alt={`${modal.title}`}
                        width={0}
                        height={0}
                        sizes="100vh"
                        className="w-full h-auto"
                      />
                    </div>
                  )
                })
              }
            </Slider>

          </div>
          <div className="p-2 w-full flex items-center justify-between" onClick={handelCloseModal}>
              <button className="rounded-lg p-2 bg-slate-300 text-center text-black">Cancel</button>
            <Link
              href={`${props.work?.link}`}
              className="block"
            ><button className=" p-2 bg-orange-500 text-center text-white rounded-lg ">Visit</button></Link>
          </div>
        </div>

      </div>

    </div>
  )
}