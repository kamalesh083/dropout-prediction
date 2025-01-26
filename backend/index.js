const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const dropoutRoutes = require("./routes/dropoutRoutes");
const connectDB = require("./db/connectDB");

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

// Use the dropout routes
app.use("/api", dropoutRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  connectDB();
  console.log(`Server running on port ${PORT}`);
});
