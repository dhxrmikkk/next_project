// "use client";
import CategoryList from "@/components/CategoryList";
import ProductList from "@/components/ProductList";
import Slider from "@/components/Slider";
import Loader from "@/utils/Loader";
import { Suspense } from "react";

const HomePage = async () => {
  return (
    <>
      <div className="">
        <Slider />
        <div className="mt-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
          <h1 className="text-2xl font-bold mb-2">Featured Products</h1>
          <Suspense fallback={<Loader size={25} color={"#101010"} />}>
            <ProductList
              categoryId={process.env.ALL_PRODUCT_CATEGORY_ID!}
              limit={4}
              hidePagination={true}
            />
          </Suspense>
        </div>
        <div className="mt-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
          <h1 className="text-2xl font-bold mb-2">Category</h1>
          <Suspense fallback={<Loader size={25} color={"#101010"} />}>
            <CategoryList />
          </Suspense>
        </div>
      </div>
    </>
  );
};

export default HomePage;
