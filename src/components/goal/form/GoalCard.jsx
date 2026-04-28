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

const getPriorityStyle = (priority) => {
  if (priority === "High") return { colorKey: "error" };
  if (priority === "Medium") return { colorKey: "warning" };
  return { colorKey: "success" };
};

export default function GoalCard({ goal }) {
  const theme = useTheme();
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

  const priority = getPriorityStyle(goal.priority);

  return (
    <Card
      sx={{
        borderRadius: 3,
        backgroundColor: "background.paper",
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
          color={priority.colorKey}
          sx={{ mt: 1 }}
        />

        <Divider sx={{ my: 2 }} />

        {/* CATEGORY */}
        <Typography color="text.secondary">
          📂{" "}
          <b style={{ color: theme.palette.text.primary }}>{goal.category}</b>
        </Typography>

        {/* TARGET */}
        <Typography color="text.secondary" mt={1}>
          🎯 <b style={{ color: theme.palette.text.primary }}>{goal.target}</b>{" "}
          {goal.session}
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
        <Box sx={{ display: "flex", justifyContent: "space-between", mt: 3 }}>
          <Stack direction="row" spacing={1}>
            <Button
              variant="outlined"
              onClick={() => updateGoalStatus(goal.id, "active")}
            >
              Active
            </Button>

            <Button
              variant="outlined"
              color="warning"
              onClick={() => updateGoalStatus(goal.id, "paused")}
            >
              Pause
            </Button>

            <Button
              variant="contained"
              onClick={() => updateGoalStatus(goal.id, "completed")}
            >
              Done
            </Button>
          </Stack>

          <Stack direction="row" spacing={1}>
            {!isEditing ? (
              <Button
                sx={{ bgcolor: "grey.900", color: "white" }}
                onClick={() => setIsEditing(true)}
              >
                Edit
              </Button>
            ) : (
              <Button variant="contained" color="success" onClick={handleSave}>
                Save
              </Button>
            )}

            <Button color="error" onClick={() => deleteGoal(goal.id)}>
              Delete
            </Button>
          </Stack>
        </Box>

        {/* DETAILS */}
        <Button
          sx={{ mt: 2, fontWeight: 600 }}
          onClick={() => setShowDetail(!showDetail)}
        >
          {showDetail ? "Hide Details" : "More Details"}
        </Button>

        {showDetail && (
          <Box
            sx={{
              mt: 2,
              p: 2,
              borderRadius: 2,
              backgroundColor: "grey.100",
              border: `1px solid ${theme.palette.divider}`,
            }}
          >
            <Typography color="text.secondary">
              📝 {goal.description || "No description"}
            </Typography>

            <Typography color="text.secondary">
              📅 Start: {goal.startDate || "Not set"}
            </Typography>

            <Typography color="text.secondary">
              📅 End: {goal.endDate || "Not set"}
            </Typography>

            <Typography color="text.secondary">
              ⏳ Deadline: {goal.deadline || "Not set"}
            </Typography>
          </Box>
        )}
      </CardContent>
    </Card>
  );
}
