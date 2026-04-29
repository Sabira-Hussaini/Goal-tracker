import { Box, CircularProgress, Typography, useTheme } from "@mui/material";
import { keyframes } from "@mui/system";

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
`;

const pulse = keyframes`
  0% { transform: scale(1); opacity: 0.8; }
  50% { transform: scale(1.05); opacity: 1; }
  100% { transform: scale(1); opacity: 0.8; }
`;

export default function LoadingScreen() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        height: "100vh",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",

        backgroundColor: theme.palette.background.default,
      }}
    >      <Box
        sx={{
          width: 340,
          p: 5,
          borderRadius: 4,
          textAlign: "center",
          backgroundColor: theme.palette.background.paper,
          border: `1px solid ${theme.palette.divider}`,
          boxShadow: theme.shadows[3],

          animation: `${fadeIn} 0.6s ease`,
        }}
      >
        <Box
          sx={{
            width: 70,
            height: 70,
            mx: "auto",
            mb: 2,
            borderRadius: "50%",
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.primary.contrastText,

            display: "flex",
            alignItems: "center",
            justifyContent: "center",

            fontWeight: "bold",
            fontSize: 20,

            animation: `${pulse} 2s infinite ease-in-out`,
          }}
        >
          GT
        </Box>
        <Typography
          variant="h6"
          sx={{
            fontWeight: 700,
            color: theme.palette.text.primary,
            mb: 1,
          }}
        >
          Goal Tracker
        </Typography>
        <Typography
          sx={{
            fontSize: 14,
            color: theme.palette.text.secondary,
            mb: 3,
          }}
        >
          Preparing your dashboard...
        </Typography>
        <CircularProgress
          size={40}
          thickness={4}
          sx={{
            color: theme.palette.primary.main,
          }}
        />
      </Box>
    </Box>
  );
}
