import React, { useState, useContext } from "react";
import "./NavBar.css";
import { LoggedInMenuItems, LoggedOutMenuItems } from "./MenuItem";
import { NavLink, Link } from "react-router-dom";
import UserContext from "../Auth/UserContext";

function Navbar() {
  const [click, setClick] = useState(false);
  const [menu, setMenu] = useState(false);
  const handleClick = () => setClick(!click);
  const handleMenu = () => setMenu(!menu);

  const { currentUser } = useContext(UserContext);

  function loggedInNav() {
    return (
      <>
        <nav className="NavbarItems">
          <h1 className="navbar-logo">
            <Link className="navbar-logo" to="/">
              DeFi Signal<i className="fab fa-ethereum"></i>
            </Link>
          </h1>
          <div className="menu-icon" onClick={handleMenu}>
            <i className={menu ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            {LoggedInMenuItems.map((item, index) => {
              return (
                <li key={index}>
                  <NavLink
                    exact
                    to={item.title}
                    onClick={handleClick}
                    className={item.cName}
                  >
                    {item.title}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </nav>
      </>
    );
  }
  function loggedOutNav() {
    return (
      <>
        <nav className="NavbarItems">
          <h1 className="navbar-logo">
            <Link className="navbar-logo" to="/">
              DeFi Signal<i className="fab fa-ethereum"></i>
            </Link>
          </h1>
          <div className="menu-icon" onClick={handleMenu}>
            <i className={menu ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            {LoggedOutMenuItems.map((item, index) => {
              return (
                <li key={index}>
                  <NavLink
                    exact
                    to={item.title}
                    onClick={handleClick}
                    className={item.cName}
                  >
                    {item.title}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </nav>
      </>
    );
  }
  return <>{currentUser ? loggedInNav() : loggedOutNav()}</>;
}

export default Navbar;
