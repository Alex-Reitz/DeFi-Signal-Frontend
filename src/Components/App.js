import React, { useState, useEffect } from "react";
import "./App.css";
import Routes from "./Routes";
import { BrowserRouter } from "react-router-dom";
import jwt from "jsonwebtoken";
import UserContext from "./Auth/UserContext";
import useLocalStorage from "../hooks/useLocalStorage";
import DeFiSignalApi from "../api/api";
import NavBar from "../Components/Navbar/Navbar";
import Loading from "./Loading/Loading";

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
            let thisUser = await DeFiSignalApi.getCurrentUser(username);
            setCurrentUser(thisUser);
          } catch (err) {
            setCurrentUser(null);
          }
        }
        setInfoLoaded(true);
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
      let response = await DeFiSignalApi.signup(signupData);
      setToken(response.token);
      return { success: true };
    } catch (error) {
      return { success: false, error };
    }
  }

  async function login(loginData) {
    try {
      let response = await DeFiSignalApi.login(loginData);
      setToken(response.token);
      return { success: true };
    } catch (error) {
      return { success: false, error };
    }
  }

  if (!infoLoaded) return <Loading />;

  return (
    <BrowserRouter>
      <UserContext.Provider value={{ currentUser }}>
        <div className="App">
          <NavBar />
          <Routes signup={signup} login={login} logout={logout} />
        </div>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
