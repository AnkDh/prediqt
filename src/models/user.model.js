import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    usdBalance: {
      type: Number,
      default: 0,
    },
    lockedUsdBalance: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true },
);
const User = mongoose.model("User", userSchema);
export default User;
