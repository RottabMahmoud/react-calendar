// import React, { useState, useEffect } from "react";
import React from "react";
import { useStateValue } from "../StateProvider";
import Button from "@mui/material/Button";

function Home() {
  const [{ home, counter }, dispatch] = useStateValue();

  const incrementCounter = () => {
    dispatch({
      type: "ADD",
    });
  };
  const decrementCounter = () => {
    dispatch({
      type: "DECREMENT",
    });
  };

  return (
    <div className="App">
      <div className="App-header">
        <h1>
          {home}
          <Button
            onClick={incrementCounter}
            variant="outlined"
            style={{
              color: "#3f51b5",
              backgroundColor: "white",
              margin: "1rem",
            }}
          >
            ADD
          </Button>
          <Button
            onClick={decrementCounter}
            variant="outlined"
            style={{
              color: "#3f51b5",
              backgroundColor: "white",
              margin: "1rem",
            }}
          >
            Decrement
          </Button>
          {counter}
        </h1>
      </div>
    </div>
  );
}

export default Home;
