import React from "react";
import "./App.scss";

import PlayerList from "./components/PlayerList";
import DarkModeButton from "./components/DarkModeButton";

const App = () => {
  return (
    <div className="App">
      <DarkModeButton />
      <PlayerList />
    </div>
  );
};

export default App;
