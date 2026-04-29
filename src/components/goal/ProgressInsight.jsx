import * as React from "react";
import PropTypes from "prop-types";
import LinearProgress from "@mui/material/LinearProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useLanguage } from "../../i18n/useLanguage";
import { useContext } from "react";
import { GoalContext } from "../../context/GoalContext";

function LinearProgressWithLabel(props) {
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Box sx={{ width: "100%", mr: 1 }}>
        <LinearProgress
          variant="determinate"
          aria-label="progress"
          {...props}
        />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography variant="body2" sx={{ color: "text.primary" }}>
          {`${Math.round(props.value)}%`}
        </Typography>
      </Box>
    </Box>
  );
}

LinearProgressWithLabel.propTypes = {
  value: PropTypes.number.isRequired,
};

export default function ProgressInsight() {
  const { t } = useLanguage();
  const { goals } = useContext(GoalContext);

  const safeGoals = goals || [];

  let progress = 0;

  if (safeGoals.length > 0) {
    const total = safeGoals.reduce(
      (sum, g) => sum + (Number(g.progress) || 0),
      0
    );

    progress = Math.round(total / safeGoals.length);
  }

  return (
    <Box sx={{ width: "100%" }}>
      <Typography variant="body1" color="#111" fontWeight="bold">
        {t("progress")} {progress}%
      </Typography>

      <LinearProgressWithLabel value={progress} />
    </Box>
  );
}