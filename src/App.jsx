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
import Login from "./logIn/LogIn";
import LogIn from "./logIn/LogIn";

function App() {
  const { settings } = useContext(SettingsContext);

  const [loading, setLoading] = useState(true);
  const [isAuth, setIsAuth] = useState(false);

  /* ⏳ LOADING */
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  /* 🔐 CHECK LOGIN */
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));

    if (user && user.expireTime > Date.now()) {
      setIsAuth(true);
    } else {
      localStorage.removeItem("user");
      setIsAuth(false);
    }
  }, []);

  /* 🌍 RTL / LTR */
  useEffect(() => {
    document.documentElement.dir = settings.language === "fa" ? "rtl" : "ltr";
  }, [settings.language]);

  /* ⏳ LOADING SCREEN */
  if (loading) return <LoadingScreen />;

  /* 🔐 LOGIN PAGE */
  if (!isAuth) {
    return <Login onLogin={() => setIsAuth(true)} />;
  }

  /* ✅ MAIN APP */
  return (
    <ThemeProvider theme={getTheme(settings.themeMode)}>
      <CssBaseline />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="goals" element={<Goals />} />
            <Route path="form" element={<Form />} />
            <Route path="categories" element={<Categories />} />
            <Route path="setting" element={<Settings />} />
            <Route path="goals/:id" element={<GoalDetails />} />
            <Route path="logIn" element={<LogIn />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
