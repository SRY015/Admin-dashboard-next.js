import mongoose from "mongoose";
const DB_URL =
  process.env.NEXT_PUBLIC_MONGO_UR ||
  "mongodb+srv://SandipY:s142Wisd2nbPYAWb@cluster0.0wdccn7.mongodb.net/AdmonDashboard";

export const connectToDb = async () => {
  const connection = {};
  try {
    if (connection.isConnected) return;
    const db = await mongoose.connect(DB_URL);
    connection.isConnected = db.connections[0].readyState;
  } catch (error) {
    throw new Error(error);
  }
};
