import Announcement from "@/components/Announcement";
import BestSellingProducts from "@/components/BestSellingProducts";
import Categories from "@/components/Categories";
import FlashSales from "@/components/FlashSales";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main>
      <Navbar>
        <Announcement />
      </Navbar>
      <div className="w-full h-full    lg:px-20 flex items-center justify-center flex-col">
        <div className="h-[80vh] lg:h-[60vh]">
          <Hero />
        </div>

        <FlashSales />
        <Categories />
        <BestSellingProducts />
      </div>
    </main>
  );
}
