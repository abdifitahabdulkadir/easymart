import { ProductType } from "@/types/types";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { MdFavoriteBorder, MdRemoveRedEye } from "react-icons/md";

export default function ProductItem({
  item: {
    name,
    imageUrl,
    soldTimes,
    discount,
    rating,
    currentPrice,
    originalPrice,
  },
}: {
  item: ProductType;
}) {
  return (
    <div className="w-full  flex flex-col min-h-60 max-h-fit bg-white rounded-[4px] shadow-sm">
      <div className="relative flex items-center justify-center  bg-secondaryWhiteColorOne px-5 py-4 rounded-[4px] h-40">
        {discount && (
          <div className="w-[55px] h-[26px] rounded-[4px] absolute top-2 left-2 text-white flex items-center justify-center bg-teritiaryOrangeColor text-xs font-light italic">
            <span>{`-${discount}%`}</span>
          </div>
        )}

        {/* image */}
        <div className="w-[60%] h-fit">
          <Image
            src={imageUrl}
            height={100}
            priority
            loading="eager"
            alt="image of item"
            width={100}
            className="w-full h-full"
          />
        </div>

        {/* favorite icons */}
        <div className="absolute gap-y-2 top-2 h-fit right-2 flex flex-col items-center justify-around">
          <div className="bg-white hover:bg-secondaryWhiteColorTwo  cursor-pointer text-gray-500 rounded-full p-2 flex items-center justify-center group">
            <MdFavoriteBorder
              name="add Favorites"
              className=" group-hover:scale-[1.12] transition-all duration-500"
            />
          </div>
          <div className="bg-white hover:bg-secondaryWhiteColorTwo  cursor-pointer text-gray-500 rounded-full p-2 flex items-center justify-center group">
            <MdRemoveRedEye
              name="hide"
              className=" group-hover:scale-[1.12] transition-all duration-500"
            />
          </div>
        </div>
      </div>

      {/* product descprions */}
      <div className="flex flex-col gap-y-1 py-3 pl-1">
        <div className="flex items-start gap-y-2">
          <h3 className="font-medium text-base text-black line-clamp-1 ">
            {name}
          </h3>
        </div>

        <div className="text-base flex items-center gap-x-4">
          {currentPrice !== 0 && (
            <span className="text-teritiaryOrangeColor ">{`\$${currentPrice}`}</span>
          )}
          {originalPrice !== 0 && (
            <span className="text-primaryGrayColorTwo line-through ">{`\$${originalPrice}`}</span>
          )}
        </div>

        {/* rating */}
        <div className="flex items-center gap-x-3">
          <div className="flex items-center gap-x-1">
            {Array.from({ length: rating }, (_, index) => {
              return <FaStar key={index} className="text-starColor h-4 w-4" />;
            })}
          </div>
          <span className="text-primaryGrayColorTwo">{`(${soldTimes})`}</span>
        </div>
      </div>
    </div>
  );
}
