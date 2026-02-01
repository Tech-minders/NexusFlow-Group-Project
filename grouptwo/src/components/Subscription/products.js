import { ahref, chatgpt, envato, grammarly } from "../Subscription/assets";
/**
 * productsData - A centralized array of objects.
 * Each object represents a digital product available for subscription.
 * will be easily moved to a backend API/Database in the future.
 */
export const productsData = [
  {
    id: "chatgpt", // Unique identifier used for state tracking (e.g., in paidIds)
    name: "ChatGPT", // Display name shown on the ProductCard
    plans: [
      // Array of subscription options available for this specific product
      { type: "Hourly", price: "$1" },
      { type: "Daily", price: "$5" },
      { type: "Weekly", price: "$12" },
      // 'popular: true' is a custom flag used to trigger special styling (blue borders/badges)
      { type: "Monthly", price: "$20", popular: true },
    ],
    image: chatgpt,
  },
  {
    id: "ahrefs",
    name: "Ahrefs",
    plans: [
      { type: "Hourly", price: "$10" },
      { type: "Daily", price: "$35", popular: true }, // Different tools can have different "Popular" choices
      { type: "Weekly", price: "$60" },
      { type: "Monthly", price: "$99" },
    ],
    image: ahref,
  },
  {
    id: "grammarly",
    name: "Grammarly",
    plans: [
      { type: "Hourly", price: "$0.50" },
      { type: "Daily", price: "$3" },
      { type: "Weekly", price: "$8" },
      { type: "Monthly", price: "$15", popular: true },
    ],
    image: grammarly,
  },
  {
    id: "envato",
    name: "Envato Elements",
    plans: [
      { type: "Hourly", price: "$2" },
      { type: "Daily", price: "$7" },
      { type: "Weekly", price: "$14", popular: true },
      { type: "Monthly", price: "$33" },
    ],
    image: envato,
  },
];
