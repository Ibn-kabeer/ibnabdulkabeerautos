import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function AdminLogin() {
  const [form, setForm] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", form);
      localStorage.setItem("token", res.data.token);
      alert("Logged in!");
      navigate("/add-car");
    } catch {
      alert("Login failed");
    }
  };

  return (
    <form className="p-4 max-w-md mx-auto flex flex-col space-y-2" onSubmit={handleSubmit}>
      <input name="email" placeholder="Email" onChange={handleChange} className="p-2 border rounded" />
      <input name="password" placeholder="Password" type="password" onChange={handleChange} className="p-2 border rounded" />
      <button type="submit" className="bg-blue-600 text-white p-2 rounded">Login</button>
    </form>
  );
}