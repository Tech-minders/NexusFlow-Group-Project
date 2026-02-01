import React from "react";
import { FaUser } from "react-icons/fa";

function UserProfile() {
  return (
    <div className="flex items-center gap-3 pl-4 border-l border-gray-200">
      {/* Avatar */}
      <div className="w-9 h-9 rounded-full bg-cyan-500 flex items-center justify-center text-white font-semibold">
        <FaUser />
      </div>

      {/* Name */}
      <span className="text-sm font-medium text-gray-900">User</span>
    </div>
  );
}

export default UserProfile;
