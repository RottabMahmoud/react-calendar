import React, { useState, useEffect } from "react";
import moment from "moment";
import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { GetInitialEvents } from "../reducer";
import Details from "./Details";

import { useStateValue } from "../StateProvider";

const localizer = momentLocalizer(moment);
// let allViews = Object.keys(Calendar.Views).map((k) => Calendar.Views[k]);

const CalendarInfo = () => {
  const [{ allEvents }, dispatch] = useStateValue();

  const [showModal, setShowModal] = useState(false);
  const [eventType, setEventType] = useState("add");
  const [newIndex, setNewIndex] = useState(0);
  const [eventInfo, setEventInfo] = useState({});

  useEffect(() => {
    dispatch(GetInitialEvents());
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
        <strong>To add an event: </strong> Click on the day you want to add an
        event or drag up to the day you want to add the event for multiple day
        event! <br />
        <strong>To update and delete an event:</strong> Click on the event you
        wish to update or delete!
      </div>
      <Details
        showModal={showModal}
        handleHide={handleHide}
        eventType={eventType}
        eventInfo={eventInfo}
        newIndex={newIndex}
        deleteEvent={deleteEvent}
        addEvent={addEvent}
        updateEvent={updateEvent}
      />
      <Calendar
        localizer={localizer}
        selectable
        events={allEvents}
        // views={allViews}
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
