import React from "react";

export default function PlayerCard(props) {
  return (
    <div className="player-card-wrapper">
      <div className="player-card">
        <h2 className="player-name">{props.player.name}</h2>
        <p
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
