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

  const [Session, setSession] = useState("");
  const [priority, setPriority] = useState("");
  const [errors, setErrors] = useState({});

  const Sessions = ["Pages", "Minutes", "Hours"];
  const categories = ["Study", "Work", "Sport", "Health", "Hobby", "Finance"];
  const priorities = ["High", "Medium", "Low"];
  const goalTypes = ["Daily", "Count Base", "Time Based"];

  const [openConfirm, setOpenConfirm] = useState(false);
  const [category, setCategory] = useState("");
  const [goalType, setGoalType] = useState("");
  const [title, setTitle] = useState("");
  const [target, setTarget] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [deadline, setDeadline] = useState("");
  const [description, setDescription] = useState("");
  const [tempGoal, setTempGoal] = useState(null);

  const handleCreateGoal = () => {
    let newError = {};

    if (!title) newError.title = t("titleRequired") || "Title is required";
    if (!category) newError.category = t("categoryRequired") || "Category is required";
    if (!goalType) newError.goalType = t("goalTypeRequired") || "Goal Type is required";
    if (!target) newError.target = t("targetRequired") || "Target is required";
    if (!Session) newError.session = t("sessionRequired") || "Session is required";
    if (!priority) newError.priority = t("priorityRequired") || "Priority is required";
    if (!startDate) newError.startDate = t("startDateRequired") || "Start date is required";
    if (!endDate) newError.endDate = t("endDateRequired") || "End date is required";
    if (!deadline) newError.deadline = t("deadlineRequired") || "Deadline is required";

    if (startDate && endDate && startDate > endDate) {
      newError.endDate = t("endDateAfter") || "End date must be after Start date";
    }

    if (endDate && deadline && endDate !== deadline) {
      newError.deadline = t("deadlineMatch") || "Deadline must be same as End Date";
    }

    setErrors(newError);

    if (Object.keys(newError).length === 0) {
      const newGoal = {
        title,
        goalType,
        category,
        deadline,
        startDate,
        endDate,
        description,
        target,
        priority,
        session: Session,
      };

      setTempGoal(newGoal);
      setOpenConfirm(true);
      console.log(newGoal);
    }
  };

  const handleClick = () => {
    handleCreateGoal();
  };

  const handleCancel = () => {
    setTitle("");
    setGoalType("");
    setCategory("");
    setDeadline("");
    setSession("");
    setPriority("");
    setDescription("");
    setEndDate("");
    setTarget("");
    setStartDate("");
  };

  const onConfirm = () => {
    if (tempGoal) {
      onAddGoal?.(tempGoal);
    }

    setTitle("");
    setGoalType("");
    setCategory("");
    setTarget("");
    setSession("");
    setPriority("");
    setStartDate("");
    setEndDate("");
    setDeadline("");
    setDescription("");
    setTempGoal(null);

    setOpenConfirm(false);
  };

  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container justifyContent="space-between" alignItems="center">
        <Grid item xs={8}>
          <Item elevation={0} sx={{ color: "#799EFF" }}>
            {t("requiredField") || "Required Field"}
          </Item>
        </Grid>

        <Grid item xs={4}>
          <Item elevation={0} sx={{ backgroundColor: "#799EFF", color: "white" }}>
            {t("required") || "Required"}
          </Item>
        </Grid>
      </Grid>

      <Box sx={{ flexGrow: 1, paddingTop: "12px" }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label={t("title") || "Title"}
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              error={!!errors.title}
              helperText={errors.title}
              sx={{ width: "230px" }}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField
              select
              label={t("category") || "Category"}
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              fullWidth
              error={!!errors.category}
              helperText={errors.category}
              sx={{ width: "230px" }}
            >
              {categories.map((option) => (
                <MenuItem key={option} value={option}>
                  {t(option.toLowerCase()) || option}
                </MenuItem>
              ))}
            </TextField>
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField
              select
              label={t("goalType") || "Goal Type"}
              value={goalType}
              onChange={(e) => setGoalType(e.target.value)}
              fullWidth
              error={!!errors.goalType}
              helperText={errors.goalType}
              sx={{ width: "130px" }}
            >
              {goalTypes.map((option) => (
                <MenuItem key={option} value={option}>
                  {t(option.replace(" ", "").toLowerCase()) || option}
                </MenuItem>
              ))}
            </TextField>
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label={t("target") || "Target"}
              type="number"
              value={target}
              onChange={(e) => setTarget(e.target.value)}
              error={!!errors.target}
              helperText={errors.target}
              sx={{ width: "230px" }}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField
              select
              label={t("session") || "Session"}
              value={Session}
              onChange={(e) => setSession(e.target.value)}
              fullWidth
              error={!!errors.session}
              helperText={errors.session}
              sx={{ width: "140px" }}
            >
              {Sessions.map((option) => (
                <MenuItem key={option} value={option}>
                  {t(option.toLowerCase()) || option}
                </MenuItem>
              ))}
            </TextField>
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField
              select
              label={t("priority") || "Priority"}
              value={priority}
              onChange={(e) => setPriority(e.target.value)}
              fullWidth
              error={!!errors.priority}
              helperText={errors.priority}
              sx={{ width: "140px" }}
            >
              {priorities.map((option) => (
                <MenuItem key={option} value={option}>
                  {t(option.toLowerCase()) || option}
                </MenuItem>
              ))}
            </TextField>
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField
              label={t("startDate") || "Start Date"}
              type="date"
              fullWidth
              InputLabelProps={{ shrink: true }}
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              error={!!errors.startDate}
              helperText={errors.startDate}
              sx={{ width: "210px" }}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField
              label={t("endDate") || "End Date"}
              type="date"
              fullWidth
              InputLabelProps={{ shrink: true }}
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              error={!!errors.endDate}
              helperText={errors.endDate}
              sx={{ width: "210px" }}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField
              label={t("deadline") || "Deadline"}
              type="date"
              fullWidth
              InputLabelProps={{ shrink: true }}
              value={deadline}
              onChange={(e) => setDeadline(e.target.value)}
              error={!!errors.deadline}
              helperText={errors.deadline}
              sx={{ width: "210px" }}
            />
          </Grid>
        </Grid>
      </Box>

      <Box>
        <TextField
          label={t("description") || "Description"}
          multiline
          rows={3}
          fullWidth
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          sx={{ marginTop: "12px" }}
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
        <Button variant="outlined" onClick={handleCancel}>
          {t("cancel") || "Cancel"}
        </Button>

        <Button variant="contained" onClick={handleClick}>
          {t("create") || "Create"}
        </Button>
      </Box>

      <CreateGoal
        open={openConfirm}
        onClose={() => setOpenConfirm(false)}
        onConfirm={onConfirm}
      />
    </Box>
  );
}