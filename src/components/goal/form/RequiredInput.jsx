import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";
import CreateGoal from "./CreateGoal";
import { useLanguage } from "../../../i18n/useLanguage";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function RequiredInput({ onAddGoal }) {
  const { t } = useLanguage();

  const sessions = ["Pages", "Minutes", "Hours"];
  const categories = ["Study", "Work", "Sport", "Health", "Hobby", "Finance"];
  const priorities = ["High", "Medium", "Low"];
  const goalTypes = ["Daily", "Count Base", "Time Based"];

  // states
  const [session, setSession] = useState("");
  const [priority, setPriority] = useState("");
  const [category, setCategory] = useState("");
  const [goalType, setGoalType] = useState("");
  const [title, setTitle] = useState("");
  const [target, setTarget] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [deadline, setDeadline] = useState("");
  const [description, setDescription] = useState("");

  const [errors, setErrors] = useState({});
  const [openConfirm, setOpenConfirm] = useState(false);
  const [tempGoal, setTempGoal] = useState(null);

  const handleCreateGoal = () => {
    let newError = {};

    if (!title) newError.title = "Required";
    if (!category) newError.category = "Required";
    if (!goalType) newError.goalType = "Required";
    if (!target) newError.target = "Required";
    if (!session) newError.session = "Required";
    if (!priority) newError.priority = "Required";
    if (!startDate) newError.startDate = "Required";
    if (!endDate) newError.endDate = "Required";
    if (!deadline) newError.deadline = "Required";

    if (startDate && endDate && startDate > endDate) {
      newError.endDate = "End date must be after start date";
    }

    setErrors(newError);

    if (Object.keys(newError).length === 0) {
      const newGoal = {
        title,
        category,
        goalType,
        target,
        session,
        priority,
        startDate,
        endDate,
        deadline,
        description,
      };

      setTempGoal(newGoal);
      setOpenConfirm(true);
    }
  };

  const handleCancel = () => {
    setTitle("");
    setCategory("");
    setGoalType("");
    setTarget("");
    setSession("");
    setPriority("");
    setStartDate("");
    setEndDate("");
    setDeadline("");
    setDescription("");
    setErrors({});
  };

  const onConfirm = () => {
    if (tempGoal) {
      onAddGoal?.(tempGoal);
    }

    handleCancel();
    setTempGoal(null);
    setOpenConfirm(false);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            label="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            error={!!errors.title}
            helperText={errors.title}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            select
            fullWidth
            label="Category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            error={!!errors.category}
            placeholder="Select Category"
            helperText={errors.category}
            sx={{ width: "200px" }}
          >
            {categories.map((item) => (
              <MenuItem key={item} value={item}>
                {item}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            select
            fullWidth
            label="Goal Type"
            value={goalType}
            onChange={(e) => setGoalType(e.target.value)}
            error={!!errors.goalType}
            helperText={errors.goalType}
            sx={{ width: "200px" }}
          >
            {goalTypes.map((item) => (
              <MenuItem key={item} value={item}>
                {item}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            type="number"
            label="Target"
            value={target}
            onChange={(e) => setTarget(e.target.value)}
            error={!!errors.target}
            helperText={errors.target}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <TextField
            select
            fullWidth
            label="Session"
            value={session}
            onChange={(e) => setSession(e.target.value)}
            error={!!errors.session}
            helperText={errors.session}
            sx={{ width: "170px" }}
          >
            {sessions.map((item) => (
              <MenuItem key={item} value={item}>
                {item}
              </MenuItem>
            ))}
          </TextField>
        </Grid>

        <Grid item xs={12} md={4}>
          <TextField
            select
            fullWidth
            label="Priority"
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
            error={!!errors.priority}
            helperText={errors.priority}
            sx={{ width: "170px" }}
          >
            {priorities.map((item) => (
              <MenuItem key={item} value={item}>
                {item}
              </MenuItem>
            ))}
          </TextField>
        </Grid>

        <Grid item xs={12} md={4}>
          <TextField
            fullWidth
            type="date"
            label="Start Date"
            InputLabelProps={{ shrink: true }}
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            error={!!errors.startDate}
            helperText={errors.startDate}
            sx={{ width: "200px" }}
          />
        </Grid>

        <Grid item xs={12} md={4}>
          <TextField
            fullWidth
            type="date"
            label="End Date"
            InputLabelProps={{ shrink: true }}
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            error={!!errors.endDate}
            helperText={errors.endDate}
            sx={{ width: "200px" }}
          />
        </Grid>

        <Grid item xs={12} md={4}>
          <TextField
            fullWidth
            type="date"
            label="Deadline"
            InputLabelProps={{ shrink: true }}
            value={deadline}
            onChange={(e) => setDeadline(e.target.value)}
            error={!!errors.deadline}
            helperText={errors.deadline}
            sx={{ width: "200px" }}
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <TextField
              multiline
              rows={3}
              label="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              sx={{
                width: "100%",
                maxWidth: 640,
              }}
            />
          </Box>
        </Grid>
      </Grid>
      <Box sx={{ display: "flex", gap: 2, justifyContent: "flex-end", mt: 2 }}>
        <Button variant="outlined" onClick={handleCancel}>
          Cancel
        </Button>

        <Button variant="contained" onClick={handleCreateGoal}>
          Submit
        </Button>
      </Box>
    </Box>
  );
}
