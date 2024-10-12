"use client";
import { useState } from "react";
import { BsBagFill, BsPersonFill } from "react-icons/bs";
import { FaStar } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import { MdOutlineCancel } from "react-icons/md";
import { TbLogout2 } from "react-icons/tb";

export default function UserIcon() {
  const [showDropdown, setShowDropDown] = useState(false);
  const toggle = () => setShowDropDown((prev) => !prev);

  return (
    <div className="bg-teritiaryOrangeColor text-white flex items-center justify-center rounded-full p-2 w-7 h-7 relative cursor-pointer  ">
      <IoPerson className="h-full w-full scale-[1.4]" onMouseEnter={toggle} />
      {showDropdown && (
        <div
          onMouseLeave={toggle}
          className="w-[13rem] absolute right-[20%] top-10 z-50 h-fit bg-white rounded-[4px] shadow-md py-5 px-2 text-black flex flex-col gap-y-4"
        >
          <IconBuilder text="Manage My Account">
            <BsPersonFill className="scale-[1.4]" />
          </IconBuilder>
          <IconBuilder text="My Order">
            <BsBagFill className="scale-[1.4]" />
          </IconBuilder>
          <IconBuilder text="My Cancellations">
            <MdOutlineCancel className="scale-[1.4]" />
          </IconBuilder>
          <IconBuilder text="My Reviews">
            <FaStar className="scale-[1.4]" />
          </IconBuilder>
          <IconBuilder text=" Logout">
            <TbLogout2 className="scale-[1.4]" />
          </IconBuilder>
        </div>
      )}
    </div>
  );
}

function IconBuilder({
  text,
  children,
}: {
  text: string;
  children: React.ReactNode;
}) {
  return (
    <span className="text-xs font-normal flex gap-x-2 items-center hover:bg-secondaryLightGraryColor cursor-pointer transition-all rounded-[5px] px-1 py-2 duration-200">
      {children} {text}
    </span>
  );
}
