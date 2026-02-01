
import React from "react";
import { useState } from "react";
import { Home, CreditCard, Settings } from "lucide-react";
import NavItem from "./NavItem";

function NavMenu({ activeNav, setActiveNav }) {
  return (
    <nav className="px-4 mt-4">
      <div className="space-y-2">
        <NavItem label="Dashboard" icon={Home} value="dashboard" activeNav={activeNav} setActiveNav={setActiveNav} />
        <NavItem label="My Subscriptions" icon={CreditCard} value="subscriptions" activeNav={activeNav} setActiveNav={setActiveNav} />
        <NavItem label="Settings" icon={Settings} value="settings" activeNav={activeNav} setActiveNav={setActiveNav} />
      </div>
    </nav>
  );
}

export default NavMenu;


