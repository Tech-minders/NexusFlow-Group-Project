import React from "react";

function Logo() {
  return (
    <div className="flex items-center gap-3 px-6 py-5 border-b border-gray-200">
      <div className="w-10 h-10 rounded-full bg-indigo-500 flex items-center justify-center text-white font-bold">
        NF
      </div>

      <span className="text-lg font-semibold text-gray-900">
        NexusFlow
      </span>
    </div>
  );
}

export default Logo;
