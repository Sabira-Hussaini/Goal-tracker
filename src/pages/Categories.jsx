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
} from "@mui/material";

import { useState, useContext } from "react";
import { CategoryContext } from "../context/CategoryContext";

const Categories = () => {
  // ✅ GLOBAL STATE (FIXED)
  const { categories, addCategory, deleteCategory } =
    useContext(CategoryContext);

  const [open, setOpen] = useState(false);
  const [newName, setNewName] = useState("");

  const [tab, setTab] = useState("all");
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("newest");

  // ADD CATEGORY (FIXED)
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

  // DELETE CATEGORY (FIXED)
  const handleDeleteCategory = (id) => {
    deleteCategory(id);
  };

  // SAFE HELPERS
  const getCategoryProgress = (cat) => {
    const goals = cat.goals || [];

    if (goals.length === 0) return 0;

    const done = goals.filter((g) => g.completed).length;
    return Math.round((done / goals.length) * 100);
  };

  // STATS (SAFE)
  const total = categories.length;

  const active = categories.filter((c) =>
    (c.goals || []).some((g) => !g.completed)
  ).length;

  const completed = categories.filter(
    (c) =>
      (c.goals || []).length > 0 &&
      (c.goals || []).every((g) => g.completed)
  ).length;

  const progress =
    categories.length === 0
      ? 0
      : Math.round(
          categories.reduce(
            (acc, c) => acc + getCategoryProgress(c),
            0
          ) / categories.length
        );

  // FILTER (SAFE)
  const filtered = categories
    .filter((c) =>
      c.name.toLowerCase().includes(search.toLowerCase())
    )
    .filter((c) => {
      const goals = c.goals || [];

      if (tab === "all") return true;

      if (tab === "active")
        return goals.some((g) => !g.completed);

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
          width: "100%",
          color: "#1A3263",
          fontWeight: "bold",
          fontSize: { xs: "24px", md: "36px" },
          backgroundColor: "#e6eff7",
          borderRadius: 3,
          p: { xs: 1, sm: 2, md: 3 },
        }}
      >
        <Box>
          <Typography variant="h4">Categories</Typography>
          <Typography color="text.secondary">
            Monitor, analyze, and improve the performance of your categories
          </Typography>
        </Box>

        <Button variant="contained" onClick={() => setOpen(true)}>
          + New Category
        </Button>
      </Box>

      {/* STATS */}
      <Grid container spacing={3}>
        {[
          { title: "Categories", value: total },
          { title: "Active", value: active },
          { title: "Completed", value: completed },
          { title: "Avg Progress", value: progress + "%" },
        ].map((item, i) => (
          <Grid item xs={12} sm={6} md={3} key={i}>
            <Card
              sx={{
                width: 160,
                borderRadius: 3,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
              }}
            >
              <CardContent>
                <Typography variant="h4" fontWeight={700}>
                  {item.value}
                </Typography>
                <Typography color="text.secondary" mt={1}>
                  {item.title}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* FILTER */}
      <Card sx={{ p: 2, mt: 3, borderRadius: 3 }}>
        <Box display="flex" flexWrap="wrap" gap={2}>
          <Tabs value={tab} onChange={(e, v) => setTab(v)}>
            <Tab label="ALL" value="all" />
            <Tab label="ACTIVE" value="active" />
            <Tab label="COMPLETED" value="completed" />
            <Tab label="NEEDS ATTENTION" value="attention" />
          </Tabs>

          <TextField
            size="small"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <Select
            size="small"
            value={sort}
            onChange={(e) => setSort(e.target.value)}
          >
            <MenuItem value="newest">Newest</MenuItem>
            <MenuItem value="name">Name</MenuItem>
          </Select>
        </Box>
      </Card>

      {/* LIST */}
      <Card sx={{ p: 3, mt: 3, borderRadius: 3 }}>
        {filtered.length === 0 ? (
          <Typography color="text.secondary">
            No categories yet
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
                }}
              >
                <Typography fontWeight={600}>
                  #{i + 1} {cat.name}
                </Typography>

                <Typography variant="caption">
                  {(cat.goals || []).length} goals
                </Typography>

                <Typography mt={1}>
                  Progress: {getCategoryProgress(cat)}%
                </Typography>

                <Button
                  size="small"
                  color="error"
                  onClick={() => handleDeleteCategory(cat.id)}
                  sx={{ mt: 1 }}
                >
                  Delete
                </Button>
              </Card>
            ))}
          </Box>
        )}
      </Card>

      {/* DIALOG */}
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>Create Category</DialogTitle>

        <DialogContent>
          <TextField
            fullWidth
            label="Category Name"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
          />
        </DialogContent>

        <DialogActions>
          <Button onClick={() => setOpen(false)}>Cancel</Button>
          <Button variant="contained" onClick={handleAddCategory}>
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Categories;