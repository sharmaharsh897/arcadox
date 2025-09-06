// src/Pages/Game.js
import React from "react";
import "./Game.css";

export default function Game() {
  const games = [
    { title: "Battle Arena", icon: "⚔️" },
    { title: "Space Explorer", icon: "🚀" },
    { title: "Castle Defender", icon: "🏰" },
    { title: "Target Shooter", icon: "🎯" },
    { title: "Cyber Runner", icon: "🤖" },
    { title: "Mystic Quest", icon: "🪄" },
  ];

  return (
    <div className="gamepage">
      {/* Background */}
      <div className="stars"></div>
      <div className="twinkling"></div>

      <div className="game-container">
        <h1 className="game-title">Choose Your Game</h1>

        <div className="game-list">
          {games.map((g, i) => (
            <div className="game-card" key={i}>
              <div className="game-icon">{g.icon}</div>
              <div className="game-name">{g.title}</div>
              <button className="play-btn" onClick={() => alert(`Starting ${g.title}...`)}>
                Play
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
