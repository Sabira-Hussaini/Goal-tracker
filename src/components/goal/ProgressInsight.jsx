import * as React from "react";
import PropTypes from "prop-types";
import LinearProgress from "@mui/material/LinearProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useLanguage } from "../../i18n/useLanguage";
import { useContext } from "react";
import { GoalContext } from "../../context/GoalContext";

function LinearProgressWithLabel({ value, color }) {
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Box sx={{ width: "100%", mr: 1 }}>
        <LinearProgress
          variant="determinate"
          value={value}
          sx={{
            "& .MuiLinearProgress-bar": {
              backgroundColor: color,
            },
          }}
        />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography variant="body2" sx={{ color: "text.primary" }}>
          {`${Math.round(value)}%`}
        </Typography>
      </Box>
    </Box>
  );
}

LinearProgressWithLabel.propTypes = {
  value: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
};

export default function ProgressInsight() {
  const { t } = useLanguage();
  const { goals } = useContext(GoalContext);

  const safeGoals = goals || [];

  // 🧠 Get last active date (you can improve this later with backend/localStorage)
  const lastActiveDate = safeGoals?.[0]?.lastActiveDate;

  let progress = 0;

  // 📅 Calculate days difference
  const getDaysDiff = (date) => {
    if (!date) return 999;

    const last = new Date(date);
    const now = new Date();

    const diffTime = now - last;
    return Math.floor(diffTime / (1000 * 60 * 60 * 24));
  };

  const daysInactive = getDaysDiff(lastActiveDate);

  // 🎯 Activity-based progress + color
  progress = 100;
  let color = "green";

  if (daysInactive <= 0) {
    progress = 100;
    color = "green";
  } else if (daysInactive <= 2) {
    progress = 70;
    color = "orange";
  } else if (daysInactive <= 5) {
    progress = 40;
    color = "orange";
  } else {
    progress = 10;
    color = "red";
  }

  return (
    <Box sx={{ width: "100%" }}>
      <Typography variant="body1" color="#111" fontWeight="bold">
        {t("progress")} {progress}%
      </Typography>

      <LinearProgressWithLabel value={progress} color={color} />
    </Box>
  );
}