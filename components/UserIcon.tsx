"use client";
import { signOut } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";
import { BsBagFill, BsPersonFill } from "react-icons/bs";
import { FaStar } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import { MdOutlineCancel } from "react-icons/md";
import { PiListStarDuotone } from "react-icons/pi";
import { TbLogout2 } from "react-icons/tb";

export default function UserIcon() {
  const [showDropdown, setShowDropDown] = useState(false);
  const toggle = () => setShowDropDown((prev) => !prev);

  return (
    <div className="relative flex h-7 w-7 cursor-pointer items-center justify-center rounded-full bg-teritiaryOrangeColor p-2 text-white">
      <IoPerson className="h-full w-full scale-[1.4]" onClick={toggle} />
      {showDropdown && (
        <div
          onMouseLeave={toggle}
          className="absolute right-[20%] top-10 z-50 flex h-fit w-[13rem] flex-col gap-y-4 rounded-[4px] bg-white px-2 py-5 text-black shadow-md"
        >
          <IconBuilder text="Manage My Account" href="/account">
            <BsPersonFill className="scale-[1.4]" />
          </IconBuilder>
          <IconBuilder text="My Order" href="">
            <BsBagFill className="scale-[1.4]" />
          </IconBuilder>
          <IconBuilder text="My Cancellations" href="">
            <MdOutlineCancel className="scale-[1.4]" />
          </IconBuilder>
          <IconBuilder text="My Wishlist" href="/wishlist">
            <PiListStarDuotone className="scale-[1.4]" />
          </IconBuilder>
          <IconBuilder text="My Reviews" href="">
            <FaStar className="scale-[1.4]" />
          </IconBuilder>
          <IconBuilder
            onClick={async () => {
              await signOut();
            }}
            text="Logout"
            href=""
          >
            <TbLogout2 className="scale-[1.4]" />
          </IconBuilder>
        </div>
      )}
    </div>
  );
}

const style = `flex cursor-pointer items-center gap-x-2 rounded-[5px] px-1 py-2 text-xs font-normal transition-all duration-200 hover:bg-secondaryLightGraryColo`;
function IconBuilder({
  text,
  children,
  href,
  onClick,
}: {
  text: string;
  children: React.ReactNode;
  href: string;
  onClick?: () => void;
}) {
  if (href === "")
    return (
      <button onClick={onClick} className={style}>
        {children}
        {text}
      </button>
    );
  return (
    <Link href={href} className={style}>
      {children} {text}
    </Link>
  );
}
