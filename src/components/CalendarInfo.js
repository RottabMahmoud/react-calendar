import React, { useState, useEffect } from "react";
import { useStateValue } from "../StateProvider";
import { useParams } from "react-router-dom";
import moment from "moment";
import localForage from "localforage";
import "react-big-calendar/lib/css/react-big-calendar.css";
import Details from "./Details";
import { Calendar, momentLocalizer, Views } from "react-big-calendar";
// All Mandatory Imports

// The localizer is needed for applying formatting and culture (i18n) to your date displays throughout the Calendar.
const localizer = momentLocalizer(moment);

// The Calendar Views, exporting the array from the object, array of KEYS
let allViews = Object.keys(Views).map((k) => Views[k]);

const CalendarInfo = () => {
  // using the useStateValue to have access to our reducer, and dispatch events as well.
  const [{ allEvents }, dispatch] = useStateValue();
  //  Used useParams for the date, so if existing date typed in the url, it shows the Calendar specified date.
  const { date } = useParams();
  const [defaultDate, setDefaultDate] = useState(
    date ? new Date(date) : new Date()
  );

  // Our states that are going to be used during the render and pass to Details.js Component.
  const [showModal, setShowModal] = useState(false);
  const [eventType, setEventType] = useState("add");
  const [eventInfo, setEventInfo] = useState({});
  const [newIndex, setNewIndex] = useState(0);

  // The useEffect life Cycle is called to getInitialEvents, using localForage to have the data persist upon refresh
  // localForage is a JavaScript library that uses the very simple localStorage API.
  // Also we dispatch an action which fetches ALL Events.
  useEffect(() => {
    if (date) {
      setDefaultDate(new Date(date));
    }
    const getInitialEvents = async () => {
      var allEvents = [
        {
          id: 0,
          title: "iPro Suite!",
          allDay: true,
          start: new Date(moment()),
          end: new Date(moment()),
          hexColor: "#265985",
          notes: "Happy Coding!",
        },
      ];

      localForage.getItem("AllEvents", function (err, allEve) {
        if (allEve) {
          allEvents = allEve;
        } else {
          localForage.setItem("AllEvents", allEvents);
        }

        dispatch({ type: "ALL_EVENTS", allEvents });
      });
    };

    getInitialEvents();

    // dispatch({ type: "ALL_EVENTS", allEvents });
  }, [dispatch, allEvents, date]);

  // To Close the Modal
  const handleHide = () => {
    setShowModal(false);
  };

  // To Show the Modal
  const handleShow = (slotInfo, type) => {
    const currentIndex = allEvents.length;
    setShowModal(true);
    setEventType(type);
    setEventInfo(slotInfo);
    setNewIndex(currentIndex);
  };

  // To Delete an Event, we dispatch an action and pass the ID as out payload.
  const deleteEvent = (id) => {
    dispatch({
      type: "REMOVE_EVENT",
      payload: id,
    });
    setShowModal(false);
  };

  // To Add an Event, we call the action and pass the new obj as our payload.
  const addEvent = (obj) => {
    dispatch({
      type: "ADD_EVENT",
      payload: obj,
    });
    setShowModal(false);
  };

  // To Update an existing event, we pass the updated object as our payload and search for it using the Object ID.
  const updateEvent = (obj) => {
    dispatch({
      type: "UPDATE_EVENT",
      payload: {
        id: obj.id,
        obj: obj,
      },
    });
    setShowModal(false);
  };

  // Some Prop Stylings for our BIG Calendar.
  const eventStyle = (event) => {
    const bgColor = event.hexColor ? event.hexColor : "#265985";
    const style = {
      backgroundColor: bgColor,
      borderRadius: "10em",
      opacity: 1,
      color: "white",
    };
    return {
      style: style,
    };
  };

  // Our JSX Logic
  return (
    <div className="bodyContainer">
      <div className="App App-header well well-sm">
        <h3 className="instruction">Instructions</h3>
        <strong>For adding an event: </strong> Select the desired day, or drag
        up to choose the day for a multi-day event. <br />
        <strong>For updating or deleting an event: </strong> Click on the event
        you want to modify or remove.
      </div>
      <Details
        modalShow={showModal}
        eventType={eventType}
        eventInfo={eventInfo}
        newIndex={newIndex}
        handleHide={handleHide}
        deleteEvent={deleteEvent}
        addEvent={addEvent}
        updateEvent={updateEvent}
      />
      <Calendar
        localizer={localizer}
        views={allViews}
        events={allEvents}
        defaultDate={defaultDate}
        onSelectEvent={(event) => handleShow(event, "edit")}
        onSelectSlot={(slotInfo) => handleShow(slotInfo, "add")}
        eventPropGetter={eventStyle}
        selectable
        startAccessor="start"
        endAccessor="end"
        step={60}
        showMultiDayTimes
        style={{ marginTop: "1em", minHeight: "500px" }}
      />
    </div>
  );
};

export default CalendarInfo;
