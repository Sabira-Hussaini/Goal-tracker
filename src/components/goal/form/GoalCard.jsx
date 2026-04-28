import {
  Card,
  CardContent,
  Typography,
  Chip,
  Box,
  Button,
  Stack,
} from "@mui/material";
import { useContext } from "react";
import { GoalContext } from "../../../context/GoalContext";
import { useLanguage } from "../../../i18n/useLanguage";

const getPriorityColor = (priority) => {
  if (priority === "High") return "error";
  if (priority === "Medium") return "warning";
  return "success";
};

export default function GoalCard({ goal }) {
  const { updateGoalStatus } = useContext(GoalContext);
  const { lang } = useLanguage();

  const t = {
    fa: {
      category: "دسته‌بندی",
      target: "هدف",
      status: "حالت",
      active: "فعال",
      paused: "متوقف",
      completed: "تکمیل‌شده",
      start: "شروع",
      end: "ختم",
      activeBtn: "فعال",
      pauseBtn: "توقف",
      completeBtn: "تکمیل",
    },
    en: {
      category: "Category",
      target: "Target",
      status: "Status",
      active: "Active",
      paused: "Paused",
      completed: "Completed",
      start: "Start",
      end: "End",
      activeBtn: "Active",
      pauseBtn: "Pause",
      completeBtn: "Complete",
    },
  };

  const tr = t[lang];

  const getStatusText = (status) => {
    if (status === "completed") return tr.completed;
    if (status === "paused") return tr.paused;
    return tr.active;
  };

  const getStatusColor = (status) => {
    if (status === "completed") return "green";
    if (status === "paused") return "orange";
    return "blue";
  };

  return (
    <Card
      sx={{
        height: "100%",
        transition: "0.2s",
        "&:hover": {
          transform: "translateY(-4px)",
          boxShadow: 4,
        },
      }}
    >
      <CardContent>
        {/* HEADER */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 1,
          }}
        >
          <Typography variant="h6" fontWeight="bold">
            {goal.title}
          </Typography>

          <Chip
            label={goal.priority}
            size="small"
            color={getPriorityColor(goal.priority)}
          />
        </Box>

        {/* CATEGORY */}
        <Typography variant="body2" color="text.secondary">
          📂 {tr.category}: {goal.category}
        </Typography>

        {/* TARGET */}
        <Typography variant="body2" sx={{ mt: 1 }}>
          🎯 {tr.target}: {goal.target} {goal.session}
        </Typography>

        {/* DATE */}
        <Typography
          variant="caption"
          color="text.secondary"
          sx={{ mt: 1, display: "block" }}
        >
          📅 {goal.startDate} → {goal.endDate}
        </Typography>

        {/* STATUS */}
        <Typography
          sx={{
            mt: 1,
            fontWeight: "bold",
            color: getStatusColor(goal.status),
          }}
        >
          {tr.status}: {getStatusText(goal.status)}
        </Typography>

        {/* ACTION BUTTONS */}
        <Box sx={{ mt: 2 }}>
          <Stack direction="row" spacing={1}>
            <Button
              size="small"
              variant="contained"
              color="primary"
              onClick={() => updateGoalStatus(goal.id, "active")}
            >
              {tr.activeBtn}
            </Button>

            <Button
              size="small"
              variant="contained"
              color="warning"
              onClick={() => updateGoalStatus(goal.id, "paused")}
            >
              {tr.pauseBtn}
            </Button>

            <Button
              size="small"
              variant="contained"
              color="success"
              onClick={() => updateGoalStatus(goal.id, "completed")}
            >
              {tr.completeBtn}
            </Button>
          </Stack>
        </Box>
      </CardContent>
    </Card>
  );
}
