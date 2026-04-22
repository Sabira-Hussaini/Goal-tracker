import { Box, Typography } from "@mui/material";
import { useLanguage } from "../../../i18n/useLanguage";

const GoalHero = () => {
  const { t } = useLanguage();

  return (
    <Box>
      <Typography variant="h3" color="primary" sx={{ marginTop: "18px" }}>
        {t("createNewGoal")}
      </Typography>

      <Typography variant="body1">
        {t("createNewGoalDesc")}
      </Typography>
    </Box>
  );
};

export default GoalHero;