import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const EmptyState = () => {
     const navigate = useNavigate();
  return (
    <Box
      textAlign="center"
      py={6}
      sx={{
        bgcolor: "background.paper",
        borderRadius: 3,
      }}
    >
      <Typography variant="h6">No goals found</Typography>

      <Typography color="text.secondary" mt={1}>
        Try changing filters or create a new goal.
      </Typography>

      <Button
        variant="contained"
        sx={{ mt: 2 }}
        onClick={() => navigate("/form")}
      >
        NEW GOAL
      </Button>
    </Box>
  );
};

export default EmptyState;