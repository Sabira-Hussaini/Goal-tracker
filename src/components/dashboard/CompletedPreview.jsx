import { Card, CardContent, Typography } from "@mui/material";
import { useLanguage } from "../../i18n/useLanguage";

const CompletedPreview = ({ completedGoals }) => {
  const { t } = useLanguage();

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
          {t("completedPreview")}
        </Typography>

        {completedGoals.length === 0 ? (
          <Typography color="text.secondary">
            {t("noCompletedGoals")}
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