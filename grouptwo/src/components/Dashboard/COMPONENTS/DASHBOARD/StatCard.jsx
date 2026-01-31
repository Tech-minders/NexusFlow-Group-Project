
import React from "react";
import { Users, DollarSign, ShoppingCart } from "lucide-react";

const icons = {
  Users: <Users className="w-6 h-6 text-white" />,
  Revenue: <DollarSign className="w-6 h-6 text-white" />,
  Orders: <ShoppingCart className="w-6 h-6 text-white" />,
};

function StatCard  ({ title, value })  {
  return (
    <div className="flex-1 bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow-lg rounded-xl p-6 flex items-center gap-4 hover:scale-105 transform transition duration-300">
      <div className="p-3 bg-white bg-opacity-20 rounded-full">
        {icons[title]}
      </div>
      <div>
        <h3 className="text-sm font-medium">{title}</h3>
        <p className="text-2xl font-bold">{value}</p>
      </div>
    </div>
  );
};

export default StatCard;


