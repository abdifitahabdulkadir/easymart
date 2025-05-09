"use client";

import { updateUrlQueryParams } from "@/lib/url";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { GrFavorite } from "react-icons/gr";
import { MobileNav } from "./MobileNav";
import UserIcon from "./UserIcon";

interface ProsType {
  children: React.ReactNode[];
}

export default function Navbar({ children }: ProsType) {
  const [search, setSearchInput] = useState("");
  const router = useRouter();

  function handleSearchItem() {
    const result = updateUrlQueryParams({
      value: search,
      key: "query",
    });
    router.push(result, { scroll: false });
  }

  return (
    <section className="w-full border-b border-secondaryLightGraryColor/60">
      {children[0]}
      <div className="grid w-full grid-cols-1 place-items-center gap-x-6 gap-y-4 px-5 py-10 shadow-lg shadow-secondaryWhiteColorThree md:grid-cols-[1fr_2fr_2fr_1fr] md:px-20 md:py-4 lg:grid-cols-[1fr_2fr_2fr]">
        <div className="w-full">
          <Link
            href={"/"}
            className="cursor-pointer text-xl font-bold leading-8 text-black"
          >
            EasyMart
          </Link>
        </div>
        <nav className="hidden w-fit lg:block">{children[1]}</nav>
        <div className="order-3 col-span-2 flex w-full items-center justify-end gap-x-5 md:order-2 md:col-span-2 lg:order-3 lg:col-span-1">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSearchItem();
            }}
            className="w-full"
          >
            <div className="group relative h-[38px] w-full">
              <input
                value={search}
                onChange={(e) => setSearchInput(e.target.value)}
                type="text"
                placeholder="What are you looking for?"
                className="line-clamp-1 h-full w-full rounded-[4px] bg-secondaryWhiteColorOne px-4 py-2 pr-10 text-xs font-light text-black transition-colors duration-150 hover:border-[2px] hover:border-teritiaryLightOrangeColor focus:outline-0 focus:ring-0"
              />
              <FaSearch className="absolute right-3 top-1/2 -translate-y-1/2 transform text-black/20 transition-all duration-500 group-hover:scale-[1.3] group-hover:text-teritiaryLightOrangeColor" />
            </div>
          </form>
          <div className="flex items-center justify-center gap-x-4">
            <GrFavorite className="mt-1 h-4 w-4 text-black/60 md:scale-[1.1]" />
            {children[2]}
            <UserIcon />
          </div>
        </div>

        <MobileNav />
      </div>
    </section>
  );
}
