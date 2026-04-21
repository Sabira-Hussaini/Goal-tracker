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
      sx={{
        width: "93%",
        maxWidth: 900,
        backgroundColor: "#e6eff7",
        borderRadius: 3,
        p: { xs: 1, sm: 2, md: 3 },
      }}
    >
      <CardContent>
        {/* Welcome Text */}
        <Typography
          variant="body1"
          sx={{
            fontSize: { xs: "14px", md: "16px" },
          }}
        >
          {t("welcomeUser")}, {userName}
        </Typography>

        {/* Title */}
        <Typography
          sx={{
            color: "#1A3263",
            fontWeight: "bold",
            fontSize: { xs: "24px", md: "36px" },
            mt: 1,
          }}
        >
          {t("dashboardTitle")}
        </Typography>

        {/* Description */}
        <Typography
          variant="body2"
          sx={{
            mt: 2,
            fontSize: { xs: "13px", md: "15px" },
            color: "#333",
          }}
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
        <Button
          onClick={() => navigate("/form")}
          fullWidth
          sx={{
            backgroundColor: "#1A3263",
            color: "white",
            border: "2px solid #1A3263",
            py: 1.2,
            fontSize: "14px",
            "&:hover": {
              backgroundColor: "#13264d",
            },
          }}
        >
          {t("newGoal")}
        </Button>

        <Button
          fullWidth
          sx={{
            border: "2px solid #1A3263",
            color: "#000",
            py: 1.2,
            fontSize: "14px",
          }}
        >
          {t("manageGoal")}
        </Button>
      </CardActions>
    </Card>
  );
}