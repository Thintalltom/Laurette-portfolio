import React from "react";
import "./Works.css";
import book1 from "../assets/book1.png";
import book2 from "../assets/book2.png";
const Works = () => {
  return (
    <div className="lg:mt-[20px] xs:mt-[0px] bgZinc" name="work">
      <p className="text-center sm:text-6xl xs:text-6xl lg:text-9xl text-zinc-800 font-light">
        MY WORKS
      </p>
      <div className="mt-4 flex lg:flex-row sm:flex-col xs:flex-col xs:justify-center xs:items-center xs:gap-[80px] md:gap-[50px] justify-center justify-around">
        <a href="https://www.amazon.com/My-Country-Insane-T-H-Aina/dp/B09MYVSQ57/ref=mp_s_a_1_1?crid=1JD6D40BODHTG&keywords=my+country+is+insane+by+eth+aina&qid=1706382585&sprefix=my+country+is+insane+by+eth+aina%2Caps%2C328&sr=8-1">
        <div className="w-[200px] cursor-pointer h-[300px] ">
          <img src={book1} className='h-[300px]' />
          <p className="text-sm text-center font-extralight mt-[10px]">My Country Is Insane</p>
        </div>
          </a>
       <a href="https://www.amazon.com/EVERYTHING-THAT-MAKES-ME-CRY/dp/B0CJ4F4944/ref=mp_s_a_1_1?crid=371VQR0A510ZI&keywords=everything+that+makes+me+cry+by+eth+aina&qid=1706382510&s=digital-text&sprefix=everything+that+makes+me+cry+by+eth+aina%2Caps%2C306&sr=1-1">
       <div className="w-[200px] cursor-pointer h-[300px] bg-zinc-300">
          <img src={book2} className='h-[300px]' />
          <p className="text-sm text-center font-extralight mt-[10px]">Everything That Makes Me cry</p>
        </div>
        </a> 
        <div className="w-[200px] h-[300px] bg-zinc-300"></div>
        <div className="w-[200px] h-[300px] bg-zinc-300"></div>
      </div>
    </div>
  );
};

export default Works;
