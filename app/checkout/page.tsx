import CheckoutForm from "@/components/CheckoutFormt";
import { interFont, popois } from "@/lib/font";
import Image from "next/image";

export default function CheckoutPage() {
  return (
    <div className="flex w-full flex-col h-full md:flex-row px-10 md:px-20 py-10  items-center justify-between gap-y-8 divide-y divide-slate-300 md:divide-y-0">
      <div className="w-full h-full">
        <h3 className={`${interFont.className} font-medium text-[1.7rem]`}>
          Billing Detials
        </h3>
        <CheckoutForm />
      </div>
      <div className="w-full flex   gap-y-3 flex-col">
        <ImageWithValueBuilder
          imageUrl="/flashImages/gamepad.svg"
          name="H1 Gamepad"
          price="$650"
        />
        <ImageWithValueBuilder
          imageUrl="/flashImages/tv.svg"
          name="LCD Monitor"
          price="$110"
        />
        <CartSubTotalItemBuilder text="Subtotal:" value="$650" />
        <CartSubTotalItemBuilder text="Shipping:" value="free" />
        <CartSubTotalItemBuilder
          text="Total:"
          value="$1750"
          includeBorder={false}
        />

        <div className="flex w-full flex-col lg:flex-row gap-y-2 items-center gap-x-6">
          <input
            type="text"
            placeholder="Coupon Code"
            className="px-4 py-3 outline-none focus:border-teritiaryGreenColor    rounded-[4px] border-2 border-black"
          />
          <button className="px-4 py-3 bg-teritiaryOrangeColor text-white flex items-center justify-center rounded-[4px] hover:bg-teritiaryGreenColor  transition-all duration-300">
            Apply Coupon Code
          </button>
        </div>
        <button className="px-2 py-3 bg-teritiaryOrangeColor text-white flex items-center justify-center rounded-[4px] hover:bg-teritiaryGreenColor  transition-all duration-300 w-fit self-center md:self-start">
          Place the Order
        </button>
      </div>
    </div>
  );
}

function ImageWithValueBuilder({
  imageUrl,
  name,
  price,
}: {
  imageUrl: string;
  name: string;
  price: string;
}) {
  return (
    <div className="w-full flex items-center justify-between">
      <div className="flex w-fit gap-x-2 items-center">
        <Image
          src={imageUrl}
          width={100}
          height={100}
          priority
          loading="eager"
          alt="gamepad image"
          className="w-[3rem] h-[3rem]"
        />
        <p className="font-extralight">{name}</p>
      </div>
      <span className="font-bold">{price}</span>
    </div>
  );
}

function CartSubTotalItemBuilder({
  text,
  value,
  includeBorder = true,
}: {
  text: string;
  value: string;
  includeBorder?: boolean;
}) {
  return (
    <div
      className={`w-full flex items-center justify-between py-2 px-1  ${
        includeBorder && "border-b-2 border-black/30"
      }`}
    >
      <span className={`${popois.className} font-normal text-[.8rem]`}>
        {text}
      </span>
      <span className={`${popois.className} font-semibold text-[.8rem]`}>
        {value}
      </span>
    </div>
  );
}
