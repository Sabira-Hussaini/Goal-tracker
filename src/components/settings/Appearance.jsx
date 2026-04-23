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
import LocationOnIcon from "@mui/icons-material/LocationOn";
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

  // 🔹 Live time
  const [now, setNow] = useState(new Date());

  // 🔹 12/24 toggle
  const [is24Hour, setIs24Hour] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setNow(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // ⏰ FORMAT TIME (FIXED - single source of truth)
 const formatDate = () => {
  return new Date().toLocaleDateString(
    settings.language === "fa" ? "fa-IR" : "en-US",
    {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    }
  );
};

// ✅ FIXED time formatter
const formatTime = () => {
  return new Date().toLocaleTimeString(
    settings.language === "fa" ? "fa-Af" : "en-US",
    {
      hour: "2-digit",
      minute: "2-digit",
      hour12: !is24Hour,
    }
  );
}

  // 🌙 Theme toggle
  const toggleTheme = () => {
    setSettings({
      ...settings,
      themeMode: settings.themeMode === "light" ? "dark" : "light",
    });
  };

  return (
    <Box sx={{ minHeight: "100vh", width: "100%", p: 3 }}>
      <Typography variant="h4" mb={1}>
        {t("settings")}
      </Typography>

      <Typography color="text.secondary" mb={3}>
        {t("settingsDesc")}
      </Typography>

      <Box sx={{ display: "flex", gap: 2, flexDirection: { xs: "column", md: "row" } }}>
        
        {/* ================= LEFT ================= */}
        <Card sx={{ flex: 1.4, boxShadow: 3, borderRadius: 3 }}>
          <CardContent sx={{ p: 3 }}>
            <Typography variant="h6" fontWeight={600} mb={3}>
              {t("appearance")}
            </Typography>

            {/* Language */}
            <Box sx={{ display: "flex", justifyContent: "space-between", mb: 3 }}>
              <Typography>{t("language")}</Typography>

              <ToggleButtonGroup
                exclusive
                size="small"
                value={settings.language}
                onChange={(e, val) => {
  if (!val) return;

  setSettings({
    ...settings,
    language: val,
  });

  localStorage.setItem("language", val); // ✅ save
}}
              >
                <ToggleButton value="fa">FA</ToggleButton>
                <ToggleButton value="en">EN</ToggleButton>
              </ToggleButtonGroup>
            </Box>

            {/* Theme */}
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

        {/* ================= RIGHT ================= */}
        <Card sx={{ flex: 1, boxShadow: 3, borderRadius: 3 }}>
  <CardContent sx={{ p: 3 }}>

    {/* ✅ translated */}
    <Typography variant="h6" fontWeight={600} mb={2}>
      {t("live_date_time")}
    </Typography>

    {/* Toggle */}
    <Box sx={{ display: "flex", justifyContent: "flex-end", mb: 2 }}>
      <Box
        onClick={() => setIs24Hour((prev) => !prev)}
        sx={{
          px: 1.5,
          py: 0.5,
          borderRadius: 2,
          border: "1px solid #ccc",
          fontSize: 12,
          cursor: "pointer",
          "&:hover": { bgcolor: "action.hover" },
        }}
      >
        {is24Hour ? "24H" : "12H"}
      </Box>
    </Box>

    {/* TIME */}
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <AccessTimeIcon fontSize="small" />
      <Typography variant="h4" fontWeight={700}>
        {formatTime()}
      </Typography>
    </Box>

    {/* DATE */}
    <Box sx={{ display: "flex", alignItems: "center", gap: 1, mt: 1 }}>
      <CalendarMonthIcon fontSize="small" />
      <Typography color="text.secondary">
        {formatDate()}
      </Typography>
    </Box>

    {/* TIMEZONE */}
    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
      <PublicIcon fontSize="small" />
      <Typography color="text.secondary">
       {t("timezone_kabul")}
      </Typography>
    </Box>

  </CardContent>
</Card>
      </Box>

      {/* ================= PROFILE ================= */}
      <Card sx={{ mt: 4, boxShadow: 3, borderRadius: 3 }}>
        <CardContent sx={{ p: 3 }}>
          <Typography variant="h6" fontWeight={600}>
            {t("profile")}
          </Typography>

          <Box mt={2} display="flex" flexDirection="column" gap={2}>
            <TextField
              label={t("fullName")}
              value={settings.profile.name}
              onChange={(e) =>
                setSettings({
                  ...settings,
                  profile: {
                    ...settings.profile,
                    name: e.target.value,
                  },
                })
              }
              fullWidth
            />

            <TextField
              label={t("email")}
              value={settings.profile.email}
              onChange={(e) =>
                setSettings({
                  ...settings,
                  profile: {
                    ...settings.profile,
                    email: e.target.value,
                  },
                })
              }
              fullWidth
            />

            <FormControl fullWidth>
              <InputLabel>{t("mainFocus")}</InputLabel>
              <Select
                label={t("mainFocus")}
                value={settings.goal}
                onChange={(e) =>
                  setSettings({
                    ...settings,
                    goal: e.target.value,
                  })
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