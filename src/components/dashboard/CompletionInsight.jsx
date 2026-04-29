import { Card, CardContent, Typography, LinearProgress } from "@mui/material";
import { useLanguage } from "../../i18n/useLanguage";
import { useContext } from "react";
import { GoalContext } from "../../context/GoalContext";

const CompletionInsight = () => {
  const { t } = useLanguage();
  const { goals } = useContext(GoalContext);

  const safeGoals = goals || [];

  const total = safeGoals.length;

  const completed = safeGoals.filter(
    (g) => (g.status || "").toLowerCase() === "completed"
  ).length;

  const percent = total === 0 ? 0 : (completed / total) * 100;

  return (
    <Card>
      <CardContent>
        <Typography variant="h6">
          {t("completionInsight")}
        </Typography>

        <Typography variant="h4" mt={1}>
          {percent.toFixed(0)}%
        </Typography>

        <Typography variant="body2" color="text.secondary">
          {t("completedFrom")
            .replace("{completed}", completed)
            .replace("{total}", total)}
        </Typography>

        <LinearProgress
          variant="determinate"
          value={percent}
          sx={{ mt: 2 }}
        />
      </CardContent>
    </Card>
  );
};

export default CompletionInsight;