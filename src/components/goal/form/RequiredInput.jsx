import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { Typography, useScrollTrigger } from "@mui/material";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
export default function RequiredInput() {
  const [Session, setSession] = useState("");
  const [priority, setPriority] = useState("");
  const Sessions = ["Pages", "Minutes", "Hours"];
  const categories = [
    "Study",
    "Work",
    "Sport",
    "Health",
    "Hobby",
    "Finance",
    "",
  ];
  const priorities = ["High", "Medium", "Low"];
  const goalTypes = ["Daily", "Count Base", "Time Based"];
  const [category, setCategory] = useState("");
  const [goalType, setGoalType] = useState("");
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container justifyContent="space-between" alignItems="center">
        <Grid item xs={8}>
          <Item
            elevation={0}
            sx={{
              color: "#799EFF",

              boxShadow: "0px",
            }}
          >
            Required Field
          </Item>
        </Grid>

        <Grid item xs={4}>
          <Item
            elevation={0}
            sx={{ backgroundColor: "#799EFF", color: "white" }}
          >
            Required
          </Item>
        </Grid>
      </Grid>
      <Box sx={{ flexGrow: 1, paddingTop: "12px" }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <TextField fullWidth required label="Title" />
          </Grid>

          <Grid item xs={12} md={6} sx={{ width: "230px" }}>
            <TextField
              select
              label="Select Category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
              fullWidth
            >
              {categories.map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12} md={6} sx={{ width: "140px" }}>
            <TextField
              select
              label="Goal Type"
              value={goalType}
              onChange={(e) => setGoalType(e.target.value)}
              required
              fullWidth
            >
              {goalTypes.map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <TextField fullWidth required label="Target" type="number" />
              </Grid>

              <Grid item xs={12} md={6} sx={{ width: "230px" }}>
                <TextField
                  select
                  label="Sessions"
                  value={Session}
                  onChange={(e) => setSession(e.target.value)}
                  required
                  fullWidth
                >
                  {categories.map((option) => (
                    <MenuItem key={option} value={option}>
                      {option}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>

              <Grid item xs={12} md={6} sx={{ width: "140px" }}>
                <TextField
                  select
                  label="priority"
                  value={priority}
                  onChange={(e) => setPriority(e.target.value)}
                  required
                  fullWidth
                >
                  {priorities.map((option) => (
                    <MenuItem key={option} value={option}>
                      {option}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
            </Grid>
          </Box>
          <Grid item xs={12} md={6}>
            <TextField
              label="Start Date"
              type="date"
              fullWidth
              InputLabelProps={{ shrink: true }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              label="End Date"
              type="date"
              fullWidth
              InputLabelProps={{ shrink: true }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              label="Deadline"
              type="date"
              fullWidth
              InputLabelProps={{ shrink: true }}
            />
          </Grid>
        </Grid>
      </Box>

      <Box>
        <TextField
          label="Description"
          multiline
          rows={3}
          sx={{ width: "100%", marginTop: "12px" }}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "end",
          gap: "10px",
          marginTop: "14px",
        }}
      >
        <Button variant="outlined" sx={{ width: "140px" }}>
          Cancel
        </Button>
        <Button variant="contained" sx={{ width: "140px" }}>
          Create Goal
        </Button>
      </Box>
    </Box>
  );
}
