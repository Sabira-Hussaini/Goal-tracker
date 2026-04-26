import { useState } from "react";
import { Box, Grid, TextField, MenuItem, Button, Paper } from "@mui/material";
import { useNavigate } from "react-router-dom"; // <-- برای هدایت به صفحه Goals

export default function RequiredInput({ onAddGoal }) {
  const navigate = useNavigate(); // <-- برای هدایت

  const sessions = ["Pages", "Minutes", "Hours"];
  const categories = ["Study", "Work", "Sport", "Health", "Hobby", "Finance"];
  const priorities = ["High", "Medium", "Low"];
  const goalTypes = ["Daily", "Count Base", "Time Based"];

  const [formData, setFormData] = useState({
    title: "",
    category: "",
    goalType: "",
    target: "",
    session: "",
    priority: "",
    startDate: "",
    endDate: "",
    deadline: "",
    description: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validate = () => {
    let newErrors = {};
    if (!formData.title) newErrors.title = "Title required";
    if (!formData.category) newErrors.category = "Category required";
    if (!formData.goalType) newErrors.goalType = "Goal type required";
    if (!formData.target) newErrors.target = "Target required";
    if (!formData.session) newErrors.session = "Session required";
    if (!formData.priority) newErrors.priority = "Priority required";
    if (!formData.startDate) newErrors.startDate = "Start date required";
    if (!formData.endDate) newErrors.endDate = "End date required";
    if (!formData.deadline) newErrors.deadline = "Deadline required";
    return newErrors;
  };

  const handleSubmit = () => {
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // ساختن Goal جدید
    const newGoal = {
      ...formData,
      id: Date.now(),
      status: "active",
      createdAt: new Date().toISOString(),
    };

    console.log("✅ Goal ساخته شد:", newGoal);

    // ارسال داده به GoalPage
    if (onAddGoal) {
      onAddGoal(newGoal);
    }

    // هدایت به صفحه Goals
    navigate('/goals'); // مسیر صفحه Goals را وارد کن
  };

  const handleCancel = () => {
    setFormData({
      title: "",
      category: "",
      goalType: "",
      target: "",
      session: "",
      priority: "",
      startDate: "",
      endDate: "",
      deadline: "",
      description: "",
    });
    setErrors({});
  };

  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            name="title"
            label="Title"
            value={formData.title}
            onChange={handleChange}
            error={!!errors.title}
            helperText={errors.title}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            select
            fullWidth
            name="category"
            label="Category"
            value={formData.category}
            onChange={handleChange}
            error={!!errors.category}
            helperText={errors.category}
          >
            {categories.map((c) => (
              <MenuItem key={c} value={c}>
                {c}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            select
            fullWidth
            name="goalType"
            label="Goal Type"
            value={formData.goalType}
            onChange={handleChange}
            error={!!errors.goalType}
            helperText={errors.goalType}
          >
            {goalTypes.map((g) => (
              <MenuItem key={g} value={g}>
                {g}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            type="number"
            name="target"
            label="Target"
            value={formData.target}
            onChange={handleChange}
            error={!!errors.target}
            helperText={errors.target}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <TextField
            select
            fullWidth
            name="session"
            label="Session"
            value={formData.session}
            onChange={handleChange}
            error={!!errors.session}
            helperText={errors.session}
          >
            {sessions.map((s) => (
              <MenuItem key={s} value={s}>
                {s}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={12} md={4}>
          <TextField
            select
            fullWidth
            name="priority"
            label="Priority"
            value={formData.priority}
            onChange={handleChange}
            error={!!errors.priority}
            helperText={errors.priority}
          >
            {priorities.map((p) => (
              <MenuItem key={p} value={p}>
                {p}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={12} md={4}>
          <TextField
            fullWidth
            type="date"
            name="startDate"
            label="Start Date"
            InputLabelProps={{ shrink: true }}
            value={formData.startDate}
            onChange={handleChange}
            error={!!errors.startDate}
            helperText={errors.startDate}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <TextField
            fullWidth
            type="date"
            name="endDate"
            label="End Date"
            InputLabelProps={{ shrink: true }}
            value={formData.endDate}
            onChange={handleChange}
            error={!!errors.endDate}
            helperText={errors.endDate}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <TextField
            fullWidth
            type="date"
            name="deadline"
            label="Deadline"
            InputLabelProps={{ shrink: true }}
            value={formData.deadline}
            onChange={handleChange}
            error={!!errors.deadline}
            helperText={errors.deadline}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            multiline
            rows={3}
            name="description"
            label="Description"
            value={formData.description}
            onChange={handleChange}
          />
        </Grid>
      </Grid>

      <Box sx={{ display: "flex", justifyContent: "flex-end", gap: 1, mt: 2 }}>
        <Button onClick={handleCancel}>Cancel</Button>
        <Button variant="contained" onClick={handleSubmit}>
          Create Goal
        </Button>
      </Box>
    </Box>
  );
}
