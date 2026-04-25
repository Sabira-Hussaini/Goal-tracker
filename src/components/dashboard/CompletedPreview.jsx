import { Card, CardContent, Typography } from "@mui/material";
import { useLanguage } from "../../i18n/useLanguage";

const MAX_PREVIEW_ITEMS = 3;

const CompletedPreview = ({ completedGoals = [] }) => {
  const { t } = useLanguage();

  const hasCompletedGoals = completedGoals.length > 0;

  const previewGoals = hasCompletedGoals
    ? completedGoals.slice(0, MAX_PREVIEW_ITEMS)
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
          {t("completedPreview")}
        </Typography>

        {!hasCompletedGoals ? (
          <Typography color="text.secondary">
            {t("noCompletedGoals")}
          </Typography>
        ) : (
          previewGoals.map((goal) => (
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