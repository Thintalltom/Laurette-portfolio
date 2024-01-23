import React from "react";
import { motion } from "framer-motion"
import "./Home.css";
import About from "../About/About";
import Works from "../Works/Works";
import Services from "../Services/Services";
import Contact from "../Contact/Contact";
import Experience from "../Experience/Experience";


const Home = () => {
  return (
    <div className="bgZinc ">
      <div className=" text-white">
        <div className=" p-[50px]   backImg gap-[5px] bg-zinc-950 flex text-white xs:h-[40rem] 2xl:h-[70rem] xl:h-[70rem] lg:h-[60rem] sm:h-[30rem] ">
          <div className="   lg:w-[80rem] md:w-[60rem] sm:w-[80rem]  mt-[60px] sm:h-[300px] md:h-[400px] lg:h-[700px]  flex-col flex justify-center items-center">
            <motion.p
            initial={{x: -100}}
            animate={{x: 0}}
            transition= {{duration: 2}}
             className="lg:text-9xl longText xs:text-[50px] xs:font-bold md:text-lg sm:text-7xl md:text-3xl  lg:font-extralight">
              eth.aina
            </motion.p>
            <p className="xs:text-sm">Ghostwriter || Poet || Storyteller || Publisher</p>
            <a href="mailto:ethaina101@gmail.com">
            <button className=" p-[20px] mt-[80px] xs:w-[200px] lg:w-[300px] text-zinc-950 text-[20px] mx-auto bg-white shadow">
         Hire Me
        </button>
        </a>
          </div>
        </div>
        <div className=" mt-[-60px]">
          <About />
          <Works />
          <Services />
          <Contact />
        </div>
      </div>
    </div>
  );
};

export default Home;
