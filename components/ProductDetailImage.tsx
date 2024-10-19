import React from "react";
import Image from "next/image";
import ImageMagnifier from "./ImageMagnifier";

export default function ProductDetailImage() {
  return (
    <div className="grid h-full w-full grid-cols-1 gap-x-3 gap-y-3 md:grid-cols-[1fr_2fr]">
      <div className="flex h-full w-full flex-row flex-wrap justify-between gap-x-2 gap-y-2 md:flex-col md:flex-nowrap">
        {Array.from({ length: 4 }, (index: number) => {
          return (
            <div
              key={index}
              className="flex h-[138px] w-[170px] items-center justify-center rounded-[4px] bg-secondaryWhiteColorOne p-4"
            >
              <Image
                src={"/flashImages/gamepad.svg"}
                alt="product item iamge"
                width={50}
                height={50}
                loading="eager"
                priority
                className="h-full w-full"
              />
            </div>
          );
        })}
      </div>
      <div className="flex h-full w-full items-center justify-center rounded-[4px] bg-secondaryWhiteColorOne p-6">
        <ImageMagnifier
          src="/flashImages/gamepad.svg"
          alt="product item iamge"
          height={100}
          width={100}
          className="h-full w-full"
        />
      </div>
    </div>
  );
}
