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
import { useLanguage } from "../../i18n/useLanguage";

const GoalFilters = ({
  filter = "all",
  setFilter,
  search = "",
  setSearch,
  sort = "newest",
  setSort,
}) => {
  const { t } = useLanguage();

  // ✅ SAFE HANDLERS (prevents crashes)
  const handleSearchChange = (e) => {
    setSearch?.(e.target.value.trimStart());
  };

  const handleSortChange = (e) => {
    setSort?.(e.target.value);
  };

  const handleFilterChange = (e, val) => {
    setFilter?.(val);
  };

  return (
    <Card
      sx={{
        borderRadius: 3,
        bgcolor: "background.paper",
        color: "text.primary",
        backgroundImage: "none",
        boxShadow: 3,
        mt: 4,
      }}
    >
      <CardContent>
        <Tabs
          value={filter}
          onChange={handleFilterChange}
          variant="scrollable"
        >
          <Tab label={t("all")} value="all" />
          <Tab label={t("active")} value="active" />
          <Tab label={t("paused")} value="paused" />
          <Tab label={t("completed")} value="completed" />
        </Tabs>

        <Box
          mt={2}
          display="flex"
          gap={2}
          flexDirection={{ xs: "column", md: "row" }}
        >
          <TextField
            fullWidth
            placeholder={t("searchGoals")}
            value={search}
            onChange={handleSearchChange}
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
            onChange={handleSortChange}
            sx={{ minWidth: { xs: "100%", md: 200 } }}
          >
            <MenuItem value="newest">{t("newest")}</MenuItem>
            <MenuItem value="progress">{t("progress")}</MenuItem>
            <MenuItem value="category">{t("category")}</MenuItem>
          </TextField>
        </Box>
      </CardContent>
    </Card>
  );
};

export default GoalFilters;