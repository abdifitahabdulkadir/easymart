import { interFont, popois } from "@/lib/font";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-y-3 px-20 py-10">
      <h1 className={`${interFont.className} text-[6rem] font-medium`}>
        404 Not Found
      </h1>
      <p
        className={`${popois.className} text-[1rem] font-normal text-black/80`}
      >
        Your visited page not found. You may go home page.
      </p>
      <Link
        href={"/"}
        className="mt-5 flex items-center justify-center rounded-[4px] bg-teritiaryOrangeColor px-3 py-3 text-[.8rem] text-white transition-all duration-300 hover:bg-teritiaryGreenColor"
      >
        Back to home page
      </Link>
    </div>
  );
}
