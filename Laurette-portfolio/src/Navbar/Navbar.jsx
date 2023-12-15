import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { HiChevronDown, HiChevronUp } from "react-icons/hi";
import { Link as LinkScroll } from "react-scroll";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };
  
  const handleItem = () => {
    setOpen(true);
  };

  const [dropdown, setDropdown] = useState(false);
  const handleOpen = () => {
    setDropdown(!dropdown);
  };

  return (
    <div>
      <div className="bg-zinc-950 lg:block xl:block xxl:block  text-white h-[70px] xs:hidden sm:hidden">
        <div className="flex  h-[40px] justify-between p-4">
     <Link to='/'>     <p className="font-extralight text-4xl">eth.Aina</p> </Link>
          <div className="flex flex-row gap-[20px]">
            <LinkScroll to="about" smooth={true} duration={1000}>
              <p className="font-thin cursor-pointer hover:border-b-2  h-[35px] p-[5px]">
                ABOUT
              </p>
            </LinkScroll>

            <div className="flex flex-col">
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
                    ? "bg-white text-zinc-700  h-[150px]  rounded-[5px] "
                    : "hidden"
                }
              >
                <Link to="/poem">
                  {" "}
                  <p onClick={handleItem} className="cursor-pointer hover:bg-zinc-200 w-[100px] p-[5px] ">
                    Poetry
                  </p>{" "}
                </Link>
                <Link to="/fiction">
                  {" "}
                  <p onClick={handleItem} className="cursor-pointer hover:bg-zinc-200 w-[100px] p-[5px] ">
                    Fiction
                  </p>{" "}
                </Link>
                <Link to="/nonfiction">
                  {" "}
                  <p onClick={handleItem} className="cursor-pointer hover:bg-zinc-200 w-[100px] p-[5px]">
                    Non-fiction
                  </p>{" "}
                </Link>
                <Link to="/essay">
                  {" "}
                  <p onClick={handleItem} className="cursor-pointer hover:bg-zinc-200 w-[100px] p-[5px]">
                    Essay
                  </p>
                </Link>
              </div>
            </div>

           <LinkScroll to='work' smooth={true} duration={1000}> <p className="font-thin cursor-pointer hover:border-b-2  h-[35px] p-[5px]">
              WORKS
            </p> </LinkScroll>

            <p className="font-thin cursor-pointer hover:border-b-2  h-[35px] p-[5px]">
              CREATIVE HUB
            </p>

            <LinkScroll to='service' smooth={true} duration={1000}> <p className="font-thin cursor-pointer hover:border-b-2  h-[35px] p-[5px]">
              SERVICES
            </p> </LinkScroll>
          </div>
        </div>
      </div>

      {/*Navbar for small screen*/}
      <div className="lg:hidden xxl:hidden xl:hidden sm:block xs:block">
        <div className="bg-zinc-950 p-[20px] flex justify-between">
        <Link to='/'>      <p className="text-white text-2xl font-extralight">eth.Aina</p> </Link> 
          <div onClick={handleClick}>
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
              ? "flex flex-col bg-zinc-950 text-white p-4 gap-[20px]"
              : "hidden"
          }
        >
          <p onClick={handleItem} className="font-thin cursor-pointer hover:border-b-2  ">ABOUT</p>
          <div className="flex flex-col">
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
                  ? "bg-white text-zinc-700  h-[150px]  rounded-[5px] "
                  : "hidden"
              }
            >
              <Link to="/poem">
                {" "}
                <p onClick={handleItem} className="cursor-pointer hover:bg-zinc-200 w-[245px] p-[5px] ">
                  Poetry
                </p>{" "}
              </Link>
              <Link to="/fiction">
                {" "}
                <p onClick={handleItem} className="cursor-pointer hover:bg-zinc-200 w-[245px] p-[5px] ">
                  Fiction
                </p>{" "}
              </Link>
              <Link to="/nonfiction">
                {" "}
                <p onClick={handleItem} className="cursor-pointer hover:bg-zinc-200 w-[245px] p-[5px]">
                  Non-fiction
                </p>{" "}
              </Link>
              <Link to="/essay">
                {" "}
                <p onClick={handleItem} className="cursor-pointer hover:bg-zinc-200 w-[245px] p-[5px]">
                  Essay
                </p>{" "}
              </Link>
            </div>
          </div>
          <p onClick={handleItem} className="font-thin cursor-pointer hover:border-b-2 ">GALLERY</p>

          <p onClick={handleItem} className="font-thin cursor-pointer hover:border-b-2">
            CREATIVE HUB
          </p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
