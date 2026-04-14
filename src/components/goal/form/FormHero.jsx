import { Box, Typography } from "@mui/material";
const GoalHero = () => {
  return (
    <Box>
      <Typography variant="h3" color="primary" sx={{ marginTop: "18px" }}>
        Create New Goal
      </Typography>
      <Typography variant="body1">
        Create a new goal and start tracking your progress. Stay focused and
        achieve your objectives step by step.
      </Typography>
    </Box>
  );
};
export default GoalHero;
