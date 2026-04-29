import { Card, CardContent, Typography, Box } from "@mui/material";
import GoalCard from "../goal/form/GoalCard";
import { useLanguage } from "../../i18n/useLanguage";
import { useContext, useMemo } from "react";
import { GoalContext } from "../../context/GoalContext";

const MAX_ITEMS = 5;

const RecentActivity = ({ activities = [] }) => {
  const { t } = useLanguage();
  const { goals } = useContext(GoalContext);

  const safeGoals = goals || [];

  const recentGoals = useMemo(() => {
    return activities
      .map((event) =>
        safeGoals.find((g) => g.id === event.goalId)
      )
      .filter(Boolean)
      .slice(0, MAX_ITEMS);
  }, [activities, safeGoals]);

  const hasActivities = recentGoals.length > 0;

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
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 1,
              mt: 2,
            }}
          >
            {recentGoals.map((goal) => (
              <Box
                key={goal.id}
                sx={{
                  transform: "scale(0.9)", 
                  transformOrigin: "top left",
                }}
              >
                <GoalCard goal={goal} />
              </Box>
            ))}
          </Box>
        )}
      </CardContent>
    </Card>
  );
};

export default RecentActivity;