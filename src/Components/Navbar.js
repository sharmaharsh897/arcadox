// src/Components/Navbar.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen(v => !v);
  const close = () => setOpen(false);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="logo" onClick={close}>Arcadox</Link>

        {/* Hamburger */}
        <button
          className="menu-icon"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={toggle}
        >
          {open ? "✕" : "☰"}
        </button>

        {/* Links */}
        <ul className={`nav-links ${open ? "active" : ""}`}>
          <li><Link to="/" onClick={close}>Home</Link></li>
          <li><Link to="/games" onClick={close}>Games</Link></li>
        </ul>
      </div>
      {/* Click-outside backdrop (only visible on mobile when open) */}
      <div className={`nav-backdrop ${open ? "show" : ""}`} onClick={close} />
    </nav>
  );
}
