import React from "react";
import ServiceCard from "./ServiceCard";

function ServicesSection  ()  {
  const services = [
    { id: 1, name: "ChatGPT", description: "Advanced AI assistant for conversations,content creation and more" },
    { id: 2, name: "Grammarly", description: "AI powered writing assistant that helps you write clear mistake free grammar" },
    { id: 3, name: "Envato", description: "Digital marketplace for creative assets and resources" },
    { id: 4, name: "Ahrefs", description: "Comprehensive SEO toolset for backlink analysis keyword research and site audits" },
  ];

  return (
    <section>
      <h2 className="text-xl font-semibold mb-4">Our Digital Services</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <ServiceCard key={service.id} name={service.name} description={service.description} />
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;

