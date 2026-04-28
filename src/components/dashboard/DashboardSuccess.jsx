import {
  Card,
  CardContent,
  Typography,
  Box,
  CardActions,
  Stack,
  useTheme,
} from "@mui/material";
import { useState, useEffect } from "react";
import FormClock from "../goal/form/FormClock";
import quotes from "../../data/quotes";
import { useLanguage } from "../../i18n/useLanguage";

export default function DashboardSuccess() {
  const theme = useTheme();
  const { lang } = useLanguage();
  const [quote, setQuote] = useState(null);

  const getRandomQuote = (language) => {
    const list = quotes[language] || [];
    if (list.length === 0) return null;

    const randomIndex = Math.floor(Math.random() * list.length);
    return list[randomIndex];
  };

  useEffect(() => {
    const updateQuote = () => {
      setQuote(getRandomQuote(lang));
    };

    updateQuote();

    const interval = setInterval(() => {
      updateQuote();
    }, 10000);

    return () => clearInterval(interval);
  }, [lang]);

  return (
    <Card
      sx={{
        width: "100%",
        bgcolor: "background.paper",
        color: "text.primary",
        boxShadow: theme.shadows[3],
        borderRadius: 3,
        p: { xs: 1, sm: 2, md: 3 },
        border: `1px solid ${theme.palette.divider}`,
      }}
    >
      <CardContent>
        {/* TITLE */}
        <Typography
          sx={{
            fontSize: { xs: "14px", md: "18px" },
            fontWeight: "bold",
            color: "primary.main",
            mb: 2,
          }}
        >
          {lang === "fa" ? "انگیزه روزانه" : "Daily Motivation"}
        </Typography>

        {/* QUOTE */}
        {quote ? (
          <Box>
            <Typography
              sx={{
                fontSize: { xs: "18px", md: "28px" },
                fontWeight: 500,
                lineHeight: 1.4,
                color: "text.primary",
              }}
            >
              {quote.text}
            </Typography>

            <Typography
              sx={{
                mt: 2,
                fontSize: { xs: "13px", md: "16px" },
                color: "text.secondary",
              }}
            >
              — {quote.author}
            </Typography>
          </Box>
        ) : (
          <Typography color="text.secondary">
            {lang === "fa" ? "نقل قولی پیدا نشد" : "No quotes found"}
          </Typography>
        )}
      </CardContent>

      {/* CLOCK SECTION */}
      <CardActions sx={{ p: 2 }}>
        <Stack
          sx={{
            width: "100%",
            textAlign: "center",
            borderRadius: 2,
            py: 1,
            bgcolor: "primary.main",
            color: "primary.contrastText",
            transition: "0.3s",
            "&:hover": {
              bgcolor: "primary.dark",
            },
          }}
        >
          <FormClock />
        </Stack>
      </CardActions>
    </Card>
  );
}
