import { FaShoppingCart } from "react-icons/fa";

export default function AddToCartButton({ showIcon }: { showIcon?: boolean }) {
  return (
    <button className="bg-black hover:bg-secondaryLightGraryColor hover:text-black transition-all font-semibold duration-300 cursor-pointer rounded-lg px-1 py-2 text-[0.5rem] text-white w-full flex items-center gap-x-3 justify-center">
      {showIcon && <FaShoppingCart className="scale-[2.4]" />}
      Add Cart
    </button>
  );
}
