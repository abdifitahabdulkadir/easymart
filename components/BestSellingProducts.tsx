import { bestSellingProducts } from "@/lib";
import { interFont, popois } from "@/lib/font";
import Image from "next/image";
import Button from "./Button";
import ProductItem from "./ProductItem";
import { BestSellingProductsTimer } from "./Timers";
import SectionTitleGenerator from "./Titles";

export default function BestSellingProducts() {
  return (
    <div
      className={`w-full py-20 flex flex-col  items-center  ${interFont.className}`}
    >
      <SectionTitleGenerator
        primaryText={"This Month"}
        secondaryText={"Best Selling Products"}
      >
        <Button
          text="View All"
          className="w-fit  hover:bg-secondaryLightGraryColor hover:text-black transition-all duration-500  hover:shadow-lg -mt-4 bg-teritiaryOrangeColor"
        />
      </SectionTitleGenerator>

      <div className="grid md:grid-cols-3 place-items-center px-10 md:px-3 lg:grid-cols-4 py-5 gap-x-3 gap-y-3 w-full">
        {bestSellingProducts.map((item) => {
          return <ProductItem key={item.id} item={item} />;
        })}
      </div>

      {/* ads image */}
      <div className="bg-black ml-3 lg:ml-0   mt-20 lg:px-10 px-7 md:px-2 py-4 w-fit h-[25rem] grid grid-cols-[1fr_2fr]  text-white gap-x-10">
        <div className="flex flex-col items-start justify-around  w-full  px-3">
          <h6
            className={`${popois.className} font-semibold text-teritiaryGreenColor`}
          >
            Categories
          </h6>
          <h4
            className={`${interFont.className} font-semibold text-[1rem] lg:text-[1.6rem] line-clamp-3 lg:-clamp-2`}
          >
            Enhance Your Music Experience
          </h4>
          <BestSellingProductsTimer />

          <Button
            text="Buy Now!"
            className="bg-teritiaryGreenColor h-fit w-fit hover:bg-teritiaryOrangeColor  hover hover:text-white transition-all duration-500 text-xs md:text-sm hover:scale-x-[1.2]"
          />
        </div>
        <div className="w-full flex items-center justify-center relative">
          <div className="bg-[#D9D9D9]  blur-[250px]  w-[18rem] h-[18rem] rounded-full absolute inset-0 left-20" />
          <Image
            width={100}
            src={"/bestSellingImages/speaker.svg"}
            height={100}
            alt="best selling image"
            loading="eager"
            priority
            className="w-[20rem] h-[10rem] scale-[1.3]"
          />
        </div>
      </div>
    </div>
  );
}
