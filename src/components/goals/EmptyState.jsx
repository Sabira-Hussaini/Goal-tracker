import { Box, Typography, Button } from "@mui/material";

const EmptyState = ({ onCreate }) => {
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
        onClick={onCreate}
      >
        NEW GOAL
      </Button>
    </Box>
  );
};

export default EmptyState;