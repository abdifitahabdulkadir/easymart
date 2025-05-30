import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { bestSellingProducts, exploreProducts, flashItems } from ".";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// a funcion tha takes categoryName(e.g flash-items) and returns
export function decodeProductCategory(categoryName: string) {
  switch (categoryName) {
    case "flash-Products":
      return flashItems;
    case "best-Selling":
      return bestSellingProducts;
    case "explore":
      return exploreProducts;
    default:
      return flashItems;
  }
}
