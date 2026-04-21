import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Stack from "@mui/material/Stack";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useState, useEffect } from "react";
import quotes from "../../data/quotes";
import FormClock from "../goal/form/FormClock";

export default function DashboardSuccess() {
  const [quote, setQuote] = useState(null);

  const getRandomQuote = () => {
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
          Daily Motivation
        </Typography>

        {/* Quote */}
        <Box>
          {quote && (
            <>
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
            </>
          )}
        </Box>
      </CardContent>

      {/* Button */}
      <CardActions
        sx={{
          p: 2,
        }}
      >
        <Stack
          fullWidth
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
