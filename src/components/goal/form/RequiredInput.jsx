import { useState, useContext } from "react";
import { Box, Grid, TextField, MenuItem, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { CategoryContext } from "../../../context/CategoryContext";
import { useLanguage } from "../../../i18n/useLanguage";

export default function RequiredInput({ onAddGoal }) {
  const navigate = useNavigate();
  const { lang } = useLanguage();
  const { categories: customCategories } = useContext(CategoryContext);

  // ✅ FIXED: categories per language (correct structure)
  const defaultCategories = {
    fa: ["مطالعه", "کار", "ورزش", "سلامتی", "سرگرمی", "مالی"],
    en: ["Study", "Work", "Sport", "Health", "Hobby", "Finance"],
  };

  // ✅ merge correctly
  const categories = [
    ...new Set([
      ...defaultCategories[lang], // 👈 important fix
      ...customCategories.map((c) => c.name),
    ]),
  ];

  // 🌍 OPTIONS
  const options = {
    fa: {
      sessions: ["صفحات", "دقیقه", "ساعت"],
      priorities: ["زیاد", "متوسط", "کم"],
      goalTypes: ["روزانه", "تعداد محور", "زمان محور"],
      cancel: "لغو",
      create: "ایجاد هدف",
    },
    en: {
      sessions: ["Pages", "Minutes", "Hours"],
      priorities: ["High", "Medium", "Low"],
      goalTypes: ["Daily", "Count Based", "Time Based"],
      cancel: "Cancel",
      create: "Create Goal",
    },
  };

  const t = options[lang];

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

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    const newGoal = {
      id: Date.now(),
      ...formData,
      status: "active",
      progress: 0,
      createdAt: new Date().toISOString(),
    };

    onAddGoal?.(newGoal);

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

    navigate("/goals");
  };

  const fieldSx = {
    bgcolor: "background.paper",
    borderRadius: 2,
  };

  return (
    <Box>
      <Grid container spacing={2}>
        {/* TITLE */}
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            name="title"
            label={lang === "fa" ? "عنوان" : "Title"}
            value={formData.title}
            onChange={handleChange}
            sx={fieldSx}
          />
        </Grid>

        {/* CATEGORY */}
        <Grid item xs={12} md={6}>
          <TextField
            select
            fullWidth
            name="category"
            label={lang === "fa" ? "دسته‌بندی" : "Category"}
            value={formData.category}
            onChange={handleChange}
            sx={fieldSx}
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
            label={lang === "fa" ? "نوع هدف" : "Goal Type"}
            value={formData.goalType}
            onChange={handleChange}
            sx={fieldSx}
            sx={{ width: "200px" }}
          >
            {t.goalTypes.map((g) => (
              <MenuItem key={g} value={g}>
                {g}
              </MenuItem>
            ))}
          </TextField>
        </Grid>

        {/* TARGET */}
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            type="number"
            name="target"
            label={lang === "fa" ? "هدف" : "Target"}
            value={formData.target}
            onChange={handleChange}
            sx={fieldSx}
            sx={{ width: "200px" }}
          />
        </Grid>

        {/* SESSION */}
        <Grid item xs={12} md={4}>
          <TextField
            select
            fullWidth
            name="session"
            label={lang === "fa" ? "واحد" : "Session"}
            value={formData.session}
            onChange={handleChange}
            sx={fieldSx}
            sx={{ width: "200px" }}
          >
            {t.sessions.map((s) => (
              <MenuItem key={s} value={s}>
                {s}
              </MenuItem>
            ))}
          </TextField>
        </Grid>

        {/* PRIORITY */}
        <Grid item xs={12} md={4}>
          <TextField
            select
            fullWidth
            name="priority"
            label={lang === "fa" ? "اولویت" : "Priority"}
            value={formData.priority}
            onChange={handleChange}
            sx={fieldSx}
            sx={{ width: "200px" }}
          >
            {t.priorities.map((p) => (
              <MenuItem key={p} value={p}>
                {p}
              </MenuItem>
            ))}
          </TextField>
        </Grid>

        {/* START */}
        <Grid item xs={12} md={4}>
          <TextField
            fullWidth
            type="date"
            name="startDate"
            label={lang === "fa" ? "شروع" : "Start Date"}
            InputLabelProps={{ shrink: true }}
            value={formData.startDate}
            onChange={handleChange}
            sx={fieldSx}
            sx={{ width: "200px" }}
          />
        </Grid>

        {/* END */}
        <Grid item xs={12} md={4}>
          <TextField
            fullWidth
            type="date"
            name="endDate"
            label={lang === "fa" ? "ختم" : "End Date"}
            InputLabelProps={{ shrink: true }}
            value={formData.endDate}
            onChange={handleChange}
            sx={fieldSx}
            sx={{ width: "200px" }}
          />
        </Grid>

        {/* DEADLINE */}
        <Grid item xs={12} md={4}>
          <TextField
            fullWidth
            type="date"
            name="deadline"
            label={lang === "fa" ? "ددلاین" : "Deadline"}
            InputLabelProps={{ shrink: true }}
            value={formData.deadline}
            onChange={handleChange}
            sx={fieldSx}
            sx={{ width: "200px" }}
          />
        </Grid>

        {/* DESCRIPTION */}
        <Grid item xs={12}>
          <TextField
            fullWidth
            multiline
            rows={3}
            name="description"
            label={lang === "fa" ? "توضیحات" : "Description"}
            value={formData.description}
            onChange={handleChange}
            sx={fieldSx}
            sx={{ width: "760px" }}
          />
        </Grid>
      </Grid>

      {/* ACTIONS */}
      <Box sx={{ display: "flex", justifyContent: "flex-end", gap: 1, mt: 2 }}>
        <Button>{t.cancel}</Button>
        <Button variant="contained" onClick={handleSubmit}>
          {t.create}
        </Button>
      </Box>
    </Box>
  );
}
