import React from "react";

import { RiFacebookFill } from "react-icons/ri";
import { RiInstagramFill } from "react-icons/ri";
import { RiGithubLine } from "react-icons/ri";
import "../css/contactCard.css";

function ContactCard({ name, section, image, facebook, ig, github }) {
  return (
    <div className="contact__card">
      <div className="contact__imgBx">
        <img src={image} alt="" />
      </div>
      <div className="contact__content">
        <div className="contact__contentBx">
          <h3 className="contact__name">
            {name}
            <br />
            <span className="contact__section">{section}</span>
          </h3>
        </div>
        <ul className="contact__socialBx">
          <li className="contact__social social__1">
            <a href={facebook} target="_blank" rel="noreferrer">
              <RiFacebookFill color="white" size="2.4rem" />
            </a>
          </li>
          <li className="contact__social social__2">
            <a href={ig} target="_blank" rel="noreferrer">
              <RiInstagramFill color="white" size="2.4rem" />
            </a>
          </li>
          <li className="contact__social social__3">
            <a href={github} target="_blank" rel="noreferrer">
              <RiGithubLine color="white" size="2.4rem" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ContactCard;
