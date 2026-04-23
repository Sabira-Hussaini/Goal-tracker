import { Card, CardContent, Box, Typography } from "@mui/material";
import EmptyState from "./EmptyState";
import GoalCard from "./form/GoalCard";

const GoalList = ({ goals = [], filter = "all", search = "" }) => {
  let filtered = [...goals];

  // filter
  if (filter !== "all") {
    filtered = filtered.filter((g) => g.status === filter);
  }

  // search
  filtered = filtered.filter((g) =>
    g?.title?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Card sx={{ mt: 2, borderRadius: 3 }}>
      <CardContent>
        {/* EMPTY STATE */}
        {filtered.length === 0 ? (
          <Typography
            textAlign="center"
            sx={{ py: 5, color: "gray", fontSize: "18px" }}
          >
            گولی وجود ندارد
          </Typography>
        ) : (
          /* GOALS LIST */
          <Box className="grid grid-cols-3 gap-4 mt-5">
            {filtered.map((goal) => (
              <GoalCard key={goal.id || goal.title} goal={goal} />
            ))}
          </Box>
        )}
      </CardContent>
    </Card>
  );
};

export default GoalList;
