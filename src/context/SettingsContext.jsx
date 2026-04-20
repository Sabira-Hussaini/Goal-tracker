import { createContext, useEffect, useState } from "react";

export const SettingsContext = createContext();

const defaultSettings = {
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
  const [settings, setSettings] = useState(defaultSettings);

  // LOAD from localStorage
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("settings"));

    if (saved) {
      setSettings({
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
      });
    }
  }, []);

  // SAVE to localStorage
  useEffect(() => {
    localStorage.setItem("settings", JSON.stringify(settings));
  }, [settings]);

  // RESET all settings
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