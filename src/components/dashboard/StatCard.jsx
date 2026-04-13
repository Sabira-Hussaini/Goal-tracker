import { Card, CardContent, Typography, Box } from "@mui/material";

const StatCard = ({ title, value, subtitle, icon, color }) => {
  return (
    <Card sx={{ flex: 1 }}>
      <CardContent>
        <Box display="flex" justifyContent="space-between">
          <Typography variant="subtitle2" color="text.secondary">
            {title}
          </Typography>
          <Box color={color}>{icon}</Box>
        </Box>

        <Typography variant="h4" fontWeight="bold" mt={1}>
          {value}
        </Typography>

        <Typography variant="body2" color="text.secondary">
          {subtitle}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default StatCard;