import React from "react";
import { RiFacebookFill } from "react-icons/ri";
import { RiInstagramFill } from "react-icons/ri";
import { RiGithubLine } from "react-icons/ri";
import "../css/contact.css";

function Contact(props) {
  return (
    <div className="contact__block">
      <div className="container">
        <div className="contact__card">
          <div className="contact__imgBx">
            <img src="" alt="" />
          </div>
          <div className="contact__content">
            <div className="contact__contentBx"></div>
            <ul className="contact__social">
              <li>
                <a href="/#">
                  <RiFacebookFill />
                </a>
                <a href="/#">
                  <RiInstagramFill />
                </a>
                <a href="/#">
                  <RiGithubLine />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
