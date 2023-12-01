import React, { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
import moment from "moment";
import Datetime from "react-datetime";
import "../css/datetime.css";
// var Datetime = require('react-datetime');
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
    setEventDetail({...eventD});
  };

  return (
    <Modal show={showModal} onHide={handleHide}>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title">Event Details</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <label> Event Name </label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter the Event Name"
          value={eventDetail.title}
          onChange={(e) => changeHandler(e, "title")}
        />

        <label> Start Date </label>
        {eventDetail.allDay ? (
          <Datetime
            value={eventDetail.start}
            dateFormat="MM-DD-YYYY"
            timeFormat={false}
            onChange={(e) => changeHandler(e, "start")}
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
            dateFormat="MM-DD-YYYY"
            timeFormat={false}
            onChange={(e) => changeHandler(e, "end")}
          />
        ) : (
          <Datetime
            value={eventDetail.end}
            onChange={(e) => changeHandler(e, "end")}
          />
        )}

        <label> Event Notes </label>
        <textarea
          className="form-control"
          placeholder="Event Notes"
          value={eventDetail.notes}
          onChange={(e) => changeHandler(e, "notes")}
        />

        <label> Event Color </label>
        <input
          type="color"
          value={eventDetail.hexColor}
          onChange={(e) => changeHandler(e, "hexColor")}
          style={{ marginRight: "20px", marginLeft: "5px" }}
        />

        <input
          type="checkBox"
          name="all_Day"
          value={eventDetail.id}
          checked={eventDetail.allDay}
          onChange={(e) => changeHandler(e, "allDay")}
        />
        <label> All Day </label>
      </Modal.Body>
      <Modal.Footer>
        {eventType === "add" ? (
          <Button bsStyle="success" onClick={() => addEvent(eventDetail)}>
            Add
          </Button>
        ) : (
          <Button bsStyle="warning" onClick={() => updateEvent(eventDetail)}>
            Update
          </Button>
        )}
        {eventType === "add" ? null : (
          <Button bsStyle="danger" onClick={() => deleteEvent(eventDetail.id)}>
            Delete
          </Button>
        )}
        <Button onClick={handleHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Details;
