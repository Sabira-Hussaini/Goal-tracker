import {
  Card,
  CardContent,
  Box,
  Tabs,
  Tab,
  TextField,
  InputAdornment,
  MenuItem,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const GoalFilters = ({
  filter,
  setFilter,
  search,
  setSearch,
  sort,
  setSort,
}) => {
  return (
    <Card
      sx={{
        borderRadius: 3,
        boxShadow: 2,
      }}
    >
      <CardContent>

        {/* Tabs */}
        <Tabs
          value={filter}
          onChange={(e, val) => setFilter(val)}
          variant="scrollable"
        >
          <Tab label="All" value="all" />
          <Tab label="Active" value="active" />
          <Tab label="Paused" value="paused" />
          <Tab label="Completed" value="completed" />
        </Tabs>

        {/* Search + Sort */}
        <Box
          mt={2}
          display="flex"
          gap={2}
          flexDirection={{ xs: "column", md: "row" }}
        >
          <TextField
            fullWidth
            placeholder="Search goals..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />

          <TextField
            select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            sx={{ minWidth: { xs: "100%", md: 200 } }}
          >
            <MenuItem value="newest">Newest</MenuItem>
            <MenuItem value="progress">Progress %</MenuItem>
            <MenuItem value="category">Category</MenuItem>
          </TextField>
        </Box>

      </CardContent>
    </Card>
  );
};

export default GoalFilters;