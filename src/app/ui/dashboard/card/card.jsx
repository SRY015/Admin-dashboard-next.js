import React from "react";
import { MdSupervisedUserCircle } from "react-icons/md";
function Card({ title, count }) {
  return (
    <div className="p-5 bg-[#182237] rounded-lg cursor-pointer w-full hover:bg-[#2e374a]">
      <div className="flex items-center space-x-5">
        <MdSupervisedUserCircle className="" />
        <span>{title}</span>
      </div>
      <div className="ml-10">
        <span className="block my-4 text-[24px] font-bold">{count}</span>
        <span>
          <span className="mr-2 text-[14px] text-lime-500">12%</span>more than
          previous week
        </span>
      </div>
    </div>
  );
}

export default Card;
