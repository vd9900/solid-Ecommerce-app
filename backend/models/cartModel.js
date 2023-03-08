const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "Users" },
    cartProducts: [
      {
        product: {
          type: mongoose.Schema.Types.ObjectId,
          unique: true,
          ref: "product",
          required: true,
        },
        quantity: { type: Number, default: 1 },
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("carts", cartSchema);
