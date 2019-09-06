import React from "react";
import App from "./App";
import { render, fireEvent } from "@testing-library/react";
import PlayerList from "./components/PlayerList";
import PlayerCard from "./components/PlayerCard";

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

test("PlayerCards are displaying player ranks", async () => {
  const { findByTestId } = await render(<App />);
  findByTestId("player-rank");
});

test("PlayerCards are displaying player countries", async () => {
  const { findByTestId } = await render(<App />);
  findByTestId("player-country");
});
