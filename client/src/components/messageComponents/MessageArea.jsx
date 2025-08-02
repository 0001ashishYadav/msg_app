import React, { useEffect, useRef, useState } from "react";
import { useContextData } from "../../context";

const MessageArea = () => {
  const messagesEndRef = useRef(null);

  const { messages, setMessages } = useContextData();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <>
      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex ${
              msg.sender === "me" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`flex max-w-xs lg:max-w-md ${
                msg.sender === "me" ? "flex-row-reverse" : "flex-row"
              } items-end space-x-2`}
            >
              {msg.sender === "other" && (
                <img
                  src={msg.avatar}
                  alt="Avatar"
                  className="w-8 h-8 rounded-full object-cover mb-1"
                />
              )}
              <div
                className={`px-4 py-2 rounded-2xl ${
                  msg.sender === "me"
                    ? "bg-blue-500 text-white rounded-br-md"
                    : "bg-white text-gray-800 rounded-bl-md shadow-sm"
                } ${msg.sender === "other" ? "ml-2" : "mr-2"}`}
              >
                <p className="text-sm leading-relaxed">{msg.text}</p>
                <p
                  className={`text-xs mt-1 ${
                    msg.sender === "me" ? "text-blue-100" : "text-gray-500"
                  }`}
                >
                  {msg.timestamp}
                </p>
              </div>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
    </>
  );
};

export default MessageArea;
