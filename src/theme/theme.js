import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#1A3263",
      light: "#4C8C4A",
      dark: "#003300",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#37474F", 
      light: "#62727B",
      dark: "#102027",
      contrastText: "#ffffff",
    },
    background: {
      default: "#F4F6F8", 
      paper: "#FFFFFF",  
    },
    text: {
      primary: "#212121",
      secondary: "#616161",
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
      backgroundColor: "#ffffff",
      backgroundImage: "none",
    },
  },
},

  MuiCard: {
  styleOverrides: {
    root: {
      backgroundColor: "#FFFFFF", 
      backgroundImage: "none", 
      boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
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

export default theme;