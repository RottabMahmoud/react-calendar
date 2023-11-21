// import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/about" element={<Header />} />
        <Route path="/contact" element={<Header />} />
      </Routes>
    </Router>
  );
}

export default App;
