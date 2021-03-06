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

  const learnHandle = () => {
    alert("*** Login with Kmitl Email ***");
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
                to="/submission"
                activeClassName="nav__selected"
                className="nav__link nav__link--3"
                onClick={linkClick}
              >
                Submission
                <span />
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink
                to="/guidebook"
                activeClassName="nav__selected"
                className="nav__link nav__link--4"
                onClick={linkClick}
              >
                Guide
                <span />
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink
                to="/profile"
                activeClassName="nav__selected"
                className="nav__link nav__link--5"
                onClick={linkClick}
              >
                Profile
                <span />
              </NavLink>
            </li>
            <li className="nav__item">
              <a
                className="nav__link nav__link--6"
                onClick={learnHandle}
                href="https://bit.ly/bookceboostup"
                target="_blank"
                rel="noreferrer"
              >
                Learn
              </a>
              {/* <a
                href="https://bit.ly/bookceboostup"
                target="_blank"
                className="nav__link nav__link--6"
                rel="noreferrer"
              >
                Learn
              </a> */}
            </li>
            <li className="nav__item">
              <NavLink to="/logout" className="nav__link nav__logout">
                Logout
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="nav__toggle" id="nav-toggle">
          <GiHamburgerMenu
            size="3rem"
            color={isLight ? "black" : "white"}
            onClick={menuClick}
          />
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
