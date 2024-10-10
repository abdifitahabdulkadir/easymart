"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { RiCloseLargeFill } from "react-icons/ri";
import NavItems from "./NavItems";

interface ProsType {
  openHanlder: VoidFunction;
}
export default function MobileVersionNavbar({ openHanlder }: ProsType) {
  return (
    <motion.div
      initial={{
        x: -20,
      }}
      transition={{
        duration: 0.5,
      }}
      animate={{
        x: 0,
      }}
      exit={{
        opacity: 0,
      }}
      className="w-full overflow-hidden lg:hidden bg-secondaryWhiteColorThree  fixed inset-0 shadow-md h-screen  z-50  left-0 flex items-center flex-col justify-center py-10"
    >
      <RiCloseLargeFill
        onClick={openHanlder}
        title="close the sidebar"
        className=" absolute top-7 right-3 hover:text-teritiaryLightOrangeColor hover:font-bold cursor-pointer  duration-300 hover:scale-[1.14] transition-all"
      />
      <div className="w-[150px] h-[150px]  flex items-center justify-center bg-secondaryWhiteColorThree py-5 px-4">
        <Image
          src={"/logo.svg"}
          width={100}
          height={100}
          alt="logo of easry mart"
          priority
          loading="eager"
          className="w-full h-full rounded-md"
        />
      </div>

      <NavItems className="flex-col text-xl  h-[50%] justify-between" />
    </motion.div>
  );
}
