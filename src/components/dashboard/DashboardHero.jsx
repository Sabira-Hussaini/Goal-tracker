import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useState } from "react";

export default function DashboardHero() {
  const [userName, setUserName] = useState("Maryam Mirzada");
  return (
    <Card sx={{ maxWidth: 800, backgroundColor: "#e6eff7" }}>
      <CardContent>
        <Typography gutterBottom variant="body1" component="div">
          Welcome dear, {userName}
        </Typography>
        <Typography variant="h3" color="primary" sx={{ color: "main" }}>
          Goal Tracker Dashboard
        </Typography>
        <Typography
          variant="body2"
          color="secondary"
          sx={{ marginTop: "10px" }}
        >
          Welcome to Goal Tracker, your personal space to set, manage, and
          achieve your goals. Stay focused, track your progress, and turn your
          plans into real achievements step by step.
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
        
        >
          Share
        </Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
