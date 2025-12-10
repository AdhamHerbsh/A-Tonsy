import React, { useEffect, useRef } from "react";
import WebpImage from "../WebpImage/WebpImage";

const ElsewedyModal = () => {
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
    <div
      className="container-fluid modal fade projects-modal"
      id="more-elsewedy-offer-project"
      tabIndex={-1}
      role="dialog"
      aria-labelledby="label-elsewedy"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-scrollable" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h3 className="modal-title" id="label-elsewedy">
              <WebpImage
                className="img-thumbnail w-25"
                src="assets/images/projects/elsewedy-offer-modal/elsewedy-offer-logo-modal.png"
                alt="Elsewedy Offer Logo"
                width="100"
                height="100"
                loading="lazy"
              />
              Offer System for Elsewedy
            </h3>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div className="modal-body">
            {/* Swiper */}
            <section className="slider">
              <swiper-container
                ref={swiperRef}
                init="false"
                className="mySwiper"
                scrollbar-hide="true"
                autoPlay
                loop="true"
              >
                <swiper-slide>
                  <WebpImage
                    className="img-fluid rounded-4"
                    src="assets/images/projects/elsewedy-offer-modal/elsewedy-offer-dashboard.png"
                    alt="Elsewedy Dashboard"
                    width="800"
                    height="450"
                    loading="lazy"
                  />
                </swiper-slide>
                <swiper-slide>
                  <WebpImage
                    className="img-fluid rounded-4"
                    src="assets/images/projects/elsewedy-offer-modal/elsewedy-offer-home.png"
                    alt="Elsewedy Home"
                    width="800"
                    height="450"
                    loading="lazy"
                  />
                </swiper-slide>
                <swiper-slide>
                  <WebpImage
                    className="img-fluid rounded-4"
                    src="assets/images/projects/elsewedy-offer-modal/elsewedy-offer-login.png"
                    alt="Elsewedy Login"
                    width="800"
                    height="450"
                    loading="lazy"
                  />
                </swiper-slide>
                <swiper-slide>
                  <WebpImage
                    className="img-fluid rounded-4"
                    src="assets/images/projects/elsewedy-offer-modal/elsewedy-offer-register.png"
                    alt="Elsewedy Register"
                    width="800"
                    height="450"
                    loading="lazy"
                  />
                </swiper-slide>
                <swiper-slide>
                  <WebpImage
                    className="img-fluid rounded-4"
                    src="assets/images/projects/elsewedy-offer-modal/elsewedy-offer-profile.png"
                    alt="Elsewedy Profile"
                    width="800"
                    height="450"
                    loading="lazy"
                  />
                </swiper-slide>
                <swiper-slide>
                  <WebpImage
                    className="img-fluid rounded-4"
                    src="assets/images/projects/elsewedy-offer-modal/elsewedy-offer-admin.png"
                    alt="Elsewedy Admin"
                    width="800"
                    height="450"
                    loading="lazy"
                  />
                </swiper-slide>
                <swiper-slide>
                  <WebpImage
                    className="img-fluid rounded-4"
                    src="assets/images/projects/elsewedy-offer-modal/elsewedy-offer-table.png"
                    alt="Elsewedy Table"
                    width="800"
                    height="450"
                    loading="lazy"
                  />
                </swiper-slide>
                <swiper-slide>
                  <WebpImage
                    className="img-fluid rounded-4"
                    src="assets/images/projects/elsewedy-offer-modal/elsewedy-offer-create.png"
                    alt="Elsewedy Create"
                    width="800"
                    height="450"
                    loading="lazy"
                  />
                </swiper-slide>
              </swiper-container>
            </section>
            <div className="container">
              <h2 className="mb-3">
                Elsewedy Offer System
                <a
                  href="https://dotnet.microsoft.com/en-us/apps/aspnet/mvc"
                  className="float-md-right badge badge-info p-2"
                  target="_blank"
                  rel="noreferrer"
                >
                  ASP.NET MVC
                </a>
              </h2>
              <legend className="label mb-3">Description:</legend>
              <p>
                In developing an Offer System for Elsewedy Transformers, this
                ASP.NET MVC-based project showcases a streamlined approach to
                modernizing and optimizing a traditionally paper-based process.
                Built with a focus on efficiency and reliability, the Offer
                System was designed to manage both standard and non-standard
                offer cycles, covering each step from initial client requests to
                final offer submissions. Key stakeholders—Sales, Design,
                Planning, and Finance—can access a centralized digital platform,
                enabling better coordination and minimizing the risk of errors
                associated with manual data entry and Excel sheet dependencies.
              </p>
              <legend className="label mb-3">Key Features:</legend>
              <ol className="list-group">
                <li className="list-group-item">
                  <strong>Process Automation:</strong> Automates offer creation,
                  passing tasks seamlessly between departments.
                </li>
                <li className="list-group-item">
                  <strong>Real-time Data Access:</strong> Ensures each
                  department accesses updated information for accurate
                  decision-making.
                </li>
                <li className="list-group-item">
                  <strong>Data Validation and Consistency:</strong> Integrates
                  validation checks to improve accuracy, especially critical
                  during cost calculations and offer finalization.
                </li>
              </ol>
              <legend className="label mb-3">Summary:</legend>
              <p>
                This project highlights skills in ASP.NET MVC, process analysis,
                and backend integration, demonstrating the ability to create
                enterprise-level solutions that reduce interdepartmental delays
                and enhance operational efficiency.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ElsewedyModal;
