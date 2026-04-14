import { useState, useContext } from "react";
import { Box } from "@mui/material";
import { GoalContext } from "../context/GoalContext";

import GoalHero from "../components/goal/GoalHero";
import ShowProgress from "../components/goal/ShowProgress";
import GoalFilters from "../components/goals/GoalFilters";
import GoalList from "../components/goals/GoalList";

const Goals = () => {
  const { goals } = useContext(GoalContext);

  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("newest");

  return (
    <Box p={{ xs: 1, sm: 2, md: 3 }}>
      <GoalHero />
      <ShowProgress />

      <GoalFilters
        filter={filter}
        setFilter={setFilter}
        search={search}
        setSearch={setSearch}
        sort={sort}
        setSort={setSort}
      />

      <GoalList
        goals={goals}
        filter={filter}
        search={search}
        sort={sort}
      />
    </Box>
  );
};

export default Goals;