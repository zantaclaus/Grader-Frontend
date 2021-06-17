import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Aos from "aos";
import hero from "../images/hero.svg";
import "../css/hero.css";

function Hero(props) {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div className="block hero">
      <div className="container grid grid--1x2">
        <header data-aos="fade-right" className="hero__content">
          <h1>
            Programming <span>Tasks</span>
          </h1>
          <p>Be a good programmer in 2 weeks.</p>
          <Link to="/tasks" className="btn btn--primary btn--stretched">
            Get Started
          </Link>
        </header>
        <img data-aos="fade-left" className="hero__image" src={hero} alt="" />
      </div>
    </div>
  );
}

export default Hero;
