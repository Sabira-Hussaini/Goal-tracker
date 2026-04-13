import { Card, CardContent, Typography } from "@mui/material";

const ActiveGoalsList = ({ goals }) => {
  const activeGoals = goals.filter(g => !g.completed);

  return (
    <Card sx={{ mt: 2 }}>
      <CardContent>
        <Typography variant="h6">Active Goals</Typography>

        {activeGoals.length === 0 ? (
          <Typography color="text.secondary">
            No active goals yet. Create one!
          </Typography>
        ) : (
          activeGoals.map(goal => (
            <Typography key={goal.id}>
              • {goal.title}
            </Typography>
          ))
        )}
      </CardContent>
    </Card>
  );
};

export default ActiveGoalsList;