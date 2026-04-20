import DashboardHero from "../components/dashboard/DashboardHero";
import DashboardSuccess from "../components/dashboard/DashboardSuccess";
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

  const completed = goals.filter((g) => g.completed);

  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: { xs: "1fr", md: "2fr 1fr" },
        gap: 3,
        width: "100%",
        alignItems: "start",
      }}
    >
      {/* LEFT COLUMN */}
      <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
        <DashboardHero />
        <DashboardCards />
        <ActiveGoalsList goals={goals} />
      </Box>

      {/* RIGHT COLUMN */}
      <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
        <DashboardSuccess />

        <CompletionInsight
          total={goals.length}
          completed={completed.length}
        />

        <RecentActivity activities={[]} />

        <CompletedPreview completedGoals={completed} />
      </Box>
    </Box>
  );
};

export default Dashboard;