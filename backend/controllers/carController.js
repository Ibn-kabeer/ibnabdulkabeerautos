const Car = require("../models/Car");

exports.getCars = async (req, res) => {
  const cars = await Car.find();
  res.json(cars);
};

exports.addCar = async (req, res) => {
  const car = await Car.create(req.body);
  res.json(car);
};