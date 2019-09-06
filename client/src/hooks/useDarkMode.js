import { useEffect } from "react";
import { useLocalStorage } from "./useLocalStorage";

export const useDarkMode = () => {
  const [darkMode, setDarkMode] = useLocalStorage("dark-mode", false);

  useEffect(() => {
    const playerCards = document.querySelectorAll(".player-card-wrapper");

    darkMode
      ? document.querySelector(".App").classList.add("dark-mode")
      : document.querySelector(".App").classList.remove("dark-mode");

    if (darkMode) {
      document
        .querySelector(".dark-mode-button button")
        .classList.add("dark-mode");
      document.querySelector(".dark-mode-button button").style.border =
        "1px solid #fff";
      playerCards.forEach(card => {
        card.classList.add("dark-mode");
      });
    } else {
      document
        .querySelector(".dark-mode-button button")
        .classList.remove("dark-mode");
      document.querySelector(".dark-mode-button button").style.border =
        "1px solid #4a4a4a";
      playerCards.forEach(card => {
        card.classList.remove("dark-mode");
      });
    }
  }, [darkMode]);

  return [darkMode, setDarkMode];
};
