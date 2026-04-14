import { Card, CardContent, Typography, Box } from "@mui/material";

const StatCard = ({ title, value, subtitle, icon, color, children }) => {
  return (
    <Card sx={{ height: "100%" }}>
      <CardContent>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="subtitle2" color="text.secondary">
            {title}
          </Typography>

          <Box sx={{ color }}>{icon}</Box>
        </Box>

        <Typography variant="h4" fontWeight="bold" mt={1}>
          {value}
        </Typography>

        <Typography variant="body2" color="text.secondary">
          {subtitle}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {children}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default StatCard;