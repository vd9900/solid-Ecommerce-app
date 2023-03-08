const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const validator = require("validator");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");

const userSchema = new mongoose.Schema(
  {
    // fullname: {
    //   type: String,
    //   required: [true, "Please enter your name"],
    //   maxLength: [30, "name cannot exceed 30 characters"],
    //   minLength: [2, "not a valid name"],
    // },
    username: {
      type: String,
      required: [true, "Please enter your username"],
      maxLength: [30, "name cannot exceed 30 characters"],
      minLength: [2, "not a valid name"],
    },
    email: {
      type: String,
      required: [true, "Please enter a valid email"],
      validator: [validator.isEmail, "please Enter a valid Email"],
      unique: [true, "email already exist"],
    },
    password: {
      type: String,
      required: [true, "enter the password"],
      minLength: [8, "enter the password"],
      select: false,
    },
    avatar: {
      public_id: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
    },
    role: {
      type: String,
      default: "user",
    },
    cartProducts: [{ type: mongoose.Schema.ObjectId, ref: "carts" }],
    resetPasswordToken: "",
    resetPasswordExpire: Date,
  },
  { timestamps: true }
);

// adding bcrypt

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  this.password = await bcrypt.hash(this.password, 10);
});

//JWT  TOKEN

userSchema.methods.getJWTToken = function () {
  return jwt.sign({ id: this._id }, "GJ78LHUILY0HKLHKJ8T7GFHG", {
    expiresIn: "5d",
  });
};

//check the password

userSchema.methods.comparePassword = async function (enteredPassword) {
  // console.log(enteredPassword);
  // console.log(this.password);
  return await bcrypt.compare(enteredPassword, this.password);
};

// reset password token
userSchema.methods.getResetPasswordToken = function () {
  const resetToken = crypto.randomBytes(20).toString("hex");

  this.resetPasswordToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");

  this.resetPasswordExpire = Date.now() + 15 * 60 * 1000;

  return resetToken;
};

const userModel = mongoose.model("Users", userSchema);
module.exports = userModel;
