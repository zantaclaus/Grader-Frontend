import React, { useState } from "react";
import { getTheme, setTheme } from "../services/themeService";
import { Link, NavLink } from "react-router-dom";
import { addToggle, delClass } from "../services/toggleService";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMoon } from "react-icons/io5";
import { IoSunny } from "react-icons/io5";
import "../css/navbar.css";
import { useEffect } from "react";

function Navbar(props) {
  const [isLight, setIsLight] = useState(false);

  useEffect(() => {
    const theme = getTheme();
    if (theme === "light") {
      setIsLight(true);
    } else {
      addToggle("root", "dark__mode");
      setIsLight(false);
    }
  }, []);

  const menuClick = () => {
    addToggle("navbar", "show__menu");
  };

  const linkClick = () => {
    delClass("navbar", "show__menu");
  };

  const themeClick = () => {
    addToggle("root", "dark__mode");
    setIsLight(!isLight);
    setTheme();
    const theme = getTheme();
    if (theme === "light") {
      setIsLight(true);
    } else {
      setIsLight(false);
    }
  };

  return (
    <div className="navbar" id="navbar">
      <nav className="nav__container">
        <Link to="/" className="nav__logo">
          CE BOOSTUP #9
        </Link>

        <div className="nav__menu" id="nav__menu">
          <ul className="nav__list">
            <li className="nav__item">
              <NavLink
                to="/home"
                activeClassName="nav__selected"
                className="nav__link nav__link--1"
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
                className="nav__link nav__link--2"
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
                className="nav__link nav__link--3"
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
                className="nav__link nav__link--4"
                onClick={linkClick}
              >
                Profile
                <span />
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink to="/logout" className="nav__link nav__link--5">
                Logout
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="nav__toggle" id="nav-toggle">
          {isLight ? (
            <GiHamburgerMenu size="3rem" color="black" onClick={menuClick} />
          ) : (
            <GiHamburgerMenu size="3rem" color="white" onClick={menuClick} />
          )}
        </div>
        <div className="theme__toggle" id="theme-toggle" onClick={themeClick}>
          {isLight ? (
            <IoMoon size="3rem" />
          ) : (
            <IoSunny size="3rem" color="white" />
          )}
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
