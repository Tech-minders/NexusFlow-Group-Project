import React from "react";
import WelcomeSection from "./WelcomeSection";
import StatsSection from "../StatsSection";
import ServicesSection from "../ServicesSection";

function Dashboard() {
  return (
    <div>
      <WelcomeSection />
      <StatsSection />
      <ServicesSection />
    </div>
  );
}

export default Dashboard;
