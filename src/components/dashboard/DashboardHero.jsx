import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "../../i18n/useLanguage";

export default function DashboardHero() {
  const [userName, setUserName] = useState("");
  const navigate = useNavigate();
  const { t } = useLanguage();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");

    if (!storedUser) return;

    try {
      const user = JSON.parse(storedUser);

      if (user?.name) {
        setUserName(user.name);
      }
    } catch (error) {
      console.log("User data is not valid JSON");
    }
  }, []);

  return (
    <Card
      sx={(theme) => ({
        width: "100%",
        maxWidth: 900,
        borderRadius: 2,

        p: { xs: 1, sm: 1.5, md: 2 },

        backgroundColor:
          theme.palette.mode === "dark"
            ? theme.palette.background.paper
            : theme.palette.secondary.main,

        color: theme.palette.text.primary,
      })}
    >
      <CardContent sx={{ p: 1 }}>
        <Typography
          sx={(theme) => ({
            fontSize: { xs: "13px", md: "14px" },
            color: theme.palette.text.secondary,
          })}
        >
          {t("welcomeUser")}, {userName}
        </Typography>
        <Typography
          sx={(theme) => ({
            fontWeight: "bold",
            fontSize: { xs: "20px", md: "30px" },
            mt: 0.5,
            color: theme.palette.primary.main,
          })}
        >
          {t("dashboardTitle")}
        </Typography>
        <Typography
          sx={(theme) => ({
            mt: 1,
            fontSize: { xs: "12px", md: "14px" },
            color: theme.palette.text.secondary,
          })}
        >
          {t("dashboardDesc")}
        </Typography>
      </CardContent>
      <CardActions
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          gap: 1.5,
          p: 1.5,
        }}
      >
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
          onClick={() => navigate("/goals#goal-list")}
        >
          {t("manageGoal")}
        </Button>
      </CardActions>
    </Card>
  );
}
