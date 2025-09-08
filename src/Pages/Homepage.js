// src/Pages/Homepage.js
import React from "react";
import "./Homepage.css";
import birdFlying from "../Assets/bird-flying.gif";
import birdFlying3 from "../Assets/bird-flying3.gif";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const navigate = useNavigate();

  // generate 8 random birds
  const birds = Array.from({ length: 8 }, (_, i) => {
    const isLeftToRight = Math.random() > 0.5;
    const top = Math.floor(Math.random() * 70) + 10;
    const delay = Math.random() * 10;
    const speed = 15 + Math.random() * 10;
    const birdImg = Math.random() > 0.5 ? birdFlying : birdFlying3;
    return { id: i, direction: isLeftToRight ? "lr" : "rl", top, delay, speed, birdImg };
  });

  return (
    <div className="homepage">
      {/* Background */}
      <div className="stars"></div>
      <div className="twinkling"></div>
      <div className="clouds"></div>

      {/* Birds */}
      {birds.map((b) => (
        <div
          key={b.id}
          className={`bird-gif bird-${b.direction}`}
          style={{ top: `${b.top}%`, animationDuration: `${b.speed}s`, animationDelay: `${b.delay}s` }}
        >
          <img src={b.birdImg} alt="Flying bird" className={b.direction === "rl" ? "flipped" : ""} />
        </div>
      ))}

      {/* Hero */}
      <div className="hero">
        <h1 className="animated-text">Welcome to Arcadox</h1>
        <p className="subtext">Where imagination meets reality ✨</p>

        <button className="start-btn" onClick={() => navigate("/games")}>
          Enter The Gaming Realm
        </button>

        <p className="note-text">No login required. Just pick a game and start playing!</p>
      </div>
    </div>
  );
}
