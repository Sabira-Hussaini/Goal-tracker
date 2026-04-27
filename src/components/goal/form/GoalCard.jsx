import { Card, CardContent, Typography, Chip, Box, Button, Stack } from "@mui/material";
import { useContext } from "react";
import { GoalContext } from "../../../context/GoalContext";

const getPriorityColor = (priority) => {
  if (priority === "High") return "error";
  if (priority === "Medium") return "warning";
  return "success";
};

export default function GoalCard({ goal }) {
  const { updateGoalStatus } = useContext(GoalContext);

  return (
    <Card
      sx={{
        height: "100%",
        transition: "0.2s",
        "&:hover": {
          transform: "translateY(-4px)",
          boxShadow: 4,
        },
      }}
    >
      <CardContent>
        {/* HEADER */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 1,
          }}
        >
          <Typography variant="h6" fontWeight="bold">
            {goal.title}
          </Typography>

          <Chip
            label={goal.priority}
            size="small"
            color={getPriorityColor(goal.priority)}
          />
        </Box>

        {/* CATEGORY */}
        <Typography variant="body2" color="text.secondary">
          📂 {goal.category}
        </Typography>

        {/* TARGET */}
        <Typography variant="body2" sx={{ mt: 1 }}>
          🎯 {goal.target} {goal.session}
        </Typography>

        {/* DATE */}
        <Typography
          variant="caption"
          color="text.secondary"
          sx={{ mt: 1, display: "block" }}
        >
          📅 {goal.startDate} → {goal.endDate}
        </Typography>

        {/* 🔥 STATUS */}
        <Typography
          sx={{
            mt: 1,
            fontWeight: "bold",
            color:
              goal.status === "completed"
                ? "green"
                : goal.status === "paused"
                ? "orange"
                : "blue",
          }}
        >
          {goal.status}
        </Typography>

        {/* 🔥 ACTION BUTTONS (NO UI CHANGE, ONLY ADDITION) */}
        <Box sx={{ mt: 2 }}>
          <Stack direction="row" spacing={1}>

            <Button
              size="small"
              variant="contained"
              color="primary"
              onClick={() => updateGoalStatus(goal.id, "active")}
            >
              Active
            </Button>

            <Button
              size="small"
              variant="contained"
              color="warning"
              onClick={() => updateGoalStatus(goal.id, "paused")}
            >
              Pause
            </Button>

            <Button
              size="small"
              variant="contained"
              color="success"
              onClick={() => updateGoalStatus(goal.id, "completed")}
            >
              Complete
            </Button>

          </Stack>
        </Box>

      </CardContent>
    </Card>
  );
}