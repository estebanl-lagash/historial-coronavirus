import React from "react";
import { Switch, Route } from "react-router-dom";
import worldcase from "./Components/WorldCase/Worldcase";
import countrycase from "./Components/CountryCase/CountryCase";
import Access from "../src/Components/Access";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Access} />
      <Route exact path="/Worldcase" component={worldcase} />
      <Route exact path="/Countrycase" component={countrycase} />
    </Switch>
  );
};

export default Routes;
