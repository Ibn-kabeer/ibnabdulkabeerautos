import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between">
      <div className="font-bold text-xl">ibnabdulkabeer Autos</div>
      <div className="space-x-4">
        <Link to="/">Home</Link>
        <Link to="/cars">Cars</Link>
        <Link to="/add-car">Add Car</Link>
        <Link to="/admin-login">Admin</Link>
      </div>
    </nav>
  );
}