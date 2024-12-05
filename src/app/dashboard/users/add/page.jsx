import { addUser } from "@/app/lib/actions";
import React from "react";

function AddUser() {
  return (
    <div className="mx-5 p-5 bg-[#182237] rounded-lg">
      <form
        action={addUser}
        className="flex flex-wrap justify-between space-y-4"
      >
        <input
          type="text"
          name="username"
          id="username"
          placeholder="username"
          required
          className="w-[48%] px-2 py-0 rounded-lg bg-[#151c2c] border-2 border-[#2e374a]"
        />
        <input
          type="email"
          name="email"
          id="email"
          placeholder="email"
          className="w-[48%] p-3 rounded-lg bg-[#151c2c] border-2 border-[#2e374a]"
        />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="password"
          className="w-[48%] p-3 rounded-lg bg-[#151c2c] border-2 border-[#2e374a]"
        />
        <input
          type="number"
          name="phone"
          id="phone"
          placeholder="phone"
          className="w-[48%] p-3 rounded-lg bg-[#151c2c] border-2 border-[#2e374a]"
        />
        <select
          name="isAdmin"
          id="isAdmin"
          className="w-[48%] p-3 rounded-lg bg-[#151c2c] border-2 border-[#2e374a]"
        >
          <option value="false" className="text-black">
            Is Admin?
          </option>
          <option value="no" className="text-black">
            No
          </option>
          <option value="yes" className="text-black">
            Yes
          </option>
        </select>
        <select
          name="isActive"
          id="isActive"
          className="w-[48%] p-3 rounded-lg bg-[#151c2c] border-2 border-[#2e374a]"
        >
          <option value="false" className="text-black">
            Is Active?
          </option>
          <option value="no" className="text-black">
            No
          </option>
          <option value="yes" className="text-black">
            Yes
          </option>
        </select>
        <textarea
          name="address"
          id="desc"
          rows={15}
          placeholder="Address..."
          className="p-3 rounded-lg w-full bg-[#151c2c] border-2 border-[#2e374a]"
        ></textarea>
        <button
          type="submit"
          className="w-full bg-teal-500 text-white border-none rounded-md p-[15px] hover:bg-teal-700"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default AddUser;
