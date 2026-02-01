import React from "react";
import { Bell } from "lucide-react";

function NotificationBell() {
  return (
    <button className="relative p-2 rounded-lg hover:bg-gray-100 transition">
      <Bell size={20} className="text-gray-600" />

      {/* Red dot */}
      <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full"></span>
    </button>
  );
}

export default NotificationBell;
