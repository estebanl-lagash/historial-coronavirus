import React, { Component } from "react";
import Axios from "axios";

import "./CountryList.css";

class CountryCaseContainer extends Component {
  state = {
    countryData: []
  };

  componentDidMount() {
    Axios.get("https://coronavirus-19-api.herokuapp.com/countries")
      .then(res => {
        this.setState({ countryData: res.data });
      })
      .catch(console.log);
  }
  render() {
    return (
      <div>
        {this.state.countryData.map((countryData, index) => (
          <div className="CountryStyle">
            <ul key={index}>
              <h2>{countryData.country}</h2>
              <p>Conteo de Contagios: {countryData.cases}</p>
              <p>Contagios Hoy: {countryData.todayCases}</p>
              <p>Fallecidos: {countryData.deaths}</p>
              <p>Recuperados: {countryData.recovered}</p>
            </ul>
          </div>
        ))}
      </div>
    );
  }
}

export default CountryCaseContainer;
