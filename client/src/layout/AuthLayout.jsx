import React, { useState } from "react";
import AuthHeader from "../components/auth/AuthHeader";
import BackgroundElements from "../components/auth/BackgroundElements";

const AuthLayout = ({ children }) => {
  const [theme, setTheme] = useState("light");

  return (
    <div
      className={`min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300 ${
        theme === "dark" ? "dark" : ""
      }`}
    >
      <AuthHeader />
      <BackgroundElements />

      <div className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">{children}</div>
    </div>
  );
};

export default AuthLayout;
