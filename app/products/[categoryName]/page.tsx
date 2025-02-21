import ProductItem from "@/components/ProductItem";
import { SecondaryTitleGenerator } from "@/components/Titles";
import { bestSellingProducts, exploreProducts, flashItems } from "@/lib";

interface ProsType {
  params: Promise<{
    categoryName: string;
  }>;
  searchParams: Promise<{ name: string }>;
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

function decodeCategoryTitile(name: string) {
  switch (name) {
    case "flashItems":
      return "Flash Items";
    case "bestSellingProducts":
      return "Best Selling Products";
    case "exploreProducts":
      return "Explore Products";
    default:
      return "Flash Items";
  }
}
export default async function ProductsPage({ params }: ProsType) {
  const { categoryName } = await params;

  const items = decodeCategoryName(categoryName);
  const title = decodeCategoryTitile(categoryName);

  return (
    <div className="flex h-full w-full flex-col items-center gap-y-4 px-20 py-10">
      <div className="mb-5 flex w-full gap-x-2 gap-y-4">
        <div className="h-[70px] w-[5px] rounded-md bg-teritiaryOrangeColor"></div>
        <SecondaryTitleGenerator title={title} />
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
