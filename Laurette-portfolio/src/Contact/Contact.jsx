import React from 'react'
import { FaTwitterSquare, FaLinkedinIn, FaInstagram,  FaFacebookF } from "react-icons/fa";
const Contact = () => {
  return (
    <div className='mt-[15rem] '>
      <div className='flex justify-center items-center flex-col'>
      <p className='font-extralight'>Subscribe for Newsletter</p>
      <div className='flex'>
        <div className='bg-zinc-950 p-[15px]'>
      <input type='text' defaultValue='Enter Email'className='w-[400px] bg-transparent mt-[10px]'/>
      <button className='bg-slate-750 '>Subscribe</button>
      </div>
      </div>

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