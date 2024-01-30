import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { HiChevronDown, HiChevronUp } from "react-icons/hi";
import { Link as LinkScroll } from "react-scroll";
import { Link } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };

  const handleItem = () => {
    setOpen(true);
  };

  const handleThis = () => {
    setOpen(false);
  }

  const [dropdown, setDropdown] = useState(false);
  const handleOpen = () => {
    setDropdown(!dropdown);
  };

  return (
    <div>
      <div className="bgZinc lg:block xl:block xxl:block  text-white h-[70px] xs:hidden sm:hidden">
        <div className="flex  h-[40px] justify-between p-4">
          <Link to="/">
            {" "}
            <p className="font-extralight text-4xl">eth.aina</p>{" "}
         
          </Link>
          <div className="flex flex-row gap-[20px]">
            <LinkScroll to="about" smooth={true} duration={1000}>
              <p className="font-thin cursor-pointer hover:border-b-2  h-[35px] p-[5px]">
                ABOUT
              </p>
            </LinkScroll>

            <div className="flex flex-col relative">
              <div
                onClick={handleOpen}
                className=" flex gap-[5px] cursor-pointer font-thin cursor-pointer hover:border-b-2  h-[35px] p-[5px]"
              >
                WRITING{" "}
                <span> {dropdown ? <HiChevronUp /> : <HiChevronDown />}</span>
              </div>

              <div
                className={
                  dropdown
                    ? " absolute bg-zinc-950 text-white border-[0.5px] z-10 h-[150px] mt-[50px]  rounded-[5px] "
                    : "hidden"
                }
              >
                <Link to="/poem">
                  {" "}
                  <p
                    onClick={handleThis}
                    className="cursor-pointer hover:bg-zinc-200 hover:text-zinc-950 w-[100px] p-[5px] "
                  >
                    Poetry
                  </p>{" "}
                </Link>
                <Link to="/fiction">
                  {" "}
                  <p
                    onClick={handleItem}
                    className="cursor-pointer hover:bg-zinc-200 hover:text-zinc-950 w-[100px] p-[5px] "
                  >
                    Fiction
                  </p>{" "}
                </Link>
                <Link to="/nonfiction">
                  {" "}
                  <p
                    onClick={handleItem}
                    className="cursor-pointer hover:bg-zinc-200 hover:text-zinc-950 w-[100px] p-[5px]"
                  >
                    Non-fiction
                  </p>{" "}
                </Link>
                <Link to="/essay">
                  {" "}
                  <p
                    onClick={handleItem}
                    className="cursor-pointer hover:bg-zinc-200 hover:text-zinc-950 w-[100px] p-[5px]"
                  >
                    Essay
                  </p>
                </Link>
              </div>
            </div>

            <LinkScroll to="work" smooth={true} duration={1000}>
              {" "}
              <p className="font-thin cursor-pointer hover:border-b-2  h-[35px] p-[5px]">
                WORKS
              </p>{" "}
            </LinkScroll>
            <Link to='opportunity'>
            <p className="font-thin cursor-pointer hover:border-b-2  h-[35px] p-[5px]">
              OPPORTUNITIES
            </p>
            </Link>
            
              <Link to='publication'>
              <p className="font-thin cursor-pointer hover:border-b-2  h-[35px] p-[5px]">
              PUBLICATIONS
            </p>
              </Link>
            

            <LinkScroll to="service" smooth={true} duration={1000}>
              {" "}
              <p className="font-thin cursor-pointer hover:border-b-2  h-[35px] p-[5px]">
                SERVICES
              </p>{" "}
            </LinkScroll>
          </div>
        </div>
      </div>

      {/*Navbar for small screen*/}
      <div className="lg:hidden xxl:hidden xl:hidden sm:block xs:block">
        <div className="bgZinc p-[20px] flex justify-between z-10">
          <Link to="/">
            {" "}
            <p className="text-white text-2xl font-extralight z-10">
              eth.aina
            </p>{" "}
          </Link>
          <div onClick={handleClick} className="z-10">
            {open ? (
              <FiMenu className="text-white text-2xl" />
            ) : (
              <FiX className="text-white text-2xl" />
            )}
          </div>
        </div>
        <div
          className={
            !open
              ? "flex flex-col bgZinc w-full mt-[60px] z-[100]  text-white p-[20px] gap-[20px] absolute top-0 left-0"
              : "hidden"
          }
        >
          <p
            onClick={handleItem}
            className="font-thin cursor-pointer hover:border-b-2  "
          >
            ABOUT
          </p>
          <div className="flex  flex-col">
            <div
              onClick={handleOpen}
              className=" flex gap-[5px] cursor-pointer font-thin cursor-pointer hover:border-b-2  h-[35px] "
            >
              WRITING{" "}
              <span> {dropdown ? <HiChevronUp /> : <HiChevronDown />}</span>
            </div>

            <div
              className={
                dropdown
                  ? "bgZinc text-zinc-700  h-[150px]  rounded-[5px] "
                  : "hidden"
              }
            >
              <Link to="/poem">
                {" "}
                <p
                  onClick={handleItem}
                  className="cursor-pointer text-white w-[245px] p-[5px] "
                >
                  Poetry
                </p>{" "}
              </Link>
              <Link to="/fiction">
                {" "}
                <p
                  onClick={handleItem}
                  className="cursor-pointer text-white w-[245px] p-[5px] "
                >
                  Fiction
                </p>{" "}
              </Link>
              <Link to="/nonfiction">
                {" "}
                <p
                  onClick={handleItem}
                  className="cursor-pointer text-white w-[245px] p-[5px]"
                >
                  Non-fiction
                </p>{" "}
              </Link>
              <Link to="/essay">
                {" "}
                <p
                  onClick={handleItem}
                  className="cursor-pointer text-white w-[245px] p-[5px]"
                >
                  Essay
                </p>{" "}
              </Link>
            </div>
          </div>
          <LinkScroll to="work" smooth={true} duration={1000}>
          <p
            onClick={handleItem}
            className="font-thin cursor-pointer hover:border-b-2"
          >
           Works
          </p>
            </LinkScroll>
          <Link to='publication'>
              <p onClick={handleItem} className="font-thin cursor-pointer hover:border-b-2  h-[35px]">
              PUBLICATIONS
            </p>
              </Link>
            <Link to='opportunity'>
            <p
            onClick={handleItem}
            className="font-thin cursor-pointer hover:border-b-2"
          >
            OPPORTUNTIES
          </p>
            </Link>
         
        </div>
      </div>
    </div>
  );
};

export default Navbar;
