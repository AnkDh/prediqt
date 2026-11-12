import mongoose from "mongoose";

const stockBalanceSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    marketId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Market",
      required: true,
    },
    type: {
      type: String,
      enum: ["YES", "NO"],
      required: true,
    },
    qty: {
      type: Number,
      default: 0,
      min: 0,
    },
    locked: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true },
);
const StockBalance = mongoose.model("StockBalance", stockBalanceSchema);
export default StockBalance;
