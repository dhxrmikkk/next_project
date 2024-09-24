"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Loader from "@/utils/Loader";

interface CategoryCardProps {
  category: {
    id: string;
    name: string;
    imageUrl: string;
    slug: string;
  };
}

const CategoryCard = ({ category }: CategoryCardProps) => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleClick = () => {
    setLoading(true);
    setTimeout(() => {
      router.push(`/shop?cat=${category.slug}`);
    }, 100);
  };

  return (
    <div className="flex-shrink-0 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 mt-12 relative">
      {loading && (
        <div className="absolute h-full w-full -top-[8%] flex items-center justify-center bg-white bg-opacity-75 z-10 rounded-md">
          <Loader size={25} color={"#101010"} />
        </div>
      )}
      <div
        className="relative bg-slate-100 w-full h-96 group cursor-pointer"
        onClick={handleClick}
      >
        <Image
          src={category.imageUrl || "/cat.png"}
          alt={category.name || "Category Image"}
          fill
          sizes="20vw"
          className="absolute object-cover rounded-md"
        />
        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition-opacity duration-300 rounded-md"></div>
      </div>
      <h3 className="mt-8 font-semibold tracking-wide text-xl pb-4 text-gray-500">
        {category.name || "Category Name"}
      </h3>
    </div>
  );
};

export default CategoryCard;
