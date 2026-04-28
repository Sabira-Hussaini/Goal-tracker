import {
  createTheme
} from "@mui/material/styles";

const getTheme = (mode, language) =>
  createTheme({
    direction: language === "fa" ? "rtl" : "ltr",

    palette: {
      mode,

      primary: {
        main: "#1A3263",
        contrastText: "#ffffff",
      },

      secondary: {
        main: "#e6eff7",
      },

      background: {
        default: mode === "light" ? "#F4F6F8" : "#0F172A", // 👈 soft dark
        paper: mode === "light" ? "#FFFFFF" : "#1E293B", // 👈 soft card
      },

      text: {
        primary: mode === "light" ? "#1E1E1E" : "#F1F5F9",
        secondary: mode === "light" ? "#616161" : "#94A3B8",
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
              "1px solid rgba(255,255,255,0.05)" :
              "none",
            boxShadow: mode === "light" ?
              "0 4px 20px rgba(0,0,0,0.05)" :
              "0 10px 30px rgba(0,0,0,0.25)",
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

      MuiTypography: {
        styleOverrides: {
          root: {
            color: mode === "dark" ? "#F1F5F9" : "inherit",
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