import React, { useState, useEffect } from "react";
import { useStateValue } from "../StateProvider";

function Home() {
  const [{ home }] = useStateValue();

  return (
    <div className="App">
      <div className="App-header">
        <h1>{home}</h1>
      </div>
    </div>
  );
}

export default Home;
