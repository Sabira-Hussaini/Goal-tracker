import {
  Box,
  Typography,
  Button,
  Card,
  CardContent,
  Grid,
  TextField,
  Tabs,
  Tab,
  Select,
  MenuItem,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  useTheme,
} from "@mui/material";

import { useState, useContext } from "react";
import { CategoryContext } from "../context/CategoryContext";
import { useLanguage } from "../i18n/useLanguage";

const Categories = () => {
  const theme = useTheme();
  const { lang } = useLanguage();

  const { categories, addCategory, deleteCategory } =
    useContext(CategoryContext);

  const [open, setOpen] = useState(false);
  const [newName, setNewName] = useState("");

  const [tab, setTab] = useState("all");
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("newest");

  const handleAddCategory = () => {
    if (!newName.trim()) return;

    addCategory({
      id: Date.now(),
      name: newName,
      goals: [],
      createdAt: Date.now(),
    });

    setNewName("");
    setOpen(false);
  };

  const handleDeleteCategory = (id) => {
    deleteCategory(id);
  };

  const getCategoryProgress = (cat) => {
    const goals = cat.goals || [];
    if (goals.length === 0) return 0;

    const done = goals.filter((g) => g.completed).length;
    return Math.round((done / goals.length) * 100);
  };

  const total = categories.length;

  const active = categories.filter((c) =>
    (c.goals || []).some((g) => !g.completed)
  ).length;

  const completed = categories.filter(
    (c) =>
      (c.goals || []).length > 0 && (c.goals || []).every((g) => g.completed)
  ).length;

  const progress =
    categories.length === 0
      ? 0
      : Math.round(
          categories.reduce((acc, c) => acc + getCategoryProgress(c), 0) /
            categories.length
        );

  const filtered = categories
    .filter((c) => c.name.toLowerCase().includes(search.toLowerCase()))
    .filter((c) => {
      const goals = c.goals || [];

      if (tab === "all") return true;
      if (tab === "active") return goals.some((g) => !g.completed);
      if (tab === "completed")
        return goals.length > 0 && goals.every((g) => g.completed);
      if (tab === "attention") return goals.length === 0;

      return true;
    })
    .sort((a, b) => {
      if (sort === "newest") return b.createdAt - a.createdAt;
      if (sort === "name") return a.name.localeCompare(b.name);
      return 0;
    });

  return (
    <Box p={{ xs: 1, sm: 2, md: 3 }}>
      {/* HEADER */}
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        flexWrap="wrap"
        mb={3}
        sx={{
          backgroundColor:
            theme.palette.mode === "dark"
              ? theme.palette.background.paper
              : theme.palette.secondary.main,

          color: theme.palette.text.primary,
          border: `1px solid ${theme.palette.divider}`,
          borderRadius: 3,
          p: 3,
        }}
      >
        <Box>
          <Typography variant="h4" color="primary.main">
            {lang === "fa" ? "دسته‌بندی‌ها" : "Categories"}
          </Typography>

          <Typography color="text.secondary">
            {lang === "fa"
              ? "بررسی و مدیریت پیشرفت دسته‌ها"
              : "Monitor and improve category performance"}
          </Typography>
        </Box>

        <Button variant="contained" onClick={() => setOpen(true)}>
          {lang === "fa" ? "+ دسته جدید" : "+ New Category"}
        </Button>
      </Box>

      {/* STATS */}
      <Grid container spacing={2}>
        {[
          { title: lang === "fa" ? "دسته‌ها" : "Categories", value: total },
          { title: lang === "fa" ? "فعال" : "Active", value: active },
          {
            title: lang === "fa" ? "تکمیل‌شده" : "Completed",
            value: completed,
          },
          {
            title: lang === "fa" ? "میانگین پیشرفت" : "Avg Progress",
            value: progress + "%",
          },
        ].map((item, i) => (
          <Grid item xs={12} sm={6} md={3} key={i}>
            <Card
              sx={{
                textAlign: "center",
                borderRadius: 3,
                bgcolor: "background.paper",
                border: `1px solid ${theme.palette.divider}`,
              }}
            >
              <CardContent>
                <Typography variant="h4" fontWeight={700}>
                  {item.value}
                </Typography>
                <Typography color="text.secondary">{item.title}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* FILTER */}
      <Card
        sx={{
          mt: 3,
          p: 2,
          borderRadius: 3,
          bgcolor: "background.paper",
          border: `1px solid ${theme.palette.divider}`,
        }}
      >
        <Box display="flex" flexWrap="wrap" gap={2}>
          <Tabs value={tab} onChange={(e, v) => setTab(v)}>
            <Tab label={lang === "fa" ? "همه" : "ALL"} value="all" />
            <Tab label={lang === "fa" ? "فعال" : "ACTIVE"} value="active" />
            <Tab
              label={lang === "fa" ? "تکمیل‌شده" : "COMPLETED"}
              value="completed"
            />
            <Tab
              label={lang === "fa" ? "نیاز به توجه" : "NEEDS ATTENTION"}
              value="attention"
            />
          </Tabs>

          <TextField
            size="small"
            placeholder={lang === "fa" ? "جستجو..." : "Search..."}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <Select
            size="small"
            value={sort}
            onChange={(e) => setSort(e.target.value)}
          >
            <MenuItem value="newest">
              {lang === "fa" ? "جدیدترین" : "Newest"}
            </MenuItem>
            <MenuItem value="name">{lang === "fa" ? "نام" : "Name"}</MenuItem>
          </Select>
        </Box>
      </Card>

      {/* LIST */}
      <Card
        sx={{
          mt: 3,
          p: 3,
          borderRadius: 3,
          bgcolor: "background.paper",
          border: `1px solid ${theme.palette.divider}`,
        }}
      >
        {filtered.length === 0 ? (
          <Typography color="text.secondary">
            {lang === "fa" ? "هیچ دسته‌بندی موجود نیست" : "No categories yet"}
          </Typography>
        ) : (
          <Box display="flex" flexWrap="wrap" gap={2}>
            {filtered.map((cat, i) => (
              <Card
                key={cat.id}
                sx={{
                  width: { xs: "100%", sm: 260 },
                  p: 2,
                  borderRadius: 3,
                  bgcolor: "background.paper",
                  border: `1px solid ${theme.palette.divider}`,
                }}
              >
                <Typography fontWeight={600}>
                  #{i + 1} {cat.name}
                </Typography>

                <Typography variant="caption" color="text.secondary">
                  {(cat.goals || []).length} {lang === "fa" ? "هدف" : "goals"}
                </Typography>

                <Typography mt={1} color="text.secondary">
                  {lang === "fa" ? "پیشرفت" : "Progress"}:{" "}
                  {getCategoryProgress(cat)}%
                </Typography>

                <Button
                  size="small"
                  color="error"
                  onClick={() => handleDeleteCategory(cat.id)}
                  sx={{ mt: 1 }}
                >
                  {lang === "fa" ? "حذف" : "Delete"}
                </Button>
              </Card>
            ))}
          </Box>
        )}
      </Card>

      {/* DIALOG */}
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>
          {lang === "fa" ? "ساخت دسته‌بندی" : "Create Category"}
        </DialogTitle>

        <DialogContent>
          <TextField
            fullWidth
            label={lang === "fa" ? "نام دسته‌بندی" : "Category Name"}
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
          />
        </DialogContent>

        <DialogActions>
          <Button onClick={() => setOpen(false)}>
            {lang === "fa" ? "لغو" : "Cancel"}
          </Button>
          <Button variant="contained" onClick={handleAddCategory}>
            {lang === "fa" ? "افزودن" : "Add"}
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Categories;
