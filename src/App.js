import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./views/Home";
import About from "./views/About";
import CalendarInfo from "./components/CalendarInfo";
import "./App.css";

function App() {
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
