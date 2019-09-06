import React from "react";
import App from "./App";
import { render } from "@testing-library/react";
import PlayerList from "./components/PlayerList";

test("App renders without crashing", () => {
  render(<App />);
});

test("PlayerList renders without crashing", () => {
  render(<PlayerList />);
});

test("PlayerCards are displaying player names", async () => {
  const { findByTestId } = await render(<App />);
  findByTestId("player-name");
});

test("dark mode button works correctly");
