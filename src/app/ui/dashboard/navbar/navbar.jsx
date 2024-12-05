"use client";
import { usePathname } from "next/navigation";
import React from "react";
import {
  MdNotifications,
  MdOutlineChat,
  MdPublic,
  MdSearch,
} from "react-icons/md";

function Navbar() {
  const path = usePathname();

  return (
    <div className="flex items-center justify-between p-5 bg-[#182237] m-5 rounded-lg">
      <div className="text-[#b7bac1] font-bold capitalize">
        {path.split("/").pop()}
      </div>
      <div className="flex space-x-5 items-center">
        <div className="flex items-center space-x-2 bg-[#2e374a] p-[10px] rounded-xl">
          <MdSearch />
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Search..."
            className="bg-transparent border-none text-white focus:outline-none"
          />
        </div>
        <div className="flex space-x-4">
          <MdOutlineChat className="size-5" />
          <MdNotifications className="size-5" />
          <MdPublic className="size-5" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
