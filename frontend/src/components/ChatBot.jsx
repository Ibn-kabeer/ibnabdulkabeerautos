import React, { useState } from "react";
import axios from "axios";

export default function ChatBot() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleSend = async () => {
    if (!input) return;
    const userMsg = { sender: "user", text: input };
    setMessages([...messages, userMsg]);
    setInput("");

    // Call backend AI
    try {
      const res = await axios.post("https://api.openai.com/v1/chat/completions", {
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: input }]
      }, {
        headers: {
          "Authorization": `Bearer ${import.meta.env.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}`,
          "Content-Type": "application/json"
        }
      });

      const aiMsg = { sender: "bot", text: res.data.choices[0].message.content };
      setMessages([...messages, userMsg, aiMsg]);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="w-full max-w-md bg-gray-100 p-4 rounded shadow">
      <div className="h-64 overflow-y-auto mb-2">
        {messages.map((msg, idx) => (
          <div key={idx} className={msg.sender === "user" ? "text-right" : "text-left"}>
            <p className={msg.sender === "user" ? "bg-blue-500 text-white inline-block p-2 rounded" : "bg-gray-300 p-2 rounded inline-block"}>{msg.text}</p>
          </div>
        ))}
      </div>
      <div className="flex space-x-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 p-2 rounded"
          placeholder="Ask a question..."
        />
        <button onClick={handleSend} className="bg-blue-600 text-white p-2 rounded">Send</button>
      </div>
    </div>
  );
}