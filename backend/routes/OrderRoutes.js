const express = require("express");
const Order = require("../models/Order");

const router = express.Router();

// Get all orders
router.get("/", async (req, res) => {
  try {
    const orders = await Order.find();
    res.json(orders);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Place a new order
router.post("/", async (req, res) => {
  const { name, email, address, items, total } = req.body;
  try {
    const newOrder = new Order({ name, email, address, items, total });
    await newOrder.save();
    res.status(201).json(newOrder);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
