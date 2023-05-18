import React from "react";
import Swiper from "react-id-swiper";
import { useNavigate } from "react-router-dom";

import "./SimpleSwiper.css";
import "swiper/swiper-bundle.css";

const SimpleSwiper = (props) => {
  const navigate = useNavigate();

  const handleContactUsClick = () => {
    navigate("/contact");
  };

  const params = {
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    spaceBetween: 30,
    effect: "snap",
    snap: {
      snapToNext: true,
    },
    slidesPerView: "auto",
  };

  return (
    <div className="simple-swiper-container">
      <Swiper {...params}>
        {props.card &&
          props.card.map((item) => (
            <div key={item.id}>
              <div
                className="slide-content"
                style={{ fontFamily: "Prima Sans BT" }}
              >
                <p className="slide-title">{item.Title}</p>
                <p className="slide-subtitle">{item.Subtitle}</p>
                <button
                  className="contact-us-button"
                  onClick={handleContactUsClick}
                >
                  Contact us
                </button>
              </div>
              <img src={item.ImageUrl} alt={item.Title} />
            </div>
          ))}
      </Swiper>
    </div>
  );
};

export default SimpleSwiper;
