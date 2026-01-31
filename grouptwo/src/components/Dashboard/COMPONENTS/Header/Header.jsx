import React from "react";
import NotificationBell from "./NotificationBell";
import UserProfile from "./UserProfile";

function Header() {
  return (
    <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-end px-6 gap-4">
      
     
      <NotificationBell />

      
      <UserProfile />

    </header>
  );
}

export default Header;
