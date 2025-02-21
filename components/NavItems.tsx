"use client";

import { useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Contact",
    href: "/contact",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "SignUp",
    href: "/auth",
  },
];
interface PropType {
  className: string;
}
export default function NavItems({ className }: PropType) {
  const pathName = usePathname();
  const session = useSession();
  return (
    <ul
      className={`flex w-fit items-center gap-x-10 gap-y-2 px-5 ${className}`}
    >
      {navItems.map(({ href, name }, index) => {
        if (session.data && name === "SignUp") return null;
        return (
          <li key={index} className="font-normal">
            <Link
              href={href}
              className={`border-teritiaryOrangeColor pb-1 pt-2 transition-all duration-200 hover:border-b-4 hover:font-bold ${
                href.toLowerCase() === pathName
                  ? "border-b-4 border-teritiaryOrangeColor font-bold"
                  : ""
              }`}
            >
              {name}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
