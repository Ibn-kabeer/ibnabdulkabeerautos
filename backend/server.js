require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const authRoutes = require("./routes/authRoutes");
const carRoutes = require("./routes/carRoutes");
const paymentRoutes = require("./routes/paymentRoutes");
const chatRoutes = require("./routes/chatRoutes");

const app = express();

// Connect Database
connectDB();

// Middleware
const allowedOrigins = [process.env.FRONTEND_URL, "http://localhost:5173"];
app.use(
  cors({ origin: allowedOrigins })
);
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/cars", carRoutes);
app.use("/api/payments", paymentRoutes);
app.use("/api/chat", chatRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));