import { interFont, popois } from "@/lib/font";
import Image from "next/image";
import Link from "next/link";
import NewArrivalItem from "./NewArrivalIem";
import { PrimaryTitleGenerator, SecondaryTitleGenerator } from "./Titles";

export default function NewArrivalProducts() {
  return (
    <div className="flex flex-col pb-20 h-full items-center justify-center min-w-full py-10 ">
      <div className="w-full flex flex-col justify-start gap-y-3 mb-5">
        <PrimaryTitleGenerator title="Featured" />
        <SecondaryTitleGenerator title="New Arrival" />
      </div>

      <div className="grid  py-30  lg:grid-cols-2 w-full gap-x-4 gap-y-3 h-lg:[26rem] h-full overflow-hidden ">
        <div className="w-full h-full bg-black  items-center flex justify-center rounded-[4px] relative">
          <Image
            src={"/featuredImages/playstation.svg"}
            width={100}
            height={100}
            loading="eager"
            alt="Playstation image"
            priority
            className=" w-full h-[70%] -mt-7 scale-[1.3] -mr-5 opacity-50"
          />
          <div className="flex flex-col gap-y-2 text-white absolute left-[10%] w-[60%] bottom-[7%]">
            <h4
              className={`${interFont.className} font-semibold text-sx lg:text-[1.23rem]`}
            >
              PlayStation 5
            </h4>
            <p
              className={`${popois.className} line-clamp-3 text-secondaryWhiteColorThree font-light text-[1rem]`}
            >
              Black and White version of the PS5 coming out on sale.
            </p>
            <Link
              href={""}
              className="text-white text-xs border-b-[1.2px] pb-1 border-white  md:font-semibold hover:text-teritiaryLightOrangeColor w-fit"
            >
              ShopNow
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-y-2 gap-x-2  ">
          <div className="w-full pb-6 col-span-full bg-black text-white grid grid-cols-[1fr_1fr] gap-x-3  rounded-[4px] ">
            <div className="flex flex-col px-5 gap-y-2 text-white  justify-center relative -bottom-2 py-10 lg:py-0">
              <h4
                className={`${interFont.className} font-semibold text-sx lg:text-[1.23rem]`}
              >
                Women’s Collections
              </h4>
              <p
                className={`${popois.className} line-clamp-2 text-secondaryWhiteColorThree font-light text-[0.8rem]`}
              >
                Featured woman collections that give you another vibe.
              </p>
              <Link
                href={""}
                className="text-white text-xs border-b-[1.2px] pb-1 border-white  md:font-semibold hover:text-teritiaryLightOrangeColor w-fit"
              >
                ShopNow
              </Link>
            </div>

            {/* image */}
            <div className="h-full w-full relative overflow-hidden">
              <Image
                src={"/featuredImages/back-women.svg"}
                height={100}
                width={100}
                alt="model image"
                loading="eager"
                priority
                className="h-full w-full  absolute scale-[1.5] -bottom-6 -left-8 rounded-[4px]"
              />
            </div>
          </div>
          <NewArrivalItem
            imageUrl={"/featuredImages/speaker.svg"}
            heading="Speakers"
            descrption="Amazon wireless speakers"
          />
          <NewArrivalItem
            imageUrl={"/featuredImages/perfume.svg"}
            heading="Perfume"
            descrption="GUCCI INTENSE OUD EDP"
          />
        </div>
      </div>
    </div>
  );
}
