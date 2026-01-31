import React, { useState } from "react";
import Header from "./COMPONENTS/Header/Header";
import Sidebar from "./COMPONENTS/SideBar/SideBar";
import WelcomeSection from "./COMPONENTS/DASHBOARD/WelcomeSection";
import StatsSection from "./COMPONENTS/DASHBOARD/StatsSection";
import ServicesSection from "./COMPONENTS/DASHBOARD/ServicesSection";

function Dashboard() {
  const [activeNav, setActiveNav] = useState("dashboard");

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar activeNav={activeNav} setActiveNav={setActiveNav} />

      <main className="flex-1 flex flex-col overflow-auto">
        {/* Header */}
        <Header />
        <header className="bg-white shadow-sm px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-semibold text-gray-900">
            {activeNav.charAt(0).toUpperCase() + activeNav.slice(1)}
          </h1>
 
        </header>

        {/* Main content */}
        <div className="p-6 flex-1">
          {activeNav === "dashboard" && (
            <>
              <WelcomeSection />
              <StatsSection />
              <ServicesSection />
            </>
          )}
          {activeNav !== "dashboard" && (
            <p className="text-gray-600">
              Content for "{activeNav}" will go here.
            </p>
          )}
        </div>
      </main>
    </div>
  );
}

export default Dashboard;
