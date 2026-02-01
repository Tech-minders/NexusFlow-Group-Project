import React from "react";
import { Cpu, FileText, MessageSquare } from "lucide-react";

const icons = {
  ChatGPT: <MessageSquare className="w-6 h-6 text-indigo-600" />,
  Grammarly: <FileText className="w-6 h-6 text-green-600" />,
  GPTZero: <Cpu className="w-6 h-6 text-pink-600" />,
};

function ServiceCard  ({ name, description })  {
  return (
    <div className="bg-white shadow-lg rounded-xl p-6 flex flex-col gap-3 hover:shadow-2xl transition duration-300">
      <div className="p-3 bg-gray-100 rounded-full w-max">{icons[name]}</div>
      <h3 className="text-lg font-semibold">{name}</h3>
      <p className="text-gray-500">{description}</p>
      <button className="mt-auto bg-indigo-500 text-white px-4 py-2 rounded-lg hover:bg-indigo-600 transition">
    View Plans
      </button>
    </div>
  );
};

export default ServiceCard;

