import { Grid } from "@mui/material";
import StatCard from "./StatCard";

import TrackChangesIcon from "@mui/icons-material/TrackChanges";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";

import { useLanguage } from "../../i18n/useLanguage";

const DashboardCards = () => {
  const { t } = useLanguage();

  return (
    <Grid container spacing={2}>
      
      <Grid size={{ xs: 12, sm: 6, md: 3 }}>
        <StatCard
          title={t("activeGoals")}
          value="0"
          subtitle={t("currentlyInProgress")}
          icon={<TrackChangesIcon />}
          color="#1b5e20"
        />
      </Grid>

      <Grid size={{ xs: 12, sm: 6, md: 3 }}>
        <StatCard
          title={t("completed")}
          value="0"
          subtitle={t("finishedTargets")}
          icon={<CheckCircleIcon />}
          color="#2e7d32"
        />
      </Grid>

      <Grid size={{ xs: 12, sm: 6, md: 3 }}>
        <StatCard
          title={t("currentStreak")}
          value="0d"
          subtitle={t("consecutiveDays")}
          icon={<WhatshotIcon />}
          color="#ef6c00"
        />
      </Grid>

      <Grid size={{ xs: 12, sm: 6, md: 3 }}>
        <StatCard
          title={t("totalXp")}
          value="0"
          subtitle={t("progressPoints")}
          icon={<EmojiEventsIcon />}
          color="#6a1b9a"
        />
      </Grid>

    </Grid>
  );
};

export default DashboardCards;