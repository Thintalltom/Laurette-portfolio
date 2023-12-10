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
    <div className="">
      <div className="bgZinc text-white">
        <div className=" p-[50px]   backImg gap-4 bg-zinc-950 flex text-white xs:h-[40rem] 2xl:h-[70rem] xl:h-[70rem] lg:h-[60rem] sm:h-[30rem] ">
          <div className=" lg:w-[80rem] md:w-[60rem] sm:w-[80rem]  mt-[60px] sm:h-[300px] md:h-[400px] lg:h-[700px]  flex-col flex justify-center items-center">
            <motion.p
            initial={{x: -100}}
            animate={{x: 0}}
            transition= {{duration: 2}}
             className="lg:text-9xl longText xs:text-7xl md:text-lg sm:text-7xl md:text-3xl  font-extralight">
              Eth
            </motion.p>
            <p className="longText font-extralight sm:indent-8 lg:indent-72">
              {" "}
              AINA
            </p>
            <button className=" hover:border-0 hover:bg-zinc-950 font-extralight border-[0.2px] lg:w-[500px] lg:h-[300px] sm:w-[400px] sm:h-[100px] md:h-[100px]  lg:text-5xl p-4 theBtn">
            <a href="mailto:ethaina101@gmail.com">HIRE ME</a>
            </button>
          
          </div>
        </div>
        <div className="p-4 mt-[-60px] h-[50rem]">
          <About />
          <Experience />
          <Works />
          <Services />
          <Contact />
        </div>
      </div>
    </div>
  );
};

export default Home;
