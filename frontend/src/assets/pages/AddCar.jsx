import { useState } from "react";
import axios from "../../api/axios";
import { useNavigate } from "react-router-dom";

export default function AddCar() {
  const [form, setForm] = useState({
    title: "",
    price: "",
    year: "",
    condition: "",
    description: "",
    images: ""
  });
  const navigate = useNavigate();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      // Convert comma-separated image string to an array
      const carData = { ...form, images: form.images.split(",").map(img => img.trim()) };
      
      await axios.post("/cars", carData, {
        headers: { Authorization: `Bearer ${token}` }
      });
      
      alert("Car added successfully!");
      navigate("/");
    } catch (err) {
      console.error(err);
      alert("Failed to add car");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 max-w-lg mx-auto space-y-4">
      <h1 className="text-2xl font-bold">Add New Car</h1>
      <input name="title" placeholder="Title" onChange={handleChange} className="w-full p-2 border rounded" required />
      <input name="price" type="number" placeholder="Price" onChange={handleChange} className="w-full p-2 border rounded" required />
      <input name="year" type="number" placeholder="Year" onChange={handleChange} className="w-full p-2 border rounded" />
      <input name="condition" placeholder="Condition (e.g. New, Used)" onChange={handleChange} className="w-full p-2 border rounded" />
      <textarea name="description" placeholder="Description" onChange={handleChange} className="w-full p-2 border rounded" />
      <input name="images" placeholder="Image URLs (comma separated)" onChange={handleChange} className="w-full p-2 border rounded" />
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Add Car</button>
    </form>
  );
}