import {
  Box,
  Card,
  CardContent,
  Typography,
  ToggleButton,
  ToggleButtonGroup,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  IconButton,
} from "@mui/material";

import { useContext, useEffect, useState } from "react";
import { SettingsContext } from "../../context/SettingsContext";
import { useLanguage } from "../../i18n/useLanguage";

import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import PublicIcon from "@mui/icons-material/Public";

const Appearance = () => {
  const { settings, setSettings } = useContext(SettingsContext);
  const { t } = useLanguage();

  const [now, setNow] = useState(new Date());
  const [is24Hour, setIs24Hour] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  // ✅ DATE
  const formatDate = () => {
    return now.toLocaleDateString(
      settings.language === "fa" ? "fa-IR" : "en-US",
      {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      }
    );
  };

  // ✅ TIME
  const formatTime = () => {
    return now.toLocaleTimeString(
      settings.language === "fa" ? "fa-IR" : "en-US",
      {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: !is24Hour,
      }
    );
  };

  const toggleTheme = () => {
    setSettings({
      ...settings,
      themeMode: settings.themeMode === "light" ? "dark" : "light",
    });
  };

  const changeLanguage = (val) => {
    if (!val) return;

    setSettings({
      ...settings,
      language: val,
    });

    localStorage.setItem("language", val);
  };

  return (
    <Box sx={{ minHeight: "100vh", width: "100%", p: 3 }}>
      <Typography variant="h4">{t("settings")}</Typography>
      <Typography color="text.secondary" mb={3}>
        {t("settingsDesc")}
      </Typography>

      <Box sx={{ display: "flex", gap: 2, flexDirection: { xs: "column", md: "row" } }}>

        {/* LEFT CARD */}
        <Card sx={{ flex: 1.4, boxShadow: 3, borderRadius: 3 }}>
          <CardContent>

            <Typography variant="h6" mb={3}>
              {t("appearance")}
            </Typography>

            {/* LANGUAGE */}
            <Box sx={{ display: "flex", justifyContent: "space-between", mb: 3 }}>
              <Typography>{t("language")}</Typography>

              <ToggleButtonGroup
                exclusive
                size="small"
                value={settings.language}
                onChange={(e, val) => changeLanguage(val)}
              >
                <ToggleButton value="fa">FA</ToggleButton>
                <ToggleButton value="en">EN</ToggleButton>
              </ToggleButtonGroup>
            </Box>

            {/* THEME */}
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography>{t("theme")}</Typography>

              <IconButton onClick={toggleTheme}>
                {settings.themeMode === "light" ? (
                  <DarkModeIcon />
                ) : (
                  <LightModeIcon />
                )}
              </IconButton>
            </Box>

          </CardContent>
        </Card>

        {/* RIGHT CARD */}
        <Card sx={{ flex: 1, boxShadow: 3, borderRadius: 3 }}>
          <CardContent>

            <Typography variant="h6" mb={2}>
              {t("live_date_time")}
            </Typography>

            {/* toggle */}
            <Box sx={{ display: "flex", justifyContent: "flex-end", mb: 2 }}>
              <Box
                onClick={() => setIs24Hour((p) => !p)}
                sx={{
                  px: 1.5,
                  py: 0.5,
                  borderRadius: 2,
                  border: "1px solid #ccc",
                  fontSize: 12,
                  cursor: "pointer",
                }}
              >
                {is24Hour ? "24H" : "12H"}
              </Box>
            </Box>

            {/* TIME */}
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <AccessTimeIcon fontSize="small" />
              <Typography variant="h4">{formatTime()}</Typography>
            </Box>

            {/* DATE */}
            <Box sx={{ display: "flex", alignItems: "center", gap: 1, mt: 1 }}>
              <CalendarMonthIcon fontSize="small" />
              <Typography>{formatDate()}</Typography>
            </Box>

            {/* TIMEZONE */}
            <Box sx={{ display: "flex", alignItems: "center", gap: 1, mt: 1 }}>
              <PublicIcon fontSize="small" />
              <Typography>{t("timezone_kabul")}</Typography>
            </Box>

          </CardContent>
        </Card>

      </Box>

      {/* PROFILE */}
      <Card sx={{ mt: 4, boxShadow: 3, borderRadius: 3 }}>
        <CardContent>

          <Typography variant="h6">{t("profile")}</Typography>

          <Box mt={2} display="flex" flexDirection="column" gap={2}>

            <TextField
              label={t("fullName")}
              value={settings.profile.name}
              onChange={(e) =>
                setSettings({
                  ...settings,
                  profile: { ...settings.profile, name: e.target.value },
                })
              }
            />

            <TextField
              label={t("email")}
              value={settings.profile.email}
              onChange={(e) =>
                setSettings({
                  ...settings,
                  profile: { ...settings.profile, email: e.target.value },
                })
              }
            />

            <FormControl>
              <InputLabel>{t("mainFocus")}</InputLabel>
              <Select
                value={settings.goal}
                label={t("mainFocus")}
                onChange={(e) =>
                  setSettings({ ...settings, goal: e.target.value })
                }
              >
                <MenuItem value="study">📚 {t("study")}</MenuItem>
                <MenuItem value="work">💼 {t("work")}</MenuItem>
                <MenuItem value="fitness">🏃 {t("fitness")}</MenuItem>
                <MenuItem value="personal">🧠 {t("personal")}</MenuItem>
              </Select>
            </FormControl>

            <Box display="flex" justifyContent="flex-end">
              <Button variant="contained">
                {t("saveProfile")}
              </Button>
            </Box>

          </Box>
        </CardContent>
      </Card>

    </Box>
  );
};

export default Appearance;