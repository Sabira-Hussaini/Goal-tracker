import { Card, CardContent, Typography } from "@mui/material";
import { useLanguage } from "../../i18n/useLanguage";
import { useContext } from "react";
import { GoalContext } from "../../context/GoalContext";

const MAX_PREVIEW_ITEMS = 3;

const CompletedPreview = () => {
  const { t } = useLanguage();
  const { goals } = useContext(GoalContext);
  const completedGoals = (goals || []).filter(
    (g) => (g.status || "").toLowerCase() === "completed"
  );

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