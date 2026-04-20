import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";

export default function CreateGoal({ open, onClose, onConfirm }) {

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Confirm Goal Creation</DialogTitle>

      <DialogContent>Are you sure you want to create this goal?</DialogContent>

      <DialogActions>
        <Button onClick={onClose} color="error">
          Cancel
        </Button>

        <Button
          variant="contained"
          onClick={() => {
            onConfirm();// 👈 از parent اجرا می‌شود
            onClose(); // 👈 بستن dialog
          }}
        >
          Yes, Create
        </Button>
      </DialogActions>
    </Dialog>
  );
}
