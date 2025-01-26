const express = require("express");
const { predictDropout } = require("../controllers/dropoutController");

const router = express.Router();

// Endpoint to predict dropout risk
router.get("/predict/:rollno", predictDropout);

module.exports = router;
