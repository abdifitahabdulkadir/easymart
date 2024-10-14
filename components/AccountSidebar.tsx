"use client";

import { popois } from "@/lib/font";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { BsLayoutSidebarInset } from "react-icons/bs";

export default function AccountSidebar() {
  const [showSidebar, setShowSidebar] = useState(false);
  const toggle = () => setShowSidebar((prev) => !prev);
  const pathName = usePathname();
  return (
    <div
      className={`${
        showSidebar ? "w-[2rem] " : "w-fit"
      } flex flex-col gap-y-3  border-r border-black/10 lg:border-none `}
    >
      <BsLayoutSidebarInset
        className=" self-end flex md:hidden text-black text-3xl  relative cursor-pointer scale-[.88]  z-10"
        onClick={toggle}
      />

      <div
        className={` ${
          showSidebar ? " hidden " : " flex "
        } relative md:flex w-full  flex-col items-start gap-y-6`}
      >
        <SectionBuilder title="Manage My Account">
          <LinkBuilder href="My Profile" isActive={pathName === "/account"} />
          <LinkBuilder href="Address Book" />
          <LinkBuilder href="My Payment Options" />
        </SectionBuilder>
        <SectionBuilder title="My Orders">
          <LinkBuilder href="My Returns" />
          <LinkBuilder href="My Cancellations" />
        </SectionBuilder>
        <SectionBuilder title="My WishList" />
      </div>
    </div>
  );
}

function LinkBuilder({
  href,
  isActive = false,
}: {
  href: string;
  isActive?: boolean;
}) {
  return (
    <Link
      href={"/account"}
      className={`${
        popois.className
      } ms-6 font-normal text-black/40 hover:text-teritiaryLightOrangeColor transition-all duration-200 hover:translate-x-2 text-[.7rem] md:text-[1rem] ${
        isActive && " text-teritiaryLightOrangeColor "
      }`}
    >
      {href}
    </Link>
  );
}

function SectionBuilder({
  title,
  children,
}: {
  title: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="w-full flex flex-col items-start gap-y-2">
      <h2
        className={`${popois.className} font-semibold text-[.67rem]  md:text-[1.rem]`}
      >
        {title}
      </h2>
      {children}
    </div>
  );
}
