"use client";
import React, { useEffect, useState } from "react";

function Transactions() {
  const [status, setStatus] = useState("");

  useEffect(() => {
    setStatus("cancelled");
  }, []);

  return (
    <div className="w-full bg-[#182237] p-5 rounded-xl mb-5">
      <h2 className="text-2xl text-[#b7bac1]">Latest Transactions</h2>
      <table className="table-auto w-full mt-5">
        <thead>
          <tr className="text-left">
            <th>Name</th>
            <th>Status</th>
            <th>Date</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          <tr className="">
            <td className="flex items-center space-x-4 py-2">
              <img className="size-10 rounded-full" src="/user.png" alt="" />
              <span>John Due</span>
            </td>
            <td>
              <span
                className={`p-[5px] text-[14px] rounded ${
                  status == "pending" && "bg-[#f7cb7375]"
                } ${status == "done" && "bg-[#afd6ee75]"} ${
                  status == "cancelled" && "bg-[#f7737375]"
                }`}
              >
                {status}
              </span>
            </td>
            <td>14.02.2024</td>
            <td>$35.90</td>
          </tr>
          <tr className="">
            <td className="flex items-center space-x-4 py-2">
              <img className="size-10 rounded-full" src="/user.png" alt="" />
              <span>John Due</span>
            </td>
            <td>
              <span
                className={`p-[5px] text-[14px] rounded ${
                  status == "pending" && "bg-[#f7cb7375]"
                } ${status == "done" && "bg-[#afd6ee75]"} ${
                  status == "cancelled" && "bg-[#f7737375]"
                }`}
              >
                {status}
              </span>
            </td>
            <td>14.02.2024</td>
            <td>$35.90</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Transactions;
