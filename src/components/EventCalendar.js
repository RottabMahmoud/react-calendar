import React from "react";
import { useState } from "react";
import {
  Box,
  Button,
  ButtonGroup,
  Card,
  CardContent,
  CardHeader,
  Container,
  Divider,
} from "@mui/material";

import { Calendar, dateFnsLocalizer } from "react-big-calendar";

import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import enUS from "date-fns/locale/en-US";

import "react-big-calendar/lib/css/react-big-calendar.css";

import EventInfo from "./EventInfo";
import AddEventModal from "./AddEventModal";
import EventInfoModal from "./EventInfoModal";
import AddDatePickerEventModal from "./AddDatePickerEventModal";

// Here, we're importing everything we'll need for our calendar,
// including React hooks, material-UI components, and functionalities from react-big-calendar.

// Next, we'll initialize the date-fns localizer to handle date formatting.

const locales = {
  "en-US": enUS,
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

//  We define our data models and utility functions like generateId to uniquely identify each event.

export const generateId = () =>
  (Math.floor(Math.random() * 10000) + 1).toString();

//   We can add events in 2 different ways, the first is that we click and drag in the calender and
//   the other is what we use a datePicker. Lets create the initial formData for both options

const initialEventFormState = {
  description: "",
  eventId: undefined,
};

const initialDatePickerEventFormData = {
  description: "",
  eventId: undefined,
  allDay: false,
  start: undefined,
  end: undefined,
};
export default function EventCalendar() {
  //   Next, let's declare all the state variables we'll be using:

  const [openSlot, setOpenSlot] = useState(false);
  const [openDatepickerModal, setOpenDatepickerModal] = useState(false);
  const [currentEvent, setCurrentEvent] = useState({});

  const [eventInfoModal, setEventInfoModal] = useState(false);

  const [events, setEvents] = useState([]);

  const [eventFormData, setEventFormData] = useState(initialEventFormState);

  const [datePickerEventFormData, setDatePickerEventFormData] = useState(
    initialDatePickerEventFormData
  );

  //   These states help us control modals, hold the current events.

  // We define several handler functions for handling slots, closing modals, and more.

  const handleSelectSlot = (event) => {
    setOpenSlot(true);
    setCurrentEvent(event);
  };

  const handleSelectEvent = (event) => {
    setCurrentEvent(event);
    setEventInfoModal(true);
  };

  const handleClose = () => {
    setEventFormData(initialEventFormState);
    setOpenSlot(false);
  };

  const handleDatePickerClose = () => {
    setDatePickerEventFormData(initialDatePickerEventFormData);
    setOpenDatepickerModal(false);
  };

  //   These functions are called when certain actions are taken in our application,
  //   like selecting an event or a time slot in the calendar.
  // Here is the core logic for adding new events to our calendar:
  const onAddEvent = (e) => {
    e.preventDefault();

    const data = {
      ...eventFormData,
      _id: generateId(),
      start: currentEvent.start,
      end: currentEvent.end,
    };

    const newEvents = [...events, data];

    setEvents(newEvents);
    handleClose();
  };

  const onAddEventFromDatePicker = (e) => {
    e.preventDefault();

    const addHours = (date, hours) => {
      return date ? date.setHours(date.getHours() + hours) : undefined;
    };

    const setMinToZero = (date) => {
      date.setSeconds(0);

      return date;
    };

    const data = {
      ...datePickerEventFormData,
      _id: generateId(),
      start: setMinToZero(datePickerEventFormData.start),
      end: datePickerEventFormData.allDay
        ? addHours(datePickerEventFormData.start, 12)
        : setMinToZero(datePickerEventFormData.end),
    };

    const newEvents = [...events, data];

    setEvents(newEvents);
    setDatePickerEventFormData(initialDatePickerEventFormData);
  };

  //   const onDeleteEvent = () => {
  //     setEvents(() => [...events].filter((e) => e._id !== currentEvent._id!))
  //     setEventInfoModal(false)
  //   }

  //   These functions add and delete events to our state,
  //   whether they're created by dragging on the calendar or via the date picker.

  return (
    <Box
      mt={2}
      mb={2}
      component="main"
      sx={{
        flexGrow: 1,
        py: 8,
      }}
    >
      <Container maxWidth={false}>
        <Card>
          <CardHeader
            title="Calendar"
            subheader="Create Events and manage them easily"
          />
          <Divider />
          <CardContent>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <ButtonGroup
                size="large"
                variant="contained"
                aria-label="outlined primary button group"
              >
                <Button
                  onClick={() => setOpenDatepickerModal(true)}
                  size="small"
                  variant="contained"
                >
                  Add event
                </Button>
              </ButtonGroup>
            </Box>
            <Divider style={{ margin: 10 }} />
            <AddEventModal
              open={openSlot}
              handleClose={handleClose}
              eventFormData={eventFormData}
              setEventFormData={setEventFormData}
              onAddEvent={onAddEvent}
            />
            <AddDatePickerEventModal
              open={openDatepickerModal}
              handleClose={handleDatePickerClose}
              datePickerEventFormData={datePickerEventFormData}
              setDatePickerEventFormData={setDatePickerEventFormData}
              onAddEvent={onAddEventFromDatePicker}
            />
            <EventInfoModal
              open={eventInfoModal}
              handleClose={() => setEventInfoModal(false)}
              currentEvent={currentEvent}
            />
            <Calendar
              localizer={localizer}
              events={events}
              onSelectEvent={handleSelectEvent}
              onSelectSlot={handleSelectSlot}
              selectable
              startAccessor="start"
              components={{ event: EventInfo }}
              endAccessor="end"
              defaultView="week"
              //   eventPropGetter={(event) => {
              //     const hasTodo = todos.find((todo) => todo._id === event.todoId)
              //     return {
              //       style: {
              //         backgroundColor: hasTodo ? hasTodo.color : "#b64fc8",
              //         borderColor: hasTodo ? hasTodo.color : "#b64fc8",
              //       },
              //     }
              //   }}
              style={{
                height: 900,
              }}
            />
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
}
