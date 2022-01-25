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
      { id: 7, name: "Jessica", lastname: "Macron", age: 90, sexe: false },
      { id: 11, name: "Pierre", lastname: "Paul-Jacques", age: 22, sexe: true },
    ],
  };

  userBirthdayHandler = (id) => {
    console.log("Anniversaire de " + id);
    // On utilise findIndex pour recup l'index de user 
    const indexUser = this.state.users.findIndex(element => {
      return element.id === id;
    })

    const user = {...this.state.users[indexUser]};
    user.age++;
    const users = [...this.state.users];
    users[indexUser] = user;
    this.setState({users})
}

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
              <User key={user.id} {...user} birthdayClick={() => this.userBirthdayHandler(user.id)}>{user}</User>
            );
          })}

          <div></div>
        </div>
      </div>
    );
  }
}

export default App;
