"use client";

import Link from "next/link";
import { useState } from "react";
import { BsCart2 } from "react-icons/bs";
import { FaSearch } from "react-icons/fa";
import { GrFavorite } from "react-icons/gr";
import { MdMenu } from "react-icons/md";
import MobileVersionNavbar from "./MobileVersionNavbar";
import NavItems from "./NavItems";
import UserIcon from "./UserIcon";
interface ProsType {
  children: React.ReactNode;
}
export default function Navbar({ children }: ProsType) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="w-full border-b border-secondaryLightGraryColor/60 ">
      {children}
      <div className="w-full px-5 md:px-20 py-10 md:py-4 grid grid-cols-1  place-items-center md:grid-cols-[1fr_2fr_2fr_1fr] lg:grid-cols-[1fr_2fr_2fr] gap-x-6 gap-y-4 shadow-lg shadow-secondaryWhiteColorThree">
        <div className="w-full">
          <h1 className="font-bold text-xl text-black leading-8">EasyMart</h1>
        </div>
        <nav className="w-fit  hidden lg:block ">
          <NavItems className="lg:flex flex-row text-xs" />
        </nav>
        <div className="flex items-center md:col-span-2 order-3  md:order-2 lg:order-3  justify-end  gap-x-5 w-full col-span-2 lg:col-span-1">
          <form action="" className="w-full">
            <div className="relative h-[38px] group  w-full ">
              <input
                type="text"
                placeholder="What are you looking for?"
                className="bg-secondaryWhiteColorOne focus:ring-0 focus:outline-0 h-full hover:border-[2px] hover:border-teritiaryLightOrangeColor duration-150 transition-colors w-full py-2 px-4 pr-10 rounded-[4px] text-black font-light text-xs line-clamp-1"
              />
              <FaSearch className="absolute group-hover:text-teritiaryLightOrangeColor group-hover:scale-[1.3] transition-all duration-500 right-3 top-1/2 transform -translate-y-1/2 text-black/20" />
            </div>
          </form>
          <div className="flex items-center justify-center gap-x-4">
            <GrFavorite className="w-4 h-4 md:scale-[1.1] mt-1 text-black/60 " />
            <Link href={"/cart"}>
              <BsCart2 className="w-4 h-4 md:scale-[1.1]  text-black/60" />
            </Link>

            <UserIcon />
          </div>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className=" lg:hidden font-bold text-xl order-2 md:order-3"
        >
          <MdMenu />
        </button>
      </div>

      {/* mobil phones */}
      {isOpen && <MobileVersionNavbar openHanlder={() => setIsOpen(false)} />}
    </section>
  );
}
