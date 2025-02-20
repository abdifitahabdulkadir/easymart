import { auth } from "@/auth";
import BestSellingProducts from "@/components/BestSellingProducts";
import Categories from "@/components/Categories";
import ExploreProducts from "@/components/ExploreProducts";
import FlashSales from "@/components/FlashSales";
import Hero from "@/components/Hero";
import NewArrivalProducts from "@/components/NewArrivalProducts";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await auth();
  if (!session) redirect("/auth");

  return (
    <main className="w-full overflow-x-hidden" id="main">
      <div className="flex h-full w-full flex-col items-center justify-center px-3 lg:px-20">
        <div className="h-[80vh] lg:h-[60vh]">
          <Hero />
        </div>
        <FlashSales />
        <Categories />
        <BestSellingProducts />
        <ExploreProducts />
        <NewArrivalProducts />
      </div>
    </main>
  );
}
