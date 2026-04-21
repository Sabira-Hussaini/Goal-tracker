import { Card, CardContent, Typography } from "@mui/material";

const CompletedPreview = ({ completedGoals }) => {
  return (
    <Card sx={{bgcolor: "background.paper",
    color: "text.primary",
    backgroundImage: "none",
    boxShadow: 3,
    }}>
      <CardContent>
        <Typography variant="h6">Completed Preview</Typography>

        {completedGoals.length === 0 ? (
          <Typography color="text.secondary">
            No completed goals yet.
          </Typography>
        ) : (
          completedGoals.slice(0, 3).map((goal) => (
            <Typography key={goal.id}>
              ✔ {goal.title}
            </Typography>
          ))
        )}
      </CardContent>
    </Card>
  );
};

export default CompletedPreview;