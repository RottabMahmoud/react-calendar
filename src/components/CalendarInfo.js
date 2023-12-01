import React, { useState, useEffect } from "react";
import moment from "moment";
import { Calendar, momentLocalizer, Views } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
// import { GetInitialEvents } from "../reducer";
import Details from "./Details";
import localForage from "localforage";

import { useStateValue } from "../StateProvider";

const localizer = momentLocalizer(moment);
let allViews = Object.keys(Views).map((k) => Views[k]);
console.log(allViews, "MISSION");

const CalendarInfo = () => {
  const [{ allEvents }, dispatch] = useStateValue();

  const [showModal, setShowModal] = useState(false);
  const [eventType, setEventType] = useState("add");
  const [newIndex, setNewIndex] = useState(0);
  const [eventInfo, setEventInfo] = useState({});

  useEffect(() => {
    const getInitialEvents = async () => {
      var allEvents = [
        {
          id: 0,
          title: "Today!",
          allDay: true,
          start: new Date(moment()),
          end: new Date(moment()),
          hexColor: "#265985",
          notes: "Have a great day!",
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

    dispatch({ type: "ALL_EVENTS", allEvents });
  }, [dispatch]);

  const handleHide = () => {
    setShowModal(false);
  };

  const handleShow = (slotInfo, type) => {
    const currentIndex = allEvents.length;
    setShowModal(true);
    setEventType(type);
    setEventInfo(slotInfo);
    setNewIndex(currentIndex);
  };

  const deleteEvent = (id) => {
    dispatch({
      type: "REMOVE_EVENT",
      payload: id,
    });
    setShowModal(false);
  };

  const addEvent = (obj) => {
    dispatch({
      type: "ADD_EVENT",
      payload: obj,
    });
    setShowModal(false);
  };

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

  const eventStyle = (event, start, end, isSelected) => {
    const bgColor = event.hexColor ? event.hexColor : "#265985";
    const style = {
      backgroundColor: bgColor,
      borderRadius: "5px",
      opacity: 1,
      color: "white",
      border: "0px",
      display: "block",
    };
    return {
      style: style,
    };
  };

  return (
    <div className="bodyContainer">
      <div className="well well-sm">
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
        selectable
        events={allEvents}
        views={allViews}
        step={60}
        showMultiDayTimes
        defaultDate={new Date(moment())}
        onSelectEvent={(event) => handleShow(event, "edit")}
        onSelectSlot={(slotInfo) => handleShow(slotInfo, "add")}
        style={{ minHeight: "500px" }}
        eventPropGetter={eventStyle}
      />
    </div>
  );
};

export default CalendarInfo;
