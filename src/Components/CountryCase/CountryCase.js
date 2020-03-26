import React, { Component } from "react";
import "./CountryCase";
import Country from "../../Containers/CountryCaseContainer";
import { Link } from "react-router-dom";

class CountryCase extends Component {
  render() {
    return (
      <div className="Home">
        <div className="Titulo">
          <h1>Covit-19</h1>
          <h4>Visualizacion de data Mundial</h4>
        </div>
        <Country />
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

export default CountryCase;
