'use client'
import { ArrowUpIcon } from "@heroicons/react/24/solid";
import { useEffect, useRef } from "react";

export function BackToTop() {
const backToTop = useRef<SVGSVGElement>(null);
  const hadelScroll = (e: React.MouseEvent<SVGSVGElement, MouseEvent>, name: string) => {
    e.preventDefault()
    window.scrollTo({
      // @ts-expect-error: Object is possibly 'null'.
      top: document.querySelector(`#${name}`).offsetTop,
      behavior: "smooth"
    });
  }

  const handelScroll = () => {
    window.addEventListener("scroll", function() {
      if(this.document.body.scrollTop > 100 || this.document.documentElement.scrollTop > 100) {
        backToTop.current!.style.display = "block";
      } else {
        backToTop.current!.style.display = "none";
      }
    });
  }

  useEffect(() => {
    handelScroll();
    return () => {
      handelScroll();
    }
  },[])
  return (

      <ArrowUpIcon className="w-11 h-11 rounded-full bg-orange-600 text-white p-3 fixed md:bottom-14 md:right-14 bottom-11 right-11 cursor-pointer animate-bounce stroke-white dark:bg-slate-900 dark:text-white" onClick={(e) => { hadelScroll(e, 'home') }} ref={backToTop} />
  )
}