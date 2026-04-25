import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import FormContent from "./FormContent";
import FormHero from "./FormHero";
import DashboardSuccess from "../../dashboard/DashboardSuccess";
import FormClock from "./FormClock";
import MediaControlCard from "./music";


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: (theme.vars ?? theme).palette.text.secondary,
  ...theme.applyStyles("dark", {
    backgroundColor: "#1A2027",
  }),
}));

export default function Form() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <FormHero />
      <Grid container spacing={2}>
        <Grid size={{ xs: 12, md: 8 }}>
          <Item size={{ md: 12 }} elevation={0}>
            <FormContent />
          </Item>
        </Grid>
        <Grid size={{ xs: 6, md: 4 }}>
          <Item
            elevation={0}
            sx={{ background: "transparent", boxShadow: "none" }}
          >
            <DashboardSuccess />
          </Item>

          <Item
            elevation={0}
            sx={{
              
              background: "transparent",
              boxShadow: "none",
            }}
          >
            <MediaControlCard />
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
