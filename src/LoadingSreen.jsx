import { Box, CircularProgress, Typography } from "@mui/material";
import { keyframes } from "@mui/system";
import logo from "./assets/logo.jpeg";

/* 🔥 Animations */
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
`;

const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-6px); }
  100% { transform: translateY(0px); }
`;

export default function LoadingScreen() {
  return (
    <Box
      sx={{
        height: "100vh",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",

        /* 🎨 خیلی تمیز و حرفه‌ای */
        background: "#f4f7fb",
      }}
    >
      {/* 💎 Card */}
      <Box
        sx={{
          width: 320,
          p: 4,
          borderRadius: 4,
          textAlign: "center",

          /* Glass Effect */
          backdropFilter: "blur(10px)",
          background: "rgba(255,255,255,0.7)",
          boxShadow: "0 20px 60px rgba(0,0,0,0.08)",

          animation: `${fadeIn} 0.6s ease`,
        }}
      >
        {/* 🔵 Logo */}
        <Box
          component="img"
          src={logo}
          alt="logo"
          sx={{
            width: 70,
            height: 70,
            borderRadius: 3,
            mb: 2,
            mx: "auto",
            display: "block",
            animation: `${float} 3s ease-in-out infinite`,
          }}
        />

        {/* 🏷 Title */}
        <Typography
          variant="h6"
          sx={{
            fontWeight: "bold",
            color: "#1a237e",
            mb: 2,
          }}
        >
          Goal Tracker
        </Typography>

        {/* 🔄 Loader */}
        <CircularProgress
          size={45}
          thickness={4}
          sx={{
            color: "#1976d2",
          }}
        />

        {/* ✨ Text */}
        <Typography
          sx={{
            mt: 2,
            fontSize: 14,
            color: "#555",
          }}
        >
          Loading your dashboard...
        </Typography>
      </Box>
    </Box>
  );
}