import { useState, useContext } from "react";
import { Box, Grid, TextField, MenuItem, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { CategoryContext } from "../../../context/CategoryContext";
import { useLanguage } from "../../../i18n/useLanguage";

export default function RequiredInput({ onAddGoal }) {
  const navigate = useNavigate();
  const { lang } = useLanguage();

  const { categories: customCategories } = useContext(CategoryContext);

  const defaultCategories = [
    "Study",
    "Work",
    "Sport",
    "Health",
    "Hobby",
    "Finance",
  ];

  const mergedCategories = [
    ...defaultCategories,
    ...customCategories.map((c) => c.name),
  ];

  const categories = [...new Set(mergedCategories)];

  const sessions = ["Pages", "Minutes", "Hours"];
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

  const tText = {
    fa: {
      title: "عنوان",
      category: "دسته‌بندی",
      goalType: "نوع هدف",
      target: "هدف",
      session: "واحد",
      priority: "اولویت",
      startDate: "تاریخ شروع",
      endDate: "تاریخ ختم",
      deadline: "ددلاین",
      description: "توضیحات",
      cancel: "لغو",
      create: "ایجاد هدف",
      titleReq: "عنوان ضروری است",
      categoryReq: "دسته‌بندی ضروری است",
      goalTypeReq: "نوع هدف ضروری است",
      targetReq: "هدف ضروری است",
      sessionReq: "واحد ضروری است",
      priorityReq: "اولویت ضروری است",
      startReq: "تاریخ شروع ضروری است",
      endReq: "تاریخ ختم ضروری است",
      deadlineReq: "ددلاین ضروری است",
    },
    en: {
      title: "Title",
      category: "Category",
      goalType: "Goal Type",
      target: "Target",
      session: "Session",
      priority: "Priority",
      startDate: "Start Date",
      endDate: "End Date",
      deadline: "Deadline",
      description: "Description",
      cancel: "Cancel",
      create: "Create Goal",
      titleReq: "Title is required",
      categoryReq: "Category is required",
      goalTypeReq: "Goal type is required",
      targetReq: "Target is required",
      sessionReq: "Session is required",
      priorityReq: "Priority is required",
      startReq: "Start date is required",
      endReq: "End date is required",
      deadlineReq: "Deadline is required",
    },
  };

  const t = tText[lang];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validate = () => {
    let newErrors = {};

    if (!formData.title) newErrors.title = t.titleReq;
    if (!formData.category) newErrors.category = t.categoryReq;
    if (!formData.goalType) newErrors.goalType = t.goalTypeReq;
    if (!formData.target) newErrors.target = t.targetReq;
    if (!formData.session) newErrors.session = t.sessionReq;
    if (!formData.priority) newErrors.priority = t.priorityReq;
    if (!formData.startDate) newErrors.startDate = t.startReq;
    if (!formData.endDate) newErrors.endDate = t.endReq;
    if (!formData.deadline) newErrors.deadline = t.deadlineReq;

    return newErrors;
  };

  const handleSubmit = () => {
    const newErrors = validate();

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const newGoal = {
      id: Date.now(),
      ...formData,
      category: formData.category.trim(),
      status: "active",
      progress: 0,
      createdAt: new Date().toISOString(),
    };

    if (typeof onAddGoal === "function") {
      onAddGoal(newGoal);
    }

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

    setTimeout(() => {
      navigate("/goals");
    }, 0);
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
        {/* TITLE */}
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            name="title"
            label={t.title}
            value={formData.title}
            onChange={handleChange}
            error={!!errors.title}
            helperText={errors.title}
          />
        </Grid>

        {/* CATEGORY */}
        <Grid item xs={12} md={6}>
          <TextField
            select
            fullWidth
            name="category"
            label={t.category}
            value={formData.category}
            onChange={handleChange}
            error={!!errors.category}
            helperText={errors.category}
            sx={{ width: "200px" }}
          >
            {categories.map((c) => (
              <MenuItem key={c} value={c}>
                {c}
              </MenuItem>
            ))}
          </TextField>
        </Grid>

        {/* GOAL TYPE */}
        <Grid item xs={12} md={6}>
          <TextField
            select
            fullWidth
            name="goalType"
            label={t.goalType}
            value={formData.goalType}
            onChange={handleChange}
            error={!!errors.goalType}
            helperText={errors.goalType}
            sx={{ width: "200px" }}
          >
            {goalTypes.map((g) => (
              <MenuItem key={g} value={g}>
                {g}
              </MenuItem>
            ))}
          </TextField>
        </Grid>

        {/* TARGET */}
        <Grid item xs={12} md={6}>
          <TextField
            sx={{ width: "130px" }}
            fullWidth
            type="number"
            name="target"
            label={t.target}
            value={formData.target}
            onChange={handleChange}
            error={!!errors.target}
            helperText={errors.target}
          />
        </Grid>

        {/* SESSION */}
        <Grid item xs={12} md={4}>
          <TextField
            sx={{ width: "200px" }}
            select
            fullWidth
            name="session"
            label={t.session}
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

        {/* PRIORITY */}
        <Grid item xs={12} md={4}>
          <TextField
            sx={{ width: "220px" }}
            select
            fullWidth
            name="priority"
            label={t.priority}
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

        {/* START */}
        <Grid item xs={12} md={4}>
          <TextField
            sx={{ width: "220px" }}
            fullWidth
            type="date"
            name="startDate"
            label={t.startDate}
            InputLabelProps={{ shrink: true }}
            value={formData.startDate}
            onChange={handleChange}
            error={!!errors.startDate}
            helperText={errors.startDate}
          />
        </Grid>

        {/* END */}
        <Grid item xs={12} md={4}>
          <TextField
            sx={{ width: "220px" }}
            fullWidth
            type="date"
            name="endDate"
            label={t.endDate}
            InputLabelProps={{ shrink: true }}
            value={formData.endDate}
            onChange={handleChange}
            error={!!errors.endDate}
            helperText={errors.endDate}
          />
        </Grid>

        {/* DEADLINE */}
        <Grid item xs={12} md={4}>
          <TextField
            sx={{ width: "220px" }}
            fullWidth
            type="date"
            name="deadline"
            label={t.deadline}
            InputLabelProps={{ shrink: true }}
            value={formData.deadline}
            onChange={handleChange}
            error={!!errors.deadline}
            helperText={errors.deadline}
          />
        </Grid>

        {/* DESCRIPTION */}
        <Grid item >
          <TextField
            fullWidth
            multiline
            rows={3}
            name="description"
            label={t.description}
            value={formData.description}
            onChange={handleChange}
            sx={{ width: "760px" }}
          />
        </Grid>
      </Grid>

      <Box sx={{ display: "flex", justifyContent: "flex-end", gap: 1, mt: 2 }}>
        <Button onClick={handleCancel}>{t.cancel}</Button>

        <Button variant="contained" onClick={handleSubmit}>
          {t.create}
        </Button>
      </Box>
    </Box>
  );
}
