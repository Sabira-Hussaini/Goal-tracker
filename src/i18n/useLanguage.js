import { useContext } from "react";
import { SettingsContext } from "../context/SettingsContext";
import { translations } from "./translations";

export const useLanguage = () => {
  const { settings } = useContext(SettingsContext);

  const lang = settings.language || "en";

  const t = (key, variables = {}) => {
    const raw = translations?.[lang]?.[key];

    if (typeof raw !== "string") {
      return key;
    }

   
    return Object.keys(variables).reduce((text, k) => {
      return text.replace(
        new RegExp(`{{\\s*${k}\\s*}}`, "g"),
        variables[k]
      );
    }, raw);
  };

  return { t, lang };
};