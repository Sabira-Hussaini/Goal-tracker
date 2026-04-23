import { createContext, useEffect, useState } from "react";

export const SettingsContext = createContext();

const defaultSettings = {
  timeZone: "Asia/Kabul",

timeFormat: "24h",
dateFormat: "YYYY-MM-DD",

  timeFormat: "24h",
  dateFormat: "YYYY-MM-DD",

  themeMode: "light",
  language: "fa",
  profile: {
    name: "",
    email: "",
  },
  goal: "study",
  preferences: {
    reminder: false,
    animations: true,
    weekStart: "monday",
  },
};

export const SettingsProvider = ({ children }) => {
  const [settings, setSettings] = useState(() => {
    const saved = JSON.parse(localStorage.getItem("settings"));

    if (saved) {
      return {
        ...defaultSettings,
        ...saved,
        profile: {
          ...defaultSettings.profile,
          ...saved.profile,
        },
        preferences: {
          ...defaultSettings.preferences,
          ...saved.preferences,
        },
      };
    }

    return defaultSettings;
  });

  useEffect(() => {
    localStorage.setItem("settings", JSON.stringify(settings));
  }, [settings]);

  const resetSettings = () => {
    setSettings({ ...defaultSettings });
    localStorage.removeItem("settings");
  };

  return (
    <SettingsContext.Provider
      value={{
        settings,
        setSettings,
        resetSettings,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
};