import { Card, CardContent, Typography } from "@mui/material";
import { useLanguage } from "../i18n/useLanguage";

const ActiveGoalsList = ({ goals }) => {
  const { t } = useLanguage();

  const activeGoals = goals.filter((g) => !g.completed);

  return (
    <Card >
      <CardContent>
        <Typography variant="h6">
          {t("activeGoals")}
        </Typography>

        {activeGoals.length === 0 ? (
          <Typography color="text.secondary">
            {t("noActiveGoals")}
          </Typography>
        ) : (
          activeGoals.map((goal) => (
            <Typography key={goal.id}>
              • {goal.title}
            </Typography>
          ))
        )}
      </CardContent>
    </Card>
  );
};

export default ActiveGoalsList;