import { Box } from "@mui/material";
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

      <Box display="flex" gap={2} mt={3}>
        
        {/* سمت چپ */}
        <Box flex={2}>
          <ActiveGoalsList goals={goals} />
        </Box>

        {/* سمت راست */}
        <Box flex={1}>
          <CompletionInsight 
            total={goals.length} 
            completed={completed.length} 
          />

          <RecentActivity activities={[]} />

          <CompletedPreview completedGoals={completed} />
        </Box>

      </Box>

    </Box>
  );
};

export default Dashboard;