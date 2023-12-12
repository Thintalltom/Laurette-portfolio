import React from 'react'
import { FaTwitterSquare, FaLinkedinIn, FaInstagram,  FaFacebookF } from "react-icons/fa";
const Contact = () => {
  return (
    <div className='mt-[15rem] '>
      
  <p className='text-center'>Subscribe for newsletter </p>
    <div className='bg-zinc-450 p-4  flex items-center justify-center '>
      <div className='border-[0.5px] p-4'>
      <input type='text' className='border-transparent  w-[300px] text-zinc-950 p-[5px] rounded-sm'/>
    <button className='bg-zinc-950 text-white w-[100px] p-[5px] rounded-sm'>Subscribe</button>
      </div>

      <button><a>Hire Me</a></button>
    
    </div>
        <p className='text-center mt-[20px] text-zinc-400 font-light'>
       Connect with me on <a>Amazon.com</a>
        </p>
        <div className='flex justify-center mt-4 items-center gap-[30px]'>
    <a className='text-5xl cursor-pointer'><FaTwitterSquare /></a>
    <a className='text-5xl cursor-pointer'><FaFacebookF /></a>
    <a className='text-5xl cursor-pointer' href="https://www.linkedin.com/in/aina-temitope-emmanuel-eth-aina-7190a720b/"><FaLinkedinIn /></a>
    <a className='text-5xl cursor-pointer'><FaInstagram /></a>
        </div>
        </div>
  )
}

export default Contact