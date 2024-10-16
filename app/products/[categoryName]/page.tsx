import ProductItem from "@/components/ProductItem";
import { SecondaryTitleGenerator } from "@/components/Titles";
import { bestSellingProducts, exploreProducts, flashItems } from "@/lib";

interface ProsType {
  params: {
    categoryName: string;
  };
  searchParams: { name: string };
}

function decodeCategoryName(name: string) {
  switch (name) {
    case "flashItems":
      return flashItems;
    case "bestSellingProducts":
      return bestSellingProducts;
    case "exploreProducts":
      return exploreProducts;
    default:
      return flashItems;
  }
}
export default function ProductsPage({
  params: { categoryName },
  searchParams: { name },
}: ProsType) {
  const items = decodeCategoryName(categoryName);

  return (
    <div className="flex h-full w-full flex-col items-center gap-y-4 px-20 py-10">
      <div className="mb-5 flex w-full gap-x-2 gap-y-4">
        <div className="h-[70px] w-[5px] rounded-md bg-teritiaryOrangeColor"></div>
        <SecondaryTitleGenerator title={name} />
      </div>

      <div className="grid w-full place-items-center gap-x-3 gap-y-3 px-10 py-5 md:grid-cols-3 md:px-3 lg:grid-cols-4">
        {items.map((item, index) => {
          return (
            <ProductItem categoryName={categoryName} key={index} item={item} />
          );
        })}
      </div>
    </div>
  );
}
