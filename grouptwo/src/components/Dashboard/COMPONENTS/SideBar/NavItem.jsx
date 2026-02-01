import React from "react";
import { useState } from "react";
function NavItem({ label, icon: Icon, value, activeNav, setActiveNav }) {
  const isActive = activeNav === value;

  return (
    <button
      onClick={() => setActiveNav(value)}
      className={`w-full block px-4 py-3 rounded-lg text-left transition
        ${
          isActive
            ? "bg-blue-50 text-blue-600"
            : "text-gray-600 hover:bg-gray-100"
        }
      `}
    >
      <span className="flex items-center gap-3">
        <Icon size={18} />
        {label}
      </span>
    </button>
  );
}

export default NavItem;


