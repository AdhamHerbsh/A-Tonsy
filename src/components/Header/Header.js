import React from "react";
import WebpImage from "../WebpImage/WebpImage";

const Header = () => {
  return (
    <header id="home" className="header-area">
      <div className="navigation fixed-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <nav className="navbar navbar-expand-lg">
                <a className="navbar-brand" href="index.php">
                  <WebpImage
                    src="assets/images/logo/altonsy-logo.png"
                    alt="Adham Tonsy Logo"
                  />
                </a>
                {/* Logo */}
                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="toggler-icon" />
                  <span className="toggler-icon" />
                  <span className="toggler-icon" />
                </button>
                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                      <a className="page-scroll" href="#home">
                        Home
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="page-scroll" href="#about">
                        About
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="page-scroll" href="#service">
                        Services
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="page-scroll" href="#work">
                        Portfolio
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="page-scroll" href="#certificate">
                        Certificates
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="page-scroll" href="#contact">
                        Contact
                      </a>
                    </li>
                  </ul>
                </div>
                {/* navbar collapse */}
              </nav>
              {/* navbar */}
            </div>
          </div>
          {/* row */}
        </div>
        {/* container */}
      </div>
      {/* navigation */}
      <div id="parallax" className="header-content d-flex align-items-center">
        <div className="header-shape shape-one layer" data-depth="0.10">
          <img src="assets/images/banner/shape/shape-1.png" alt="Shape" />
        </div>
        {/* header shape */}
        <div className="header-shape shape-tow layer" data-depth="0.30">
          <img src="assets/images/banner/shape/shape-2.png" alt="Shape" />
        </div>
        {/* header shape */}
        <div className="header-shape shape-three layer" data-depth="0.40">
          <img src="assets/images/banner/shape/shape-3.png" alt="Shape" />
        </div>
        {/* header shape */}
        <div className="header-shape shape-fore layer" data-depth="0.60">
          <img src="assets/images/banner/shape/shape-2.png" alt="Shape" />
        </div>
        {/* header shape */}
        <div className="header-shape shape-five layer" data-depth="0.20">
          <img src="assets/images/banner/shape/shape-1.png" alt="Shape" />
        </div>
        {/* header shape */}
        <div className="header-shape shape-six layer" data-depth="0.15">
          <img src="assets/images/banner/shape/shape-4.png" alt="Shape" />
        </div>
        {/* header shape */}
        <div className="header-shape shape-seven layer" data-depth="0.50">
          <img src="assets/images/banner/shape/shape-5.png" alt="Shape" />
        </div>
        {/* header shape */}
        <div className="header-shape shape-eight layer" data-depth="0.40">
          <img src="assets/images/banner/shape/shape-3.png" alt="Shape" />
        </div>
        {/* header shape */}
        <div className="header-shape shape-nine layer" data-depth="0.20">
          <img src="assets/images/banner/shape/shape-6.png" alt="Shape" />
        </div>
        {/* header shape */}
        <div className="header-shape shape-ten layer" data-depth="0.30">
          <img src="assets/images/banner/shape/shape-3.png" alt="Shape" />
        </div>
        {/* header shape */}
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-5 col-lg-6">
              <div className="header-content-right">
                <p className="sub-title h4">Hello, I’m</p>
                <h1 className="title">Adham Altonsy</h1>
                <p className="blockquote-footer">Software Engineer</p>
                <a className="main-btn" href="#work">
                  View my Work
                </a>
              </div>
              {/* header content right */}
            </div>
            <div className="col-lg-6 offset-xl-1">
              <div className="header-image d-none d-lg-block">
                <WebpImage
                  src="assets/images/banner/personal_image.png"
                  alt="Adham Tonsy"
                  width="360"
                  height="487"
                  loading="eager"
                />
              </div>
              {/* header image */}
            </div>
          </div>
          {/* row */}
        </div>
        {/* container */}
        <div className="header-social">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="header-social-icon">
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
                {/* header social */}
              </div>
            </div>
            {/* row */}
          </div>
          {/* container */}
        </div>
        {/* header social */}
      </div>
      {/* header content */}
    </header>
  );
};

export default Header;
