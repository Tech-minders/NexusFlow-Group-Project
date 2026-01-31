import React, { useState } from "react";

/**
 * CheckoutSidebar Component
 * Props:
 * - isOpen: Boolean to show/hide the sidebar
 * - product: Object containing name, id, etc.
 * - plan: Object containing selected plan type and price
 * - onClose: Function to close the sidebar
 * - onPay: Function to update the main app state once payment is successful
 */
function CheckoutSidebar({ isOpen, product, plan, onClose, onPay }) {
  // Local state to track the payment flow: 'idle' (ready), 'processing' (loading), or 'success'
  const [status, setStatus] = useState("idle");

  // Conditional Rendering: If sidebar isn't open, don't render anything in the DOM
  if (!isOpen) return null;

  // Function to simulate a real payment gateway process
  const handleProcessPayment = () => {
    // Step 1: Switch UI to the loading spinner
    setStatus("processing");

    // Step 2: Simulate a 1.5-second delay (mimicking a bank response)
    setTimeout(() => {
      // Step 3: Switch UI to the success checkmark
      setStatus("success");

      // Step 4: After showing the success message for 1.5s, finalize the transaction
      setTimeout(() => {
        onPay(); // Notify the parent component that payment is done
        setStatus("idle"); // Reset the sidebar state for the next purchase
      }, 1500);
    }, 1500);
  };

  return (
    /* The Dark Backdrop: fixed to fill the screen, semi-transparent black, blurs the background */
    <div className="fixed inset-0 z-50 flex justify-end bg-black/40 backdrop-blur-sm">
     {/* The White Panel: slide-in animation from the right, full height, 80px
      wide */}
      <div className="w-80 h-full bg-white p-8 shadow-2xl flex flex-col animate-in slide-in-from-right">
        {/* CHECKOUT VIEW: Shown when status is 'idle' */}
        {status === "idle" ? (
          <>
            {/* Header section with Close Button */}
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-xl font-black italic">CHECKOUT</h2>
              <button
                onClick={onClose}
                className="text-gray-400 text-xl hover:text-black"
              >
                ✕
              </button>
            </div>

            {/* Product Details Section */}
            <div className="flex-1">
              <p className="text-gray-500 text-xs font-bold uppercase">
                Product
              </p>
              <p className="text-2xl font-bold mb-6">{product.name}</p>

              {/* Selected Plan Box */}
              <div className="p-4 bg-gray-50 rounded-xl border border-gray-100">
                <span className="font-medium text-gray-700">
                  {plan.type} Access
                </span>
                <p className="font-bold text-blue-600 text-lg">{plan.price}</p>
              </div>
            </div>

            {/* Payment Button: active:scale-95 adds a "click" physical feel */}
            <button
              onClick={handleProcessPayment}
              className="w-full py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-all active:scale-95"
            >
              PAY NOW
            </button>
          </>
        ) : status === "processing" ? (
          /* PROCESSING VIEW: Shown during the loading state */
          <div className="flex flex-col items-center justify-center h-full">
            {/* Tailwind's built-in 'animate-spin' for the loading wheel */}
            <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mb-4"></div>
            <p className="font-bold text-gray-700">Processing Payment...</p>
          </div>
        ) : (
          /* SUCCESS VIEW: Shown after payment is "confirmed" */
          <div className="flex flex-col items-center justify-center h-full text-center animate-in zoom-in duration-300">
            {/* Green Checkmark Icon */}
            <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
              <svg
                className="w-10 h-10"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="3"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-800">Success!</h2>
            <p className="text-gray-500 mt-2">
              Your subscription is now active.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default CheckoutSidebar;
