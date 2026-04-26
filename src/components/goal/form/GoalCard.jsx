import { Card, CardContent, Typography, Chip, Box } from "@mui/material";

const getPriorityColor = (priority) => {
  if (priority === "High") return "error";
  if (priority === "Medium") return "warning";
  return "success";
};

export default function GoalCard({ goal }) {
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
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 1,
          }}
        >
          <Typography
            variant="h6"
            sx={{
              fontWeight: "bold",
            }}
          >
            {" "}
            {goal.title}{" "}
          </Typography>{" "}
          <Chip
            label={goal.priority}
            size="small"
            color={getPriorityColor(goal.priority)}
          />{" "}
        </Box>{" "}
        <Typography variant="body2" color="text.secondary">
          {" "}
          📂{goal.category}{" "}
        </Typography>{" "}
        <Typography
          variant="body2"
          sx={{
            mt: 1,
          }}
        >
          {" "}
          🎯{goal.target} {goal.session}{" "}
        </Typography>{" "}
        <Typography
          variant="caption"
          color="text.secondary"
          sx={{
            mt: 1,
            display: "block",
          }}
        >
          {" "}
          📅{goal.startDate}→ {goal.endDate}{" "}
        </Typography>{" "}
      </CardContent>{" "}
    </Card>
  );
}
