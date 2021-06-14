import React, { useEffect } from "react";
import Aos from "aos";
import { IconContext } from "react-icons";
import { FaBook } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { FaStackOverflow } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

import book from "../images/book.svg";
import "../css/tool.css";

function Tool(props) {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <IconContext.Provider value={{ className: "react-icons" }}>
      <div>
        <div className="block tool">
          <div className="container grid grid--1x2">
            <img
              data-aos="zoom-in-right"
              className="tool__image"
              src={book}
              alt=""
            />
            <header data-aos="fade-up" className="tool__content">
              <h1>
                Important tools you need to <span>Make It Easy. </span>
              </h1>
              <ul>
                <li>
                  <FaBook />
                </li>
                <li>
                  <FaDiscord />
                </li>
                <li>
                  <FaInstagramSquare />
                </li>
                <li>
                  <FaStackOverflow />
                </li>
              </ul>
            </header>
          </div>
        </div>
      </div>
    </IconContext.Provider>
  );
}

export default Tool;
