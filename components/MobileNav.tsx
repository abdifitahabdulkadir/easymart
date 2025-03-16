"use client";

import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { navItems } from "@/lib/routes";
import { AlignJustify } from "lucide-react";
import { useSession } from "next-auth/react";
import Image from "next/image";
import NavbarItem from "./NavbarItem";

const SHEET_SIDES = ["left"] as const;

export function MobileNav() {
  const session = useSession();
  return (
    <div className="order-1 grid grid-cols-2 gap-2 md:order-3 lg:hidden">
      {SHEET_SIDES.map((side) => (
        <Sheet key={side}>
          <SheetTrigger asChild>
            <AlignJustify className="size-[30px] cursor-pointer text-black" />
          </SheetTrigger>
          <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
          <SheetContent
            className="flex items-center justify-center bg-white py-10"
            side={side}
          >
            <ul
              className={`flex h-[50%] w-fit flex-col items-center gap-x-10 gap-y-10 px-5 text-xl`}
            >
              <Image
                src={"/logo.svg"}
                width={100}
                height={100}
                alt="easymart logo"
                priority
                className="object-cover"
              />
              {navItems.map(({ href, name }, index) => {
                return (
                  <NavbarItem
                    isAuthenticated={!!session.data}
                    isMobile={false}
                    key={index}
                    href={href}
                    name={name}
                  />
                );
              })}
            </ul>
          </SheetContent>
        </Sheet>
      ))}
    </div>
  );
}
