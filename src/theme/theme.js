import { createTheme } from "@mui/material/styles";

const getTheme = (mode, language) =>
  createTheme({
    direction: language === "fa" ? "rtl" : "ltr",
    palette: {
      mode: mode, // ✅ dynamic now

      primary: {
        main: "#1A3263",
        light: "#4C8C4A",
        dark: "#003300",
        contrastText: "#ffffff",
      },

      secondary: {
        main: "#e6eff7",
        light: "#62727B",
        dark: "#102027",
        contrastText: "#ffffff",
      },

      background: {
        default: mode === "light" ? "#F4F6F8" : "#121212",
        paper: mode === "light" ? "#FFFFFF" : "#1E1E1E",
      },

      text: {
        primary: mode === "light" ? "#212121" : "#E0E0E0",
        secondary: mode === "light" ? "#616161" : "#A0A0A0",
      },
    },

    typography: {
      fontFamily: "Roboto, sans-serif",
      h1: { fontWeight: 700 },
      h2: { fontWeight: 600 },
      h3: { fontWeight: 600 },
      button: {
        textTransform: "none",
        fontWeight: 500,
      },
    },

    shape: {
      borderRadius: 12,
    },

    spacing: 8,

    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 10,
            padding: "8px 16px",
          },
        },
      },

      MuiPaper: {
        styleOverrides: {
          root: {
            backgroundImage: "none",
          },
        },
      },

      MuiCard: {
        styleOverrides: {
          root: {
            backgroundImage: "none",
            boxShadow:
              mode === "light"
                ? "0 4px 20px rgba(0,0,0,0.05)"
                : "0 4px 20px rgba(0,0,0,0.6)",
          },
        },
      },

      MuiToggleButton: {
        styleOverrides: {
          root: {
            textTransform: "none",
            borderRadius: 8,
            "&.Mui-selected": {
              backgroundColor: "#1A3263",
              color: "#fff",
              "&:hover": {
                backgroundColor: "#16264a",
              },
            },
          },
        },
      },

      MuiAppBar: {
        styleOverrides: {
          root: {
            boxShadow: "none",
          },
        },
      },
    },
  });

export default getTheme;