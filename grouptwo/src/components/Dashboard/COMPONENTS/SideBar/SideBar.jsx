import React from "react";
import Logo from "./Logo";
import NavMenu from "./NavMenu";

function Sidebar({ activeNav, setActiveNav }) {
  return (
    <aside className="w-64 min-h-screen bg-white border-r border-gray-200 ">
      <Logo />
      <NavMenu
        activeNav={activeNav}
        setActiveNav={setActiveNav}
      />
    </aside>
  );
}

export default Sidebar;

