import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./assets/pages/Home";
import Cars from "./assets/pages/Cars";
import AddCar from "./assets/pages/AddCar";
import AdminLogin from "./assets/pages/AdminLogin";
import PaymentSuccess from "./assets/pages/PaymentSucces";
import Navbar from "./components/Navbar";
import ChatBot from "./components/ChatBot";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <ChatBot />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cars" element={<Cars />} />
        <Route path="/add-car" element={<AddCar />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/payment-success" element={<PaymentSuccess />} />
      </Routes>
    </div>
  );
}
