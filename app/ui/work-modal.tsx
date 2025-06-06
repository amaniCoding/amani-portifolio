"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { GlobalContextType, Modalcontent, MyWork } from "../types/types";
import { XMarkIcon } from "@heroicons/react/24/outline";

import Slider from "react-slick";
import Image from "next/image";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import { useContext, useRef } from "react";
import { AppContext } from "../Provider/provider";
import Link from "next/link";

export default function WorkModal(props: {
  work?: MyWork;
  modalContent?: Modalcontent[];
  isModalOpen: boolean;
}) {
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
      payload: { modal: { isOpen: false, modalContent: [], work: undefined } },
    });
  };

  const handelNext = () => {
    sliderRef?.current?.slickNext();
  };

  const handelPrev = () => {
    sliderRef?.current?.slickPrev();
  };

  return (
    <div
      className={`bg-black/50 fixed z-50 top-0 bottom-0 left-0 right-0 flex items-center justify-center ${
        props.isModalOpen ? " block" : "hidden"
      }`}
    >
      <div className="px-5 pt-5 pb-2 max-w-screen-sm block bg-white relative rounded-md dark:bg-gray-900 dark:shadow-xl">
        <ArrowLeftIcon
          onClick={handelPrev}
          className="w-9 h-9 flex items-center justify-center absolute top-1/2 left-3 z-20 bg-blue-600 cursor-pointer rounded-full p-2 hover:bg-blue-500 text-white hover:text-white hover:scale-110 transition duration-300 ease-out hover:stroke-white dark:bg-slate-800 dark:text-white hover:-translate-x-1"
        />
        <ArrowRightIcon
          onClick={handelNext}
          className="w-9 h-9 flex items-center justify-center absolute top-1/2 right-3 z-20 bg-blue-600 cursor-pointer rounded-full p-2  hover:bg-blue-500 text-white hover:text-white hover:scale-110 transition duration-300 ease-out hover:stroke-white dark:bg-slate-800 dark:text-white hover:translate-x-1"
        />

        <XMarkIcon
          className="w-10 h-10 absolute top-2 right-3 cursor-pointer hover:bg-slate-300 p-2 rounded-full stroke-black dark:stroke-white dark:bg-slate-800 dark:hover:bg-slate-500"
          onClick={handelCloseModal}
        />
        <div className="flex flex-col">
          <div className="w-[95%]">
            {props.modalContent?.[0]?.title ? (
              <p className="font-semibold text-lg text-cente text-black dark:text-slate-300">
                Features for {props.work?.title} include{" "}
              </p>
            ) : (
              <p className="font-semibold text-lg text-cente text-black dark:text-slate-300">
                {props.work?.title}
              </p>
            )}
          </div>
          <div
            className={` ${
              props.modalContent?.[0]?.title === ""
                ? "h-auto overflow-y-hidden"
                : "overflow-y-scroll h-[400px] [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-400 [&::-webkit-scrollbar-thumb]:rounded-xl dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500"
            } py-2 px-1 `}
          >
            <div>
              <Slider {...settings} ref={sliderRef}>
                {props.modalContent?.map((modal) => {
                  return (
                    <div className="flex flex-col" key={modal.id}>
                      <div className="text-center">
                        {modal.title && (
                          <span className="px-2 py-1 inline-block rounded-lg text-center mb-2 bg-slate-50 text-lg dark:bg-slate-300 dark:text-black">
                            {modal.title}
                          </span>
                        )}
                      </div>
                      <p className="px-3 mb-2 dark:text-slate-300">
                        {modal.description}
                      </p>
                      <Image
                        src={`${modal.photo}`}
                        alt={`${modal.title}`}
                        width={0}
                        height={0}
                        sizes="100vh"
                        className="w-full h-auto"
                      />
                    </div>
                  );
                })}
              </Slider>
            </div>
          </div>

          <div className="p-2 w-full flex items-center space-x-4 mt-3">
            <button
              className="rounded-lg p-2 bg-slate-300 text-center text-black dark:bg-gray-600 dark:text-white text-sm dark:hover:bg-gray-300 dark:hover:text-black"
              onClick={handelCloseModal}
            >
              Cancel
            </button>
            <Link
              href={`${props.work?.link}`}
              className="p-2 bg-blue-600 text-center text-white rounded-lg dark:bg-slate-800 dark:text-white text-sm dark:hover:bg-slate-500"
              target="_blank"
            >
              Visit
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
