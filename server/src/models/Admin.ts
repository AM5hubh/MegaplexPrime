import mongoose from "mongoose";

export interface IAdmin {
  email: string;
  password: string;
}

const AdminSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

// @ts-ignore - Mongoose type instantiation issue
export default mongoose.model("Admin", AdminSchema) as any;
