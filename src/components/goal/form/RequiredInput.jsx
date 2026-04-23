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

    if (!title) newError.title = t("titleRequired");
    if (!category) newError.category = t("categoryRequired");
    if (!goalType) newError.goalType = t("goalTypeRequired");
    if (!target) newError.target = t("targetRequired");
    if (!Session) newError.session = t("sessionRequired");
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
    }
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

  const handleConfirm = () => {
    if (tempGoal) {
      onAddGoal?.(tempGoal);
    }

    setOpenConfirm(false);
    setTempGoal(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>

      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Item>{t("requiredField")}</Item>
        </Grid>

        <Grid item xs={12} md={6}>
          <TextField
            label={t("title")}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            error={!!errors.title}
            helperText={errors.title}
            fullWidth
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <TextField
            select
            label={t("category")}
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            fullWidth
            error={!!errors.category}
            helperText={errors.category}
          >
            {categories.map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </TextField>
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