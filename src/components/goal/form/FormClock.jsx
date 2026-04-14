import { useState, useEffect } from "react";
import { Box } from "@mui/material";
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
    <Box sx={{ width: "100%", backgroundColor: "red" }}>
      {format(getHour)} - {format(getMinute)} - {format(getSecond)}
    </Box>
  );
};
export default FormClock;
