import { Card, CardContent, Typography, Box } from "@mui/material";

const StatCard = ({
  title = "",
  value = 0,
  subtitle = "",
  icon = null,
  color = "primary.main",
}) => {
  return (
    <Card sx={{ height: "100%", width: "100%" }}>
      <CardContent>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="subtitle2" color="text.secondary">
            {title}
          </Typography>

          {icon && (
            <Box sx={{ color, display: "flex", alignItems: "center" }}>
              {icon}
            </Box>
          )}
        </Box>

        <Typography variant="h4" fontWeight="bold" mt={1}>
          {value}
        </Typography>

        {subtitle && (
          <Typography variant="body2" color="text.secondary">
            {subtitle}
          </Typography>
        )}
      </CardContent>
    </Card>
  );
};

export default StatCard;