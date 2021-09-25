import React, { useState, useContext } from "react";
import "./NavBar.css";
import { NavLink, Link } from "react-router-dom";
import UserContext from "../Auth/UserContext";
import Dropdown from "./Dropdown";

function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const { currentUser } = useContext(UserContext);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  function loggedInNav() {
    return (
      <>
        <nav className="navbar">
          <h1 className="navbar-logo">
            <Link className="navbar-logo-link" to="/">
              DΞFI Signal
            </Link>
          </h1>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="Home"
                onClick={closeMobileMenu}
                className="nav-links"
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="learn"
                onClick={closeMobileMenu}
                className="nav-links"
              >
                Learn
              </NavLink>
            </li>
            <li
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
              className="nav-item"
            >
              <NavLink
                exact
                to="protocols"
                onClick={closeMobileMenu}
                className="nav-links"
              >
                Markets <i className="fas fa-caret-down" />
              </NavLink>
              {dropdown && <Dropdown />}
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="news"
                onClick={closeMobileMenu}
                className="nav-links"
              >
                News
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="profile"
                onClick={closeMobileMenu}
                className="nav-links"
              >
                {currentUser.username}
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="logout"
                onClick={closeMobileMenu}
                className="nav-links"
              >
                Logout
              </NavLink>
            </li>
          </ul>
        </nav>
      </>
    );
  }
  function loggedOutNav() {
    return (
      <>
        <nav className="navbar">
          <h1 className="navbar-logo">
            <Link className="navbar-logo-link" to="/">
              DΞFI Signal
            </Link>
          </h1>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="login"
                onClick={closeMobileMenu}
                className="nav-links"
              >
                Login
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                exact
                to="signup"
                onClick={closeMobileMenu}
                className="nav-links"
              >
                Signup
              </NavLink>
            </li>
          </ul>
        </nav>
      </>
    );
  }
  return <>{currentUser ? loggedInNav() : loggedOutNav()}</>;
}

export default Navbar;
