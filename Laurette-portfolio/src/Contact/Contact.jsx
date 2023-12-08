import React from 'react'
import { FaTwitterSquare, FaLinkedinIn, FaInstagram,  FaFacebookF } from "react-icons/fa";
const Contact = () => {
  return (
    <div>
        <p className='text-center  text-zinc-400 font-light'>
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