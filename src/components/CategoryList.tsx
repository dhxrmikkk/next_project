// import { wixClientServer } from "@/lib/wixClientServer";
// import Image from "next/image";
// import Link from "next/link";
// import React from "react";

// const CategoryList = async () => {
//   let cats;
//   try {
//     const wixClient = await wixClientServer();

//     cats = await wixClient.collections.queryCollections().find();
//   } catch (error) {
//     return <div>oops ! Connection Lost..</div>;
//   }

//   return (
//     <>
//       <div className="px-4 overflow-x-scroll category-scrollbar">
//         <div className="flex gap-4 md:gap-8">
//           {cats.items.map((item) => (
//             <Link
//               href={`/list?cat=${item.slug}`}
//               className="flex-shrink-0 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 mt-12"
//               key={item._id}
//             >
//               <div className="relative bg-slate-100 w-full h-96 group">
//                 <Image
//                   src={item.media?.mainMedia?.image?.url || "/cat.png"}
//                   alt=""
//                   fill
//                   sizes="20vw"
//                   className="absolute object-cover rounded-md"
//                 ></Image>
//                 <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition-opacity duration-300 rounded-md"></div>
//               </div>
//               <h3 className="mt-8 font-semibold tracking-wide text-xl pb-4 text-gray-500">
//                 {item.name}
//               </h3>
//             </Link>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// };

// export default CategoryList;
// components/CategoryList.tsx
// components/CategoryList.tsx
// components/CategoryList.tsx
import { wixClientServer } from "@/lib/wixClientServer";
import CategoryCard from "@/components/CategoryCard";
import React from "react";

const CategoryList = async () => {
  let cats;
  try {
    const wixClient = await wixClientServer();
    cats = await wixClient.collections.queryCollections().find();
  } catch (error) {
    return <div>oops ! Connection Lost..</div>;
  }

  return (
    <div className="px-4 overflow-x-scroll category-scrollbar">
      <div className="flex gap-4 md:gap-8">
        {cats.items.map((item) => (
          <CategoryCard
            key={item._id || "default-id"} // Provide a default value for key if necessary
            category={{
              id: item._id || "default-id", // Provide a default value if _id is null or undefined
              name: item.name || "Default Category Name",
              imageUrl: item.media?.mainMedia?.image?.url || "/cat.png",
              slug: item.slug || "",
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
