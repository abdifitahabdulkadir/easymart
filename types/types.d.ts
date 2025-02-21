export type ProductType = {
  id: string;
  discount?: number;
  currentPrice?: number;
  name: string;
  originalPrice: number;
  rating: number;
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
};

export type WishlistParams = CartParams;
