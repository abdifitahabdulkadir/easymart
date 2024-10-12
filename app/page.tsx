import Announcement from "@/components/Announcement";
import BestSellingProducts from "@/components/BestSellingProducts";
import Categories from "@/components/Categories";
import ExploreProducts from "@/components/ExploreProducts";
import FlashSales from "@/components/FlashSales";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import NewArrivalProducts from "@/components/NewArrivalProducts";

export default function Home() {
  return (
    <main className="w-full overflow-x-hidden" id="main">
      {/* header */}
      <Navbar>
        <Announcement />
      </Navbar>

      {/* body of easy mart */}
      <div className="w-full h-full  px-3  lg:px-20 flex items-center justify-center flex-col">
        <div className="h-[80vh] lg:h-[60vh]">
          <Hero />
        </div>
        <FlashSales />
        <Categories />
        <BestSellingProducts />
        <ExploreProducts />
        <NewArrivalProducts />
      </div>

      {/* footer */}
      <Footer />
    </main>
  );
}
