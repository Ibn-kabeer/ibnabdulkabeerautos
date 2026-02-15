import React, { useState } from "react";
import axios from "axios";

export default function AddCar() {
  const [form, setForm] = useState({ title: "", price: "", year: "", condition: "", description: "" });

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      await axios.post("http://localhost:5000/api/cars", form, {
        headers: { Authorization: `Bearer ${token}` }
      });
      alert("Car added successfully!");
    } catch (err) {
      console.error(err);
      alert("Error adding car");
    }
  };

  return (
    <form className="p-4 max-w-md mx-auto flex flex-col space-y-2" onSubmit={handleSubmit}>
      <input name="title" placeholder="Title" onChange={handleChange} className="p-2 border rounded" />
      <input name="price" placeholder="Price" type="number" onChange={handleChange} className="p-2 border rounded" />
      <input name="year" placeholder="Year" type="number" onChange={handleChange} className="p-2 border rounded" />
      <input name="condition" placeholder="Condition" onChange={handleChange} className="p-2 border rounded" />
      <textarea name="description" placeholder="Description" onChange={handleChange} className="p-2 border rounded" />
      <button type="submit" className="bg-blue-600 text-white p-2 rounded">Add Car</button>
    </form>
  );
}