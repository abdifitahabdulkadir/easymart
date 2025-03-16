"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { SheetClose } from "./ui/sheet";

interface Props {
  href: string;
  isMobile?: boolean;
  name: string;
  isAuthenticated: boolean;
}

export default function NavbarItem({
  name,
  isMobile,
  isAuthenticated,
  href,
}: Props) {
  const pathName = usePathname();
  if (isAuthenticated && name == "SignUp") return null;
  const content = (
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
  return isMobile ? <SheetClose asChild>{content}</SheetClose> : content;
}
