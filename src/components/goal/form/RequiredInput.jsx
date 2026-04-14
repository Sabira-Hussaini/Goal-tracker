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
  const categories = ["Study", "Work", "Sport", "Health", "Hobby"];
  const goalTypes = ["Daily", "Monthly", "Yearly"];
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
        <Grid container>
          <Grid item xs={6}>
            <Box sx={{ p: 2 }}>
              <TextField required id="outlined-required" label="Title" />
            </Box>
          </Grid>

          <Grid item xs={6}>
            <Box sx={{ p: 2, width: "180px" }}>
              <TextField
                select
                label="Select Category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                required
                sx={{ width: "100%" }}
              >
                {categories.map((option) => (
                  <MenuItem key={option} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </TextField>
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box sx={{ p: 2, width: "140px" }}>
              <TextField
                select
                label="Goal Type"
                value={goalType}
                onChange={(e) => setGoalType(e.target.value)}
                required
                fullWidth
                sx={{ width: "100%" }}
              >
                {goalTypes.map((option) => (
                  <MenuItem key={option} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </TextField>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container>
          <Grid item xs={6}>
            <Box sx={{ p: 2 }}>
              <TextField
                label="Start Date"
                type="date"
                fullWidth
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Box>
          </Grid>

          <Grid item xs={6}>
            <Box sx={{ p: 2, width: "180px" }}>
              <TextField
                label="End Date"
                type="date"
                fullWidth
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box sx={{ p: 2, width: "180px" }}>
              <TextField
                label=" Didline"
                type="date"
                fullWidth
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box>
        <TextField
          label="Description"
          multiline
          rows={3}
          sx={{ px: "12px", width: "87%", padding: "10px" }}
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
