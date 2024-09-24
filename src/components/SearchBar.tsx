"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const SearchBar = () => {
  const router = useRouter();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;

    if (name) {
      router.push(`/shop?name=${name}`);
    }
  };
  return (
    <>
      <form
        className="hidden lg:flex items-center justify-between gap-4 bg-gray-100 p-2 rounded-md flex-1"
        onSubmit={handleSearch}
      >
        <input
          type="text"
          name="name"
          placeholder="Search"
          autoComplete="off"
          className="flex-1 bg-transparent outline-none"
        />
        <button className="cursor-pointer me-2">
          <Image src="/search.png" alt="" width={16} height={16} />
        </button>
      </form>
    </>
  );
};

export default SearchBar;
