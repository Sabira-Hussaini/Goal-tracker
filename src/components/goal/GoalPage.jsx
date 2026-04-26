import { useState, useEffect } from "react";
import { Container, Typography, Paper } from "@mui/material";
import GoalList from "./GoalList";

export default function GoalPage() {
  const [goals, setGoals] = useState([]);

  // بارگذاری اهداف از localStorage هر بار که صفحه باز می‌شود
  useEffect(() => {
    const savedGoals = JSON.parse(localStorage.getItem("goals") || "[]");
    console.log("📖 بارگذاری از localStorage:", savedGoals);
    setGoals(savedGoals);
  }, []); 
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h4" gutterBottom sx={{ fontWeight: "bold", mb: 3 }}>
        🎯 My Goals ({goals.length})
      </Typography>

      <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
        <Typography variant="h6" gutterBottom>
          ✨ لیست اهداف شما
        </Typography>
      </Paper>

      <GoalList goals={goals} />
    </Container>
  );
}
