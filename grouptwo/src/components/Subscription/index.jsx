import React, { useState } from "react";
// Import the static data containing tool names, plans, and prices
import { productsData } from "./products.js";
// Import the UI components for the product grid and the slide-out sidebar
import ProductCard from "./ProductCard";
import CheckoutSidebar from "./CheckoutSidebar";

function Subscription() {
  /**
   * STATE 1: checkoutData
   * Stores the specific product and plan the user clicked on (e.g., {ChatGPT, Monthly}).
   * If it is null, the sidebar stays hidden.
   */
  const [checkoutData, setCheckoutData] = useState(null);

  /**
   * STATE 2: paidIds
   * An array that stores the IDs of products the user has successfully paid for.
   * Example: ['chatgpt', 'ahrefs']
   */
  const [paidIds, setPaidIds] = useState([]);

  /**
   * HANDLER: Selecting a Plan
   * Triggered when a user clicks a specific plan button inside a ProductCard.
   * It sets the checkoutData state, which automatically opens the Sidebar.
   */
  const handleSelectPlan = (product, plan) => {
    setCheckoutData({ product, plan });
  };

  /**
   * HANDLER: Finalizing Payment
   * Triggered after the "Pay Now" logic finishes in the Sidebar.
   * 1. Adds the current product ID to the 'paidIds' list.
   * 2. Clears 'checkoutData' to close the sidebar.
   */
  const handlePayment = () => {
    setPaidIds([...paidIds, checkoutData.product.id]); // Keep previous paid items + add the new one
    setCheckoutData(null); // Close the sidebar
  };

  return (
    // Main Container: min-h-screen ensures the background gray covers the whole page
    <div className="min-h-screen bg-gray-50 p-10 font-sans">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-2xl font-bold text-gray-800 text-center mb-12 tracking-tight">
          Subscribe to Tools
        </h1>

        {/* Responsive Grid: 1 column on mobile, 2 on tablets, 4 on large screens */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 ">
          {productsData.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              /* isPaid passes 'true' if the product ID is found in our paidIds array */
              isPaid={paidIds.includes(product.id)}
              onSelectPlan={handleSelectPlan}
            />
          ))}
        </div>
      </div>

      {/* 
        CHECKOUT SIDEBAR 
        - isOpen: uses '!!' to convert the object into a true/false boolean.
        - product/plan: safely passes data using optional chaining (?.).
      */}
      <CheckoutSidebar
        isOpen={!!checkoutData}
        product={checkoutData?.product}
        plan={checkoutData?.plan}
        onClose={() => setCheckoutData(null)}
        onPay={handlePayment}
      />
    </div>
  );
}
export default Subscription;
