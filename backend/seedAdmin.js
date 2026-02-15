require("dotenv").config();
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const User = require("./models/User");

const createAdmin = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB Connected...");

    const existingAdmin = await User.findOne({ email: "abdurrahmanadedehinbi@gmail.com" });
    if (existingAdmin) {
      console.log("Admin user already exists");
      process.exit();
    }

    const hashedPassword = await bcrypt.hash("Abdurrahman1!", 10);
    const user = await User.create({
      name: "Adedehinbo Abdurrahman",
      email: "abdurrahmanadedehinbi@gmail.com",
      password: hashedPassword,
      role: "admin"
    });

    console.log("Admin user created successfully!");
    process.exit();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

createAdmin();