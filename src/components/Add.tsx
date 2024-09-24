"use client";
import React, { useState } from "react";

const Add = ({
  productId,
  variantId,
  stockNumber,
}: {
  productId: string;
  variantId: string;
  stockNumber: number;
}) => {
  const [quantity, setQuantity] = useState(1);

  const handleQuantity = (type: "i" | "d") => {
    if (type === "d" && quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
    if (type === "i" && quantity < stockNumber) {
      setQuantity((prev) => prev + 1);
    }
  };
  return (
    <>
      <div className="flex flex-col gap-4">
        <h4 className="font-medium">Choose a Quantity</h4>
        <div className="flex justify-between">
          <div className="flex items-center gap-4">
            <div className="bg-gray-100 py-2 px-4 rounded-full flex items-center justify-between w-32 ">
              <button
                className="cursor-pointer text-xl"
                onClick={() => handleQuantity("d")}
              >
                -
              </button>
              {quantity}
              <button
                className="cursor-pointer text-xl"
                onClick={() => handleQuantity("i")}
              >
                +
              </button>
            </div>
            {stockNumber <= 5 ? (
              stockNumber < 1 ? (
                <div className="text-red-500 text-sm">Out of stock</div>
              ) : (
                <div className="text-gray-500 text-sm">
                  Only{" "}
                  <span className="text-black font-semibold">
                    {stockNumber}
                  </span>{" "}
                  left! {"Don't"} miss it
                </div>
              )
            ) : (
              ""
            )}
          </div>
        </div>
        <button className="rounded-md w-1/2 font-bold py-3 px-4 hover:text-black hover:ring-1 hover:bg-white hover:ring-black text-[14px] bg-black text-white transition-all duration-300 ease-in-out hover:transition-all hover:duration-300 hover:ease-in-out disabled:cursor-not-allowed disabled:bg-gray-200 disabled:text-black disabled:ring-0">
          Add To Cart
        </button>
      </div>
    </>
  );
};

export default Add;
