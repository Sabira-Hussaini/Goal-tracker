import { Box } from "@mui/material";
import Appearance from "../components/settings/Appearance";
import PreferencesCard from "../components/settings/PreferencesCard";

export default function Settings() {
  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        gap: 3, 
        p: { xs: 1, sm: 2, md: 3 },
        boxSizing: "border-box",
        overflowX: "hidden",
      }}
    >
      <Appearance />
      <PreferencesCard />
    </Box>
  );
}