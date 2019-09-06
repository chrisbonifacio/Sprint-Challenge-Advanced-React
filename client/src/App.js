import React from "react";
import "./App.scss";

import PlayerList from "./components/PlayerList";
import DarkModeButton from "./components/DarkModeButton";

const App = () => {
  return (
    <div className="App">
      <h1>Women's World Cup</h1>
      <p>Ranked by search interest from Google Trends</p>
      <DarkModeButton />
      <PlayerList />
    </div>
  );
};

export default App;
