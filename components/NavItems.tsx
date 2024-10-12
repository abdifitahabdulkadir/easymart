"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Contact",
    href: "#contact",
  },
  {
    name: "About",
    href: "#about",
  },
  {
    name: "SignUp",
    href: "/signup",
  },
];
interface PropType {
  className: string;
}
export default function NavItems({ className }: PropType) {
  const pathName = usePathname();
  return (
    <ul
      className={`flex  items-center gap-x-10 gap-y-2  w-fit px-5 ${className}`}
    >
      {navItems.map(({ href, name }, index) => {
        return (
          <li key={index} className="font-normal">
            <Link
              href={href}
              className={`pt-2 pb-1 hover:border-b-4 hover:font-bold border-teritiaryOrangeColor transition-all duration-200  ${
                href.toLowerCase() === pathName
                  ? " font-bold border-b-4 border-teritiaryOrangeColor "
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
