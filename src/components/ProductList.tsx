// import { wixClientServer } from "@/lib/wixClientServer";
// import { products } from "@wix/stores";
// import ProductCard from "@/components/ProductCard";
// import React from "react";
// import Pagination from "./Pagination";

// const PRODUCT_PER_PAGE = 4;

// const ProductList = async ({
//   categoryId,
//   limit,
//   searchParams,
//   hidePagination,
// }: {
//   categoryId: string;
//   limit?: number;
//   searchParams?: any;
//   hidePagination?: boolean;
// }) => {
//   let res;
//   try {
//     const wixClient = await wixClientServer();

//     res = await wixClient.products
//       .queryProducts()
//       .startsWith("name", searchParams?.name || "")
//       .eq("collectionIds", categoryId)
//       .hasSome("productType", [searchParams?.type || "physical", "digital"])
//       .limit(limit || PRODUCT_PER_PAGE)
//       .skip(
//         searchParams?.page
//           ? parseInt(searchParams.page) * (limit || PRODUCT_PER_PAGE)
//           : 0
//       )
//       .find();
//   } catch (error) {
//     return <div>oops! Connection Lost..</div>;
//   }

//   return (
//     <>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 justify-items-center">
//         {res.items.map((product: products.Product) => (
//           <ProductCard key={product._id} product={product} />
//         ))}
//       </div>
//       <Pagination
//         currentPage={res.currentPage || 0}
//         hasPrev={res.hasPrev()}
//         hasNext={res.hasNext()}
//       />
//     </>
//   );
// };

// export default ProductList;
import { wixClientServer } from "@/lib/wixClientServer";
import { products } from "@wix/stores";
import ProductCard from "@/components/ProductCard";
import React from "react";
import Pagination from "./Pagination";

const PRODUCT_PER_PAGE = 4;

const ProductList = async ({
  categoryId,
  limit,
  searchParams,
  hidePagination,
}: {
  categoryId: string;
  limit?: number;
  searchParams?: any;
  hidePagination?: boolean;
}) => {
  let res;
  try {
    const wixClient = await wixClientServer();

    res = await wixClient.products
      .queryProducts()
      .startsWith("name", searchParams?.name || "")
      .eq("collectionIds", categoryId)
      .hasSome("productType", [searchParams?.type || "physical", "digital"])
      .limit(limit || PRODUCT_PER_PAGE)
      .skip(
        searchParams?.page
          ? parseInt(searchParams.page) * (limit || PRODUCT_PER_PAGE)
          : 0
      )
      .find();
  } catch (error) {
    return <div>oops! Connection Lost..</div>;
  }

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 justify-items-center">
        {res.items.map((product: products.Product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
      {!hidePagination && (
        <Pagination
          currentPage={res.currentPage || 0}
          hasPrev={res.hasPrev()}
          hasNext={res.hasNext()}
        />
      )}
    </>
  );
};

export default ProductList;
