"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
  href: string;
  name: string;
}
export default function NavbarItem({ name, href }: Props) {
  const pathName = usePathname();
  return (
    <li className="font-normal">
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
}
