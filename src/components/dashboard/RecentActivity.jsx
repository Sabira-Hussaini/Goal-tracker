import { Card, CardContent, Typography } from "@mui/material";
import { useLanguage } from "../../i18n/useLanguage";

const RecentActivity = ({ activities }) => {
  const { t } = useLanguage();

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
        <Typography variant="h6">
          {t("recentActivity")}
        </Typography>

        {activities.length === 0 ? (
          <Typography color="text.secondary">
            {t("noActivity")}
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