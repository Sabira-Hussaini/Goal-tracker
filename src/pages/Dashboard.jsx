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

  // =========================
  // 1. BASIC DERIVED DATA
  // =========================
  const completedGoals = useMemo(
    () => goals.filter((g) => g.completed),
    [goals]
  );

  const activeGoals = useMemo(
    () => goals.filter((g) => !g.completed),
    [goals]
  );

  // =========================
  // 2. XP + STREAK FIRST
  // =========================
  const xp = useMemo(() => calculateXP(events), [events]);

  const streak = useMemo(
    () => calculateStreak(events),
    [events]
  );

  // =========================
  // 3. LEVEL (depends on XP)
  // =========================
  const level = useMemo(() => calculateLevel(xp), [xp]);

  const { progress } = useMemo(
    () => getLevelProgress(xp),
    [xp]
  );

  // =========================
  // 4. STATS OBJECT
  // =========================
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

  // =========================
  // 5. RECENT EVENTS
  // =========================
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
  {/* ================= TOP ROW ================= */}
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

  {/* ================= CARDS ROW ================= */}
  <DashboardCards stats={stats} />

  {/* ================= BOTTOM ROW ================= */}
  <Box
    sx={{
      display: "grid",
      gridTemplateColumns: { xs: "1fr", md: "2fr 1fr" },
      gap: 3,
      alignItems: "start",
    }}
  >
    {/* LEFT */}
    <ActiveGoalsList goals={activeGoals} />

    {/* RIGHT */}
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
      <CompletionInsight
        total={stats.total}
        completed={stats.completed}
      />

      <RecentActivity activities={recentEvents} />

      <CompletedPreview completedGoals={completedGoals} />
    </Box>
  </Box>
</Box>
  );
};

export default Dashboard;