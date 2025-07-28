import React, { useRef, useState } from "react";

import { Paperclip, Send, Smile } from "lucide-react";
import { useContextData } from "../context";

const MessageInput = () => {
  const [message, setMessage] = useState("");
  const inputRef = useRef(null);

  const { messages, setMessages } = useContextData();

  const handleSendMessage = () => {
    if (message.trim()) {
      const newMessage = {
        id: messages.length + 1,
        text: message,
        sender: "me",
        timestamp: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      };
      setMessages([...messages, newMessage]);
      setMessage("");

      // Simulate a response after 1.5 seconds
      setTimeout(() => {
        const response = {
          id: messages.length + 2,
          text: "Thanks for sharing! That looks really interesting.",
          sender: "other",
          timestamp: new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          }),
          avatar:
            "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=face",
        };
        setMessages((prev) => [...prev, response]);
      }, 1500);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      <div className="p-4 border-t bg-white">
        <div className="flex items-end space-x-2">
          <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
            <Paperclip className="w-5 h-5 text-gray-600" />
          </button>

          <div className="flex-1 relative">
            <textarea
              ref={inputRef}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Type a message..."
              className="w-full px-4 py-3 bg-gray-100 rounded-full resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-colors max-h-32"
              rows="1"
              style={{
                minHeight: "48px",
                height: "auto",
              }}
            />
            <button className="absolute right-2 top-1/2 transform -translate-y-1/2 p-1 hover:bg-gray-200 rounded-full transition-colors">
              <Smile className="w-5 h-5 text-gray-600" />
            </button>
          </div>

          <button
            onClick={handleSendMessage}
            disabled={!message.trim()}
            className={`p-3 rounded-full transition-all ${
              message.trim()
                ? "bg-blue-500 hover:bg-blue-600 text-white shadow-lg hover:shadow-xl"
                : "bg-gray-200 text-gray-400 cursor-not-allowed"
            }`}
          >
            <Send className="w-5 h-5" />
          </button>
        </div>
      </div>
    </>
  );
};

export default MessageInput;
