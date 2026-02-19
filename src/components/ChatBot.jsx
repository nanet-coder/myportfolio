import { useState, useEffect, useRef } from "react";
import axios from "axios";

export default function ChatBot() {
    const [input, setInput] = useState("");
    const [messages, setMessages] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const messagesEndRef = useRef(null);

    // Scroll to bottom when messages change
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages, isLoading]);

    // Auto-greeting when chat opens
    useEffect(() => {
        if (isOpen && messages.length === 0) {
            setTimeout(() => {
                setMessages([{ role: "bot", text: "Hello! I’m your AI assistant. How can I help you today?" }]);
            }, 500);
        }
    }, [isOpen]);

    const handleSend = async () => {
        if (!input.trim() || isLoading) return;

        const userMsg = { role: "user", text: input };
        setMessages((prev) => [...prev, userMsg]);
        setInput("");
        setIsLoading(true);

        try {
            const res = await axios.post("http://localhost:5000/api/chat", { message: input });
            setMessages((prev) => [...prev, { role: "bot", text: res.data.reply }]);
        } catch (err) {
            setMessages((prev) => [...prev, { role: "bot", text: "Oops! Something went wrong." }]);
            console.error(err);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end font-sans">
            {/* Floating Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="bg-blue-600 text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform animate-pulse"
            >
                {isOpen ? "✖" : "💬"}
            </button>

            {/* Chat Window */}
            {isOpen && (
                <div className="w-80 md:w-96 h-[500px] md:h-[550px] bg-white rounded-2xl shadow-2xl mt-3 flex flex-col border border-gray-200 overflow-hidden transform scale-100 transition-transform duration-300">
                    {/* Header */}
                    <div className="bg-blue-600 p-4 text-white font-bold text-center rounded-t-2xl">
                        AI Assistant
                    </div>

                    {/* Messages */}
                    <div className="flex-1 p-4 overflow-y-auto flex flex-col gap-3 scrollbar-thin scrollbar-thumb-blue-300 scrollbar-track-gray-100 bg-gray-50">
                        {messages.map((m, i) => (
                            <div
                                key={i}
                                className={`p-3 rounded-2xl max-w-[85%] ${m.role === "user"
                                        ? "bg-blue-600 text-white self-end"
                                        : "bg-white text-gray-800 shadow-sm self-start"
                                    }`}
                            >
                                {m.text}
                            </div>
                        ))}

                        {/* Typing Animation */}
                        {isLoading && (
                            <div className="self-start bg-gray-200 text-gray-600 px-3 py-2 rounded-2xl max-w-[40%]">
                                <span className="flex space-x-1">
                                    <span className="animate-bounce">.</span>
                                    <span className="animate-bounce delay-150">.</span>
                                    <span className="animate-bounce delay-300">.</span>
                                </span>
                            </div>
                        )}

                        <div ref={messagesEndRef} />
                    </div>

                    {/* Input */}
                    <div className="p-3 border-t bg-white flex gap-2">
                        <input
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={(e) => e.key === "Enter" && handleSend()}
                            placeholder="Type a message..."
                            className="flex-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <button
                            onClick={handleSend}
                            disabled={isLoading}
                            className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition"
                        >
                            Send
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
