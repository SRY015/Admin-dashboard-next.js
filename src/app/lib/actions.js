"use server";
import { revalidatePath } from "next/cache";
import { Product, User } from "./models";
import { connectToDb } from "./utils";
import { redirect } from "next/navigation";
import bcrypt from "bcrypt";

export const addUser = async (formData) => {
  const saltRounds = 10;
  const { username, email, password, phone, address, isAdmin, iaActive } =
    Object.fromEntries(formData);
  try {
    connectToDb();
    bcrypt.hash(password, saltRounds, async function (err, hash) {
      if (!err) {
        const newUser = new User({
          username,
          email,
          password: hash,
          phone,
          address,
          isAdmin,
          iaActive,
        });
        await newUser.save();
      }
    });
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
  revalidatePath("/dashboard/users");
  redirect("/dashboard/users");
};

export const updateUser = async (formData) => {
  const { id, username, email, password, phone, address, isAdmin, iaActive } =
    Object.fromEntries(formData);
  try {
    connectToDb();
    const updateField = {
      username,
      email,
      password,
      phone,
      address,
      isAdmin,
      iaActive,
    };
    Object.keys(updateField).forEach(
      (key) => (updateField[key] === "" || undefined) && delete updateField[key]
    );
    await User.findByIdAndUpdate(id, updateField);
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
  revalidatePath(`dashboard/users/${id}`);
};

export const addProducts = async (formData) => {
  const { title, description, price, stock, color, size } =
    Object.fromEntries(formData);
  try {
    connectToDb();
    const newProduct = new Product({
      title,
      description,
      price,
      stock,
      color,
      size,
    });
    await newProduct.save();
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
  revalidatePath("/dashboard/products");
  redirect("/dashboard/products");
};

export const updateProduct = async (formData) => {
  const { id, title, description, price, stock, color, size } =
    Object.fromEntries(formData);
  try {
    connectToDb();
    const updateField = {
      title,
      description,
      price,
      stock,
      color,
      size,
    };
    Object.keys(updateField).forEach(
      (key) => (updateField[key] === "" || undefined) && delete updateField[key]
    );
    await Product.findByIdAndUpdate(id, updateField);
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
  revalidatePath(`dashboard/products/${id}`);
};

export const deleteUser = async (formData) => {
  const { id } = Object.fromEntries(formData);
  try {
    connectToDb();
    await User.findByIdAndDelete(id);
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
  revalidatePath("/dashboard/users");
};

export const deleteProduct = async (formData) => {
  const { id } = Object.fromEntries(formData);
  try {
    connectToDb();
    await Product.findByIdAndDelete(id);
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
  revalidatePath("/dashboard/products");
};

export const chartData = async () => {
  try {
    const productData = await Product.aggregate([
      {
        $group: {
          _id: { $dateToString: { format: "%Y-%m-%d", date: "$createdAt" } },
          count: { $sum: 1 },
        },
      },
      { $sort: { _id: 1 } },
    ]);

    const userData = await User.aggregate([
      {
        $group: {
          _id: { $dateToString: { format: "%Y-%m-%d", date: "$createdAt" } },
          count: { $sum: 1 },
        },
      },
      { $sort: { _id: 1 } },
    ]);

    // combinedData --->
    const combinedData = {};

    productData.forEach(({ _id, count }) => {
      if (!combinedData[_id])
        combinedData[_id] = { date: _id, products: 0, users: 0 };
      combinedData[_id].products = count;
    });

    userData.forEach(({ _id, count }) => {
      if (!combinedData[_id])
        combinedData[_id] = { date: _id, products: 0, users: 0 };
      combinedData[_id].users = count;
    });

    const result = Object.values(combinedData);

    return result; // Graph-ready data
  } catch (error) {
    console.error("Error fetching graph data:", error);
    throw error;
  }
};
