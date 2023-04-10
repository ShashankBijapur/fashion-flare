const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
  src: { type: String },
  brand: { type: String },
  category: { type: String },
  title: { type: String },
  discountPrice: { type: String },
  orginalPrice: { type: String },
  discount: { type: String },
  offer: { type: String },
});

const CartModel = mongoose.model("cart", cartSchema);

module.exports = { CartModel };
