import React from "react";
import "./App.scss";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      players: []
    };
  }

  componentDidMount() {
    fetch("http://localhost:5000/api/players")
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ players: data });
        console.log(this.state.players);
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return <div className="App">{}</div>;
  }
}

export default App;
