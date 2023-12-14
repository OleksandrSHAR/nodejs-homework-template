import { Schema, model } from "mongoose";
import { handleSaveError, preUpdate } from "./hooks.js";
import Joi from "joi";

const emailRegexp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const statusSubscrip = ["starter", "pro", "business"];
const userShema = new Schema(
  {
    email: {
      type: String,
      match: emailRegexp,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      minLenth: 6,
      required: true,
    },
    avatarURL: {
      type: String,
      require: true,
    },
    subscription: {
      type: String,
      enum: statusSubscrip,
      default: "starter",
    },
    token: {
      type: String,
    },
    verify: {
      type: Boolean,
      default: false,
    },
    verificationToken: {
      type: String,
    },
  },
  { versionKey: false, timestamps: true }
);
userShema.post("save", handleSaveError);
userShema.pre("findOneAndUpdate", preUpdate);
userShema.post("findOneAndUpdate", handleSaveError);

export const userRegisterShema = Joi.object({
  email: Joi.string().pattern(emailRegexp).required(),
  password: Joi.string().min(6).required(),
  subscription: Joi.string().valid(...statusSubscrip),
});

export const userLoginShema = Joi.object({
  email: Joi.string().pattern(emailRegexp).required(),
  password: Joi.string().min(6).required(),
  subscription: Joi.string().valid(...statusSubscrip),
});
export const userVerifyShema = Joi.object({
  email: Joi.string().pattern(emailRegexp).required(),
});
const User = model("user", userShema);
export default User;
