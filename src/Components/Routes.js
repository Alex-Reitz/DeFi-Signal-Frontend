import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Homepage from "./Homepage/home";
import Login from "./Auth/Login";
import Signup from "./Auth/Signup";
import NavBar from "../Components/Navbar/Navbar";

function Routes({ signup, login }) {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>
        <Route exact path="/login">
          <Login login={login} />
        </Route>
        <Route exact path="/signup">
          <Signup signup={signup} />
        </Route>
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default Routes;
