import React from "react";
import { useStateValue } from "../StateProvider";

function About() {
  const [{ about }] = useStateValue();
  return (
    <div className="App">
      <div className="App-header">
        <h1>{about}</h1>
      </div>
    </div>
  );
}

export default About;
