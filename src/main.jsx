import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import { GoalProvider } from "./context/GoalContext.jsx";
import { CategoryProvider } from "./context/CategoryContext.jsx";
import { SettingsProvider } from "./context/SettingsContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <SettingsProvider>
      <CategoryProvider>
      <GoalProvider>
        <App />
      </GoalProvider>
      </CategoryProvider>
    </SettingsProvider>
  </React.StrictMode>
);