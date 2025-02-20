import { interFont, popois } from "@/lib/font";
import Image from "next/image";
import Link from "next/link";
import NewArrivalItem from "./NewArrivalIem";
import SupportAndDeliveryInfo from "./SupportAndDeliveryInfo";
import { PrimaryTitleGenerator, SecondaryTitleGenerator } from "./Titles";

export default function NewArrivalProducts() {
  return (
    <div className="flex h-full min-w-full flex-col items-center justify-center py-10 pb-20">
      <div className="mb-5 flex w-full flex-col justify-start gap-y-3">
        <PrimaryTitleGenerator title="Featured" />
        <SecondaryTitleGenerator title="New Arrival" />
      </div>

      <div className="py-30 h-lg:[26rem] grid h-full w-full gap-x-4 gap-y-3 overflow-hidden lg:grid-cols-2">
        <div className="relative flex h-full w-full items-center justify-center rounded-[4px] bg-black">
          <Image
            src={"/featuredImages/playstation.svg"}
            width={100}
            height={100}
            loading="eager"
            alt="Playstation image"
            priority
            className="-mr-5 -mt-7 h-[70%] w-full scale-[1.3] opacity-50"
          />
          <div className="absolute bottom-[7%] left-[10%] flex w-[60%] flex-col gap-y-2 text-white">
            <h4
              className={`${interFont.className} text-sx font-semibold lg:text-[1.23rem]`}
            >
              PlayStation 5
            </h4>
            <p
              className={`${popois.className} line-clamp-3 text-[1rem] font-light text-secondaryWhiteColorThree`}
            >
              Black and White version of the PS5 coming out on sale.
            </p>
            <Link
              href={""}
              className="w-fit border-b-[1.2px] border-white pb-1 text-xs text-white hover:text-teritiaryLightOrangeColor md:font-semibold"
            >
              ShopNow
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-x-2 gap-y-2 md:grid-cols-2 lg:grid-cols-2">
          <div className="col-span-full grid w-full grid-cols-[1fr_1fr] gap-x-3 rounded-[4px] bg-black pb-6 text-white">
            <div className="relative -bottom-2 flex flex-col justify-center gap-y-2 px-5 py-10 text-white lg:py-0">
              <h4
                className={`${interFont.className} text-sx font-semibold lg:text-[1.23rem]`}
              >
                Women’s Collections
              </h4>
              <p
                className={`${popois.className} line-clamp-2 text-[0.8rem] font-light text-secondaryWhiteColorThree`}
              >
                Featured woman collections that give you another vibe.
              </p>
              <Link
                href={""}
                className="w-fit border-b-[1.2px] border-white pb-1 text-xs text-white hover:text-teritiaryLightOrangeColor md:font-semibold"
              >
                ShopNow
              </Link>
            </div>

            {/* image */}
            <div className="relative h-full w-full overflow-hidden">
              <Image
                src={"/featuredImages/back-women.svg"}
                height={100}
                width={100}
                alt="model image"
                loading="eager"
                priority
                className="absolute -bottom-6 -left-8 h-full w-full scale-[1.5] rounded-[4px]"
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

      <SupportAndDeliveryInfo />
    </div>
  );
}
