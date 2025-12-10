import React from "react";
import WebpImage from "../WebpImage/WebpImage";

const CallToAction = () => {
  return (
    <section
      id="call-to-action"
      className="call-to-action py-5 bg_cover position-relative"
    >
      <div
        className="position-absolute w-100 h-100"
        style={{ top: 0, left: 0, zIndex: -1 }}
      >
        <WebpImage
          src="assets/images/call-to-action.png"
          className="w-100 h-100"
          style={{ objectFit: "cover" }}
          loading="lazy"
          alt="Call to action background"
        />
      </div>
      <div className="container position-relative">
        <div className="row justify-content-center">
          <div className="col-xl-8 col-lg-9">
            <div className="call-action-content text-center">
              <h2 className="action-title">IF Want To Know More About Me?</h2>
              <p>
                Here, My CV shows more about me, my experience, and education
                trip Also you can contact with me for hire.
              </p>
              <ul>
                <li>
                  <a
                    className="main-btn custom"
                    href="assets/CV/AdhamAltonsy_CV.pdf"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Download CV
                  </a>
                </li>
                <li>
                  <a className="main-btn custom-2" href="tel:01028806961">
                    hire me
                  </a>
                </li>
              </ul>
            </div>
            {/* call action content */}
          </div>
        </div>
        {/* row */}
      </div>
      {/* container */}
    </section>
  );
};

export default CallToAction;
