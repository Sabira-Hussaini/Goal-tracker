import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import { useState } from "react";

export default function CreateGoal({ open, onClose, onConfirm }) {
  const [cards, setCards] = useState([]);

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
            onConfirm(); // 👈 از parent اجرا می‌شود
            onClose(); // 👈 بستن dialog
          }}
        >
          Yes, Create
        </Button>
      </DialogActions>
    </Dialog>
  );
}
