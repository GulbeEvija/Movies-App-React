import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Home from "./Home";
import Movies from "./Movies";
import Contact from "./Contact";
import AboutMovie from "./AboutMovie";

function App() {
  return <Router>
    <nav>
      <Link to="/" className="link">Home</Link>
      <Link to="/movies" className="link">Movies</Link>
      <Link to="/contact" className="link">Contact</Link>
    </nav>

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movies" element={<Movies />} />
      <Route path='/movies/:title' element={<AboutMovie />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  </Router>
}

export default App;
