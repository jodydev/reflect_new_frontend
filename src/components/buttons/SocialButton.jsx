import React from "react";

export default function SocialButton({ icon }) {
  return (
    <button className="hover:scale-110 relative flex items-center justify-center w-12 h-12 rounded-full bg-fuchsia-600 bg-opacity-10 backdrop-blur-md border border-fuchsia-600 border-opacity-20 shadow-lg transition duration-300 ease-in-out hover:bg-fuchsia-500 hover:bg-opacity-30">
      <span className="text-white transition duration-300 transform hover:scale-110 hover:text-fuchsia-200">
        {icon}
      </span>
      <div className="absolute inset-0 rounded-full bg-white opacity-10 blur-md transition-all duration-300 transform scale-75 hover:scale-100 hover:opacity-30"></div>
    </button>
  );
}
