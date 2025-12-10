import React, { useEffect, useRef } from "react";
import WebpImage from "../WebpImage/WebpImage";

const CreditAgricoleModal = () => {
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
      id="more-credit-agricole-project"
      tabIndex={-1}
      role="dialog"
      aria-labelledby="label-credit-agricole"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-scrollable" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h3 className="modal-title" id="label-credit-agricole">
              <WebpImage
                className="img-thumbnail w-25"
                src="assets/images/projects/credit-agircole-modal/credit-agricole-logo-modal.png"
                alt="Credit Agricole Logo"
                width="100"
                height="100"
                loading="lazy"
              />
              Credit Agiricole Mobile Application
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
                className="mySwiper vh-50"
                scrollbar-hide="true"
                loop="true"
              >
                <swiper-slide>
                  <WebpImage
                    className="img-fluid rounded-4 obj-contain"
                    src="assets/images/projects/credit-agircole-modal/loading.png"
                    alt="Credit Agricole loading screen"
                    width="800"
                    height="450"
                    loading="lazy"
                  />
                </swiper-slide>
                <swiper-slide>
                  <WebpImage
                    className="img-fluid rounded-4 obj-contain"
                    src="assets/images/projects/credit-agircole-modal/login.png"
                    alt="Credit Agricole login screen"
                    width="800"
                    height="450"
                    loading="lazy"
                  />
                </swiper-slide>
                <swiper-slide>
                  <WebpImage
                    className="img-fluid rounded-4 obj-contain"
                    src="assets/images/projects/credit-agircole-modal/home.png"
                    alt="Credit Agricole home screen"
                    width="800"
                    height="450"
                    loading="lazy"
                  />
                </swiper-slide>
                <swiper-slide>
                  <WebpImage
                    className="img-fluid rounded-4 obj-contain"
                    src="assets/images/projects/credit-agircole-modal/transfer_money_service.png"
                    alt="Credit Agricole transfer money service"
                    width="800"
                    height="450"
                    loading="lazy"
                  />
                </swiper-slide>
                <swiper-slide>
                  <WebpImage
                    className="img-fluid rounded-4 obj-contain"
                    src="assets/images/projects/credit-agircole-modal/internet_service.png"
                    alt="Credit Agricole internet service"
                    width="800"
                    height="450"
                    loading="lazy"
                  />
                </swiper-slide>
                <swiper-slide>
                  <WebpImage
                    className="img-fluid rounded-4 obj-contain"
                    src="assets/images/projects/credit-agircole-modal/electric_service.png"
                    alt="Credit Agricole electric service"
                    width="800"
                    height="450"
                    loading="lazy"
                  />
                </swiper-slide>
                <swiper-slide>
                  <WebpImage
                    className="img-fluid rounded-4 obj-contain"
                    src="assets/images/projects/credit-agircole-modal/gas_service.png"
                    alt="Credit Agricole gas service"
                    width="800"
                    height="450"
                    loading="lazy"
                  />
                </swiper-slide>
                <swiper-slide>
                  <WebpImage
                    className="img-fluid rounded-4 obj-contain"
                    src="assets/images/projects/credit-agircole-modal/water_service.png"
                    alt="Credit Agricole water service"
                    width="800"
                    height="450"
                    loading="lazy"
                  />
                </swiper-slide>
                <swiper-slide>
                  <WebpImage
                    className="img-fluid rounded-4 obj-contain"
                    src="assets/images/projects/credit-agircole-modal/transactions.png"
                    alt="Credit Agricole transactions screen"
                    width="800"
                    height="450"
                    loading="lazy"
                  />
                </swiper-slide>
                <swiper-slide>
                  <WebpImage
                    className="img-fluid rounded-4 obj-contain"
                    src="assets/images/projects/credit-agircole-modal/account.png"
                    alt="Credit Agricole account screen"
                    width="800"
                    height="450"
                    loading="lazy"
                  />
                </swiper-slide>
                <swiper-slide>
                  <WebpImage
                    className="img-fluid rounded-4 obj-contain"
                    src="assets/images/projects/credit-agircole-modal/help.png"
                    alt="Credit Agricole help screen"
                    width="800"
                    height="450"
                    loading="lazy"
                  />
                </swiper-slide>
              </swiper-container>
            </section>
            <div className="container">
              <h2 className="mb-3">
                Credit Agricole Mobile Application
                <a
                  href="https://developer.android.com/studio/intro"
                  className="float-md-right badge badge-info p-2"
                  target="_blank"
                  rel="noreferrer"
                >
                  Andriod Studio (Java)
                </a>
              </h2>
              <legend className="label mb-3">Description:</legend>
              <p>
                Based on the information provided in the screenshot, the mobile
                application "CREDIT AGRICOLE" appears to be a financial services
                platform offering a range of services such as internet payments,
                water payments, gas payments, and electricity payments. Users
                can access these services through a user-friendly interface that
                includes features such as balance checking, money transfers, and
                payment options using VISA and PayPal. The app seems to cater to
                individuals looking for convenient ways to manage their finances
                and pay bills seamlessly through their mobile devices. The
                inclusion of the fingerprint authentication option suggests a
                focus on security and ease of use for customers. The presence of
                a credit card with the app's name implies that "CREDIT AGRICOLE"
                may also offer banking or credit services to its users. Overall,
                the mobile application appears to be designed to streamline
                financial transactions and provide users with a comprehensive
                platform for managing their financial needs.
              </p>
              <legend className="label mb-3">Key Features:</legend>
              <ol className="list-group">
                <li className="list-group-item">
                  <strong>Account:</strong> User Create Account with Username
                  and Password Authentication and Biometric Authentication
                </li>
                <li className="list-group-item">
                  <strong>Services:</strong> You can make different services
                  like (Transfer Money, Pay Internet Bill, Electricity Bill, Gas
                  Bill, Water Bill, and See Transactions).
                </li>
              </ol>
              <legend className="label mb-3">Summary:</legend>
              <p>
                Overall, the mobile application appears to be designed to
                streamline financial transactions and provide users with a
                comprehensive platform for managing their financial needs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreditAgricoleModal;
