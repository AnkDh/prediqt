import mongoose from "mongoose";

const marketSchema = new mongoose.Schema(
  {
    creatorId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    title: {
      type: String,
      required: true,
      trim: true,
      maxLength: 200,
    },
    totalIssued: {
      type: Number,
      default: 0,
    },
    totalYes: {
      type: Number,
      default: 0,
    },
    totalNo: {
      type: Number,
      default: 0,
    },
    questionType: {
      type: String,
      enum: ["BINARY"],
      default: "BINARY",
    },
    resolution: {
      type: String,
      enum: ["UNRESOLVED", "YES", "NO"],
      default: "UNRESOLVED",
    },
    status: {
      type: String,
      enum: ["OPEN", "CLOSED"],
      default: "OPEN",
    },
  },
  {
    timestamps: true,
  },
);
const Market = mongoose.model("Market", marketSchema);

export default Market;
