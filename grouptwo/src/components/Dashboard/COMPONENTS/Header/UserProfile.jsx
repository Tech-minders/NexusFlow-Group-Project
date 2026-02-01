import React from "react";

function UserProfile() {
  return (
    <div className="flex items-center gap-3 pl-4 border-l border-gray-200">
      
      {/* Avatar */}
      <div className="w-9 h-9 rounded-full bg-cyan-500 flex items-center justify-center text-white font-semibold">
        NL
      </div>

      {/* Name */}
      <span className="text-sm font-medium text-gray-900">
        Nick Lemeria
      </span>

    </div>
  );
}

export default UserProfile;
