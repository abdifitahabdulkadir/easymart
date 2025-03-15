export type ProductType = {
  id: string;
  discount?: number;
  currentPrice?: number;
  name: string;
  originalPrice: number;
  rating: number;
  quantity?: number;
  soldTimes: number;
  imageUrl: string;
  colors?: string[];
  isNew?: boolean;
  addedToCart?: boolean;
  addedToWishlist?: boolean;
};

export type CartParams = {
  categoryName: string;
  productId: string;
  price: number;
};
export interface PageParams {
  params: Promise<Record<string, string>>;
  searchParams: Promise<Record<string, string>>;
}

export interface IncrementDecrementParams {
  productId: string;
  operationType: "increment" | "decrement";
}
export type WishlistParams = CartParams;
