import * as React from "react";
import PropTypes from "prop-types";
import LinearProgress from "@mui/material/LinearProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useLanguage } from "../../i18n/useLanguage";

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
  const [progress, setProgress] = React.useState(0);
  const { t } = useLanguage();

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) =>
        prev >= 100 ? 0 : prev + 10
      );
    }, 800);

    return () => clearInterval(timer);
  }, []);

  return (
    <Box sx={{ width: "100%" }}>
      <Typography variant="body1" color="#111" fontWeight="bold">
        {t("progress")} {progress}%
      </Typography>

      <LinearProgressWithLabel value={progress} />
    </Box>
  );
}