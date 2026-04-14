import { Box } from "@mui/material";
import DashboardHero from "../components/dashboard/DashboardHero";
import DashboardSuccess from "../components/dashboard/DashboardSuccess";
const Dashboard = () => {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "2fr 1fr",
        gap: 2,
      }}
    >
      <DashboardHero />
      <DashboardSuccess />
    </Box>
  );
};

export default Dashboard;
