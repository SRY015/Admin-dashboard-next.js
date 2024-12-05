"use client";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import React from "react";
import { MdSearch } from "react-icons/md";
import { useDebouncedCallback } from "use-debounce";

function Search({ placeholder }) {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathName = usePathname();

  const handleSearch = useDebouncedCallback((e) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", 1);
    if (e.target.value) {
      params.set("q", e.target.value);
    } else {
      params.delete("q");
    }
    replace(`${pathName}?${params}`);
  }, 300);
  return (
    <div className="flex items-center space-x-2 bg-[#2e374a] p-[10px] rounded-xl">
      <MdSearch />
      <input
        type="text"
        name="search"
        id="search"
        placeholder={placeholder}
        className="bg-transparent border-none text-white focus:outline-none"
        onChange={handleSearch}
      />
    </div>
  );
}

export default Search;
