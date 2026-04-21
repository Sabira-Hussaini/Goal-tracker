import { Card, CardContent, Typography, Box, CardActions, Stack } from "@mui/material";
import { useState, useEffect } from "react";
import { useLanguage } from "../../i18n/useLanguage";
import FormClock from "../goal/form/FormClock";

export default function DashboardSuccess() {
  const [quote, setQuote] = useState(null);
  const { t } = useLanguage();

  const getRandomQuote = () => {
    const quotes = t("quotes", { returnObjects: true }) || [];
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
  };

  useEffect(() => {
    setQuote(getRandomQuote());

    const interval = setInterval(() => {
      setQuote(getRandomQuote());
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Card
      sx={{
        width: "90%",
        bgcolor: "background.paper",
        color: "text.primary",
        backgroundImage: "none",
        boxShadow: 3,
        borderRadius: 3,
        p: { xs: 1, sm: 2, md: 3 },
      }}
    >
      <CardContent>
        {/* Title */}
        <Typography
          sx={{
            fontSize: { xs: "14px", md: "18px" },
            fontWeight: "bold",
            color: "#1A3263",
            mb: 2,
          }}
        >
          {t("dailyMotivation")}
        </Typography>

        {/* Quote */}
        {quote && (
          <Box>
            <Typography
              sx={{
                fontSize: { xs: "18px", md: "28px" },
                fontWeight: "500",
                lineHeight: 1.4,
                color: "#111",
              }}
            >
              {quote.text}
            </Typography>

            <Typography
              sx={{
                mt: 2,
                fontSize: { xs: "13px", md: "16px" },
                color: "gray",
              }}
            >
              — {quote.author}
            </Typography>
          </Box>
        )}
      </CardContent>

      <CardActions sx={{ p: 2 }}>
        <Stack
          sx={{
            backgroundColor: "#1A3263",
            color: "white",
            width: "100%",
            textAlign: "center",
            borderRadius: "10px",
            fontSize: "14px",
            py: 1,
            "&:hover": {
              backgroundColor: "#13264d",
            },
          }}
        >
          <FormClock />
        </Stack>
      </CardActions>
    </Card>
  );
}