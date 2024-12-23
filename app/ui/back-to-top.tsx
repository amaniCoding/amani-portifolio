'use client'
import { ArrowUpIcon } from "@heroicons/react/24/solid";

export function BackToTop() {
  const hadelScroll = (e: React.MouseEvent<HTMLElement>, name: string) => {
    e.preventDefault()
    window.scrollTo({
      // @ts-expect-error: Object is possibly 'null'.
      top: document.querySelector(`#${name}`).offsetTop - 65,
      behavior: "smooth"
    });
  }
  return (
    <div className="w-12 h-12 rounded-full bg-orange-600 text-white p-3 fixed md:bottom-14 md:right-14 bottom-11 right-11 cursor-pointer animate-bounce" onClick={(e) => { hadelScroll(e, 'home') }}>
      <ArrowUpIcon />
    </div>
  )
}