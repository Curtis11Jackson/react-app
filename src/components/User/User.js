import React from "react";
import classes from "./User.module.css";

const user = (props) => {

    const monStyle = {
        backgroundColor: "lightblue",
        color: "white",
      };
      if (!props.sexe) {
        monStyle.backgroundColor = "pink";
      }

    return (
        <div>
            <h2 className={classes.header}>{props.name} {props.lastname}</h2>
            
            <div style={monStyle}>
                <p>
                    Age : {props.age}
                    <br/>
                    Sexe : {props.sexe ? "Homme" : "Femme"}
                    <br />
                    <button className="btn btn-info" onClick={props.birthdayClick}>Birthday</button>
                </p>
            </div>
            
            {props.children.name}
        </div>
    )
}

export default user;