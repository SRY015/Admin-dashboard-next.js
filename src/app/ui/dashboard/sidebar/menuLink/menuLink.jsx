"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import axios from "axios";

function MenuLink({ item }) {
  const path = usePathname();
  const router = useRouter();
  const logout = async () => {
    if (item.title === "Logout") {
      const res = await axios.get("/api/logout");
      if (res.data?.success) {
        router.push("/login");
      }
    }
  };
  return (
    <Link
      onClick={logout}
      href={item.path}
      className={`flex p-2 items-center gap-2 my-3 ml-5 hover:bg-[#2e374a] rounded-md ${
        path == item.path && "bg-[#2e374a]"
      }`}
    >
      {item.icon}
      {item.title}
    </Link>
  );
}

export default MenuLink;
