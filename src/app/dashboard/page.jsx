import React from "react";
import Card from "../ui/dashboard/card/card";
import RightBar from "../ui/dashboard/rightbar/rightbar";
import Transactions from "../ui/dashboard/transactions/transactions";
import Chart from "../ui/dashboard/chart/chart";
import { fetchProducts, fetchUsers } from "../lib/data";

async function page() {
  const { userCount } = await fetchUsers();
  const { productCount } = await fetchProducts();

  return (
    <div className="text-white grid grid-cols-5 mx-5 gap-5">
      <div className="col-span-4">
        <div className="flex justify-between gap-5 mb-5">
          <Card title="Total Users" count={userCount} />
          <Card title="Total Products" count={productCount} />
          <Card title="Total Transactions" count={5} />
        </div>
        <Transactions />
        <Chart />
      </div>
      <div className="col-span-1">
        <RightBar />
      </div>
    </div>
  );
}

export default page;
