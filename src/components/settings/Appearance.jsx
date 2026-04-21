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
import { useContext } from "react";
import { SettingsContext } from "../../context/SettingsContext";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

const Appearance = () => {
  const { settings, setSettings } = useContext(SettingsContext);

  // Theme toggle
  const toggleTheme = () => {
    setSettings({
      ...settings,
      themeMode: settings.themeMode === "light" ? "dark" : "light",
    });
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        width: "100%",
        overflowX: "hidden",
        p: { xs: 1, sm: 2, md: 3 },
      }}
    >
      {/* Title */}
      <Typography variant="h4" mb={1}>
        Settings
      </Typography>

      <Typography color="text.secondary" mb={3}>
        Personalize language, theme, and experience preferences.
      </Typography>

      {/* APPEARANCE CARD */}
      <Card
       
  sx={{
    bgcolor: "background.paper",
    color: "text.primary",
    backgroundImage: "none",
    boxShadow: 3,
    borderRadius: 3,
  }}
>
       
        <CardContent sx={{ p: 3 }}>
          <Typography variant="h6" fontWeight={600} mb={3}>
            Appearance
          </Typography>

          {/* Language */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mb: 3,
            }}
          >
            <Typography>Language</Typography>

            <ToggleButtonGroup
              exclusive
              size="small"
              value={settings.language}
              onChange={(e, val) =>
                val &&
                setSettings({
                  ...settings,
                  language: val,
                })
              }
            >
              <ToggleButton value="fa">FA</ToggleButton>
              <ToggleButton value="en">EN</ToggleButton>
            </ToggleButtonGroup>
          </Box>

          {/* Theme */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography>Theme</Typography>

            <IconButton
              onClick={toggleTheme}
              sx={{
                
                "&:hover": { bgcolor: "#e0e0e0" },
              }}
            >
              {settings.themeMode === "light" ? (
                <DarkModeIcon />
              ) : (
                <LightModeIcon />
              )}
            </IconButton>
          </Box>
        </CardContent>
      </Card>

      {/* PROFILE CARD */}
      <Card
   
  sx={{
    bgcolor: "background.paper",
    color: "text.primary",
    backgroundImage: "none",
    boxShadow: 3,
    borderRadius: 3,
    mt:4,
  }}
>
      
        <CardContent sx={{ p: 3 }}>
          <Typography variant="h6" fontWeight={600}>
            Profile
          </Typography>

          <Box mt={2} display="flex" flexDirection="column" gap={2}>
            <TextField
              label="Full Name"
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
              label="Email"
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

            {/* Goal Select */}
            <FormControl fullWidth>
              <InputLabel>Main Focus</InputLabel>

              <Select
                label="Main Focus"
                value={settings.goal}
                onChange={(e) =>
                  setSettings({
                    ...settings,
                    goal: e.target.value,
                  })
                }
              >
                <MenuItem value="study">📚 Study</MenuItem>
                <MenuItem value="work">💼 Work</MenuItem>
                <MenuItem value="fitness">🏃 Fitness</MenuItem>
                <MenuItem value="personal">🧠 Personal Growth</MenuItem>
              </Select>
            </FormControl>

            {/* Save Button */}
            <Box display="flex" justifyContent="flex-end">
              <Button variant="contained">
                Save Profile
              </Button>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Appearance;