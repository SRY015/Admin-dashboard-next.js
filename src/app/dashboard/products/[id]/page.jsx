import { updateProduct } from "@/app/lib/actions";
import { fetchProductById } from "@/app/lib/data";
import React from "react";

async function SingleProductPage({ params }) {
  const resolvedParams = await params;
  const { id } = resolvedParams;
  const product = await fetchProductById(id);
  return (
    <div className="grid grid-cols-10 gap-5 mx-5">
      <div className="col-span-2 bg-[#182237] p-5 h-min rounded-md">
        <img
          src={product.img ? product.img : "/user.png"}
          alt=""
          className="rounded-lg"
        />
        <p className="mt-4 font-bold text-[#b7bac1]">{product.title}</p>
      </div>
      <div className="col-span-8 bg-[#182237] p-5 rounded-md">
        <form action={updateProduct}>
          <input type="hidden" name="id" value={`${product._id}`} />
          <label htmlFor="title" className="font-semibold text-[15px]">
            Title
          </label>
          <br />
          <input
            type="text"
            name="title"
            id="title"
            placeholder={product.title}
            className="w-full p-3 rounded-lg mb-4 bg-[#182237] border-2 border-[#2e374a]"
          />
          <label htmlFor="price" className="font-semibold text-[15px]">
            Price:
          </label>
          <br />
          <input
            type="number"
            name="price"
            id="price"
            placeholder={product.price}
            className="w-full p-3 rounded-lg mb-4 bg-[#182237] border-2 border-[#2e374a]"
          />
          <label htmlFor="stock" className="font-semibold text-[15px]">
            Stock
          </label>
          <br />
          <input
            type="number"
            name="stock"
            id="stock"
            placeholder={product.stock}
            className="w-full p-3 rounded-lg mb-4 bg-[#182237] border-2 border-[#2e374a]"
          />
          <label htmlFor="color" className="font-semibold text-[15px]">
            Color
          </label>
          <br />
          <input
            type="text"
            name="color"
            id="color"
            placeholder={product.color}
            className="w-full p-3 rounded-lg mb-4 bg-[#182237] border-2 border-[#2e374a]"
          />
          <label htmlFor="size" className="font-semibold text-[15px]">
            Size
          </label>
          <br />
          <input
            type="text"
            name="size"
            id="size"
            placeholder={product.size}
            className="w-full p-3 rounded-lg mb-4 bg-[#182237] border-2 border-[#2e374a]"
          />
          <label htmlFor="cat" className="font-semibold text-[15px]">
            Category:
          </label>
          <br />
          <select
            name="cat"
            id="cat"
            className="w-full p-3 rounded-lg mb-4 bg-[#182237] border-2 border-[#2e374a]"
          >
            <option value="kitchen">Kitchen</option>
            <option value="computer">Computer</option>
          </select>
          <label htmlFor="description" className="font-semibold text-[15px]">
            Description:
          </label>
          <br />
          <textarea
            type="text"
            name="description"
            placeholder={product.description}
            className="p-3 mb-4 w-full rounded-lg bg-[#182237] border-2 border-[#2e374a]"
          ></textarea>
          <button className="w-full py-3 bg-teal-600 rounded-lg hover:bg-teal-700">
            Update
          </button>
        </form>
      </div>
    </div>
  );
}

export default SingleProductPage;
