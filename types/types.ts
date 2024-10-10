export type ProductType = {
  id: number;
  discount?: number;
  currentPrice?: number;
  name: string;
  originalPrice: number;
  rating: number;
  soldTimes: number;
  imageUrl: string;
  colors?: string[];
};
