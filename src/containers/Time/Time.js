import React, { Component } from "react";

export default class Time extends Component {
  state = {
    date: new Date(),
    count: 1,
  };
  advance = () => {
    this.setState((oldState) => {
      return {
        date: new Date(),
        count: oldState.count + 1,
      };
    });
  };
  componentDidMount() {
    console.log("Montage");
    setInterval(() => this.advance(), 1000);
  }

  componentDidUpdate() {
    console.log("Mise à jour");
  }
  componentWillUnmount() {
    clearInterval(this.timer);
  }
  render() {
    return (
      <>
        <p>Horloge :{this.state.date.toLocaleTimeString()}</p>
        <br />
        Compteur : {this.state.count}
      </>
    );
  }
}
