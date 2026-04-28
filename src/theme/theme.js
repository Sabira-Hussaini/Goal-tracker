import {
  createTheme
} from "@mui/material/styles";

const getTheme = (mode, language) =>
  createTheme({
    direction: language === "fa" ? "rtl" : "ltr",

    palette: {
      mode,

      primary: {
        main: mode === "light" ? "#1A3263" : "#60A5FA",
        dark: mode === "light" ? "#0f234a" : "#3b82f6",
        contrastText: "#ffffff",
      },

      secondary: {
        main: "#e6eff7",
      },

      background: {
        default: mode === "light" ? "#F4F6F8" : "#0F172A",
        paper: mode === "light" ? "#FFFFFF" : "#1E293B",
      },

      text: {
        primary: mode === "light" ? "#1E1E1E" : "#F8FAFC",
        secondary: mode === "light" ? "#616161" : "#CBD5E1",
        disabled: mode === "light" ? "#9CA3AF" : "#64748B",
      },

      custom: {
        accent: mode === "light" ? "#1A3263" : "#60A5FA",
      },
    },

    typography: {
      fontFamily: "Roboto, sans-serif",
      button: {
        textTransform: "none",
        fontWeight: 500,
      },
    },

    shape: {
      borderRadius: 12,
    },

    components: {
      MuiCard: {
        styleOverrides: {
          root: {
            backgroundImage: "none",
            border: mode === "dark" ?
              "1px solid rgba(255,255,255,0.08)" :
              "none",
            boxShadow: mode === "light" ?
              "0 4px 20px rgba(0,0,0,0.05)" :
              "0 10px 30px rgba(0,0,0,0.35)",
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

      MuiAppBar: {
        styleOverrides: {
          root: {
            boxShadow: "none",
            backgroundColor: mode === "dark" ? "#1E293B" : "#ffffff",
          },
        },
      },

      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 10,
            textTransform: "none",
          },
        },
      },
    },
  });

export default getTheme;