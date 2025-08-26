"use client";

import { useState, useEffect } from "react";
import "./Toggle.css";

export default function Toggle() {
  // Setting dark mode as default 
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
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
