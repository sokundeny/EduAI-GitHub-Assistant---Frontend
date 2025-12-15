import React from "react";

const LoadingPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900">
      {/* Gradient spinner */}
      <div className="w-20 h-20 rounded-full border-4 border-t-transparent border-blue-500 border-b-purple-500 animate-spin mb-8"></div>

      {/* Bouncing dots */}
      <div className="flex space-x-2">
        <div className="w-4 h-4 bg-blue-500 rounded-full animate-bounce"></div>
        <div className="w-4 h-4 bg-purple-500 rounded-full animate-bounce animation-delay-200"></div>
        <div className="w-4 h-4 bg-pink-500 rounded-full animate-bounce animation-delay-400"></div>
      </div>

      <p className="mt-6 text-white text-lg font-semibold">Loading, please wait...</p>
    </div>
  );
};

export default LoadingPage;