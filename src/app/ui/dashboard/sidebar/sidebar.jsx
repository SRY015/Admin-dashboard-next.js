"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";

import {
  MdDashboard,
  MdSupervisedUserCircle,
  MdShoppingBag,
  MdAttachMoney,
  MdWork,
  MdAnalytics,
  MdPeople,
  MdOutlineSettings,
  MdHelpCenter,
  MdLogout,
} from "react-icons/md";
import MenuLink from "./menuLink/menuLink";

const menuItems = [
  {
    title: "Pages",
    lists: [
      {
        title: "Dashboard",
        path: "/dashboard",
        icon: <MdDashboard />,
      },
      {
        title: "Users",
        path: "/dashboard/users",
        icon: <MdSupervisedUserCircle />,
      },
      {
        title: "Products",
        path: "/dashboard/products",
        icon: <MdShoppingBag />,
      },
      {
        title: "Transactions",
        path: "",
        icon: <MdAttachMoney />,
      },
    ],
  },
  {
    title: "Analytics",
    lists: [
      {
        title: "Revenue",
        path: "",
        icon: <MdWork />,
      },
      {
        title: "Reports",
        path: "",
        icon: <MdAnalytics />,
      },
      {
        title: "Teams",
        path: "",
        icon: <MdPeople />,
      },
    ],
  },
  {
    title: "Users",
    lists: [
      {
        title: "Settings",
        path: "",
        icon: <MdOutlineSettings />,
      },
      {
        title: "Help",
        path: "",
        icon: <MdHelpCenter />,
      },
      {
        title: "Logout",
        path: "",
        icon: <MdLogout />,
      },
    ],
  },
];

function Sidebar() {
  const [user, setUser] = useState({});

  const fetchUserData = async () => {
    const response = await axios.get("/api/getUserDetails");
    setUser(response.data);
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <div className="">
      <div className="flex items-center mb-7">
        <img
          src="/user.png"
          alt=""
          className="object-cover size-12 rounded-full"
        />
        <div className="ml-5 pt-1">
          <span className="block font-semibold">{user?.username}</span>
          <span className="text-[12px] text-[#b7bac1]">Administrator</span>
        </div>
      </div>
      <ul>
        {menuItems.map((item) => {
          return (
            <li key={item.title} className="mb-5">
              <span>{item.title}</span>
              {item.lists.map((item) => {
                return <MenuLink item={item} key={item.title} />;
              })}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Sidebar;
