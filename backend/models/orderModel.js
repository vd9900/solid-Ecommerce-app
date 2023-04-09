const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    fullname: String,
    shippingInfo: {
      address: {
        type: String,
        required: true,
      },
      city: {
        type: String,
        required: true,
      },
      country: {
        type: String,
        required: true,
      },
    },
    orderItems: [
      {
        price: {
          type: Number,
          required: true,
        },
        quantity: {
          type: Number,
          required: true,
        },
        name: {
          type: String,
          required: true,
        },
        image: {
          type: String,
        },
        id: {
          type: mongoose.Schema.ObjectId,
          ref: "Products",
          required: true,
        },
      },
    ],
    user: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
      required: true,
    },

    totalPaid: {
      type: String,
      required: true,
    },
    image: String,
    orderStatus: {
      type: String,
      required: true,
      default: "Processing",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Order", orderSchema);
