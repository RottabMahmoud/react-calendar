import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import About from "./views/About";
import Header from "./components/Header";
import React from "react";
import CalendarInfo from "./components/CalendarInfo";
import { useStateValue } from "./StateProvider";

function App() {
  const [{ allEvents }] = useStateValue();
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/calendar/:date" element={<CalendarInfo />} />
        <Route path="/calendar" element={<CalendarInfo />} />
      </Routes>
    </Router>
  );
}

export default App;
