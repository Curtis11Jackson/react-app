import "./App.css";
import TitrePrincipal from "./components/Titres/TitrePrincipal";
import Time from "./containers/Time/Time";
import React, { Component } from "react";
import User from "./components/User/User";


class App extends Component {
  state = {
    users: [
      { id: 1, name: "John", lastname: "Doe", age: 32, sexe: true },
      { id: 2, name: "Khalid", lastname: "Sookia", age: 27, sexe: false },
      { id: 3, name: "Celia", lastname: "m2i", age: 12, sexe: false },
      { id: 4, name: "Jessica", lastname: "Macron", age: 90, sexe: false },
      { id: 5, name: "Pierre", lastname: "Paul-Jacques", age: 22, sexe: true },
    ],
  };
  render() {
    return (
      <div className="container text-center">
        <TitrePrincipal texte="h1">Ceci est mon titre</TitrePrincipal>
        <div className="row">
          <div className="col-6">{this.props.text}</div>
          <div className="col-6">{this.props.children}</div>
        </div>
        <div className="row">
          <Time />
        </div>
        <div className="row">
          {this.state.users.map((user) => {
            return (
              <User key={user.id} {...user} birthdayClick={() => console.log("anniversaire du user " + user.name)}>{user}</User>
            );
          })}

          <div></div>
        </div>
      </div>
    );
  }
}

export default App;
