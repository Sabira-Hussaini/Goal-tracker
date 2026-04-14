import { Box } from "@mui/material";
import GoalHero from "../components/goal/GoalHero";
import ShowProgress from "../components/goal/ShowProgress";
import Form from "../components/goal/form/Form";

const Goals = () => {
  return (
    <Box>
      <GoalHero />
      <ShowProgress />
    </Box>
  );
};

export default Goals;
