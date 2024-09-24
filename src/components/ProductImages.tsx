"use client";
import Image from "next/image";
import React, { useState } from "react";

const ProductImages = ({ items }: { items: any }) => {
  const [index, setIndex] = useState(0);
  return (
    <>
      <div className="">
        <div className="h-[500px] relative">
          <Image
            src={items[index].image?.url}
            alt=""
            fill
            sizes="50vw"
            className="object-contain rounded-md"
          />
        </div>
        <div className="flex justify-center gap-4 mt-8">
          {items.map((item: any, i: number) => (
            <div
              className="w-16 h-16 relative gap-4 mt-8 group"
              key={item._id}
              onClick={() => setIndex(i)}
            >
              <Image
                src={item.image?.url}
                alt=""
                fill
                sizes="30vw"
                className="absolute object-contain rounded-md cursor-pointer"
              />
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition-opacity duration-300 rounded-md cursor-pointer"></div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductImages;
