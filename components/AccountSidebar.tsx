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
        showSidebar ? "w-[2rem]" : "w-fit"
      } flex flex-col gap-y-3 border-r border-black/10 lg:border-none`}
    >
      <BsLayoutSidebarInset
        className="relative z-10 flex scale-[.88] cursor-pointer self-end text-3xl text-black md:hidden"
        onClick={toggle}
      />

      <div
        className={` ${
          showSidebar ? "hidden" : "flex"
        } relative w-full flex-col items-start gap-y-6 md:flex`}
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
      } ms-6 text-[.7rem] font-normal text-black/40 transition-all duration-200 hover:translate-x-2 hover:text-teritiaryLightOrangeColor md:text-[1rem] ${
        isActive && "text-teritiaryLightOrangeColor"
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
    <div className="flex w-full flex-col items-start gap-y-2">
      <h2
        className={`${popois.className} text-[.67rem] font-semibold md:text-[1.rem]`}
      >
        {title}
      </h2>
      {children}
    </div>
  );
}
