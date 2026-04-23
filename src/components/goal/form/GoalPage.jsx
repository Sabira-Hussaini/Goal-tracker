import { useState } from "react";
import RequiredInput from "./RequiredInput";
import GoalCard from "./GoalCard";
import { Box } from "@mui/material";

export default function GoalPage() {
  const [goals, setGoals] = useState([]);

  const handleAddGoal = (goal) => {
    setGoals((prev) => [...prev, goal]);
  };

  return (
    <Box>
      {/* input */}
      <RequiredInput onAddGoal={handleAddGoal} />
      <GoalList goals={goals} />

      {/* cards */}
      <Box className="mt-5 grid grid-cols-3 gap-4">
        {goals.map((goal, index) => (
          <GoalCard key={index} goal={goal} />
        ))}
      </Box>
    </Box>
  );
}
