import React, { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
import moment from "moment";
import Datetime from "react-datetime";
import "../css/datetime.css";

const Details = (props) => {
  const [showModal, setShowModal] = useState(props.showModal);
  const [eventDetail, setEventDetail] = useState({
    id: props.eventType === "add" ? props.newIndex : props.eventInfo.id,
    title:
      props.eventInfo && props.eventInfo.title ? props.eventInfo.title : "",
    start:
      props.eventInfo && props.eventInfo.start
        ? props.eventInfo.start
        : moment(),
    end:
      props.eventInfo && props.eventInfo.end ? props.eventInfo.end : moment(),
    allDay: props.eventInfo.allDay ? true : false,
    hexColor: props.eventInfo.hexColor ? props.eventInfo.hexColor : "#265985",
    notes: props.eventInfo.notes ? props.eventInfo.notes : "",
  });

  useEffect(() => {
    setShowModal(props.showModal);
    setEventDetail({
      id: props.eventType === "add" ? props.newIndex : props.eventInfo.id,
      title:
        props.eventInfo && props.eventInfo.title ? props.eventInfo.title : "",
      start: new Date(
        props.eventInfo && props.eventInfo.start
          ? props.eventInfo.start
          : moment()
      ),
      end: new Date(
        props.eventInfo && props.eventInfo.end ? props.eventInfo.end : moment()
      ),
      allDay: props.eventInfo.allDay ? true : false,
      hexColor: props.eventInfo.hexColor ? props.eventInfo.hexColor : "#265985",
      notes: props.eventInfo.notes ? props.eventInfo.notes : "",
    });
  }, [props]);

  const changeHandler = (e, ref) => {
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

    setEventDetail((prevEventDetail) => ({
      ...prevEventDetail,
      [ref]: val,
    }));
  };

  return (
    <Modal show={showModal} onHide={props.handleHide}>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title">Event Details</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <label> Event Name </label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter the Event Name"
          ref="title"
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
          ref="notes"
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
        {props.eventType === "add" ? (
          <Button bsStyle="success" onClick={() => props.addEvent(eventDetail)}>
            Add
          </Button>
        ) : (
          <Button
            bsStyle="warning"
            onClick={() => props.updateEvent(eventDetail)}
          >
            Update
          </Button>
        )}
        {props.eventType === "add" ? null : (
          <Button
            bsStyle="danger"
            onClick={() => props.deleteEvent(eventDetail.id)}
          >
            Delete
          </Button>
        )}
        <Button onClick={props.handleHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Details;
