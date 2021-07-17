import React, { useEffect } from "react";
import ContactCard from "./ContactCard";
import Aos from "aos";
import "../css/contact.css";
import { getContacts } from "../services/contactService";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  EffectCoverflow,
} from "swiper";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";
import "swiper/swiper.scss";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

function Contact(props) {
  const contacts = getContacts();

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div className="contact__block">
      <div data-aos="zoom-in-up">
        <header className="leader__header">
          <h1 className="contact__title">Admin Contact</h1>
          {/* <p>Top 3 ranking doesn't sort by score.</p> */}
        </header>
        <div className="container contact__container">
          <Swiper
            effect="coverflow"
            loop
            spaceBetween={50}
            slidesOffsetBefore={0.5}
            slidesPerView={3.5}
            // navigation
            // pagination={{ clickable: true }}
            // scrollbar={{ draggable: true }}
            // onSlideChange={() => console.log("slide change")}
            // onSwiper={(swiper) => console.log(swiper)}
          >
            {contacts.map((admin) => (
              <SwiperSlide key={admin.id}>
                <ContactCard
                  name={admin.name}
                  section={admin.section}
                  image={admin.image}
                  facebook={admin.facebook}
                  ig={admin.ig}
                  github={admin.github}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default Contact;
