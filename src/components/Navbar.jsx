import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Aos from "aos";
import { showMenu, linkAction } from "../services/extendService";
import "../css/navbar.css";

function Navbar(props) {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  const menuClick = () => {
    showMenu("nav-toggle", "nav-menu");
  };

  const linkClick = () => {
    linkAction();
  };

  return (
    <div data-aos="fade-down" className="navbar" id="navbar">
      <nav className="nav nav-container">
        <Link to="/" className="nav__logo">
          CE BOOTSUP #9
        </Link>

        <div className="nav__menu" id="nav-menu">
          <ul className="nav__list">
            <li className="nav__item">
              <Link to="/" className="nav__link" onClick={linkClick}>
                Home
              </Link>
            </li>
            <li className="nav__item">
              <Link to="/" className="nav__link" onClick={linkClick}>
                Tasks
              </Link>
            </li>
            <li className="nav__item">
              <Link to="/" className="nav__link" onClick={linkClick}>
                Guidebook
              </Link>
            </li>
            <li className="nav__item">
              <Link to="/profile" className="nav__link" onClick={linkClick}>
                Profile
              </Link>
            </li>
            <li className="nav__item">
              <Link to="/logout" className="nav__link">
                Logout
              </Link>
            </li>
          </ul>
        </div>
        <div className="nav__toggle" id="nav-toggle">
          <img
            alt=""
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAATElEQVRIS2NkoDFgpLH5DKMWEAzhAQmi/wSdhV8BiqOx+YDmFlDoAVTtAxIHNPcBzeOA5hbQPIiGvgU0jwOaWzD042DUByghQPPSFABt6AYZfO/+XQAAAABJRU5ErkJggg=="
            onClick={menuClick}
          />
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
