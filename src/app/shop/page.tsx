import Filter from "@/components/Filter";
import ProductList from "@/components/ProductList";
import { wixClientServer } from "@/lib/wixClientServer";
import Loader from "@/utils/Loader";
import Image from "next/image";
import React, { Suspense } from "react";

const default_cat = "all-products";
const default_cat_id = "00000000-000000-000000-000000000001";

const ListPage = async ({ searchParams }: { searchParams: any }) => {
  let cat;
  try {
    const wixClient = await wixClientServer();
    cat = await wixClient.collections.getCollectionBySlug(
      searchParams.cat || default_cat
    );
  } catch (error) {
    return <div>oops ! Connection Lost..</div>;
  }
  return (
    <>
      <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative">
        {/* <h1 className=" mt-12 font-bold capitalize text-center text-2xl xl:text-4xl">
          Shop
        </h1> */}
        <div className="bg-black flex justify-between h-72 rounded-md">
          {/* text  */}
          <div className="w-2/3 text-white flex flex-col items-start justify-center p-8">
            <h2 className="font-semibold xl:text-4xl text-lg sm:text-xl md:text-2xl leading-[48px]">
              {"Don't"} Just Wear It,
            </h2>
            <span className="font-semibold xl:text-4xl text-lg sm:text-xl md:text-2xl leading-[48px] mb-4">
              Just Do It.
            </span>
          </div>
          {/* image  */}
          <div className="relative w-1/3">
            <Image
              src="https://static.nike.com/a/images/w_1920,c_limit/77e79006-1593-4174-8aa5-bdce318eb28b/air-jordan-1-2022-lost-and-found-chicago-the-inspiration-behind-the-design.jpg"
              alt=""
              fill
              className="object-cover rounded-md"
            />
          </div>
        </div>
        <Filter />
        {/* products  */}
        <h3 className="font-semibold text-xl mt-12">{cat?.collection?.name}</h3>
        <Suspense fallback={<Loader size={25} color={"#101010"} />}>
          <ProductList
            categoryId={cat.collection?._id || default_cat_id}
            searchParams={searchParams}
          />
        </Suspense>
      </div>
    </>
  );
};

export default ListPage;
