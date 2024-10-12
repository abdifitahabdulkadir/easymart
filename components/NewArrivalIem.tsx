import { interFont, popois } from "@/lib/font";
import Image from "next/image";
import Link from "next/link";

interface ProsType {
  imageUrl: string;
  heading: string;
  descrption: string;
}

export default function NewArrivalItem({
  imageUrl,
  heading,
  descrption,
}: ProsType) {
  return (
    <div className="w-full h-full pb-10  flex items-center justify-center bg-black text-white relative rounded-[4px]">
      <div className="h-full w-full flex items-center justify-center">
        <Image
          src={imageUrl}
          height={100}
          width={100}
          alt="model image"
          loading="eager"
          priority
          className="h-[10rem] md:h-[13rem] w-[10rem] opacity-60"
        />
      </div>
      <div className="flex flex-col px-5 gap-y-2 top-[51%] absolute text-white self-end h-[60%]">
        <h4
          className={`${interFont.className} font-semibold text-sx lg:text-[1.23rem]`}
        >
          {heading}
        </h4>
        <p
          className={`${popois.className} line-clamp-2 text-secondaryWhiteColorThree font-light text-[0.8rem]`}
        >
          {descrption}
        </p>
        <Link
          href={""}
          className="text-white text-xs border-b-[1.2px] pb-1 border-white  md:font-semibold hover:text-teritiaryLightOrangeColor w-fit"
        >
          ShopNow
        </Link>
      </div>
    </div>
  );
}
