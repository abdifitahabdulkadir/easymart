"use client";
import { MdOutlineNavigateNext } from "react-icons/md";

const sideBarItems = [
  {
    id: 1,
    text: "Women's Fashin",
    showArrow: true,
  },
  {
    id: 2,
    text: "Mens's Fashin",
    showArrow: true,
  },
  {
    id: 3,
    text: "Electeronics",
    showArrow: false,
  },
  {
    id: 3,
    text: "Home & lifeStyle",
    showArrow: false,
  },
  {
    id: 4,
    text: "Medince",
    showArrow: false,
  },
  {
    id: 5,
    text: "Sports & Outdoor",
    showArrow: false,
  },
  {
    id: 6,
    text: "Bay's & Toys",
    showArrow: false,
  },
  {
    id: 7,
    text: "Groceries & Pets",
    showArrow: false,
  },
  {
    id: 8,
    text: "Health & Beauty",
    showArrow: false,
  },
];
export default function HeroSidebar() {
  return (
    <div className="w-full hidden lg:block border-r-2 border-slate-200 ">
      <ul className="flex flex-col py-5 items-start gap-y-2">
        {sideBarItems.map(({ id, text, showArrow }) => {
          return (
            <li
              key={id}
              className="text-black group cursor-pointer font-normal hover:font-bold transition-all duration-300 hover:translate-x-2 flex gap-x-2 items-center "
            >
              {text}
              {showArrow && (
                <MdOutlineNavigateNext className="group-hover:scale-[1.1] transition-all duration-200 group-hover:text-teritiaryLightOrangeColor" />
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
