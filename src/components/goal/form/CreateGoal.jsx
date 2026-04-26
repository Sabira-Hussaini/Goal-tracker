import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
  Box,
  Chip,
} from "@mui/material";

export default function CreateGoal({ open, onClose, onConfirm, goalData }) {
  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>Confirm Goal</DialogTitle>
      <DialogContent>
        {goalData && (
          <Box sx={{ mt: 1 }}>
            <Typography>
              <strong>Title:</strong> {goalData.title}
            </Typography>
            <Typography>
              <strong>Category:</strong> {goalData.category}
            </Typography>
            <Typography>
              <strong>Goal Type:</strong> {goalData.goalType}
            </Typography>
            <Typography>
              <strong>Target:</strong> {goalData.target} {goalData.session}
            </Typography>
            <Chip label={goalData.priority} size="small" sx={{ mt: 1 }} />
          </Box>
        )}
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={onConfirm} variant="contained" color="primary">
          Confirm
        </Button>
      </DialogActions>
    </Dialog>
  );
}
