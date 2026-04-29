import DashboardHero from "../components/dashboard/DashboardHero";
import DashboardSuccess from "../components/dashboard/DashboardSuccess";
import { Box } from "@mui/material";
import { useContext, useMemo } from "react";
import { GoalContext } from "../context/GoalContext";

import { calculateXP } from "../utils/xp";
import { calculateStreak } from "../utils/streak";
import { calculateLevel, getLevelProgress } from "../utils/level";

import DashboardCards from "../components/dashboard/DashboardCards";
import CompletionInsight from "../components/dashboard/CompletionInsight";
import RecentActivity from "../components/dashboard/RecentActivity";
import CompletedPreview from "../components/dashboard/CompletedPreview";
import ActiveGoalsList from "../components/ActiveGoalsList";

const Dashboard = () => {
  const { goals = [], events = [] } = useContext(GoalContext);
<<<<<<< HEAD

=======
>>>>>>> 6ad47bbda7416a60b4a3fdae3db106dfe22713dc
  const completedGoals = useMemo(
    () =>
      goals.filter(
        (g) => (g.status || "").toLowerCase() === "completed"
      ),
    [goals]
  );

  const activeGoals = useMemo(
    () =>
      goals.filter(
        (g) => (g.status || "active").toLowerCase() === "active"
      ),
    [goals]
  );

  const xp = useMemo(() => calculateXP(events), [events]);

  const streak = useMemo(() => calculateStreak(events), [events]);

  const level = useMemo(() => calculateLevel(xp), [xp]);

  const { progress } = useMemo(
    () => getLevelProgress(xp),
    [xp]
  );

  const stats = useMemo(() => {
    const total = goals.length;
    const completed = completedGoals.length;

    const completionRate =
      total === 0 ? 0 : (completed / total) * 100;

    return {
      total,
      completed,
      active: activeGoals.length,
      completionRate,
      xp,
      streak,
      level,
      progress,
    };
  }, [
    goals,
    completedGoals,
    activeGoals,
    xp,
    streak,
    level,
    progress,
  ]);

  const recentEvents = useMemo(() => {
    return [...events].slice(-5).reverse();
  }, [events]);

  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateRows: "auto auto 1fr",
        gap: 3,
        width: "100%",
      }}
    >
      {/* HERO */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "2fr 1fr" },
          gap: 3,
        }}
      >
        <DashboardHero />
        <DashboardSuccess />
      </Box>

      {/* STATS */}
      <DashboardCards stats={stats} />

      {/* MAIN SECTION (FIXED LAYOUT) */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "2fr 1fr" },
          gap: 3,
          alignItems: "start",
        }}
      >
        {/* LEFT SIDE */}
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <ActiveGoalsList goals={activeGoals} />

          {/* 🔥 MOVED HERE */}
          <RecentActivity activities={recentEvents} />
        </Box>

        {/* RIGHT SIDE */}
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <CompletionInsight
            total={stats.total}
            completed={stats.completed}
          />

          <CompletedPreview completedGoals={completedGoals} />
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;