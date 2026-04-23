import { Card, CardContent, Typography } from "@mui/material";
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
        
        bgcolor: "background.paper",
        color: "text.primary",
        backgroundImage: "none",
        boxShadow: 3,
      }}
    >
      <CardContent>
        <Typography variant="h6">
          {t("recentActivity")}
        </Typography>

        {!hasActivities ? (
          <Typography color="text.secondary">
            {t("noActivity")}
          </Typography>
        ) : (
          recentActivities.map((activity) => (
            <Typography key={activity.id}>
              {activity.text}
            </Typography>
          ))
        )}
      </CardContent>
    </Card>
  );
};

export default RecentActivity;