import { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
const FormClock = () => {
  const [time, setTime] = useState(new Date());

  const getHour = time.getHours();
  const getMinute = time.getMinutes();
  const getSecond = time.getSeconds();
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  });
  const format = (num) => (num < 10 ? "0" + num : num);
  return (
    <Box sx={{ width: "100%" }}>
      <Typography variant="h6">
        <span className="text-1xl"> {format(getHour)}</span>:{" "}
        {format(getMinute)} : {format(getSecond)} <span>s</span>
      </Typography>
    </Box>
  );
};
export default FormClock;
