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

  const [session, setSession] = useState("");
  const [priority, setPriority] = useState("");
  const [openConfirm, setOpenConfirm] = useState(false);
  const [category, setCategory] = useState("");
  const [goalType, setGoalType] = useState("");
  const [title, setTitle] = useState("");
  const [target, setTarget] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [deadline, setDeadline] = useState("");
  const [description, setDescription] = useState("");
  const [errors, setErrors] = useState({});
  const [tempGoal, setTempGoal] = useState(null);

  const handleCreateGoal = () => {
    let newError = {};

    if (!title) newError.title = t("titleRequired");
    if (!category) newError.category = t("categoryRequired");
    if (!goalType) newError.goalType = t("goalTypeRequired");
    if (!target) newError.target = t("targetRequired");
    if (!session) newError.session = t("sessionRequired");
    if (!priority) newError.priority = t("priorityRequired");
    if (!startDate) newError.startDate = t("startDateRequired");
    if (!endDate) newError.endDate = t("endDateRequired");
    if (!deadline) newError.deadline = t("deadlineRequired");

    if (startDate && endDate && startDate > endDate) {
      newError.endDate = t("endDateAfter");
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

  const handleConfirm = () => {
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
            label={t("title")}
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
            label={t("category")}
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            error={!!errors.category}
            helperText={errors.category}
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
            label={t("goalType")}
            value={goalType}
            onChange={(e) => setGoalType(e.target.value)}
            error={!!errors.goalType}
            helperText={errors.goalType}
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
            label={t("target")}
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
            label={t("session")}
            value={session}
            onChange={(e) => setSession(e.target.value)}
            error={!!errors.session}
            helperText={errors.session}
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
            label={t("priority")}
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
            error={!!errors.priority}
            helperText={errors.priority}
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
            label={t("startDate")}
            InputLabelProps={{ shrink: true }}
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            error={!!errors.startDate}
            helperText={errors.startDate}
          />
        </Grid>

        <Grid item xs={12} md={4}>
          <TextField
            fullWidth
            type="date"
            label={t("endDate")}
            InputLabelProps={{ shrink: true }}
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            error={!!errors.endDate}
            helperText={errors.endDate}
          />
        </Grid>

        <Grid item xs={12} md={4}>
          <TextField
            fullWidth
            type="date"
            label={t("deadline")}
            InputLabelProps={{ shrink: true }}
            value={deadline}
            onChange={(e) => setDeadline(e.target.value)}
            error={!!errors.deadline}
            helperText={errors.deadline}
          />
        </Grid>

        <Grid item xs={12} md={12}>
          <TextField
            fullWidth
            multiline
            rows={3}
            label={t("description")}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </Grid>

        <Grid item xs={12}>
          <Item>{t("requiredField")}</Item>
        </Grid>
      </Grid>

      <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 2, gap: 1 }}>
        <Button onClick={handleCancel}>{t("cancel")}</Button>
        <Button variant="contained" onClick={handleCreateGoal}>
          {t("create")}
        </Button>
      </Box>

      <CreateGoal
        open={openConfirm}
        onClose={() => setOpenConfirm(false)}
        onConfirm={handleConfirm}
      />
    </Box>
  );
}
