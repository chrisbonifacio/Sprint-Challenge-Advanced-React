import React from "react";
import { useDarkMode } from "../hooks/useDarkMode";

export default function DarkModeButton() {
  const [darkMode, setDarkMode] = useDarkMode();
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };

  return (
    <div className="dark-mode-button">
      <button onClick={toggleMode}>Dark Mode</button>
    </div>
  );
}
