import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";

export default function DashboardHero() {
  const [userName] = useState("Maryam Mirzada");
  const navigate = useNavigate();

  return (
    <Card
      sx={{
        width: "93%",
        maxWidth: 900,
        backgroundColor: "#e6eff7",
        borderRadius: 3,
        p: { xs: 1, sm: 2, md: 3 },
      }}
    >
      <CardContent>
        {/* Welcome Text */}
        <Typography
          variant="body1"
          sx={{
            fontSize: { xs: "14px", md: "16px" },
          }}
        >
          Welcome dear, {userName}
        </Typography>

        {/* Title */}
        <Typography
          sx={{
            color: "#1A3263",
            fontWeight: "bold",
            fontSize: { xs: "24px", md: "36px" },
            mt: 1,
          }}
        >
          Goal Tracker Dashboard
        </Typography>

        {/* Description */}
        <Typography
          variant="body2"
          sx={{
            mt: 2,
            fontSize: { xs: "13px", md: "15px" },
            color: "#333",
          }}
        >
          Welcome to Goal Tracker, your personal space to set, manage, and
          achieve your goals. Stay focused, track your progress, and turn your
          plans into real achievements step by step.
        </Typography>
      </CardContent>

      {/* Buttons */}
      <CardActions
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          gap: 2,
          p: 2,
        }}
      >
        <Button
          onClick={() => navigate("/form")}
          fullWidth
          sx={{
            backgroundColor: "#1A3263",
            color: "white",
            border: "2px solid #1A3263",
            py: 1.2,
            fontSize: "14px",
            "&:hover": {
              backgroundColor: "#13264d",
            },
          }}
        >
          NEW GOAL
        </Button>

        <Button
          fullWidth
          sx={{
            border: "2px solid #1A3263",
            color: "#000",
            py: 1.2,
            fontSize: "14px",
          }}
        >
          MANAGE GOAL
        </Button>
      </CardActions>
    </Card>
  );
}
