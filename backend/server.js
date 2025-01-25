const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();

const menuRoutes = require("./routes/MenuRoutes.js");
const orderRoutes = require("./routes/OrderRoutes.js");
const contactRoutes = require("./routes/ContactRoutes.js");

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes

app.use("/api/menu", menuRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/contact", contactRoutes);

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error(err));

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
