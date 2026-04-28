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
        bgcolor: "background.paper",
        border: `1px solid ${theme.palette.divider}`,
        boxShadow: theme.shadows[1],
        transition: "0.3s",
        "&:hover": {
          boxShadow: theme.shadows[4],
        },
      }}
    >
      <CardContent>
        {/* TITLE */}
        {isEditing ? (
          <TextField
            fullWidth
            name="title"
            value={form.title}
            onChange={handleChange}
            sx={{ mb: 1 }}
          />
        ) : (
          <Typography variant="h6" fontWeight={700}>
            {goal.title}
          </Typography>
        )}

        {/* PRIORITY */}
        <Chip
          label={goal.priority}
          size="small"
          color={getPriorityStyle(goal.priority)}
          sx={{ mt: 1 }}
        />

        <Divider sx={{ my: 2 }} />

        {/* CATEGORY */}
        <Typography color="text.secondary">📂 {goal.category}</Typography>

        {/* TARGET */}
        <Typography color="text.secondary" mt={1}>
          🎯 {goal.target} {goal.session}
        </Typography>

        {/* STATUS */}
        <Typography
          fontWeight={700}
          mt={1}
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

        {/* ACTIONS */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            mt: 3,
            flexWrap: "wrap",
            gap: 1,
          }}
        >
          <Stack direction="row" spacing={1}>
            <Button
              variant="outlined"
              onClick={() => updateGoalStatus(goal.id, "active")}
            >
              {lang === "fa" ? "فعال" : "Active"}
            </Button>

            <Button
              variant="outlined"
              color="warning"
              onClick={() => updateGoalStatus(goal.id, "paused")}
            >
              {lang === "fa" ? "توقف" : "Pause"}
            </Button>

            <Button
              variant="contained"
              onClick={() => updateGoalStatus(goal.id, "completed")}
            >
              {lang === "fa" ? "تکمیل" : "Done"}
            </Button>
          </Stack>

          <Stack direction="row" spacing={1}>
            {!isEditing ? (
              <Button
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
              <Button variant="contained" color="success" onClick={handleSave}>
                {lang === "fa" ? "ذخیره" : "Save"}
              </Button>
            )}

            <Button color="error" onClick={() => deleteGoal(goal.id)}>
              {lang === "fa" ? "حذف" : "Delete"}
            </Button>
          </Stack>
        </Box>

        {/* DETAILS BUTTON */}
        <Button sx={{ mt: 2 }} onClick={() => setShowDetail(!showDetail)}>
          {showDetail
            ? lang === "fa"
              ? "بستن"
              : "Hide"
            : lang === "fa"
            ? "جزئیات"
            : "Details"}
        </Button>

        {/* DETAILS */}
        {showDetail && (
          <Box
            sx={{
              mt: 2,
              p: 2,
              borderRadius: 2,
              bgcolor: "background.paper",
              border: `1px solid ${theme.palette.divider}`,
            }}
          >
            <Typography color="text.secondary" sx={{ mb: 1 }}>
              📝{" "}
              {goal.description ||
                (lang === "fa" ? "بدون توضیحات" : "No description")}
            </Typography>

            <Typography color="text.secondary" sx={{ mb: 1 }}>
              📅 {lang === "fa" ? "شروع:" : "Start:"}{" "}
              {goal.startDate || (lang === "fa" ? "تنظیم نشده" : "Not set")}
            </Typography>

            <Typography color="text.secondary" sx={{ mb: 1 }}>
              📅 {lang === "fa" ? "ختم:" : "End:"}{" "}
              {goal.endDate || (lang === "fa" ? "تنظیم نشده" : "Not set")}
            </Typography>

            <Typography color="text.secondary">
              ⏳ {lang === "fa" ? "ددلاین:" : "Deadline:"}{" "}
              {goal.deadline || (lang === "fa" ? "تنظیم نشده" : "Not set")}
            </Typography>
          </Box>
        )}
      </CardContent>
    </Card>
  );
}
