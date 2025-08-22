"use client";

import { useState, useEffect } from "react";
import "./Toggle.css"; 

export default function Toggle() {
  const [darkMode, setDarkMode] = useState(false);

  // Apply dark or light mode to <body>
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("bg-dark", "text-white");
      document.body.classList.remove("bg-light", "text-dark");
    } else {
      document.body.classList.add("bg-light", "text-dark");
      document.body.classList.remove("bg-dark", "text-white");
    }
  }, [darkMode]);

  return (
    <div
      className={`toggle-btn ${darkMode ? "dark" : "light"}`}
      onClick={() => setDarkMode(!darkMode)}
    >
      <div className="toggle-circle"></div>
    </div>
  );
}