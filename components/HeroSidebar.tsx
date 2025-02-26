"use client";
import { MdOutlineNavigateNext } from "react-icons/md";
const sideBarItems = [
  {
    id: 1,
    text: "Women's Fashion",
    showArrow: true,
  },
  {
    id: 2,
    text: "Men's Fashion",
    showArrow: true,
  },
  {
    id: 3,
    text: "Electronics",
    showArrow: false,
  },
  {
    id: 4,
    text: "Home & Lifestyle",
    showArrow: false,
  },
  {
    id: 5,
    text: "Medicine",
    showArrow: false,
  },
  {
    id: 6,
    text: "Sports & Outdoor",
    showArrow: false,
  },
  {
    id: 7,
    text: "Baby's & Toys",
    showArrow: false,
  },
  {
    id: 8,
    text: "Groceries & Pets",
    showArrow: false,
  },
  {
    id: 9,
    text: "Health & Beauty",
    showArrow: false,
  },
];
export default function HeroSidebar() {
  return (
    <div className="hidden w-full border-r-2 border-slate-200 lg:block">
      <ul className="flex flex-col items-start gap-y-2 py-5">
        {sideBarItems.map(({ text, showArrow }, index) => {
          return (
            <li
              key={index}
              className="group flex cursor-pointer items-center gap-x-2 font-normal text-black transition-all duration-300 hover:translate-x-2 hover:font-bold"
            >
              {text}
              {showArrow && (
                <MdOutlineNavigateNext className="transition-all duration-200 group-hover:scale-[1.1] group-hover:text-teritiaryLightOrangeColor" />
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
