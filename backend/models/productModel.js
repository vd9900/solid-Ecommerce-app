const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Enter the product name"],
    },
    description: {
      type: String,
      required: [true, "Enter the product description"],
    },
    price: {
      type: Number,
      required: [true, "Enter the product price"],
      maxLength: [8, "Price cannot greater then 8"],
    },
    ratings: {
      type: Number,
      default: 0,
    },
    images: [
      {
        publicNumber: {
          type: String,
          // required: true
        },
        url: {
          type: String,
          required: true,
        },
      },
    ],
    category: {
      type: String,
      required: [true, "Enter the product category"],
    },
    stock: {
      type: Number,
      required: [true, "please Enter product stock"],
      maxLength: [15, "stock cannot be greater then 15"],
      default: 1,
    },
    numberOfReviews: {
      type: Number,
      default: 0,
    },
    productDetails: [],
    reviews: [
      {
        user: {
          type: mongoose.Schema.ObjectId,
          ref: "User",
          required: true,
        },
        name: {
          type: String,
          required: true,
        },
        rating: {
          type: Number,
          required: true,
        },
        comment: {
          type: String,
          required: true,
        },
        PostedAt: {
          type: Date,
          default: Date.now(),
        },
      },
    ],
    searchKeywords: [{ type: String }],
    user: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("product", productSchema);
