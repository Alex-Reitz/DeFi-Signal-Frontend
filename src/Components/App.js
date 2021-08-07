import React, { useState, useEffect } from "react";
import "./App.css";
import Routes from "./Routes";
import { BrowserRouter } from "react-router-dom";
import jwt from "jsonwebtoken";
import useLocalStorage from "../hooks/useLocalStorage";
import DeFiSignalApi from "../api/api";

export const TOKEN_ID = "DeFi-signal-token";

function App() {
  const [token, setToken] = useLocalStorage(TOKEN_ID);
  const [currentUser, setCurrentUser] = useState(null);
  const [infoLoaded, setInfoLoaded] = useState(false);

  useEffect(
    function loadUserInfo() {
      async function getCurrentUser() {
        if (token) {
          try {
            let { username } = jwt.decode(token);
            DeFiSignalApi.token = token;
            let currentUser = DeFiSignalApi.getCurrentUser(username);
            setCurrentUser(currentUser);
          } catch (error) {
            console.error("Error loading user info", error);
          }
        }
        setInfoLoaded(true);
      }
      setInfoLoaded(false);
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
  async function login() {}
  return (
    <BrowserRouter>
      <div className="App">
        <Routes signup={signup} />
      </div>
    </BrowserRouter>
  );
}

export default App;
