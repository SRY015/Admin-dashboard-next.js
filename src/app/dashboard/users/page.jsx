import { deleteUser } from "@/app/lib/actions";
import { fetchUsers } from "@/app/lib/data";
import Pagination from "@/app/ui/dashboard/pagination/pagination";
import Search from "@/app/ui/dashboard/searchBox/search";
import Link from "next/link";
import React from "react";

const UsersPage = async ({ searchParams }) => {
  const resolvedSearchParams = await searchParams;
  const q = resolvedSearchParams?.q || "";
  const page = resolvedSearchParams?.page || 1;
  const { userCount, users } = await fetchUsers(q, page);
  return (
    <div className="mx-5 bg-[#182237] p-5 rounded-xl">
      <div className="flex justify-between">
        <Search placeholder="Search for a user ..." />
        <Link href="/dashboard/users/add">
          <button className="p-[10px] bg-[#5d57c9] rounded-xl border-none text-white">
            Add New
          </button>
        </Link>
      </div>
      <table className="table-auto w-full text-left mt-10">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Created at</th>
            <th>Role</th>
            <th>status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users?.map((user) => {
            return (
              <tr key={user._id}>
                <td className="flex items-center space-x-2 py-5">
                  <img
                    src={user.img || "/user.png"}
                    alt=""
                    className="h-10 w-10 rounded-full object-cover"
                  />
                  <span>{user.username}</span>
                </td>
                <td>{user.email}</td>
                <td>{user.createdAt?.toDateString()}</td>
                <td>{user.isAdmin ? "Admin" : "Client"}</td>
                <td>{user.isActive ? "active" : "passive"}</td>
                <td className="">
                  <Link href={`/dashboard/users/${user._id}`}>
                    <button className="mr-5 py-[5px] px-[10px] border-none cursor-pointer bg-teal-600 rounded-md hover:bg-teal-700">
                      View
                    </button>
                  </Link>
                  <form action={deleteUser} className="inline-block">
                    <input type="hidden" name="id" value={`${user._id}`} />
                    <button className="py-[5px] px-[10px] border-none cursor-pointer bg-red-600 rounded-md hover:bg-red-700">
                      Delete
                    </button>
                  </form>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <Pagination count={userCount} />
    </div>
  );
};

export default UsersPage;
