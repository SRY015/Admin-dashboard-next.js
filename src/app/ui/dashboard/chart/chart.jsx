"use client";
import { chartData } from "@/app/lib/actions";
import React, { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  // CartesianGrid,
  Tooltip,
  Legend,
  // ResponsiveContainer,
} from "recharts";

function Chart() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchChartData = async () => {
      const res = await chartData();
      setData(res);
      // console.log(res);
    };
    fetchChartData();
  }, []);

  // Sample data for chart --->
  // const data = [
  //   {
  //     name: "Page A",
  //     uv: 4000,
  //     pv: 2400,
  // amt: 2400,
  //   },
  //   {
  //     name: "Page B",
  //     uv: 3000,
  //     pv: 1398,
  // amt: 2210,
  //   },
  // {
  //   name: "Page C",
  //   uv: 2000,
  //   pv: 9800,
  // amt: 2290,
  // },
  // {
  //   name: "Page D",
  //   uv: 2780,
  //   pv: 3908,
  // amt: 2000,
  // },
  // {
  //   name: "Page E",
  //   uv: 1890,
  //   pv: 4800,
  // amt: 2181,
  // },
  // {
  //   name: "Page F",
  //   uv: 2390,
  //   pv: 3800,
  // amt: 2500,
  // },
  // {
  //   name: "Page G",
  //   uv: 3490,
  //   pv: 4300,
  // amt: 2100,
  // },
  // ];

  return (
    <div className="bg-[#182237] p-5 rounded-xl mb-5">
      <h2 className="text-2xl text-[#b7bac1] mb-10">Weekly Recap</h2>
      {/* <ResponsiveContainer width="100%" height="90%"> */}
      <LineChart
        width={900}
        height={400}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        {/* <CartesianGrid strokeDasharray="3 3" /> */}
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="products"
          stroke="#c93eb9"
          activeDot={{ r: 8 }}
        />
        <Line type="monotone" dataKey="users" stroke="#82ca9d" />
      </LineChart>
      {/* </ResponsiveContainer> */}
    </div>
  );
}

export default Chart;
