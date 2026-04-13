import { Card, CardContent, Typography, LinearProgress } from "@mui/material";

const CompletionInsight = ({ total, completed }) => {
  const percent = total === 0 ? 0 : (completed / total) * 100;

  return (
    <Card sx={{ mb: 2 }}>
      <CardContent>
        <Typography variant="h6">Completion Insight</Typography>

        <Typography variant="h4" mt={1}>
          {percent.toFixed(0)}%
        </Typography>

        <Typography variant="body2" color="text.secondary">
          {completed} completed from {total} goals
        </Typography>

        <LinearProgress
          variant="determinate"
          value={percent}
          sx={{ mt: 2 }}
        />
      </CardContent>
    </Card>
  );
};

export default CompletionInsight;