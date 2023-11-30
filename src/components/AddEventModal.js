import React from "react";

import {
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Button,
  Box,
} from "@mui/material";

// First, we import various modules that we will be using,
// such as the Material UI components and the custom types for our application.

// We define the properties that this modal component expects using TypeScript's interface system.
// These props include booleans to control the modal's open state,  functions to handle changes.

// class IProps {
//     open,
//     handleClose,
//     eventFormData,
//     setEventFormData,
//     },

function AddEventModal({
  open,
  handleClose,
  eventFormData,
  setEventFormData,
  onAddEvent,
}) {
  const { description } = eventFormData;

  const onClose = () => handleClose();

  const onChange = (event) => {
    setEventFormData((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Add event</DialogTitle>
      <DialogContent>
        <DialogContentText>
          To add a event, please fill in the information below.
        </DialogContentText>
        <Box component="form">
          <TextField
            name="description"
            value={description}
            margin="dense"
            id="description"
            label="Description"
            type="text"
            fullWidth
            variant="outlined"
            onChange={onChange}
          />
        </Box>
      </DialogContent>
      <DialogActions>
        <Button color="error" onClick={onClose}>
          Cancel
        </Button>
        <Button
          disabled={description === ""}
          color="success"
          onClick={onAddEvent}
        >
          Add
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default AddEventModal;
