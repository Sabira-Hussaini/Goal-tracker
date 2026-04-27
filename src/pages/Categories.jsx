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

import { useState, useEffect } from "react";


const Categories = () => {
  
  const [categories, setCategories] = useState(() => {
    const data = localStorage.getItem("categories");
    return data ? JSON.parse(data) : [];
  });

  const [open, setOpen] = useState(false);
  const [newName, setNewName] = useState("");

  const [tab, setTab] = useState("all");
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("newest");

  // ✅ SAVE
  useEffect(() => {
    localStorage.setItem("categories", JSON.stringify(categories));
  }, [categories]);

  // ================= ADD =================
  const handleAddCategory = () => {
    if (!newName.trim()) return;

    const newCategory = {
      id: Date.now(),
      name: newName,
      goals: [],
      createdAt: Date.now(),
    };

    setCategories((prev) => [...prev, newCategory]);
    setNewName("");
    setOpen(false);
  };

  // ================= STATS =================
  const total = categories.length;
  const active = categories.filter(c => c.goals.length > 0).length;
  const completed = 0;
  const progress = 0;

  // ================= FILTER =================
  const filtered = categories
    .filter((c) =>
      c.name.toLowerCase().includes(search.toLowerCase())
    )
    .filter((c) => {
      if (tab === "all") return true;
      if (tab === "active") return c.goals.length > 0;
      if (tab === "completed") return false;
      if (tab === "attention") return c.goals.length === 0;
      return true;
    })
    .sort((a, b) => {
      if (sort === "newest") return b.createdAt - a.createdAt;
      if (sort === "name") return a.name.localeCompare(b.name);
      return 0;
    });

  // ================= UI =================
  return (
    <Box p={{ xs: 1, sm: 2, md: 3 }}>
      
      {/* ===== HEADER ===== */}
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        flexWrap="wrap"
        mb={3}
      >
        <Box>
          <Typography variant="h4">Categories</Typography>
          <Typography color="text.secondary">
            Track category performance
          </Typography>
        </Box>

        <Button variant="contained" onClick={() => setOpen(true)}>
          + New Category
        </Button>
      </Box>

      {/* ===== STATS CARDS ===== */}
      <Grid container spacing={2}>
  {[
    { title: "Categories", value: total },
    { title: "Active", value: active },
    { title: "Completed", value: completed },
    { title: "Avg Progress", value: progress + "%" },
  ].map((item, i) => (
    <Grid xs={12} md={3} key={i}>
      <Card sx={{ borderRadius: 3 }}>
        <CardContent>
          <Typography variant="h5">
            {item.value}
          </Typography>
          <Typography color="text.secondary">
            {item.title}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  ))}
</Grid>

      {/* ===== FILTER CARD ===== */}
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

      {/* ===== LIST ===== */}
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
                  {cat.goals.length} goals
                </Typography>

                <Typography mt={1}>
                  Progress: 0%
                </Typography>
              </Card>
            ))}
          </Box>
        )}
      </Card>

      {/* ===== DIALOG ===== */}
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
          <Button onClick={() => setOpen(false)}>
            Cancel
          </Button>
          <Button variant="contained" onClick={handleAddCategory}>
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Categories;