import { Card, CardContent, Box, Typography } from "@mui/material";
import GoalCard from "./form/GoalCard";
import { useContext } from "react";
import { GoalContext } from "../../context/GoalContext";

const GoalList = ({ filter = "all", search = "" }) => {
  const { goals } = useContext(GoalContext);

  let filtered = [...goals];

  // Filter by status
  if (filter !== "all") {
    filtered = filtered.filter(
      (g) => (g.status || "active").toLowerCase() === filter
    );
  }

  // Search by title
  filtered = filtered.filter((g) =>
    g?.title?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Card sx={{ mt: 2, borderRadius: 3 }}>
      <CardContent>
        {filtered.length === 0 ? (
          <Typography
            textAlign="center"
            sx={{ py: 5, color: "gray", fontSize: "18px" }}
          >
            No Goal
          </Typography>
        ) : (
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
              gap: 2,
              mt: 2,
            }}
          >
            {filtered.map((goal) => (
              <GoalCard key={goal.id} goal={goal} />
            ))}
          </Box>
        )}
      </CardContent>
    </Card>
  );
};

export default GoalList;
