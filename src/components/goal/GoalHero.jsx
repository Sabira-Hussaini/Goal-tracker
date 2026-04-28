import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "../../i18n/useLanguage";

export default function GoalHero() {
  const [userName] = useState();
  const navigate = useNavigate();
  const { t } = useLanguage();

  return (
    <Card
      sx={(theme) => ({
        width: "100%",
        borderRadius: 3,
        p: { xs: 1, sm: 2, md: 3 },

        /* 🌙 Background fully theme-aware */
        backgroundColor:
          theme.palette.mode === "dark"
            ? theme.palette.background.paper
            : theme.palette.secondary.main,

        color: theme.palette.text.primary,
      })}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
        }}
      >
        <CardContent>
          {/* TITLE */}
          <Typography
            sx={(theme) => ({
              fontWeight: "bold",
              fontSize: { xs: "24px", md: "36px" },
              mt: 1,

              color:
                theme.palette.mode === "dark"
                  ? theme.palette.text.primary
                  : theme.palette.primary.main,
            })}
          >
            {t("allGoals")}
          </Typography>

          {/* DESCRIPTION */}
          <Typography
            variant="body2"
            sx={(theme) => ({
              mt: 2,
              fontSize: { xs: "13px", md: "15px", width: "30rem" },

              color:
                theme.palette.mode === "dark"
                  ? theme.palette.text.secondary
                  : "#333",
            })}
          >
            {t("goalsDescription")}
          </Typography>
        </CardContent>

        {/* ACTIONS */}
        <CardActions
          sx={{
            display: "flex",
            justifyContent: "flex-end", // ✅ می‌بره سمت راست
            gap: 2,
            p: 2,
            width: "100%",
            mt: -20,
          }}
        >
          {/* NEW GOAL */}
          <Button
            sx={(theme) => ({
              height: 42,
              minWidth: 200, // ✅ اندازه ثابت و تمیز
              fontSize: "14px",
              borderRadius: "14px",

              backgroundColor: theme.palette.primary.main,
              color: "#fff",

              "&:hover": {
                backgroundColor: theme.palette.primary.dark,
              },
            })}
            onClick={() => navigate("/form")}
          >
            {t("newGoal")}
          </Button>

          {/* MANAGE */}
          <Button
            sx={(theme) => ({
              height: 42,
              minWidth: 200, // ✅ هم‌اندازه دکمه اول
              fontSize: "14px",
              borderRadius: "14px",

              border: `2px solid ${theme.palette.primary.main}`,
              color: theme.palette.primary.main,

              "&:hover": {
                backgroundColor: "rgba(26,50,99,0.08)",
              },
            })}
          >
            {t("manageGoal")}
          </Button>
        </CardActions>
      </Box>
    </Card>
  );
}
