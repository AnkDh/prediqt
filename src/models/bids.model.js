import mongoose from "mongoose";

const bidSchema = new mongoose.Schema(
  {
    orderbookId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Orderbook",
      required: true,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    stockType: {
      type: String,
      enum: ["YES", "NO"],
      required: true,
    },
    price: {
      type: Number,
      min: 1,
      max: 99,
      required: true,
    },
    qty: {
      type: Number,
      min: 1,
      required: true,
    },
    remainingQty: {
      type: Number,
      min: 0,
      default: 0,
    },
    status: {
      type: String,
      enum: ["OPEN", "PARTIALLY_FILLED", "FILLED", "CANCELLED"],
      default: "OPEN",
    },
  },
  { timestamps: true },
);
const Bid = mongoose.model("Bid", bidSchema);
export default Bid;
