import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { GoalProvider } from "./context/GoalContext.jsx";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme/theme";
  import { SettingsProvider } from "./context/SettingsContext";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GoalProvider>
      

<SettingsProvider>
  <App />
</SettingsProvider>
      
      </GoalProvider>
    </ThemeProvider>
  </React.StrictMode>
);