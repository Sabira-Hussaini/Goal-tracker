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
        borderRadius: 3,
        p: { xs: 1, sm: 2, md: 3 },

        /* 🌙 Theme background */
        backgroundColor:
          theme.palette.mode === "dark"
            ? theme.palette.background.paper
            : theme.palette.secondary.main,

        color: theme.palette.text.primary,
      })}
    >
      <CardContent>
        {/* Welcome */}
        <Typography
          sx={(theme) => ({
            fontSize: { xs: "14px", md: "16px" },
            color: theme.palette.text.secondary,
          })}
        >
          {t("welcomeUser")}, {userName}
        </Typography>

        {/* Title */}
        <Typography
          sx={(theme) => ({
            fontWeight: "bold",
            fontSize: { xs: "24px", md: "36px" },
            mt: 1,

            color: theme.palette.primary.main,
          })}
        >
          {t("dashboardTitle")}
        </Typography>

        {/* Description */}
        <Typography
          sx={(theme) => ({
            mt: 2,
            fontSize: { xs: "13px", md: "15px" },
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
          gap: 2,
          p: 2,
        }}
      >
        {/* NEW GOAL */}
        <Button
          onClick={() => navigate("/form")}
          fullWidth
          sx={(theme) => ({
            py: 1.2,
            fontSize: "14px",

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
            py: 1.2,
            fontSize: "14px",

            border: `2px solid ${theme.palette.primary.main}`,
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
