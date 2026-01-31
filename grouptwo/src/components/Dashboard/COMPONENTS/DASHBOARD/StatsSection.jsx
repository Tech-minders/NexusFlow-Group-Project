import React from "react";
import StatCard from "./StatCard";

function StatsSection  ()  {
  const stats = [
    { id: 1, title: "ActiveSubscriptions", value: 3 },
    { id: 2, title: "MonthlySavings", value: "$124" },
    { id: 3, title: "AvailableServices", value: 4 },
  ];

  return (
    <section className="mb-8">
      <h2 className="text-xl font-semibold mb-4">Statistics</h2>
      <div className="flex gap-4 flex-wrap">
        {stats.map((stat) => (
          <StatCard key={stat.id} title={stat.title} value={stat.value} />
        ))}
      </div>
    </section>
  );
};

export default StatsSection;
