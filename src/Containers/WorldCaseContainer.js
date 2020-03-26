import React, { Component } from "react";
import Axios from "axios";

import "./CountryList.css";

class WorldCaseContainer extends Component {
  state = {
    worldData: []
  };

  componentDidMount() {
    Axios.get("https://coronavirus-19-api.herokuapp.com/all")
      .then(res => {
        this.setState({ worldData: res.data });
      })
      .catch(console.log);
  }
  render() {
    const { worldData } = this.state;
    return (
      <div className="">
        <div className="CountryStyle">
          <h3>Casos de confirmados de contagio: </h3>
          <p>{worldData.cases}</p>
        </div>
        <div className="CountryStyle">
          <h3>Conteo mundial de fallecidos por covit-19: </h3>
          <p>{worldData.deaths}</p>
        </div>
        <div className="CountryStyle">
          <h3>Conteo de recuperados de covit-19: </h3>
          <p>{worldData.recovered}</p>
        </div>
      </div>
    );
  }
}
export default WorldCaseContainer;
