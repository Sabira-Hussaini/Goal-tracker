import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import Box from "@mui/material/Box";


export default function GoalHero() {
  const [userName] = useState("Maryam Mirzada");

  return (
    <Card
      sx={{
        width: "100&",

        backgroundColor: "#e6eff7",
        borderRadius: 3,
        p: { xs: 1, sm: 2, md: 3 },
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <CardContent>
          {/* Welcome Text */}

          {/* Title */}
          <Typography
            sx={{
              color: "#1A3263",
              fontWeight: "bold",
              fontSize: { xs: "24px", md: "36px" },
              mt: 1,
            }}
          >
            All Goals
          </Typography>

          {/* Description */}
          <Typography
            variant="body2"
            sx={{
              mt: 2,
              fontSize: { xs: "13px", md: "15px", width: "30rem" },
              color: "#333",
            }}
          >
            Here you can view and manage all your goals in one place. Track your
            progress, stay organized, and create new goals to keep moving
            forward.
          </Typography>
        </CardContent>
        <CardActions
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            gap: 2,
            p: 2,
          }}
        >
          <Button
            fullWidth
            sx={{
              backgroundColor: "#1A3263",
              color: "white",
              border: "2px solid #1A3263",
              py: 1.2,
              fontSize: "14px",
              px: "5rem",
              borderRadius: "20px",
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
              px: "5rem",
              fontSize: "14px",
              borderRadius: "20px",
            }}
          >
            MANAGEGOAL
          </Button>
        </CardActions>
      </Box>
    </Card>
  );
}
