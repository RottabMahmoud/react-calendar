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
  Checkbox,
  Input,
} from "@mui/material";
import { LocalizationProvider, DateTimePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";

function AddDatePickerEventModal({
  open,
  handleClose,
  datePickerEventFormData,
  setDatePickerEventFormData,
  onAddEvent,
}) {
  const { description, start, end, allDay } = datePickerEventFormData;

  const onClose = () => {
    handleClose();
  };
  const onChange = (event) => {
    setDatePickerEventFormData((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };
  const handleCheckboxChange = (event) => {
    setDatePickerEventFormData((prevState) => ({
      ...prevState,
      allDay: event.target.checked,
    }));
  };

  const isDisabled = () => {
    const checkend = () => {
      if (!allDay && end === null) {
        return true;
      }
    };
    if (description === "" || start === null || checkend()) {
      return true;
    }
    return false;
  };

  return (
    <div>
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
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <Box mb={2} mt={5}>
                <DateTimePicker
                  label="Start date"
                  value={start}
                  ampm={true}
                  minutesStep={30}
                  onChange={(newValue) =>
                    setDatePickerEventFormData((prevState) => ({
                      ...prevState,
                      start: new Date(newValue),
                    }))
                  }
                  renderInput={(params) => <TextField {...params} />}
                />
              </Box>

              <Box>
                <Input variant="caption" color="text" component={"span"}>
                  All day?
                </Input>
                <Checkbox onChange={handleCheckboxChange} value={allDay} />
              </Box>

              <DateTimePicker
                label="End date"
                disabled={allDay}
                minDate={start}
                minutesStep={30}
                ampm={true}
                value={allDay ? null : end}
                onChange={(newValue) =>
                  setDatePickerEventFormData((prevState) => ({
                    ...prevState,
                    end: new Date(newValue),
                  }))
                }
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button color="error" onClick={onClose}>
            Cancel
          </Button>
          <Button disabled={isDisabled()} color="success" onClick={onAddEvent}>
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default AddDatePickerEventModal;
