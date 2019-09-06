import React from "react";

export default function PlayerCard(props) {
  return (
    <div className="player-card-wrapper">
      <div data-testid="player-card" className="player-card">
        <h2 data-testid="player-name" className="player-name">
          {props.player.name}
        </h2>
        <p
          data-testid="player-country"
          className="player-country"
          style={
            props.player.country === "United States"
              ? { color: "blue" }
              : { color: "red" }
          }
        >
          {props.player.country}
        </p>
      </div>
    </div>
  );
}
