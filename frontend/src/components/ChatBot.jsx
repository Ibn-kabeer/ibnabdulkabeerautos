import { useState } from "react";
import axios from "../api/axios"; 

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const sendMessage = async () => {
    if (!input.trim()) return;
    
    const newMessages = [...messages, { role: "user", content: input }];
    setMessages(newMessages);
    setInput("");

    try {
      const { data } = await axios.post("/chat", { message: input });
      setMessages([...newMessages, { role: "assistant", content: data.reply }]);
    } catch (error) {
      console.error("Chat error:", error);
      setMessages([...newMessages, { role: "assistant", content: "Sorry, I'm having trouble connecting." }]);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {!isOpen && (
        <button onClick={() => setIsOpen(true)} className="bg-blue-600 text-white p-3 rounded-full shadow-lg">
          Chat
        </button>
      )}
      {isOpen && (
        <div className="bg-white w-80 h-96 border rounded-lg shadow-xl flex flex-col">
          <div className="bg-blue-600 text-white p-2 flex justify-between items-center rounded-t-lg">
            <span>Assistant</span>
            <button onClick={() => setIsOpen(false)}>X</button>
          </div>
          <div className="flex-1 p-2 overflow-y-auto space-y-2">
            {messages.map((msg, idx) => (
              <div key={idx} className={`p-2 rounded ${msg.role === "user" ? "bg-blue-100 self-end" : "bg-gray-100"}`}>
                {msg.content}
              </div>
            ))}
          </div>
          <div className="p-2 border-t flex">
            <input 
              value={input} 
              onChange={(e) => setInput(e.target.value)} 
              className="flex-1 border p-1 rounded"
              placeholder="Ask something..."
            />
            <button onClick={sendMessage} className="ml-2 bg-blue-600 text-white px-2 rounded">Send</button>
          </div>
        </div>
      )}
    </div>
  );
}