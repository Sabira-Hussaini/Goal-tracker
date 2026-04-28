import { Box, Typography } from "@mui/material";
import { useLanguage } from "../../../i18n/useLanguage";

const GoalHero = () => {
  const { t } = useLanguage();

  return (
    <Box>
      <Typography variant="h3" sx={{ marginTop: "18px" , fontWeight : 'bold' , color : 'primary.main'  }}>
        {t("createNewGoal")}
      </Typography>

      <Typography variant="body1">
        {t("createNewGoalDesc")}
      </Typography>
    </Box>
  );
};

export default GoalHero;