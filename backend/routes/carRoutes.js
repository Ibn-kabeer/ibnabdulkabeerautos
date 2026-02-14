const express = require("express");
const router = express.Router();
const { getCars, addCar } = require("../controllers/carController");
const auth = require("../middleware/authMiddleware");

router.get("/", getCars);
router.post("/", auth, addCar);

module.exports = router;