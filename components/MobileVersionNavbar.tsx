"use client";

import Image from "next/image";
import { RiCloseLargeFill } from "react-icons/ri";
import NavItems from "./NavItems";

interface ProsType {
  openHanlder: VoidFunction;
}
export default function MobileVersionNavbar({ openHanlder }: ProsType) {
  return (
    <div className="fixed inset-0 left-0 z-50 flex h-screen w-full flex-col items-center justify-center overflow-hidden bg-secondaryWhiteColorThree py-10 shadow-md lg:hidden">
      <RiCloseLargeFill
        onClick={openHanlder}
        title="close the sidebar"
        className="absolute right-3 top-7 cursor-pointer transition-all duration-300 hover:scale-[1.14] hover:font-bold hover:text-teritiaryLightOrangeColor"
      />
      <div className="flex h-[150px] w-[150px] items-center justify-center bg-secondaryWhiteColorThree px-4 py-5">
        <Image
          src={"/logo.svg"}
          width={100}
          height={100}
          alt="logo of easry mart"
          priority
          loading="eager"
          className="h-full w-full rounded-md"
        />
      </div>

      <NavItems className="h-[50%] flex-col justify-between text-xl" />
    </div>
  );
}
