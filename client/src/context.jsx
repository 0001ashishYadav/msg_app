import { createContext, useContext, useState } from "react";

export const Context = createContext();

export const ContextProvider = ({ children }) => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hey! How's your day going?",
      sender: "other",
      timestamp: "10:30 AM",
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=face",
    },
    {
      id: 2,
      text: "Pretty good! Just working on some new designs. What about you?",
      sender: "me",
      timestamp: "10:32 AM",
    },
    {
      id: 3,
      text: "That sounds awesome! I'd love to see what you're working on. I'm just catching up on some reading.",
      sender: "other",
      timestamp: "10:35 AM",
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=face",
    },
    {
      id: 4,
      text: "Sure! I'll share some screenshots later today.",
      sender: "me",
      timestamp: "10:37 AM",
    },
  ]);

  const value = {
    messages,
    setMessages,
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export const useContextData = () => useContext(Context);
