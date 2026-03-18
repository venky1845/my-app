import "./Navcard.css";
import React from 'react'

export default function Navcard() {
  return (
    <div className="head">
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
        }}
      >
        <a
          href="/"
          style={{
            color: "white",
            textDecoration: "none",
            fontSize: "20px",
          }}
        >
          Home
        </a>
        <a
          href="/"
          style={{
            color: "white",
            textDecoration: "none",
            fontSize: "20px",
          }}
        >
          About
        </a>
      </div>
    </div>
  );
}

