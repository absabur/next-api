import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  brand: String,
  stock: Number,
  category: String,
});

export const Product =
  mongoose.models.products || mongoose.model("products", productSchema);
