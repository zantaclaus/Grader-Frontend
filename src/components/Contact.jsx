import React from "react";
import ContactCard from "./ContactCard";
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

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, EffectCoverflow]);

function Contact(props) {
  const contacts = getContacts();
  return (
    <div className="contact__block">
      <div className="container contact__container">
        <Swiper
          effect="coverflow"
          loop
          spaceBetween={50}
          slidesPerView={3}
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
  );
}

export default Contact;
