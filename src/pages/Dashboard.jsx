import { Box, Grid } from "@mui/material";
import { useContext } from "react";
import { GoalContext } from "../context/GoalContext";

import DashboardCards from "../components/dashboard/DashboardCards";
import CompletionInsight from "../components/dashboard/CompletionInsight";
import RecentActivity from "../components/dashboard/RecentActivity";
import CompletedPreview from "../components/dashboard/CompletedPreview";
import ActiveGoalsList from "../components/ActiveGoalsList";

const Dashboard = () => {
  const { goals } = useContext(GoalContext);

  const completed = goals.filter(g => g.completed);

  return (
    <Box p={3}>
      
      <DashboardCards />

      <Grid container spacing={2} mt={3}>
        
        {/* LEFT SIDE */}
        <Grid size={{ xs: 12, md: 8 }}>
          <ActiveGoalsList goals={goals} />
        </Grid>

        {/* RIGHT SIDE */}
        <Grid size={{ xs: 12, md: 4 }}>
          
          <CompletionInsight 
            total={goals.length} 
            completed={completed.length} 
          />

          <RecentActivity activities={[]} />

          <CompletedPreview completedGoals={completed} />

        </Grid>

      </Grid>

    </Box>
  );
};

export default Dashboard;