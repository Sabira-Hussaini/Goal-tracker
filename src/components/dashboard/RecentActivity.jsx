import { Card, CardContent, Typography } from "@mui/material";

const RecentActivity = ({ activities }) => {
  return (
    <Card sx={{ mb: 2,
      bgcolor: "background.paper",
    color: "text.primary",
    backgroundImage: "none",
    boxShadow: 3,
   
     }}>
      <CardContent>
        <Typography variant="h6">Recent Activity</Typography>

        {activities.length === 0 ? (
          <Typography color="text.secondary">
            No activity yet.
          </Typography>
        ) : (
          activities.map((a, i) => (
            <Typography key={i}>{a}</Typography>
          ))
        )}
      </CardContent>
    </Card>
  );
};

export default RecentActivity;