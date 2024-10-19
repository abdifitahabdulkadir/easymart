import ProductDetailImage from "@/components/ProductDetailImage";
import ProductItemDescrption from "@/components/ProductItemDescrption";

export default function ProductDetailPage() {
  return (
    <div className="grid h-full w-full grid-cols-1 gap-x-10 gap-y-4 px-6 py-20 md:px-20 lg:grid-cols-2">
      <ProductDetailImage />
      <ProductItemDescrption />
    </div>
  );
}
