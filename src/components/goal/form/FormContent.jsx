import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import RequiredInput from "./RequiredInput";
import { useLanguage } from "../../../i18n/useLanguage";
import { useContext } from "react";
import { GoalContext } from "../../../context/GoalContext";
import { CategoryContext } from "../../../context/CategoryContext";

export default function FormContent() {
  const { t } = useLanguage();
  const { addGoal } = useContext(GoalContext);
  const { addGoalToCategory } = useContext(CategoryContext);

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
        marginTop: "25px",
        backgroundColor: "#e6eff7",
        borderRadius: 1,
      }}
    >
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          color="primary"
          sx={{ fontWeight: "bold" }}
        >
          {t("newGoal")}
        </Typography>

        <Typography variant="body2">
          {t("createGoalDesc")}
        </Typography>
      </CardContent>

      <Card sx={{ maxWidth: "100%", backgroundColor: "white" }}>
        <CardContent>
          <RequiredInput onAddGoal={handleAddGoal} />
        </CardContent>
      </Card>
    </Card>
  );
}