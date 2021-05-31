import mongoose, { Schema } from "mongoose";
const uniqueValidator = require("mongoose-unique-validator");

export const authSchema: Schema = new Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

authSchema.plugin(uniqueValidator);

export default mongoose.model("authSchema", authSchema);
