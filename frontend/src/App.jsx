import React from "react";
import { Routes, Route } from "react-router-dom";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { Analytics } from "@vercel/analytics/react";
import Home from "./assets/pages/Home";
import Cars from "./assets/pages/Cars";
import AddCar from "./assets/pages/AddCar";
import AdminLogin from "./assets/pages/AdminLogin";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cars" element={<Cars />} />
        <Route path="/add-car" element={<AddCar />} />
        <Route path="/admin-login" element={<AdminLogin />} />
      </Routes>
      <SpeedInsights />
      <Analytics />
    </div>
  );
}