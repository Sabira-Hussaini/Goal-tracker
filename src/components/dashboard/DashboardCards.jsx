import { Box } from "@mui/material";
import StatCard from "./StatCard";
import TrackChangesIcon from "@mui/icons-material/TrackChanges";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import MilitaryTechIcon from "@mui/icons-material/MilitaryTech";

import { useLanguage } from "../../i18n/useLanguage";

const DashboardCards = ({ stats }) => {
  const { t } = useLanguage();

  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
        gap: 2,
        width: "100%",
      }}
    >
      {/* ACTIVE GOALS */}
      <StatCard
        title={t("activeGoals")}
        value={stats.active}
        subtitle={t("currentlyInProgress")}
        icon={<TrackChangesIcon />}
        color="#1b5e20"
      />

      {/* COMPLETED */}
      <StatCard
        title={t("completed")}
        value={stats.completed}
        subtitle={t("finishedTargets")}
        icon={<CheckCircleIcon />}
        color="#2e7d32"
      />

      {/* STREAK */}
      <StatCard
        title={t("currentStreak")}
        value={t("streak_days", { value: stats.streak })}
        subtitle={t("consecutiveDays")}
        icon={<WhatshotIcon />}
        color="#ef6c00"
      />

      {/* XP */}
      <StatCard
        title={t("totalXp")}
        value={stats.xp}
        subtitle={t("progressPoints")}
        icon={<EmojiEventsIcon />}
        color="#6a1b9a"
      />

      {/* LEVEL */}
      <StatCard
        title={t("titles")}
        value={t("level", { value: stats.level })}
        subtitle={t("basedOnXp")}
        icon={<MilitaryTechIcon />}
        color="#1565c0"
      />
    </Box>
  );
};

export default DashboardCards;