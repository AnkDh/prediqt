import mongoose from "mongoose";

const fillSchema = new mongoose.Schema(
  {
    tradeId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    orderId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    orderbookId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Orderbook",
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
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
    type: {
      type: String,
      enum: ["YES", "NO"],
      required: true,
    },
    isMaker: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true },
);
const Fill = mongoose.model("Fill", fillSchema);
export default Fill;
