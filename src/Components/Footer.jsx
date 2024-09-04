import React from 'react'
import { FaGithub } from "react-icons/fa";
import { AiOutlineLinkedin } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaThreads } from "react-icons/fa6";


export const Footer = () => {
  return (
    <div className='bg-black text-white w-full h-[40vh] px-20 py-10 grid grid-cols-3'>
      <div className="left px-20 py-5">
        <h1 className='font-bold text-2xl'>Let's Talk</h1>
        <ul className=' font-semibold text-xl flex flex-col'>
          <a href='/' className='cursor-pointer hover:font-bold w-fit hover:shadow-md px-2 py-1 border-b-[1px] rounded-lg'>Blogs</a>
          <a href='/' className='cursor-pointer hover:font-bold w-fit hover:shadow-md px-2 py-1 border-b-[1px] rounded-lg'>TopBlogs</a>
          <a href='/' className='cursor-pointer hover:font-bold w-fit hover:shadow-md px-2 py-1 border-b-[1px] rounded-lg'>Add Your Blog Now</a>
        </ul>
      </div>
      <div className="middle px-20 py-5">
        <h1 className='font-bold text-2xl '>Browse some Awesome Blog Topics</h1>
        <ul className='font-semibold text-xl'>
          <li className='cursor-pointer hover:font-bold w-fit hover:shadow-md px-2 py-1 border-b-[1px] rounded-lg'>Business</li>
          <li className='cursor-pointer hover:font-bold w-fit hover:shadow-md px-2 py-1 border-b-[1px] rounded-lg'>Career</li>
          <li className='cursor-pointer hover:font-bold w-fit hover:shadow-md px-2 py-1 border-b-[1px] rounded-lg'>Design</li>
          <li className='cursor-pointer hover:font-bold w-fit hover:shadow-md px-2 py-1 border-b-[1px] rounded-lg'>E-Commerce</li>
          <li className='cursor-pointer hover:font-bold w-fit hover:shadow-md px-2 py-1 border-b-[1px] rounded-lg'>Sports</li>
          <li className='cursor-pointer hover:font-bold w-fit hover:shadow-md px-2 py-1 border-b-[1px] rounded-lg'>Tech</li>
          <li className='cursor-pointer hover:font-bold w-fit hover:shadow-md px-2 py-1 border-b-[1px] rounded-lg'>WorkFlow</li>
        </ul>
      </div>
      <div className="right px-20 py-5">
          <h1 className='font-bold text-2xl'>Social Media </h1>
          <ul className='flex flex-col '>
            <a className='cursor-pointer hover:font-bold w-fit hover:shadow-md px-2 py-1 border-b-[1px] rounded-lg flex justify-center items-center gap-3' href=""><FaGithub />Github</a>
            <a className='cursor-pointer hover:font-bold w-fit hover:shadow-md px-2 py-1 border-b-[1px] rounded-lg flex justify-center items-center gap-3' href=""><AiOutlineLinkedin />Linkedin</a>
            <a className='cursor-pointer hover:font-bold w-fit hover:shadow-md px-2 py-1 border-b-[1px] rounded-lg flex justify-center items-center gap-3' href=""><FaInstagram />Instagram</a>
            {/* <a className='cursor-pointer hover:font-bold w-fit hover:shadow-md px-2 py-1 border-b-[1px] rounded-lg' href="">Dribble</a> */}
            <a className='cursor-pointer hover:font-bold w-fit hover:shadow-md px-2 py-1 border-b-[1px] rounded-lg flex justify-center items-center gap-3' href=""><FaXTwitter />Twitter</a>
            <a className='cursor-pointer hover:font-bold w-fit hover:shadow-md px-2 py-1 border-b-[1px] rounded-lg flex justify-center items-center gap-3' href=""><FaThreads />Threads</a>
          </ul>
      </div>
    </div>
  )
}
export default Footer
