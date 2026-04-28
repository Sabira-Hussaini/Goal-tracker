import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import RequiredInput from "./RequiredInput";
import { useLanguage } from "../../../i18n/useLanguage";
import { useContext } from "react";
import { GoalContext } from "../../../context/GoalContext";
import { CategoryContext } from "../../../context/CategoryContext";
import { useTheme } from "@mui/material";

export default function FormContent() {
  const { t } = useLanguage();
  const { addGoal } = useContext(GoalContext);
  const { addGoalToCategory } = useContext(CategoryContext);
  const theme = useTheme();

  const handleAddGoal = (newGoal) => {
    // 1. global goals list
    addGoal(newGoal);

    // 2. connect to category
    if (newGoal?.category) {
      addGoalToCategory(newGoal.category, newGoal);
    }
  };

  return (
    <Card
      sx={{
        maxWidth: "100%",
        mt: 3,
        bgcolor: "background.paper",
        borderRadius: 1,
        border: (theme) => `1px solid ${theme.palette.divider}`,
        boxShadow: (theme) => theme.shadows[1],
        backgroundColor:
          theme.palette.mode === "dark"
            ? theme.palette.background.paper
            : theme.palette.secondary.main,

        color: theme.palette.text.primary,
      }}
    >
      <CardContent>
        {/* TITLE */}
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{
            fontWeight: "bold",
            color: "primary.main",
          }}
        >
          {t("newGoal")}
        </Typography>

        {/* DESCRIPTION */}
        <Typography
          variant="body2"
          sx={{
            color: "text.secondary",
          }}
        >
          {t("createGoalDesc")}
        </Typography>
      </CardContent>

      <Card
        sx={{
          maxWidth: "100%",
          bgcolor: "background.paper",
          border: (theme) => `1px solid ${theme.palette.divider}`,
          boxShadow: (theme) => theme.shadows[1],
          borderRadius: 2,
        }}
      >
        <CardContent>
          <RequiredInput onAddGoal={handleAddGoal} />
        </CardContent>
      </Card>
    </Card>
  );
}