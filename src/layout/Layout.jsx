import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import { Box } from "@mui/material";

const Layout = () => {
  return (
    <Box sx={{ m: 0, p: 0 }}>
      <Navbar />

      <Box sx={{ p: 2 }}>
        <Outlet />
      </Box>
    </Box>
  );
};

export default Layout;
