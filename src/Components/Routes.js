import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Homepage from "./Homepage/Home";
import Login from "./Auth/Login";
import Signup from "./Auth/Signup";
import Logout from "./Auth/Logout";
import NewsList from "./News/NewsList";
import Protocols from "./Protocols/Protocols";
import UserProfile from "./User/Profile";
import Protocol from "./Protocols/Protocol";

function Routes({ signup, login, logout }) {
  return (
    <div>
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
        <Route exact path="/logout">
          <Logout logout={logout} />
        </Route>
        <Route exact path="/news">
          <NewsList />
        </Route>
        <Route exact path="/protocols">
          <Protocols />
        </Route>
        <Route exact path="/profile">
          <UserProfile />
        </Route>
        <Route exact path="/protocol/:slug">
          <Protocol />
        </Route>
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default Routes;
