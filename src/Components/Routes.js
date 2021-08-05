import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Homepage from "./Homepage/home";
import Login from "./Auth/login";
import Signup from "./Auth/signup";
import NavBar from "../Components/Navbar/Navbar";

function Routes() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/signup">
          <Signup />
        </Route>
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default Routes;
