import { updateUser } from "@/app/lib/actions";
import { fetchUserById } from "@/app/lib/data";
import React from "react";

async function SingleUserPage({ params }) {
  const resolvedParams = await params;
  const { id } = resolvedParams;
  const user = await fetchUserById(id);
  // console.log(user);
  return (
    <div className="grid grid-cols-10 gap-5 mx-5">
      <div className="col-span-2 bg-[#182237] p-5 h-min rounded-md">
        <img
          src={user.img ? user.img : "/user.png"}
          alt=""
          className="rounded-lg"
        />
        <p className="mt-4 font-bold text-[#b7bac1]">{user.username}</p>
      </div>
      <div className="col-span-8 bg-[#182237] p-5 rounded-md">
        <form action={updateUser}>
          <input type="hidden" name="id" value={`${user._id}`} />
          <label htmlFor="username" className="font-semibold text-[15px]">
            Username:
          </label>
          <br />
          <input
            type="text"
            name="username"
            id="username"
            placeholder={user.username}
            className="w-full p-3 rounded-lg mb-4 bg-[#182237] border-2 border-[#2e374a]"
          />
          <label htmlFor="username" className="font-semibold text-[15px]">
            Email:
          </label>
          <br />
          <input
            type="email"
            name="email"
            id="email"
            placeholder={user.email}
            className="w-full p-3 rounded-lg mb-4 bg-[#182237] border-2 border-[#2e374a]"
          />
          <label htmlFor="username" className="font-semibold text-[15px]">
            Password:
          </label>
          <br />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="********"
            className="w-full p-3 rounded-lg mb-4 bg-[#182237] border-2 border-[#2e374a]"
          />
          <label htmlFor="username" className="font-semibold text-[15px]">
            Phone:
          </label>
          <br />
          <input
            type="number"
            name="phone"
            id="phone"
            placeholder={user.phone}
            className="w-full p-3 rounded-lg mb-4 bg-[#182237] border-2 border-[#2e374a]"
          />
          <label htmlFor="username" className="font-semibold text-[15px]">
            Address:
          </label>
          <br />
          <textarea
            type="text"
            name="address"
            placeholder={user.address}
            className="p-3 mb-4 w-full rounded-lg bg-[#182237] border-2 border-[#2e374a]"
          ></textarea>
          <label htmlFor="isAdmin" className="font-semibold text-[15px]">
            Is Admin?
          </label>
          <br />
          <select
            name="isAdmin"
            id="isAdmin"
            className="w-full p-3 rounded-lg mb-4 bg-[#182237] border-2 border-[#2e374a]"
          >
            <option value="no" className="text-black">
              No
            </option>
            <option value="yes" className="text-black">
              Yes
            </option>
          </select>
          <label htmlFor="isActive" className="font-semibold text-[15px]">
            Is Active
          </label>
          <br />
          <select
            name="isActive"
            id="isActive"
            className="w-full p-3 rounded-lg mb-4 bg-[#182237] border-2 border-[#2e374a]"
          >
            <option value="no" className="text-black">
              No
            </option>
            <option value="yes" className="text-black">
              Yes
            </option>
          </select>
          <button className="w-full py-3 bg-teal-600 rounded-lg hover:bg-teal-700">
            Update
          </button>
        </form>
      </div>
    </div>
  );
}

export default SingleUserPage;
