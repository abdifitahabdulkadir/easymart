import { bestSellingProducts } from "@/lib";
import { interFont, popois } from "@/lib/font";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import ProductItem from "./ProductItem";
import { BestSellingProductsTimer } from "./Timers";
import { PrimaryTitleGenerator, SecondaryTitleGenerator } from "./Titles";

export default function BestSellingProducts() {
  return (
    <div
      className={`flex w-full flex-col items-center py-20 ${interFont.className}`}
    >
      <div className="mb-5 flex w-full flex-col justify-start gap-y-4">
        <PrimaryTitleGenerator title="This Month" />
        <div className="flex w-full items-center justify-between gap-x-3">
          <SecondaryTitleGenerator title="Best Selling Products" />
          <Link
            href={"/products/bestSellingProducts?name=Best Selling Products"}
            className="-mt-4 w-fit bg-teritiaryOrangeColor p-2 text-white transition-all duration-500 hover:bg-secondaryLightGraryColor hover:text-black hover:shadow-lg"
          >
            View All
          </Link>
        </div>
      </div>

      <div className="grid w-full place-items-center gap-x-3 gap-y-3 px-10 py-5 md:grid-cols-3 md:px-3 lg:grid-cols-4">
        {bestSellingProducts.map((item, index) => {
          return (
            <ProductItem categoryName="best Selling" key={index} item={item} />
          );
        })}
      </div>

      {/* ads image */}
      <div className="mt-20 grid h-[25rem] w-fit grid-cols-[1fr_2fr] gap-x-10 bg-black px-7 py-4 text-white md:px-2 lg:px-10">
        <div className="flex w-full flex-col items-start justify-around px-3">
          <h6
            className={`${popois.className} font-semibold text-teritiaryGreenColor`}
          >
            Categories
          </h6>
          <h4
            className={`${interFont.className} lg:-clamp-2 line-clamp-3 text-[1rem] font-semibold lg:text-[1.6rem]`}
          >
            Enhance Your Music Experience
          </h4>
          <BestSellingProductsTimer />

          <Button
            text="Buy Now!"
            className="hover h-fit w-fit bg-teritiaryGreenColor text-xs transition-all duration-500 hover:scale-x-[1.2] hover:bg-teritiaryOrangeColor hover:text-white md:text-sm"
          />
        </div>
        <div className="relative flex w-full items-center justify-center">
          <div className="absolute inset-0 left-20 h-[18rem] w-[18rem] rounded-full bg-[#D9D9D9] blur-[250px]" />
          <Image
            width={100}
            src={"/bestSellingImages/speaker.svg"}
            height={100}
            alt="best selling image"
            loading="eager"
            priority
            className="h-[10rem] w-[20rem] scale-[1.3]"
          />
        </div>
      </div>
    </div>
  );
}
