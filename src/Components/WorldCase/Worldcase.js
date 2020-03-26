import React, { Component } from "react";
import "./Worldcase.css";
import World from "../../Containers/WorldCaseContainer";
import { Link } from "react-router-dom";

class Worldcase extends Component {
  render() {
    return (
      <div className="Home">
        <div className="Titulo">
          {this.props.children}
          <h1>Covit-19</h1>
          <h4>Visualizacion de data Mundial</h4>
        </div>
        <World />
        <div className="Button">
          <div className="Button">
            <Link to="/Worldcase">Revisión Mundial</Link>
          </div>
          <div className="Button">
            <Link to="/Countrycase">Revisión por País</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Worldcase;
