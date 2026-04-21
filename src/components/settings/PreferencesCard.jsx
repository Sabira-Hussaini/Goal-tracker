import {
  Card,
  CardContent,
  Typography,
  Box,
  Switch,
  FormControlLabel,
  RadioGroup,
  Radio,
  Button,
  Divider,
} from "@mui/material";

import { useState, useEffect } from "react";
import { useLanguage } from "../../i18n/useLanguage";

const PreferencesCard = () => {
  const { t } = useLanguage();

  const [reminder, setReminder] = useState(false);
  const [animations, setAnimations] = useState(true);
  const [weekStart, setWeekStart] = useState("monday");

  // load from localStorage
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("preferences"));
    if (saved) {
      setReminder(saved.reminder);
      setAnimations(saved.animations);
      setWeekStart(saved.weekStart);
    }
  }, []);

  // save to localStorage
  useEffect(() => {
    localStorage.setItem(
      "preferences",
      JSON.stringify({ reminder, animations, weekStart })
    );
  }, [reminder, animations, weekStart]);

  // reset data
  const handleReset = () => {
    localStorage.clear();
    window.location.reload();
  };

  return (
    <>
      {/* Preferences Card */}
      <Card
        sx={{
          bgcolor: "background.paper",
          color: "text.primary",
          backgroundImage: "none",
          boxShadow: 3,
          borderRadius: 3,
        }}
      >
        <CardContent>
          <Typography variant="h6" mb={2}>
            {t("preferences")}
          </Typography>

          {/* Reminder */}
          <Box mb={2}>
            <FormControlLabel
              control={
                <Switch
                  checked={reminder}
                  onChange={(e) => setReminder(e.target.checked)}
                />
              }
              label={t("enableReminder")}
            />

            <Typography variant="body2" color="text.secondary" ml={1}>
              {t("reminderDesc")}
            </Typography>
          </Box>

          {/* Animations */}
          <Box mb={2}>
            <FormControlLabel
              control={
                <Switch
                  checked={animations}
                  onChange={(e) => setAnimations(e.target.checked)}
                />
              }
              label={t("enableAnimations")}
            />

            <Typography variant="body2" color="text.secondary" ml={1}>
              {t("animationsDesc")}
            </Typography>
          </Box>

          <Divider sx={{ my: 2 }} />

          {/* Week Start */}
          <Typography variant="subtitle1" mb={1}>
            {t("weekStartsOn")}
          </Typography>

          <RadioGroup
            row
            value={weekStart}
            onChange={(e) => setWeekStart(e.target.value)}
          >
            <FormControlLabel
              value="monday"
              control={<Radio />}
              label={t("monday")}
            />
            <FormControlLabel
              value="sunday"
              control={<Radio />}
              label={t("sunday")}
            />
          </RadioGroup>
        </CardContent>
      </Card>

      {/* Danger Zone */}
      <Card
        sx={{
          mt: 2,
          bgcolor: "background.paper",
          color: "text.primary",
          backgroundImage: "none",
          boxShadow: 3,
          borderRadius: 3,
        }}
      >
        <CardContent>
          <Typography variant="h6" color="error" mb={2}>
            {t("dangerZone")}
          </Typography>

          <Button variant="contained" color="error" onClick={handleReset}>
            {t("resetAllData")}
          </Button>
        </CardContent>
      </Card>
    </>
  );
};

export default PreferencesCard;