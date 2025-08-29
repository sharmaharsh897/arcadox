// src/App.js
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import HomePage from "./Pages/Homepage";
import Game from "./Pages/Game";
import "./App.css";

function AnimatedRoutes() {
  const location = useLocation();
  const [displayLocation, setDisplayLocation] = useState(location);
  const [stage, setStage] = useState("fadeIn");

  useEffect(() => {
    if (location !== displayLocation) setStage("fadeOut");
  }, [location, displayLocation]);

  return (
    <div
      className={`page ${stage}`}
      onAnimationEnd={() => {
        if (stage === "fadeOut") {
          setStage("fadeIn");
          setDisplayLocation(location);
        }
      }}
    >
      <Routes location={displayLocation}>
        <Route path="/" element={<HomePage />} />
        <Route path="/games" element={<Game />} />
      </Routes>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Navbar />
      <AnimatedRoutes />
      <Footer />
    </Router>
  );
}
