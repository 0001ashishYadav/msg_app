import { createContext, useContext, useState } from "react";
import { messagesData } from "../data";

export const Context = createContext();

export const ContextProvider = ({ children }) => {
  const [messages, setMessages] = useState(messagesData);

  const value = {
    messages,
    setMessages,
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export const useContextData = () => useContext(Context);
