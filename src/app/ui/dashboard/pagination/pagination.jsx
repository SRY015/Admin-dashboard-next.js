"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React from "react";
import { FcPrevious, FcNext } from "react-icons/fc";

function Pagination({ count }) {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathName = usePathname();

  const page = searchParams.get("page") || 1;
  const params = new URLSearchParams(searchParams);
  const ITEM_PER_PAGE = 5;

  const hasPrev = ITEM_PER_PAGE * (parseInt(page) - 1) > 0;
  const hasNext = ITEM_PER_PAGE * (parseInt(page) - 1) + ITEM_PER_PAGE < count;

  const handleChangePage = (btnType) => {
    btnType == "prev"
      ? params.set("page", parseInt(page) - 1)
      : params.set("page", parseInt(page) + 1);
    replace(`${pathName}?${params}`);
  };

  return (
    <div className="flex justify-between">
      <button
        className={`flex items-center space-x-2 py-[5px] px-[10px] rounded-md ${
          hasPrev && "hover:bg-[#b7bac1] hover:text-black"
        }`}
        disabled={!hasPrev}
        onClick={() => {
          handleChangePage("prev");
        }}
      >
        <FcPrevious className="mb-[1px]" />
        <span>Previous</span>
      </button>
      <button
        className={`flex items-center space-x-2 py-[5px] px-[10px] rounded-md ${
          hasNext && "hover:bg-[#b7bac1] hover:text-black"
        }`}
        disabled={!hasNext}
        onClick={() => {
          handleChangePage("next");
        }}
      >
        <span>Next</span>
        <FcNext className="mb-[1px]" />
      </button>
    </div>
  );
}

export default Pagination;
