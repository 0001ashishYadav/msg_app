import { Loader2 } from "lucide-react";
import React from "react";

const LoadingSpinner = () => {
  return (
    <div className="fixed inset-0 bg-black/20 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-2xl border border-white/20">
        <div className="flex items-center space-x-4">
          <Loader2 className="animate-spin h-8 w-8 text-indigo-600" />
          <span className="text-gray-700 dark:text-gray-200 font-medium">
            Processing...
          </span>
        </div>
      </div>
    </div>
  );
};

export default LoadingSpinner;
