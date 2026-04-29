import {
  Card,
  CardContent,
  Typography,
  Chip,
  Box,
  Button,
  Stack,
  TextField,
  Divider,
  useTheme,
} from "@mui/material";

import { useContext, useState } from "react";
import { GoalContext } from "../../../context/GoalContext";
import { useLanguage } from "../../../i18n/useLanguage";

const getPriorityStyle = (priority) => {
  if (priority === "High") return "error";
  if (priority === "Medium") return "warning";
  return "success";
};

export default function GoalCard({ goal }) {
  const theme = useTheme();
  const { lang } = useLanguage();

  const { updateGoalStatus, updateGoal, deleteGoal } = useContext(GoalContext);

  const [showDetail, setShowDetail] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const [form, setForm] = useState({
    title: goal.title || "",
    category: goal.category || "",
    target: goal.target || "",
    session: goal.session || "",
    description: goal.description || "",
    startDate: goal.startDate || "",
    endDate: goal.endDate || "",
    deadline: goal.deadline || "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    updateGoal(goal.id, form);
    setIsEditing(false);
  };

  return (
    <Card
      sx={{
        borderRadius: 3,
        border: `1px solid ${theme.palette.divider}`,
        boxShadow: theme.shadows[1],
        transition: "0.3s",
        "&:hover": { boxShadow: theme.shadows[4] },
        overflow: "hidden",
      }}
    >
      <CardContent sx={{ p: 2 }}>
        <Box sx={{ mb: 2 }}>
          {isEditing ? (
            <TextField
              fullWidth
              name="title"
              value={form.title}
              onChange={handleChange}
              size="small"
            />
          ) : (
            <Typography variant="h6" fontWeight={700}>
              {goal.title}
            </Typography>
          )}

          <Chip
            label={goal.priority}
            size="small"
            color={getPriorityStyle(goal.priority)}
            sx={{ mt: 1 }}
          />
        </Box>

        <Divider />
        <Box sx={{ mt: 2, display: "flex", flexDirection: "column", gap: 1 }}>
          <Typography color="text.secondary">📂 {goal.category}</Typography>

          <Typography color="text.secondary">
            🎯 {goal.target} {goal.session}
          </Typography>

          <Typography
            fontWeight={600}
            color={
              goal.status === "completed"
                ? "success.main"
                : goal.status === "paused"
                ? "warning.main"
                : "primary.main"
            }
          >
            {goal.status}
          </Typography>
        </Box>

        {/* 🔷 ACTIONS */}
        <Box sx={{ mt: 3 }}>
          <Stack direction="row" spacing={1} flexWrap="wrap">
            <Button
              size="small"
              variant="outlined"
              onClick={() => updateGoalStatus(goal.id, "active")}
            >
              {lang === "fa" ? "فعال" : "Active"}
            </Button>

            <Button
              size="small"
              variant="outlined"
              color="warning"
              onClick={() => updateGoalStatus(goal.id, "paused")}
            >
              {lang === "fa" ? "توقف" : "Pause"}
            </Button>

            <Button
              size="small"
              variant="contained"
              onClick={() => updateGoalStatus(goal.id, "completed")}
            >
              {lang === "fa" ? "تکمیل" : "Done"}
            </Button>
          </Stack>

          <Stack direction="row" spacing={1} sx={{ mt: 1 }}>
            {!isEditing ? (
              <Button
                size="small"
                sx={{
                  bgcolor: "grey.900",
                  color: "white",
                  "&:hover": { bgcolor: "grey.800" },
                }}
                onClick={() => setIsEditing(true)}
              >
                {lang === "fa" ? "ویرایش" : "Edit"}
              </Button>
            ) : (
              <Button
                size="small"
                variant="contained"
                color="success"
                onClick={handleSave}
              >
                {lang === "fa" ? "ذخیره" : "Save"}
              </Button>
            )}

            <Button
              size="small"
              color="error"
              onClick={() => deleteGoal(goal.id)}
            >
              {lang === "fa" ? "حذف" : "Delete"}
            </Button>
          </Stack>
        </Box>

        <Button
          size="small"
          sx={{ mt: 2 }}
          onClick={() => setShowDetail(!showDetail)}
        >
          {showDetail
            ? lang === "fa"
              ? "بستن"
              : "Hide"
            : lang === "fa"
            ? "جزئیات"
            : "Details"}
        </Button>

        {showDetail && (
          <Box
            sx={{
              mt: 2,
              p: 2,
              borderRadius: 2,
              bgcolor: "background.default",
              border: `1px solid ${theme.palette.divider}`,
              display: "flex",
              flexDirection: "column",
              gap: 1,
            }}
          >
            <Typography color="text.secondary">
              📝{" "}
              {goal.description ||
                (lang === "fa" ? "بدون توضیحات" : "No description")}
            </Typography>

            <Typography color="text.secondary">
              📅 {lang === "fa" ? "شروع:" : "Start:"} {goal.startDate || "-"}
            </Typography>

            <Typography color="text.secondary">
              📅 {lang === "fa" ? "ختم:" : "End:"} {goal.endDate || "-"}
            </Typography>

            <Typography color="text.secondary">
              ⏳ {lang === "fa" ? "ددلاین:" : "Deadline:"}{" "}
              {goal.deadline || "-"}
            </Typography>
          </Box>
        )}
      </CardContent>
    </Card>
  );
}
