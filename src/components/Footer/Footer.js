import React from "react";
import WebpImage from "../WebpImage/WebpImage";

const Footer = () => {
  return (
    <footer id="footer" className="footer-area">
      <div className="footer-widget pt-130 pb-130">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="footer-content text-center">
                <a href="index.php">
                  <WebpImage
                    className="img-fluid w-25"
                    src="assets/images/logo/logo.png"
                    alt="Adham Tonsy Logo"
                    width="150"
                    height="50"
                    loading="lazy"
                  />
                </a>
                <p className="mt-4">
                  I have genuinely cared about the work I have done during my
                  tenure here, and your contribution to that experience has been
                  invaluable. Your expertise, kindness, and professionalism have
                  made a significant impact on me, both personally and
                  professionally. I would like to extend my heartfelt thanks for
                  your support, encouragement, and the positive environment you
                  have fostered. Your willingness to collaborate and your
                  respectful approach has made working with you a truly
                  enjoyable experience.
                </p>
                <ul>
                  <li>
                    <a
                      href="https://www.facebook.com/adham.stunt.71/"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Visit my Facebook profile"
                    >
                      <i className="lni-facebook-filled" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://twitter.com/AdhamAltonsy"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Visit my Twitter profile"
                    >
                      <i className="lni-twitter-original" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/adhamstunt/"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Visit my Instagram profile"
                    >
                      <i className="lni-instagram-original" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/in/adhamaltonsy"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Visit my LinkedIn profile"
                    >
                      <i className="lni-linkedin-original" />
                    </a>
                  </li>
                </ul>
              </div>
              {/* footer content */}
            </div>
          </div>
          {/* row */}
        </div>
        {/* container */}
      </div>
      {/* footer widget */}
      <div className="footer-copyright pb-20">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="copyright-text text-center pt-20">
                <p>Copyright © Adham Altonsy 2024.</p>
              </div>
              {/* copyright text */}
            </div>
          </div>
          {/* row */}
        </div>
        {/* container */}
      </div>
      {/* footer widget */}
    </footer>
  );
};

export default Footer;
