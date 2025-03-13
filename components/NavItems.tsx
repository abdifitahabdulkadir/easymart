import { auth } from "@/auth";
import NavbarItem from "./NavbarItem";

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
export default async function NavItems({ className }: PropType) {
  const session = await auth();
  return (
    <ul
      className={`flex w-fit items-center gap-x-10 gap-y-2 px-5 ${className}`}
    >
      {navItems.map(({ href, name }, index) => {
        if (session && name === "SignUp") return null;
        return <NavbarItem key={index} href={href} name={name} />;
      })}
    </ul>
  );
}
