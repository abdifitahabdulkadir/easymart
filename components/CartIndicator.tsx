import { getCartItems } from "@/lib/cart.action";
import Link from "next/link";
import { BsCart2 } from "react-icons/bs";

export default async function CartIndicator() {
  const { data } = await getCartItems();
  return (
    <Link
      href={"/cart"}
      className="relative rounded-md bg-primaryGrayColorTwo/30 px-3 py-2"
    >
      <BsCart2 className="h-4 w-4 text-black/50 md:scale-[1.1]" />
      {data !== undefined && data.length > 0 ? (
        <span className="absolute -top-2 font-bold text-teritiaryLightOrangeColor">
          {data.length}
        </span>
      ) : null}
    </Link>
  );
}
