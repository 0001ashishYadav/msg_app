import React, { useState } from "react";

const Button = ({
  type = "button",
  onClick,
  disabled,
  className,
  children,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || isLoading}
      className={`w-full py-3 px-6 rounded-xl font-medium transition-all duration-200 transform hover:scale-105 focus:ring-2 focus:ring-offset-2 ${
        disabled || isLoading ? "opacity-50 cursor-not-allowed" : ""
      } ${className}`}
    >
      {isLoading ? (
        <div className="flex items-center justify-center">
          <Loader2 className="animate-spin h-5 w-5 mr-2 text-white" />
          Processing...
        </div>
      ) : (
        children
      )}
    </button>
  );
};

export default Button;
