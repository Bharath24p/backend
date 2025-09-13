const mongoose = require('mongoose');

const CartSchema = mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true, unique: true, ref: "User"
    },
    products: [
      { productId: String, quantity: { type: Number, default: 1 } },
    ],
    name: { type: String, required: true },
    price: { type: Number, required: true },
    quantity: { type: Number, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Cart", CartSchema);
