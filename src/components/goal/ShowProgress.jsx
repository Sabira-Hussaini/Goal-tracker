import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { useContext } from "react";
import { Card, Typography } from "@mui/material";
import StatCard from "../dashboard/StatCard";
import DonutSmallIcon from "@mui/icons-material/DonutSmall";
import CallMissedOutgoingIcon from "@mui/icons-material/CallMissedOutgoing";
import PauseIcon from "@mui/icons-material/Pause";
import LibraryAddCheckIcon from "@mui/icons-material/LibraryAddCheck";
import FunctionsIcon from "@mui/icons-material/Functions";

import ProgressInsight from "../goal/ProgressInsight";
import { useLanguage } from "../../i18n/useLanguage";
import { GoalContext } from "../../context/GoalContext"; // ✅ ADD

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: (theme.vars ?? theme).palette.text.secondary,
  ...theme.applyStyles("dark", {
    backgroundColor: "#1A2027",
  }),
}));

export default function ShowProgress() {
  const { t } = useLanguage();

  const { goals } = useContext(GoalContext);

  const safeGoals = goals || [];

  const total = safeGoals.length;

  const active = safeGoals.filter(
    (g) => (g.status || "active").toLowerCase() === "active"
  ).length;

  const paused = safeGoals.filter(
    (g) => (g.status || "").toLowerCase() === "paused"
  ).length;

  const completed = safeGoals.filter(
    (g) => (g.status || "").toLowerCase() === "completed"
  ).length;

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} sx={{ marginTop: "20px", px: "10px" }}>
        
        <Grid container spacing={4} size={{ xs: 6, md: 8 }}>
          
          <Grid
            size={{ xs: 12, sm: 6, md: 3 }}
            sx={{
              border: "1px solid transparent",
              transition: "0.3s ease-in-out",
              "&:hover": {
                border: "1px solid #1976d2",
                borderRadius: "6px",
                transform: "scale(1.05)",
              },
            }}
          >
            <StatCard
              title={t("total_goals")}
              value={total}
              icon={<DonutSmallIcon />}
              color="#1b5e20"
            />
          </Grid>

          <Grid
            size={{ xs: 12, sm: 6, md: 3 }}
            sx={{
              border: "1px solid transparent",
              transition: "0.3s ease-in-out",
              "&:hover": {
                border: "1px solid #1976d2",
                borderRadius: "6px",
                transform: "scale(1.05)",
              },
            }}
          >
            <StatCard
              title={t("active_goals")}
              value={active} 
              icon={<CallMissedOutgoingIcon />}
              color="#0f26ba"
            />
          </Grid>

          <Grid
            size={{ xs: 12, sm: 6, md: 3 }}
            sx={{
              border: "1px solid transparent",
              transition: "0.3s ease-in-out",
              "&:hover": {
                border: "1px solid #1976d2",
                borderRadius: "6px",
                transform: "scale(1.05)",
              },
            }}
          >
            <StatCard
              title={t("paused_goals")}
              value={paused} 
              icon={<PauseIcon />}
              color="#c8420d"
            />
          </Grid>

          <Grid
            size={{ xs: 12, sm: 6, md: 3 }}
            sx={{
              border: "1px solid transparent",
              transition: "0.3s ease-in-out",
              "&:hover": {
                border: "1px solid #1976d2",
                borderRadius: "6px",
                transform: "scale(1.05)",
              },
            }}
          >
            <StatCard
              title={t("completed_goals")}
              value={completed}
              icon={<LibraryAddCheckIcon />}
              color="#b4c614"
            />
          </Grid>

        </Grid>
        <Grid size={{ xs: 6, md: 4 }}>
          <Grid size={{ xs: 12, sm: 12, md: 12, height: "100%" }}>
            <StatCard
              title={t("average_goal")}
              icon={<FunctionsIcon />}
              color="#b84b4b"
            >
              <ProgressInsight />
            </StatCard>
          </Grid>
        </Grid>

      </Grid>
    </Box>
  );
}