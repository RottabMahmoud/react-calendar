import { Input } from "@mui/material";
import React from "react";

function EventInfo({ event }) {
  return (
    <div>
      {" "}
      <>
        <Input>{event.description}</Input>
      </>
    </div>
  );
}

export default EventInfo;
