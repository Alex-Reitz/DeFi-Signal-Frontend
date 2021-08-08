import React, { useState, useEffect } from "react";
import "./App.css";
import Routes from "./Routes";
import { BrowserRouter } from "react-router-dom";
import jwt from "jsonwebtoken";
import UserContext from "./Auth/UserContext";
import useLocalStorage from "../hooks/useLocalStorage";
import DeFiSignalApi from "../api/api";
import NavBar from "../Components/Navbar/Navbar";

export const TOKEN_ID = "DeFi-signal-token";

function App() {
  const [token, setToken] = useLocalStorage(TOKEN_ID);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(
    function loadUserInfo() {
      async function getCurrentUser() {
        if (token) {
          try {
            let { username } = jwt.decode(token);
            DeFiSignalApi.token = token;
            let currentUser = await DeFiSignalApi.getCurrentUser(username);
            setCurrentUser(currentUser);
          } catch (err) {
            setCurrentUser(null);
          }
        }
      }
      getCurrentUser();
    },
    [token]
  );

  async function logout() {
    setCurrentUser(null);
    setToken(null);
  }
  async function signup(signupData) {
    try {
      let token = await DeFiSignalApi.signup(signupData);
      setToken(token);
      return { success: true };
    } catch (error) {
      return { success: false, error };
    }
  }
  async function login(loginData) {
    try {
      let token = await DeFiSignalApi.login(loginData);
      setToken(token);
      return { success: true };
    } catch (error) {
      return { success: false, error };
    }
  }
  return (
    <BrowserRouter>
      <UserContext.Provider value={{ currentUser }}>
        <div className="App">
          <NavBar logout={logout} />
          <Routes signup={signup} login={login} />
        </div>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
