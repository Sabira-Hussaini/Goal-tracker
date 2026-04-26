import { Card, CardContent, Typography, Box } from "@mui/material";
import GoalCard from "../goal/form/GoalCard";
import { useLanguage } from "../../i18n/useLanguage";

const MAX_ITEMS = 5;

const RecentActivity = ({ activities = [] }) => {
  const { t } = useLanguage();

  const hasActivities = activities.length > 0;

  const recentActivities = hasActivities
    ? activities.slice(0, MAX_ITEMS)
    : [];

  return (
    <Card
      sx={{
        mb: 2,
        bgcolor: "background.paper",
        color: "text.primary",
        backgroundImage: "none",
        boxShadow: 3,
      }}
    >
      <CardContent>
        <Typography variant="h6">Recent Activity</Typography>

        {!hasActivities ? (
          <Typography color="text.secondary">
            {t("noActivity")}
          </Typography>
        ) : (
          <Box className="grid grid-cols-2 gap-4 mt-3">
            {recentActivities.map((goal, index) => (
              <GoalCard key={index} goal={goal} />
            ))}
          </Box>
        )}
      </CardContent>
    </Card>
  );
};

export default RecentActivity;