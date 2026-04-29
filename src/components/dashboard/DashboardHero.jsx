import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "../../i18n/useLanguage";

export default function DashboardHero() {
  const [userName] = useState("Maryam Mirzada");
  const navigate = useNavigate();
  const { t } = useLanguage();

  return (
    <Card
      sx={(theme) => ({
        width: "100%",
        maxWidth: 900,
        borderRadius: 2,

        // 🔥 reduced padding
        p: { xs: 1, sm: 1.5, md: 2 },

        backgroundColor:
          theme.palette.mode === "dark"
            ? theme.palette.background.paper
            : theme.palette.secondary.main,

        color: theme.palette.text.primary,
      })}
    >
      <CardContent sx={{ p: 1 }}>
        {/* Welcome */}
        <Typography
          sx={(theme) => ({
            fontSize: { xs: "13px", md: "14px" },
            color: theme.palette.text.secondary,
          })}
        >
          {t("welcomeUser")}, {userName}
        </Typography>

        {/* Title */}
        <Typography
          sx={(theme) => ({
            fontWeight: "bold",
            fontSize: { xs: "20px", md: "30px" }, // 🔥 smaller
            mt: 0.5,
            color: theme.palette.primary.main,
          })}
        >
          {t("dashboardTitle")}
        </Typography>

        {/* Description */}
        <Typography
          sx={(theme) => ({
            mt: 1,
            fontSize: { xs: "12px", md: "14px" }, // 🔥 smaller
            color: theme.palette.text.secondary,
          })}
        >
          {t("dashboardDesc")}
        </Typography>
      </CardContent>

      {/* Buttons */}
      <CardActions
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          gap: 1.5,
          p: 1.5,
        }}
      >
        {/* NEW GOAL */}
        <Button
          onClick={() => navigate("/form")}
          fullWidth
          sx={(theme) => ({
            py: 1,
            fontSize: "13px",
            backgroundColor: theme.palette.primary.main,
            color: "#fff",
            "&:hover": {
              backgroundColor: theme.palette.primary.dark,
            },
          })}
        >
          {t("newGoal")}
        </Button>

        {/* MANAGE */}
        <Button
          fullWidth
          sx={(theme) => ({
            py: 1,
            fontSize: "13px",
            border: `1.5px solid ${theme.palette.primary.main}`,
            color: theme.palette.primary.main,
            "&:hover": {
              backgroundColor:
                theme.palette.mode === "dark"
                  ? "rgba(255,255,255,0.05)"
                  : "rgba(26,50,99,0.08)",
            },
          })}
        >
          {t("manageGoal")}
        </Button>
      </CardActions>
    </Card>
  );
}