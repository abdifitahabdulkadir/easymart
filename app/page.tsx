import BestSellingProducts from "@/components/BestSellingProducts";
import Categories from "@/components/Categories";
import ExploreProducts from "@/components/ExploreProducts";
import FlashSales from "@/components/FlashSales";
import Hero from "@/components/Hero";
import NewArrivalProducts from "@/components/NewArrivalProducts";
import { PageParams } from "@/types/types";

export default async function Home({ searchParams }: PageParams) {
  const { query } = await searchParams;

  return (
    <main className="w-full overflow-x-hidden" id="main">
      <div className="flex h-full w-full flex-col items-center justify-center px-3 lg:px-20">
        <div className="h-[80vh] lg:h-[60vh]">
          <Hero />
        </div>
        <FlashSales query={query} />
        <Categories />
        <BestSellingProducts query={query} />
        <ExploreProducts query={query} />
        <NewArrivalProducts />
      </div>
    </main>
  );
}
