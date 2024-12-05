import React from "react";
import Link from "next/link";
import Pagination from "@/app/ui/dashboard/pagination/pagination";
import Search from "@/app/ui/dashboard/searchBox/search";
import { fetchProducts } from "@/app/lib/data";
import { deleteProduct } from "@/app/lib/actions";

async function ProductsPage({ searchParams }) {
  const resolvedSearchParams = await searchParams;
  const q = resolvedSearchParams?.q || "";
  const page = resolvedSearchParams?.page || 1;

  const { productCount, products } = await fetchProducts(q, page);

  return (
    <div className="mx-5 bg-[#182237] p-5 rounded-xl">
      <div className="flex justify-between">
        <Search placeholder="Search for a product ..." />
        <Link href="/dashboard/products/add">
          <button className="p-[10px] bg-[#5d57c9] rounded-xl border-none text-white">
            Add New
          </button>
        </Link>
      </div>
      <table className="table-auto w-full text-left mt-10">
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Price</th>
            <th>Created at</th>
            <th>Stock</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products?.map((product) => {
            return (
              <tr key={product._id}>
                <td className="flex items-center space-x-2 py-5">
                  <img
                    src={product.img || "/user.png"}
                    alt=""
                    className="h-10 w-10 rounded-full object-cover"
                  />
                  <span>{product.title}</span>
                </td>
                <td>{product.description}</td>
                <td>{product.price}</td>
                <td>{new Date(product.createdAt).toDateString()}</td>
                <td>{product.stock}</td>
                <td className="">
                  <Link href={`/dashboard/products/${product._id}`}>
                    <button className="mr-5 py-[5px] px-[10px] border-none cursor-pointer bg-teal-600 rounded-md hover:bg-teal-700">
                      View
                    </button>
                  </Link>
                  <form action={deleteProduct} className="inline-block">
                    <input type="hidden" name="id" value={`${product._id}`} />
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
      <Pagination count={productCount} />
    </div>
  );
}

export default ProductsPage;
