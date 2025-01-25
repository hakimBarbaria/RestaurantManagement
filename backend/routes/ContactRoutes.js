const express = require("express");
const Contact = require("../models/contact.js");

const router = express.Router();

// Save a contact message
router.post("/", async (req, res) => {
  const { name, email, message } = req.body;
  try {
    const newMessage = new Contact({ name, email, message });
    await newMessage.save();
    res.status(201).json(newMessage);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
