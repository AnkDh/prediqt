import mongoose from "mongoose";

const orderBookSchema = new mongoose.Schema(
  {
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
  },
  { timestamps: true },
);
const Orderbook = mongoose.model("Orderbook", orderBookSchema);
export default Orderbook;
