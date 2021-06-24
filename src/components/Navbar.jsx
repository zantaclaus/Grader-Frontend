import React from "react";
import { Link, NavLink } from "react-router-dom";
import { addToggle, delClass } from "../services/toggleService";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsMoon } from "react-icons/bs";
import "../css/navbar.css";

function Navbar(props) {
  const menuClick = () => {
    addToggle("navbar", "show__menu");
  };

  const linkClick = () => {
    delClass("navbar", "show__menu");
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
        <div className="theme__toggle">
          <BsMoon size="2rem" />
        </div>
        <div className="nav__toggle" id="nav-toggle">
          <GiHamburgerMenu size="3rem" color="black" onClick={menuClick} />
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
