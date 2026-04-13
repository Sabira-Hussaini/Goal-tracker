import { Box } from "@mui/material";
import StatCard from "./StatCard";

// Icons
import TrackChangesIcon from "@mui/icons-material/TrackChanges";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";

const DashboardCards = () => {
  return (
    <Box display="flex" gap={2} flexWrap="wrap">
      
      <StatCard
        title="Active Goals"
        value="0"
        subtitle="Currently in progress"
        icon={<TrackChangesIcon />}
        color="#1b5e20"
      />

      <StatCard
        title="Completed"
        value="0"
        subtitle="Finished targets"
        icon={<CheckCircleIcon />}
        color="#2e7d32"
      />

      <StatCard
        title="Current Streak"
        value="0d"
        subtitle="Consecutive days"
        icon={<WhatshotIcon />}
        color="#ef6c00"
      />

      <StatCard
        title="Total XP"
        value="0"
        subtitle="Progress points"
        icon={<EmojiEventsIcon />}
        color="#6a1b9a"
      />

    </Box>
  );
};

export default DashboardCards;