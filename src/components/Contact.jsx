import React from "react";
import ContactCard from "./ContactCard";
import "../css/contact.css";
import pang from "../images/pang.jpg";
import zan from "../images/zan.jpg";

function Contact(props) {
  return (
    <div className="contact__block">
      <div className="container contact__container">
        <ContactCard name="Nista" section="Frontend Desiginer" image={pang} />
        <ContactCard
          name="zantaclaus"
          section="Frontend Developer"
          image={zan}
        />
      </div>
    </div>
  );
}

export default Contact;
