import React from "react";
import ChatBot from "../../components/ChatBot";

export default function Home() {
  return (
    <div className="p-4 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-4">Welcome to ibnabdulkabeer Autos</h1>
      <p className="mb-4 text-center">Browse, chat, and buy cars directly!</p>
      <ChatBot />
    </div>
  );
}