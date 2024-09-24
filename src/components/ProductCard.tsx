"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Loader from "@/utils/Loader";
import DOMPurify from "isomorphic-dompurify";
import { products } from "@wix/stores";

interface ClientProductCardProps {
  product: products.Product;
}

const ClientProductCard = ({ product }: ClientProductCardProps) => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleClick = () => {
    setLoading(true);
    setTimeout(() => {
      router.push("/" + product.slug);
    }, 100);
  };

  return (
    <div
      className="mt-12 relative w-[95%] flex flex-col gap-4 cursor-pointer"
      onClick={handleClick}
    >
      <div className="relative w-full h-80 group">
        {loading && (
          <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-75 z-10 rounded-md">
            <Loader size={25} color={"#101010"} />
          </div>
        )}
        <Image
          src={product.media?.mainMedia?.image?.url || "/product.png"}
          alt=""
          fill
          sizes="25vw"
          className="absolute object-cover rounded-md"
        />
        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity duration-300 rounded-md"></div>
      </div>
      <div className="flex justify-between w-full">
        <span className="font-medium md:w-2/3 w-1/2 truncate">
          {product.name}
        </span>
        {product.price?.price === product.price?.discountedPrice ? (
          <span className="font-semibold">₹ {product.price?.price}</span>
        ) : (
          <span className="font-semibold">
            ₹ {product.price?.discountedPrice}
          </span>
        )}
      </div>
      <div>
        <span
          className="font-medium text-gray-500"
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(product.description || ""),
          }}
        ></span>
      </div>
      <button className="rounded-md font-bold py-3 px-4 hover:text-black hover:ring-1 hover:bg-white hover:ring-black text-[14px] bg-black text-white transition-all duration-300 ease-in-out hover:transition-all hover:duration-300 hover:ease-in-out">
        Add To Cart
      </button>
    </div>
  );
};

export default ClientProductCard;
