import React from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Button,
  Box,
  Input,
} from "@mui/material";

function EventInfoModal({ open, handleClose, onDeleteEvent, currentEvent }) {
  const onClose = () => {
    handleClose();
  };
  return (
    <div>
      <Dialog open={open} onClose={onClose}>
        <DialogTitle>Event Info</DialogTitle>
        <DialogContent>
          <DialogContentText>
            <Input
              sx={{ fontSize: 14, marginTop: 3 }}
              color="text.secondary"
              gutterBottom
            >
              {currentEvent?.description}
            </Input>
          </DialogContentText>
          <Box component="form"></Box>
        </DialogContent>
        <DialogActions>
          <Button color="error" onClick={onClose}>
            Cancel
          </Button>
          <Button color="info" onClick={onDeleteEvent}>
            Delete Event
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default EventInfoModal;
