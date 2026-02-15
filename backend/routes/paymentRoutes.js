const express = require("express");
const router = express.Router();
const axios = require("axios");

// Initialize Paystack Payment
router.post("/pay", async (req, res) => {
  const { email, amount } = req.body; // amount in Naira

  try {
    const response = await axios.post(
      "https://api.paystack.co/transaction/initialize",
      { email, amount: amount * 100 }, // Convert to kobo
      { headers: { Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}` } }
    );

    res.json(response.data); // Returns authorization_url
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Payment initialization failed" });
  }
});

// Verify Payment after completion
router.get("/verify/:reference", async (req, res) => {
  const { reference } = req.params;
  try {
    const response = await axios.get(`https://api.paystack.co/transaction/verify/${reference}`, {
      headers: { Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}` }
    });

    res.json(response.data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Verification failed" });
  }
});

module.exports = router;