'use client'
import { SocialIcon } from "react-social-icons";

export default function ContactMe() {
  return (
    <div className='flex flex-row gap-x-4'>

      <SocialIcon url='www.facebook.com' style={{ width: '37px', height: '37px' }}></SocialIcon>
      <SocialIcon url='www.github.com' style={{ width: '37px', height: '37px' }}></SocialIcon>
      <SocialIcon url='www.linkedin.com' style={{ width: '37px', height: '37px' }}></SocialIcon>
      <SocialIcon url='www.x.com' style={{ width: '37px', height: '37px' }}></SocialIcon>
    </div>
  )
}