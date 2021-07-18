import React, { useEffect, useState } from "react";
import ContactCard from "./ContactCard";
import Aos from "aos";
import "../css/contact.css";
import { getContacts } from "../services/contactService";

function Contact(props) {
  const [contacts, setContacts] = useState(getContacts());
  const [isShuffle, setIsShuffle] = useState(false);

  useEffect(() => {
    Aos.init({ duration: 1000 });
    let shuffle = contacts;
    for (let i = shuffle.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * i);
      const temp = shuffle[i];
      shuffle[i] = shuffle[j];
      shuffle[j] = temp;
    }

    setContacts(shuffle);
    setIsShuffle(true);
  }, [contacts]);

  return (
    <React.Fragment>
      <div className="contact__block">
        {isShuffle && (
          <div data-aos="zoom-in-up">
            <header className="leader__header">
              <h1 className="contact__title">Developer</h1>
              {/* <p>Top 3 ranking doesn't sort by score.</p> */}
            </header>
            <div className="container contact__container">
              {contacts.map((admin) => (
                <ContactCard
                  name={admin.name}
                  section={admin.section}
                  image={admin.image}
                  facebook={admin.facebook}
                  ig={admin.ig}
                  github={admin.github}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </React.Fragment>
  );
}

export default Contact;
