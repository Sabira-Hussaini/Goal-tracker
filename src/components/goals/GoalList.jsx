import { Card, CardContent, Box, Typography } from "@mui/material";
import EmptyState from "./EmptyState";

const GoalList = ({ goals, filter, search, sort }) => {
  let filtered = [...goals];

  if (filter !== "all") {
    filtered = filtered.filter((g) => g.status === filter);
  }

  filtered = filtered.filter((g) =>
    g.title.toLowerCase().includes(search.toLowerCase())
  );

  if (filtered.length === 0) {
    return (
      <Card sx={{ mt: 2, borderRadius: 3 }}>
        <CardContent>
          <EmptyState />
        </CardContent>
      </Card>
    );
  }

  return (
    <Card sx={{ mt: 2, borderRadius: 3 }}>
      <CardContent>
        {filtered.map((goal) => (
          <Box
            key={goal.id}
            sx={{
              p: 2,
              mb: 2,
              borderRadius: 2,
              bgcolor: "#f9f9f9",
            }}
          >
            <Typography fontWeight="bold">
              {goal.title}
            </Typography>
          </Box>
        ))}
      </CardContent>
    </Card>
  );
};

export default GoalList;