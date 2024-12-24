'use client'
import { ArrowUpIcon } from "@heroicons/react/24/solid";

export function BackToTop() {
  const hadelScroll = (e: React.MouseEvent<SVGSVGElement, MouseEvent>, name: string) => {
    e.preventDefault()
    window.scrollTo({
      // @ts-expect-error: Object is possibly 'null'.
      top: document.querySelector(`#${name}`).offsetTop,
      behavior: "smooth"
    });
  }
  return (

      <ArrowUpIcon className="w-11 h-11 rounded-full bg-orange-600 text-white p-3 fixed md:bottom-14 md:right-14 bottom-11 right-11 cursor-pointer animate-bounce stroke-white dark:bg-slate-900 dark:text-white" onClick={(e) => { hadelScroll(e, 'home') }} />
  )
}