import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { addToggle, delClass } from "../services/toggleService";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMoon } from "react-icons/io5";
import { IoSunny } from "react-icons/io5";
import "../css/navbar.css";

function Navbar(props) {
  const [isMoon, setIsMoon] = useState(true);

  const menuClick = () => {
    addToggle("navbar", "show__menu");
  };

  const linkClick = () => {
    delClass("navbar", "show__menu");
  };

  const themeClick = () => {
    addToggle("root", "dark__mode");
    setIsMoon(!isMoon);
  };

  return (
    <div className="navbar" id="navbar">
      <nav className="nav__container">
        <Link to="/" className="nav__logo">
          CE BOOTSUP #9
        </Link>

        <div className="nav__menu" id="nav__menu">
          <ul className="nav__list">
            <li className="nav__item">
              <NavLink
                to="/home"
                activeClassName="nav__selected"
                className="nav__link"
                onClick={linkClick}
              >
                Home
                <span />
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink
                to="/tasks"
                activeClassName="nav__selected"
                className="nav__link"
                onClick={linkClick}
              >
                Tasks
                <span />
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink
                to="/guidebook"
                activeClassName="nav__selected"
                className="nav__link"
                onClick={linkClick}
              >
                Guidebook
                <span />
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink
                to="/profile"
                activeClassName="nav__selected"
                className="nav__link"
                onClick={linkClick}
              >
                Profile
                <span />
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink to="/logout" className="nav__link">
                Logout
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="nav__toggle" id="nav-toggle">
          <GiHamburgerMenu size="3rem" color="black" onClick={menuClick} />
        </div>
        <div className="theme__toggle" id="theme-toggle" onClick={themeClick}>
          {isMoon ? <IoMoon size="3rem" /> : <IoSunny size="3rem" />}
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
