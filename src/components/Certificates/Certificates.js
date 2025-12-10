import React, { useEffect, useRef } from "react";
import WebpImage from "../WebpImage/WebpImage";

const Certificates = () => {
  const swiperRef = useRef(null);

  useEffect(() => {
    if (swiperRef.current) {
      const swiper = swiperRef.current;
      Object.assign(swiper, {
        pagination: {
          clickable: true,
        },
        navigation: true,
      });
      if (swiper.initialize) swiper.initialize();
    }
  }, []);

  return (
    <section id="certificate" className="services-area py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="section-title text-center pb-30">
              <h2 className="title">My Certificates</h2>
              <p>Here are some of my certificates and achievements.</p>
            </div>
          </div>
        </div>
        <swiper-container
          ref={swiperRef}
          init="false"
          className="mySwiper"
          scrollbar-hide="true"
          autoPlay
          loop="true"
          keyboard
        >
          {[...Array(21)].map((_, i) => (
            <swiper-slide key={i}>
              <WebpImage
                className="img-fluid rounded-4"
                src={`assets/images/certificates/c-${i + 1}.png`}
                alt={`Certificate ${i + 1}`}
                width="600"
                height="424"
                loading="lazy"
              />
            </swiper-slide>
          ))}
        </swiper-container>
        <div className="row">
          <div className="col text-center">
            <img
              className="img-fluid rounded-4"
              src="assets/images/certificates/completion-badge-v2.gif"
              alt="Completion Badge"
            />
          </div>
        </div>
      </div>
      {/* container */}
    </section>
  );
};

export default Certificates;
