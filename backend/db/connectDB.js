require("dotenv").config(); // This loads the environment variables
const mongoose = require("mongoose");

// Use the MONGO_URI from the .env file
const uri = process.env.MONGO_URI;

const connectDB = async () => {
  try {
    await mongoose.connect(uri); // No need to pass deprecated options anymore
    console.log("Connected to MongoDB successfully!");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};

module.exports = connectDB;
