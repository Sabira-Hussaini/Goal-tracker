import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";

import getTheme from "./theme/theme";
import { SettingsContext } from "./context/SettingsContext";

import Dashboard from "./pages/Dashboard";
import Goals from "./pages/Goals";
import GoalDetails from "./pages/GoalDetails";
import Categories from "./pages/Categories";
import Settings from "./pages/Settings";
import Form from "./components/goal/form/Form";
import Layout from "./layout/Layout";
import LoadingScreen from "./LoadingSreen";

function App() {
  const { settings } = useContext(SettingsContext);
  const [loading, setLoading] = useState(true);

  /* ⏳ LOADING */
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  /* 🌍 RTL / LTR */
  useEffect(() => {
    document.documentElement.dir = settings.language === "fa" ? "rtl" : "ltr";
  }, [settings.language]);

  return (
    <ThemeProvider theme={getTheme(settings.themeMode)}>
      <CssBaseline />

      {loading ? (
        <LoadingScreen />
      ) : (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Dashboard />} />
              <Route path="goals" element={<Goals />} />
              <Route path="form" element={<Form />} />
              <Route path="categories" element={<Categories />} />
              <Route path="setting" element={<Settings />} />
              <Route path="goals/:id" element={<GoalDetails />} />
            </Route>
          </Routes>
        </BrowserRouter>
      )}
    </ThemeProvider>
  );
}

export default App;
