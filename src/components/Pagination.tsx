"use client";

import Loader from "@/utils/Loader";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const Pagination = ({
  currentPage,
  hasPrev,
  hasNext,
}: {
  currentPage: number;
  hasPrev: boolean;
  hasNext: boolean;
}) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const createPageUrl = (pageNumber: number) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", pageNumber.toString());
    replace(`${pathname}?${params.toString()}`);
  };
  return (
    <>
      <div className="mt-12 flex justify-center space-x-2 w-full">
        <button
          className="rounded-md bg-black text-white p-2 text-sm w-24 cursor-pointer disabled:cursor-not-allowed disabled:bg-black/[0.3]"
          disabled={!hasPrev}
          onClick={() => createPageUrl(currentPage - 1)}
        >
          {/* <Loader color={"#fff"} size={20} /> */}
          {/* <Loader color={"#fff"} size={20} /> */}
          Prev
        </button>
        <button
          className="rounded-md bg-black text-white p-2 text-sm w-24 cursor-pointer disabled:cursor-not-allowed disabled:bg-black/[0.3]"
          disabled={!hasNext}
          onClick={() => createPageUrl(currentPage + 1)}
        >
          Next
        </button>
      </div>
    </>
  );
};

export default Pagination;

// ("use client");

// import Image from "next/image";
// import { usePathname, useRouter, useSearchParams } from "next/navigation";

// const Pagination = ({
//   currentPage,
//   hasPrev,
//   hasNext,
// }: {
//   currentPage: number;
//   hasPrev: boolean;
//   hasNext: boolean;
// }) => {
//   const pathname = usePathname();
//   const searchParams = useSearchParams();
//   const { replace } = useRouter();
//   const createPageUrl = (pageNumber: number) => {
//     const params = new URLSearchParams(searchParams);
//     params.set("page", pageNumber.toString());
//     replace(`${pathname}?${params.toString()}`);
//   };
//   return (
//     <>
//       <div className="mt-12 flex justify-center space-x-5 w-full">
//         <button
//           // className="rounded-md bg-black text-white p-2 text-sm w-24 cursor-pointer disabled:cursor-not-allowed disabled:bg-black/[0.3]"
//           disabled={!hasPrev}
//           onClick={() => createPageUrl(currentPage - 1)}
//         >
//           {!hasPrev ? (
//             <div className="flex space-x-1 cursor-not-allowed">
//               <Image src={"/leftdisable.svg"} alt="" width={25} height={5} />
//               <span className="text-[#979797]">Prev</span>
//             </div>
//           ) : (
//             <div className="flex space-x-1 cursor-pointer">
//               <Image src={"/leftarrow.svg"} alt="" width={25} height={5} />
//               <span className="text-black">Prev</span>
//             </div>
//           )}
//         </button>
//         <button
//           // className="rounded-md bg-black text-white p-2 text-sm w-24 cursor-pointer disabled:cursor-not-allowed disabled:bg-black/[0.3]"
//           disabled={!hasNext}
//           onClick={() => createPageUrl(currentPage + 1)}
//         >
//           {!hasNext ? (
//             <div className="flex space-x-1 cursor-not-allowed">
//               <span className="text-[#979797]">Next</span>
//               <Image src={"/rightdisable.svg"} alt="" width={25} height={5} />
//             </div>
//           ) : (
//             <div className="flex space-x-1 cursor-pointer">
//               <span className="text-black">Next</span>
//               <Image src={"/rightarrow.svg"} alt="" width={25} height={5} />
//             </div>
//           )}
//         </button>
//       </div>
//     </>
//   );
// };

// export default Pagination;
