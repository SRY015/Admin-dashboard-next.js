"use client";
import { redirect } from "next/navigation";
import { RxDashboard } from "react-icons/rx";
import { FaHandHoldingHeart } from "react-icons/fa6";
export default function Home() {
  return (
    <div>
      <nav className="w-full flex justify-between space-x-5 p-5 bg-slate-500 items-center">
        <RxDashboard className="text-2xl text-white font-bold" />
        <div className="flex space-x-6">
          <span
            onClick={() => redirect("/login")}
            className="text-30px font-semibold cursor-pointer"
          >
            Log in
          </span>
          <span className="text-30px font-semibold cursor-pointer">
            Register
          </span>
        </div>
      </nav>
      <marquee className="mt-5">Please login to view the dashboard.</marquee>
      <div className="flex items-center justify-center h-[600px]">
        <FaHandHoldingHeart className="text-[100px] main-icon text-red-700" />
      </div>
    </div>
  );
}
