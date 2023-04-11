const express = require("express");
const { CartModel } = require("../models/cartModel");

const cartRoute = express.Router();

cartRoute.get("/", async (req, res) => {
  try {
    const allCart = await CartModel.find();
    res.status(200).send(allCart);
  } catch (err) {
    console.log(err);
    res.send(err);
  }
});


cartRoute.post("/add", async (req, res) => {
  const {id}=req.body
  try {
    // console.log(req.body);
    const cart = await new CartModel(req.body);
    await cart.save();
    console.log("Data Saved", cart);
    res.status(200).send(cart);
    console.log(req.body)
  } catch (err) {
    console.log(err);
    res.send(err);
  }
});

cartRoute.delete("/delete/:id", async (req, res) => {
  const { id } = req.params
  try {
    // console.log(req.body);
    await CartModel.findByIdAndDelete({ _id: id });

    console.log("Data Deleted",);
    res.status(200).send("cart item deleted");

  } catch (err) {
    console.log(err);
    res.send(err);
  }
});
cartRoute.patch("/update/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const payload=req.body;
    // console.log(req.body);
    await CartModel.findByIdAndUpdate({ _id: id },payload);

    console.log("Data Deleted",);
    res.status(200).send("cart item deleted");

  } catch (err) {
    console.log(err);
    res.send(err);
  }
});


module.exports = { cartRoute };
