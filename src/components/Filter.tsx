"use client";

import { usePathname, useSearchParams, useRouter } from "next/navigation";

const Filter = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    const params = new URLSearchParams(searchParams);
    params.set(name, value);
    replace(`${pathname}?${params.toString()}`);
  };
  return (
    <>
      <div className="mt-12 flex justify-between flex-col md:flex-row gap-y-4 md:gap-y-0">
        <div className="flex gap-6 items-center justify-between md:justify-normal">
          <div className="relative inline-block">
            <select
              name="cat"
              id=""
              className="py-2 px-4 pr-10 rounded-full text-xs font-medium bg-gray-200 appearance-none"
              onChange={handleFilterChange}
            >
              <option value="">Select Category</option>
              <option value="jordans">Jordans</option>
              <option value="life-style">Life Style</option>
              <option value="basket-ball">Basket Ball</option>
              <option value="running-shoes">Running Shoes</option>
              <option value="traning-gym">Training & Gym</option>
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </div>
          </div>
        </div>
        <div className="">
          <div className="relative inline-block">
            <select
              name="sort"
              id=""
              className="py-2 px-4 pr-10 rounded-full text-xs font-medium bg-gray-200 appearance-none"
              onChange={handleFilterChange}
            >
              <option>Sort By</option>
              <option value="asc price">Price (low to high)</option>
              <option value="desc price">Price (high to low)</option>
              <option value="asc lastUpdated">Newest</option>
              <option value="desc lastUpdated">Oldest</option>
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Filter;
