import React from "react";
import "./Works.css";
import book1 from "../assets/book1.png";
import book2 from "../assets/book2.png";
const Works = () => {
  return (
    <div className="mt-[20px] bgZinc" name="work">
      <p className="text-center sm:text-6xl xs:text-6xl lg:text-9xl text-zinc-800 font-light">
        MY WORKS
      </p>
      <div className="mt-4 flex lg:flex-row sm:flex-col xs:flex-col xs:justify-center xs:items-center xs:gap-[20px] md:gap-[50px] justify-center justify-around">
        <div className="w-[200px] cursor-pointer h-[300px] ">
          <img src={book1} className='h-[300px]' />
          <p className="text-sm text-center font-extralight mt-[10px]">My Country Is Insane</p>
        </div>
        <div className="w-[200px] cursor-pointer h-[300px] bg-zinc-300">
        <img src={book2} className='h-[300px]' />
        <p className="text-sm text-center font-extralight mt-[10px]">Everything That Makes Me cry</p>
        </div>
        <div className="w-[200px] h-[300px] bg-zinc-300"></div>
        <div className="w-[200px] h-[300px] bg-zinc-300"></div>
      </div>
    </div>
  );
};

export default Works;
