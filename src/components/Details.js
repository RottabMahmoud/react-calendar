import React, { useState, useEffect } from "react";
import "../css/datetime.css";
import moment from "moment";
import Modal from "react-bootstrap/Modal";
import Datetime from "react-datetime";
import Button from "react-bootstrap/Button";

// Here are all the Imports need to procceed with React hooks in a functional component as well as the rest of libraries.

// Below we have the Details functional Component Instatiated with all the props passed, to handle events and data.
const Details = ({
  modalShow,
  handleHide,
  eventType,
  eventInfo,
  newIndex,
  deleteEvent,
  addEvent,
  updateEvent,
}) => {
  const [showModal, setShowModal] = useState(modalShow);
  const [eventDetail, setEventDetail] = useState({
    id: eventType === "add" ? newIndex : eventInfo.id,
    title: eventInfo && eventInfo.title ? eventInfo.title : "",
    start: new Date(eventInfo && eventInfo.start ? eventInfo.start : moment()),
    end: new Date(eventInfo && eventInfo.end ? eventInfo.end : moment()),
    allDay: eventInfo.allDay ? true : false,
    hexColor: "#265985",
    notes: eventInfo.notes ? eventInfo.notes : "",
  });
  // Here are the 2 states needed for showing the modal upon even selection to edit, add, or delete an event.
  useEffect(() => {
    setShowModal(modalShow);
    setEventDetail({
      id: eventType === "add" ? newIndex : eventInfo.id,
      title: eventInfo && eventInfo.title ? eventInfo.title : "",
      start: new Date(
        eventInfo && eventInfo.start ? eventInfo.start : moment()
      ),
      end: new Date(eventInfo && eventInfo.end ? eventInfo.end : moment()),
      allDay: eventInfo.allDay ? true : false,
      hexColor: eventInfo.hexColor ? eventInfo.hexColor : "#265985",
      notes: eventInfo.notes ? eventInfo.notes : "",
    });
  }, [eventInfo, eventType, modalShow, newIndex]);

  // UseEffect Life cycle hook to set the modal with the given props, as well as setting the event detail, with
  // the data entry.

  // Here is the change Handlerfunction that handles whether we want to add, delete, or delete an event.
  const changeHandler = (e, ref) => {
    var eventD = eventDetail;
    let val = "";
    if (ref !== "allDay") {
      if (ref === "start" || ref === "end") {
        val = new Date(moment(e));
      } else {
        val = e.target.value;
      }
    } else {
      val = e.target.checked;
    }

    eventDetail[ref] = val;
    setEventDetail({ ...eventD });
  };

  // Here we are going to render some JSX based upon the task logic, to show a modal having some data entry fields,
  // to do certain functionality such as edit, add, or delete a new event to our app.
  return (
    <Modal show={showModal} onHide={handleHide}>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title">Event Details</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <label> Title</label>
        <input
          value={eventDetail.title}
          onChange={(e) => changeHandler(e, "title")}
          className="form-control"
          type="text"
          placeholder="Enter the Event Title"
        />

        <label> Start Date </label>
        {eventDetail.allDay ? (
          <Datetime
            value={eventDetail.start}
            onChange={(e) => changeHandler(e, "start")}
            timeFormat={false}
            dateFormat="MM-DD-YYYY"
          />
        ) : (
          <Datetime
            value={eventDetail.start}
            onChange={(e) => changeHandler(e, "start")}
          />
        )}

        <label> End Date </label>
        {eventDetail.allDay ? (
          <Datetime
            value={eventDetail.end}
            onChange={(e) => changeHandler(e, "end")}
            dateFormat="MM-DD-YYYY"
            timeFormat={false}
          />
        ) : (
          <Datetime
            value={eventDetail.end}
            onChange={(e) => changeHandler(e, "end")}
          />
        )}

        <label> Description </label>
        <textarea
          value={eventDetail.notes}
          onChange={(e) => changeHandler(e, "notes")}
          className="form-control"
          placeholder="Event Description"
        />

        <label> Color </label>
        <input
          value={eventDetail.hexColor}
          onChange={(e) => changeHandler(e, "hexColor")}
          style={{ marginRight: "20px", marginLeft: "5px" }}
          type="color"
        />

        <input
          value={eventDetail.id}
          checked={eventDetail.allDay}
          onChange={(e) => changeHandler(e, "allDay")}
          name="all_Day"
          type="checkBox"
        />
        <label> All Day </label>
      </Modal.Body>
      <Modal.Footer>
        {eventType === "add" ? (
          <Button variant="primary" onClick={() => addEvent(eventDetail)}>
            Add
          </Button>
        ) : (
          <Button variant="secondary" onClick={() => updateEvent(eventDetail)}>
            Update
          </Button>
        )}
        {eventType === "add" ? null : (
          <Button variant="danger" onClick={() => deleteEvent(eventDetail.id)}>
            Delete
          </Button>
        )}
        <Button variant="dark" onClick={handleHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Details;
