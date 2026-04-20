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

const PreferencesCard = () => {
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
          width: "100%",
          bgcolor: "#fff",
          color: "#000",
          boxShadow: "0px 2px 10px rgba(0,0,0,0.1)",
          backgroundImage: "none",
          borderRadius: 3,
        }}
      >
        <CardContent>
          <Typography variant="h6" mb={2}>
            Preferences
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
              label="Enable Daily Reminder"
            />

            <Typography variant="body2" color="text.secondary" ml={1}>
              Receive daily notifications to log your progress
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
              label="Enable Animations"
            />

            <Typography variant="body2" color="text.secondary" ml={1}>
              Smooth animations enhance UI experience
            </Typography>
          </Box>

          <Divider sx={{ my: 2 }} />

          {/* Week Start */}
          <Typography variant="subtitle1" mb={1}>
            Week Starts On
          </Typography>

          <RadioGroup
            row
            value={weekStart}
            onChange={(e) => setWeekStart(e.target.value)}
          >
            <FormControlLabel
              value="monday"
              control={<Radio />}
              label="Monday"
            />
            <FormControlLabel
              value="sunday"
              control={<Radio />}
              label="Sunday"
            />
          </RadioGroup>
        </CardContent>
      </Card>

      {/* Danger Zone */}
      <Card
     sx={{
          width: "100%",
          bgcolor: "#fff",
          color: "#000",
          boxShadow: "0px 2px 10px rgba(0,0,0,0.1)",
          backgroundImage: "none",
          borderRadius: 3,
        }}
      >
        <CardContent>
          <Typography variant="h6" color="error" mb={2}>
            Danger Zone
          </Typography>

          <Button
            variant="contained"
            color="error"
            onClick={handleReset}
          >
            RESET ALL DATA
          </Button>
        </CardContent>
      </Card>
    </>
  );
};

export default PreferencesCard;