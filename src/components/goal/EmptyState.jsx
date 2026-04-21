import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "../../i18n/useLanguage";

const EmptyState = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();

  return (
    <Box
      textAlign="center"
      py={6}
      sx={{
        bgcolor: "background.paper",
        borderRadius: 3,
      }}
    >
      <Typography variant="h6">
        {t("noGoalsFound")}
      </Typography>

      <Typography color="text.secondary" mt={1}>
        {t("changeFiltersOrCreateGoal")}
      </Typography>

      <Button
        variant="contained"
        sx={{ mt: 2 }}
        onClick={() => navigate("/form")}
      >
        {t("newGoal")}
      </Button>
    </Box>
  );
};

export default EmptyState;