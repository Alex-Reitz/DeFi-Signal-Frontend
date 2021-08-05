import React, { useState } from "react";
import "./NavBar.css";
import { menuItems } from "./MenuItem";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [click, setClick] = useState(false);
  const [menu, setMenu] = useState(false);
  const handleClick = () => setClick(!click);
  const handleMenu = () => setMenu(!menu);

  return (
    <>
      <nav className="NavbarItems">
        <h1 className="navbar-logo">
          DeFi Signal<i className="fab fa-ethereum"></i>
        </h1>
        <div className="menu-icon" onClick={handleMenu}>
          <i className={menu ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          {menuItems.map((item, index) => {
            return (
              <li key={index}>
                <NavLink exact to={item.title} className={item.cName}>
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

export default Navbar;
