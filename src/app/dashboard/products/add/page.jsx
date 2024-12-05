import { addProducts } from "@/app/lib/actions";
import React from "react";

function AddProduct() {
  return (
    <div className="mx-5 p-5 bg-[#182237] rounded-lg">
      <form
        action={addProducts}
        className="flex flex-wrap justify-between space-y-4"
      >
        <input
          type="text"
          name="title"
          id="title"
          placeholder="Title"
          required
          className="w-[48%] px-2 py-0 rounded-lg bg-[#151c2c] border-2 border-[#2e374a]"
        />
        <select
          name="cat"
          id="cat"
          className="w-[48%] p-3 rounded-lg bg-[#151c2c] border-2 border-[#2e374a]"
        >
          <option value="general" className="text-black">
            Choose a category
          </option>
          <option value="kitchen" className="text-black">
            Kitchen
          </option>
          <option value="phone" className="text-black">
            Phone
          </option>
          <option value="computer" className="text-black">
            Computer
          </option>
        </select>
        <input
          type="number"
          name="price"
          id="price"
          placeholder="Price"
          className="w-[48%] p-3 rounded-lg bg-[#151c2c] border-2 border-[#2e374a]"
        />
        <input
          type="number"
          name="stock"
          id="stock"
          placeholder="Stock"
          className="w-[48%] p-3 rounded-lg bg-[#151c2c] border-2 border-[#2e374a]"
        />
        <input
          type="text"
          name="color"
          id="color"
          placeholder="Color"
          className="w-[48%] p-3 rounded-lg bg-[#151c2c] border-2 border-[#2e374a]"
        />
        <input
          type="text"
          name="size"
          id="size"
          className="w-[48%] p-3 rounded-lg bg-[#151c2c] border-2 border-[#2e374a]"
          placeholder="Size"
        />
        <textarea
          name="description"
          id="desc"
          rows={15}
          placeholder="Description..."
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

export default AddProduct;
