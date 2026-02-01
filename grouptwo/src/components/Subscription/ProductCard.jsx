import React, { useState } from "react";

/**
 * ProductCard Component
 * Props:
 * - product: The object containing tool details (name, plans, etc.)
 * - isPaid: Boolean from App.jsx tracking if this specific tool was purchased
 * - onSelectPlan: Function that opens the sidebar with the chosen plan details
 */
function ProductCard({ product, isPaid, onSelectPlan }) {
  // Local state to toggle between showing the "View Plans" button or the list of actual plans
  const [showPlans, setShowPlans] = useState(false);
  const handleClick = () => {
    alert("Coming soon...");
  };

  return (
    /* Card Container: Uses flex-col and h-full to ensure all cards in a row have equal height */
    <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 flex flex-col ">
      <div className="flex flex-col justify-center items-center gap-2">
        <img src={product.image} alt="image" className="w-20" />
        {/* Product Title (e.g., ChatGPT, Ahrefs) */}
        <h2 className="text-2xl font-bold mb-6">{product.name}</h2>
      </div>

      {/* mt-auto pushes the button/plans section to the bottom of the card regardless of title length */}
      <div className="mt-auto">
        {/* LOGIC STEP 1: Check if the product is already paid for */}
        {isPaid ? (
          /* If paid, show the final "Access Now" button */
          <button
            className="w-full py-3 bg-green-500 text-white rounded-xl font-bold cursor-pointer"
            onClick={handleClick}
          >
            Access Now
          </button>
        ) : showPlans ? (
          /* LOGIC STEP 2: If not paid but "View Plans" was clicked, show the list of plans */
          <div className="space-y-2 animate-in fade-in duration-300">
            {product.plans.map((plan) => (
              <button
                key={plan.type}
                /* When a plan is clicked, it sends data back to App.jsx to open the checkout sidebar */
                onClick={() => onSelectPlan(product, plan)}
                /* Dynamic Styling: If the plan is marked as 'popular', it gets a blue border/background */
                className={`w-full p-3 rounded-lg border-2 flex justify-between items-center transition-all ${
                  plan.popular
                    ? "border-blue-500 bg-blue-50"
                    : "border-gray-100 hover:border-blue-200"
                }`}
              >
                <div className="text-left">
                  <p className="font-bold text-sm">{plan.type}</p>
                  <p className="text-blue-600 text-xs">{plan.price}</p>
                </div>

                {/* Popular Badge: Only renders if plan.popular is true */}
                {plan.popular && (
                  <span className="text-[10px] bg-blue-600 text-white px-2 py-0.5 rounded-full uppercase font-black">
                    Popular
                  </span>
                )}
              </button>
            ))}
          </div>
        ) : (
          /* LOGIC STEP 3: The initial state. Shows the "View Plans" button */
          <button
            onClick={() => setShowPlans(true)}
            className="w-full py-3 bg-gray-800 text-white rounded-xl font-semibold hover:bg-black transition-colors"
          >
            View Plans
          </button>
        )}
      </div>
    </div>
  );
}

export default ProductCard;
