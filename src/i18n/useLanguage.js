import { useContext } from "react";
import { SettingsContext } from "../context/SettingsContext";
import { translations } from "./translations";

export const useLanguage = () => {
  const { settings } = useContext(SettingsContext);

  const lang = settings.language || "en";

  const t = (key) => {
    return translations[lang][key] || key;
  };

  return { t, lang };
};