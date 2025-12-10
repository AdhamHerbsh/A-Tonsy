import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="contact-area py-5 gray-bg">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-11">
            <div className="section-title text-center pb-25">
              <h2 className="title">Get In Touch</h2>
              <p>
                As a seasoned freelancer with a wealth of experience, I offer my
                expertise to clients seeking high-quality projects and
                exceptional results. With a proven track record of delivering
                successful software solutions, I have honed my skills in various
                domains, ranging from web development to desktop applications.
                My extensive experience has equipped me with a deep
                understanding of the intricacies of software engineering,
                enabling me to tackle complex challenges with ease. I take pride
                in my ability to create innovative and creative projects that
                not only meet client requirements but also exceed their
                expectations. With a meticulous attention to detail and a strong
                commitment to professionalism, I ensure that every project I
                undertake is delivered on time and to the highest standard.
                Collaborating with me means gaining access to a dedicated
                professional who consistently produces outstanding work.
              </p>
            </div>
            {/* section title */}
          </div>
        </div>
        {/* row */}
        <div className="row justify-content-center">
          <div className="col-lg-4 col-md-6 col-sm-7">
            <div className="contact-box text-center mt-30">
              <div className="contact-icon">
                <i className="lni-map-marker" />
              </div>
              <div className="contact-content">
                <h6 className="contact-title">Address</h6>
                <p>
                  Egypt, Cairo, <br />
                  Saudi German Hospital
                </p>
              </div>
            </div>
            {/* contact box */}
          </div>
          <div className="col-lg-4 col-md-6 col-sm-7">
            <div className="contact-box text-center mt-30">
              <div className="contact-icon">
                <i className="lni-envelope" />
              </div>
              <div className="contact-content">
                <h6 className="contact-title">Email</h6>
                <p>adhamaltonsy@gmail.com</p>
                <p>adhamtonsy223@gmail.com</p>
              </div>
            </div>
            {/* contact box */}
          </div>
          <div className="col-lg-4 col-md-6 col-sm-7">
            <div className="contact-box text-center mt-30">
              <div className="contact-icon">
                <i className="lni-phone" />
              </div>
              <div className="contact-content">
                <h6 className="contact-title">Phone</h6>
                <p>+201028806961</p>
                <p>+201098281003</p>
              </div>
            </div>
            {/* contact box */}
          </div>
        </div>
        {/* row */}
        <div className="row">
          <div className="col-lg-6">
            <div className="contact-form pt-30">
              <form
                id="contact-form"
                action="mailto:adhamaltonsy@gmail.com"
                method="post"
                encType="text/plain"
              >
                <div className="single-form">
                  <input type="text" name="name" placeholder="Name" />
                </div>
                {/* single form */}
                <div className="single-form">
                  <input type="email" name="email" placeholder="Email" />
                </div>
                {/* single form */}
                <div className="single-form">
                  <textarea
                    name="message"
                    placeholder="Message"
                    defaultValue={""}
                  />
                </div>
                {/* single form */}
                <p className="form-message" />
                <div className="single-form">
                  <button className="main-btn" type="submit">
                    Send Message
                  </button>
                </div>
                {/* single form */}
              </form>
            </div>
            {/* contact form */}
          </div>
          <div className="col-lg-6">
            <div className="contact-map mt-60">
              <div className="gmap_canvas">
                <iframe
                  id="gmap_canvas"
                  title="Google Map showing Saudi German Hospital Cairo"
                  src="https://maps.google.com/maps?width=100%25&height=600&hl=en&q=Saudi%20German%20Hospital%20Cairo+(My%20Business%20Name)&t=&z=14&ie=UTF8&iwloc=B&output=embed"
                  frameBorder={0}
                  scrolling="no"
                  marginHeight={0}
                  marginWidth={0}
                />
              </div>
            </div>
            {/* contact map */}
          </div>
        </div>
        {/* row */}
      </div>
      {/* container */}
    </section>
  );
};

export default Contact;
