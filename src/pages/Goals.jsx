import { useState, useContext, useEffect } from "react";
import { Box } from "@mui/material";
import { GoalContext } from "../context/GoalContext";

import GoalHero from "../components/goal/GoalHero";
import ShowProgress from "../components/goal/ShowProgress";
import GoalFilters from "../components/goal/GoalFilters";
import GoalList from "../components/goal/GoalList";

const Goals = () => {
  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);
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
        id="goal-list"
      />
    </Box>
  );
};

export default Goals;
