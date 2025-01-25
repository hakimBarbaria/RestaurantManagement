const express = require("express");
const Menu = require("../models/Menu.js");

const router = express.Router();

// Get all menu items
router.get("/", async (req, res) => {
  try {
    console.log("testing message");
    const menuItems = await Menu.find();
    console.log(menuItems);
    res.json(menuItems);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Add a new menu item
router.post("/", async (req, res) => {
  const { name, description, price, image } = req.body;
  try {
    const newMenuItem = new Menu({ name, description, price, image });
    await newMenuItem.save();
    res.status(201).json(newMenuItem);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
