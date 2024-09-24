"use client";
import { products } from "@wix/stores";
import React, { useEffect, useState } from "react";
import Add from "@/components/Add";

const CustomizeProducts = ({
  productId,
  variants,
  productOptions,
}: {
  productId: string;
  variants: products.Variant[];
  productOptions: products.ProductOption[];
}) => {
  const [selectedOptions, setSelectedOptions] = useState<{
    [key: string]: string;
  }>({});
  const [selectedVariant, setSelectedVariant] = useState<products.Variant>();

  useEffect(() => {
    const variant = variants.find((v) => {
      const variantChoices = v.choices;
      if (!variantChoices) return false;
      return Object.entries(selectedOptions).every(
        ([key, value]) => variantChoices[key] === value
      );
    });
    setSelectedVariant(variant);
  }, [selectedOptions, variants]);

  const handleOptionSelect = (optionType: string, choice: string) => {
    setSelectedOptions((prev) => ({ ...prev, [optionType]: choice }));
  };
  const isVariantInStock = (choices: { [key: string]: string }) => {
    return variants.some((variant) => {
      const variantChoices = variant.choices;
      if (!variantChoices) return false;

      return (
        Object.entries(choices).every(
          ([key, value]) => variantChoices[key] === value
        ) &&
        variant.stock?.inStock &&
        variant.stock?.quantity &&
        variant.stock?.quantity > 0
      );
    });
  };

  // console.log(selectedOptions);

  return (
    <>
      <div className="flex flex-col gap-6">
        {productOptions.map((option) => (
          <div className="flex flex-col gap-4" key={option.name}>
            <h2>Choose a size</h2>
            <div className="flex items-center gap-3">
              <ul className="flex items-center gap-3 flex-wrap">
                {option.choices?.map((choice) => {
                  const disabled = !isVariantInStock({
                    ...selectedOptions,
                    [option.name!]: choice.description!,
                  });

                  const selected =
                    selectedOptions[option.name!] === choice.description;

                  const clickHandler = disabled
                    ? undefined
                    : () =>
                        handleOptionSelect(option.name!, choice.description!);
                  return (
                    <li
                      className="w-[106px] py-3 px-6 bg-white border border-black rounded-md  text-sm  text-center font-semibold"
                      style={{
                        cursor: disabled ? "not-allowed" : "pointer",
                        backgroundColor: selected
                          ? "#ffffff"
                          : disabled
                          ? "#f3f4f6"
                          : "white",
                        borderColor: selected
                          ? "black"
                          : disabled
                          ? "#f3f4f6"
                          : "#e5e7eb",
                        color: selected
                          ? "black"
                          : disabled
                          ? "#00000080"
                          : "black",
                      }}
                      key={choice.value}
                      onClick={clickHandler}
                    >
                      {choice.description}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        ))}
        <Add
          productId={productId}
          variantId={
            selectedVariant?._id || "00000000-0000-0000-0000-000000000000"
          }
          stockNumber={selectedVariant?.stock?.quantity || 0}
        />
      </div>
    </>
  );
};

export default CustomizeProducts;
