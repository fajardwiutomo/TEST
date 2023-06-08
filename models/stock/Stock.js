import mongoose from "mongoose";

const StockSchema = new mongoose.Schema(
  {
    picture: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
      unique: true,
    },
    priceBuy: {
      type: Number,
      required: true,
    },
    priceSell: {
      type: Number,
      required: true,
    },
    stock: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Stock", StockSchema);
