import { Card, CardContent, Typography, Box } from "@mui/material";
import GoalCard from "../goal/form/GoalCard"

const RecentActivity = ({ activities = [] }) => {
  return (
    <Card sx={{ mb: 2 }}>
      <CardContent>
        <Typography variant="h6">Recent Activity</Typography>

        {activities.length === 0 ? (
          <Typography color="text.secondary">No Activity</Typography>
        ) : (
          <Box className="grid grid-cols-2 gap-4 mt-3">
            {activities.map((goal, index) => (
              <GoalCard key={index} goal={goal} />
            ))}
          </Box>
        )}
      </CardContent>
    </Card>
  );
};

export default RecentActivity;
