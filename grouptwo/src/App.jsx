import { useState } from "react";
import Homepage from "./components/Homepage";
import Dashboard from "./components/Dashboard";
import LogIn from "./components/LogIn";
import Subscription from "./components/Subscription";

function App() {
  return (
    <div>
      <Homepage />
      <Dashboard />
      <LogIn />
      <Subscription />
    </div>
  );
}

export default App;
