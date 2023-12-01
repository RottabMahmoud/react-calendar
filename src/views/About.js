import React from "react";
import { useStateValue } from "../StateProvider";

function About() {
  const [{ about }] = useStateValue();
  return (
    <div className="About">
      <h1>{about}</h1>
    </div>
  );
}

export default About;
