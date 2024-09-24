"use client";
import Image from "next/image";
import React from "react";

const CartModal = () => {
  const cartItems = false;
  return (
    <>
      <div className="w-max absolute border border-black/[0.1] p-4 rounded-md shadow-md bg-white top-14 right-0 flex flex-col gap-6 z-20">
        {!cartItems ? (
          <>
            <h2 className="text-xl font-bold">Shopping Cart</h2>
            <div className="flex flex-col gap-8">
              {/* item  */}
              <div className="flex gap-4">
                <Image
                  src="/slide-3.png"
                  alt=""
                  width={120}
                  height={48}
                  className="object-cover rounded-md h-[72px]"
                />
                <div className="flex flex-col justify-between w-full">
                  {/* top  */}
                  <div className="">
                    {/* title  */}
                    <div className="flex items-center justify-between gap-8">
                      <h3 className="font-semibold">Product Name</h3>
                      <div className="p-1 bg-gray-50 rounded-sm font-semibold">
                        $49
                      </div>
                    </div>
                    {/* desc  */}
                    <div className="text-sm text-gray-500">available</div>
                  </div>
                  {/* bottom  */}
                  <div className="flex justify-between">
                    <span className="text-gray-500">Qty 1</span>
                    <span className="text-blue-500">Remove</span>
                  </div>
                </div>
              </div>
              {/* item  */}
              {/* //bottom */}
              <div className="">
                <div className="flex items-center justify-between font-semibold">
                  <span className="">Subtotal</span>
                  <span className="">$49</span>
                </div>
                <p className="text-sm text-gray-500 mt-2 mb-5">
                  Shipping and taxes calculated at checkout.
                </p>
                <div className="flex justify-between text-sm">
                  <button className="rounded-md py-3 px-4 ring-1 ring-gray-300">
                    View Cart
                  </button>
                  <button className="rounded-md py-3 px-4 bg-black text-white">
                    Checkout
                  </button>
                </div>
              </div>
            </div>
          </>
        ) : (
          <div>
            <span>Cart is Empty</span>
          </div>
        )}
      </div>
    </>
  );
};

export default CartModal;
