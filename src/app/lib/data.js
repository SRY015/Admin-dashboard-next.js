import { Product, User } from "./models";
import { connectToDb } from "./utils";

export const fetchUsers = async (q, page) => {
  try {
    connectToDb();
    const regex = new RegExp(q, "i");
    const ITEM_PER_PAGE = 5;
    const userCount = await User.find({
      username: { $regex: regex },
    }).countDocuments();
    const users = await User.find({ username: { $regex: regex } })
      .limit(ITEM_PER_PAGE)
      .skip(ITEM_PER_PAGE * (page - 1));
    return { userCount, users };
  } catch (error) {
    console.log(error);
    throw new Error("Fail to fetch users !");
  }
};

export const fetchUserById = async (id) => {
  try {
    connectToDb();
    const user = await User.findById(id);
    return user;
  } catch (error) {
    console.log(error);
    throw new Error("Fail to fetch users !");
  }
};

export const fetchProducts = async (q, page) => {
  try {
    connectToDb();
    const regex = new RegExp(q, "i");
    const ITEM_PER_PAGE = 5;
    const productCount = await Product.find({
      title: { $regex: regex },
    }).countDocuments();
    const products = await Product.find({ title: { $regex: regex } })
      .limit(ITEM_PER_PAGE)
      .skip(ITEM_PER_PAGE * (page - 1));
    return { productCount, products };
  } catch (error) {
    console.log(error);
    throw new Error("Fail to fetch products !");
  }
};

export const fetchProductById = async (id) => {
  try {
    connectToDb();
    const product = await Product.findById(id);
    return product;
  } catch (error) {
    console.log(error);
    throw new Error("Fail to fetch products !");
  }
};
