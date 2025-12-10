import React, { useEffect, useRef } from "react";
import WebpImage from "../WebpImage/WebpImage";

const About = () => {
  const langSwiperRef = useRef(null);
  const frameworksSwiperRef = useRef(null);
  const editorsSwiperRef = useRef(null);
  const databasesSwiperRef = useRef(null);
  const toolsSwiperRef = useRef(null);

  useEffect(() => {
    // Initialize Programming Languages Swiper (.mySwiper)
    if (langSwiperRef.current) {
      const swiper = langSwiperRef.current;
      Object.assign(swiper, {
        pagination: {
          clickable: true,
        },
        navigation: true,
      });
      if (swiper.initialize) swiper.initialize();
    }

    // Initialize Frameworks Swiper (.to-left-swiper1)
    if (frameworksSwiperRef.current) {
      const swiper = frameworksSwiperRef.current;
      Object.assign(swiper, {
        grabCursor: true,
        effect: "coverflow",
        coverflowEffect: {
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        },
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
      });
      if (swiper.initialize) swiper.initialize();
    }

    // Initialize Editors Swiper (.to-left-swiper2)
    if (editorsSwiperRef.current) {
      const swiper = editorsSwiperRef.current;
      Object.assign(swiper, {
        grabCursor: true,
        effect: "coverflow",
        coverflowEffect: {
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        },
        autoplay: {
          delay: 3500,
          disableOnInteraction: false,
        },
      });
      if (swiper.initialize) swiper.initialize();
    }

    // Initialize Databases Swiper (.to-left-swiper3)
    if (databasesSwiperRef.current) {
      const swiper = databasesSwiperRef.current;
      Object.assign(swiper, {
        grabCursor: true,
        effect: "coverflow",
        coverflowEffect: {
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        },
        autoplay: {
          delay: 4500,
          disableOnInteraction: false,
        },
      });
      if (swiper.initialize) swiper.initialize();
    }

    // Initialize Tools Swiper (.to-left-swiper4)
    if (toolsSwiperRef.current) {
      const swiper = toolsSwiperRef.current;
      Object.assign(swiper, {
        grabCursor: true,
        effect: "coverflow",
        coverflowEffect: {
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        },
        autoplay: {
          delay: 5500,
          disableOnInteraction: false,
        },
      });
      if (swiper.initialize) swiper.initialize();
    }
  }, []);

  return (
    <section id="about" className="about-area py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="section-title text-center">
              <h2 className="title">About Me</h2>
              <p>
                Adham Tonsy, an ambitious and talented software engineer at the
                age of 18, is making waves in the tech industry with his passion
                for coding, problem-solving, and continuous <br />
                With three years of hands-on experience in software development,
                Adham Tonsy, currently studying at STA Academy, showcases
                exceptional proficiency in various programming languages and
                frameworks, making him a valuable asset to any team.
              </p>
            </div>
            {/* section title */}
          </div>
        </div>
        {/* row */}
        <div className="row">
          <div className="col-lg-6">
            <div className="about-content mt-50">
              <h3 className="about-title">Hi There! I'm Adham Tonsy</h3>
              <p>
                Adham Tonsy is a talented and ambitious software engineer who is
                making waves in the tech industry at the young age of 18.
                Adham's passion for coding and problem-solving has propelled him
                to excel in his field, and his dedication to continuous learning
                has earned him remarkable achievements. Currently studying at
                STA Academy, Adham has already gained an impressive three years
                of hands-on experience in software development. His portfolio
                showcases a diverse range of projects, demonstrating his
                proficiency in various programming languages and frameworks.
                Adham's commitment to delivering high-quality solutions and his
                ability to collaborate effectively make him a valuable asset to
                any team. With a forward-thinking mindset and a hunger for
                innovation, Adham Tonsy is poised to make a significant impact
                in the world of software engineering.
              </p>
              <ul className="clearfix">
                <li>
                  <div className="single-info d-flex align-items-center">
                    <div className="info-icon">
                      <i className="lni-calendar" />
                    </div>
                    <div className="info-text">
                      <p>
                        <span>Date of birth:</span> 20 Dec 2005
                      </p>
                    </div>
                  </div>
                  {/* single info */}
                </li>
                <li>
                  <div className="single-info d-flex align-items-center">
                    <div className="info-icon">
                      <i className="lni-envelope" />
                    </div>
                    <div className="info-text">
                      <p>
                        <span>Email:</span> AdhamAltonsy@gmail.com
                      </p>
                    </div>
                  </div>
                  {/* single info */}
                </li>
                <li>
                  <div className="single-info d-flex align-items-center">
                    <div className="info-icon">
                      <i className="lni-phone-handset" />
                    </div>
                    <div className="info-text">
                      <p>
                        <span>Phone:</span> +201028806961
                      </p>
                      <p>
                        <span>Phone:</span> +201098281003
                      </p>
                    </div>
                  </div>
                  {/* single info */}
                </li>
                <li>
                  <div className="single-info d-flex align-items-center">
                    <div className="info-icon">
                      <i className="lni-map-marker" />
                    </div>
                    <div className="info-text">
                      <p>
                        <span>Location:</span> Egypt, Cairo, ElNozha
                      </p>
                    </div>
                  </div>
                  {/* single info */}
                </li>
              </ul>
            </div>
            {/* about content */}
          </div>
          <div className="col-xl-5 offset-xl-1 col-lg-6">
            <div className="about-skills pt-25">
              <h2 className="text-center">Programming Languages</h2>
              <swiper-container
                ref={langSwiperRef}
                init="false"
                className="mySwiper"
                effect="cards"
                grab-cursor="true"
                autoPlay
                loop
              >
                <swiper-slide>
                  <WebpImage
                    src="assets/images/skills/programming-languages/java.svg"
                    alt="Java"
                    width="64"
                    height="64"
                    loading="lazy"
                  />
                </swiper-slide>
                <swiper-slide>
                  <WebpImage
                    src="assets/images/skills/programming-languages/c-sharp.svg"
                    alt="C#"
                    width="64"
                    height="64"
                    loading="lazy"
                  />
                </swiper-slide>
                <swiper-slide>
                  <WebpImage
                    src="assets/images/skills/programming-languages/python.svg"
                    alt="Python"
                    width="64"
                    height="64"
                    loading="lazy"
                  />
                </swiper-slide>
                <swiper-slide>
                  <WebpImage
                    src="assets/images/skills/programming-languages/html5.svg"
                    alt="HTML5"
                    width="64"
                    height="64"
                    loading="lazy"
                  />
                </swiper-slide>
                <swiper-slide>
                  <WebpImage
                    src="assets/images/skills/programming-languages/css3.svg"
                    alt="CSS3"
                    width="64"
                    height="64"
                    loading="lazy"
                  />
                </swiper-slide>
                <swiper-slide>
                  <WebpImage
                    src="assets/images/skills/programming-languages/javascript.svg"
                    alt="JavaScript"
                    width="64"
                    height="64"
                    loading="lazy"
                  />
                </swiper-slide>
                <swiper-slide>
                  <WebpImage
                    src="assets/images/skills/programming-languages/json.svg"
                    alt="JSON"
                    width="64"
                    height="64"
                    loading="lazy"
                  />
                </swiper-slide>
                <swiper-slide>
                  <WebpImage
                    src="assets/images/skills/programming-languages/php.svg"
                    alt="PHP"
                    width="64"
                    height="64"
                    loading="lazy"
                  />
                </swiper-slide>
                <swiper-slide>
                  <WebpImage
                    src="assets/images/skills/programming-languages/sql.svg"
                    alt="SQL"
                    width="64"
                    height="64"
                    loading="lazy"
                  />
                </swiper-slide>
                <swiper-slide>
                  <WebpImage
                    src="assets/images/skills/programming-languages/plsql.svg"
                    alt="PL/SQL"
                    width="64"
                    height="64"
                    loading="lazy"
                  />
                </swiper-slide>
              </swiper-container>
            </div>
            {/* about skills */}
          </div>
          <div className="col-12 col-md-6">
            <div className="about-skills pt-25">
              <h2 className="text-center">Frameworks</h2>
              <swiper-container
                ref={frameworksSwiperRef}
                init="false"
                className="to-left-swiper1"
                autoPlay
                loop
              >
                <swiper-slide>
                  <WebpImage
                    src="assets/images/skills/frameworks/boostrap.svg"
                    alt="Bootstrap"
                    width="64"
                    height="64"
                    loading="lazy"
                  />
                </swiper-slide>
                <swiper-slide>
                  <WebpImage
                    src="assets/images/skills/frameworks/flask.svg"
                    alt="Flask"
                    width="64"
                    height="64"
                    loading="lazy"
                  />
                </swiper-slide>
                <swiper-slide>
                  <WebpImage
                    src="assets/images/skills/frameworks/android.svg"
                    alt="Android"
                    width="64"
                    height="64"
                    loading="lazy"
                  />
                </swiper-slide>
                <swiper-slide>
                  <WebpImage
                    src="assets/images/skills/frameworks/jquery.svg"
                    alt="JQuery"
                    width="64"
                    height="64"
                    loading="lazy"
                  />
                </swiper-slide>
                <swiper-slide>
                  <WebpImage
                    src="assets/images/skills/frameworks/laravel.svg"
                    alt="Laravel"
                    width="64"
                    height="64"
                    loading="lazy"
                  />
                </swiper-slide>
                <swiper-slide>
                  <WebpImage
                    src="assets/images/skills/frameworks/react.svg"
                    alt="React"
                    width="64"
                    height="64"
                    loading="lazy"
                  />
                </swiper-slide>
                <swiper-slide>
                  <WebpImage
                    src="assets/images/skills/frameworks/vuejs.svg"
                    alt="Vue JS"
                    width="64"
                    height="64"
                    loading="lazy"
                  />
                </swiper-slide>
              </swiper-container>
            </div>
            {/* about skills */}
          </div>
          <div className="col-12 col-md-6">
            <div className="about-skills pt-25">
              <h2 className="text-center">Editors and IDES</h2>

              <swiper-container
                ref={editorsSwiperRef}
                init="false"
                className="to-left-swiper2"
                autoPlay
                loop
              >
                <swiper-slide>
                  <WebpImage
                    src="assets/images/skills/editors-ides/android-studio.svg"
                    alt="Android Studio"
                    width="64"
                    height="64"
                    loading="lazy"
                  />
                </swiper-slide>
                <swiper-slide>
                  <WebpImage
                    src="assets/images/skills/editors-ides/eclipse.svg"
                    alt="Eclipse"
                    width="64"
                    height="64"
                    loading="lazy"
                  />
                </swiper-slide>
                <swiper-slide>
                  <WebpImage
                    src="assets/images/skills/editors-ides/intellij.svg"
                    alt="Intellij"
                    width="64"
                    height="64"
                    loading="lazy"
                  />
                </swiper-slide>
                <swiper-slide>
                  <WebpImage
                    src="assets/images/skills/editors-ides/vscode.svg"
                    alt="VS Code"
                    width="64"
                    height="64"
                    loading="lazy"
                  />
                </swiper-slide>
              </swiper-container>
            </div>
            {/* about skills */}
          </div>
          <div className="col-12 col-md-6">
            <div className="about-skills pt-25">
              <h2 className="text-center">Databases</h2>
              <swiper-container
                ref={databasesSwiperRef}
                init="false"
                className="to-left-swiper3"
                autoPlay
                loop
              >
                <swiper-slide>
                  <WebpImage
                    src="assets/images/skills/databases/mysql.svg"
                    alt="MySQL"
                    width="64"
                    height="64"
                    loading="lazy"
                  />
                </swiper-slide>
                <swiper-slide>
                  <WebpImage
                    src="assets/images/skills/databases/oracle.svg"
                    alt="Oracle"
                    width="64"
                    height="64"
                    loading="lazy"
                  />
                </swiper-slide>
                <swiper-slide>
                  <WebpImage
                    src="assets/images/skills/databases/microsoft-sql-server.svg"
                    alt="Sql Server"
                    width="64"
                    height="64"
                    loading="lazy"
                  />
                </swiper-slide>
                <swiper-slide>
                  <WebpImage
                    src="assets/images/skills/databases/mariadb.svg"
                    alt="MariaDB"
                    width="64"
                    height="64"
                    loading="lazy"
                  />
                </swiper-slide>
                <swiper-slide>
                  <WebpImage
                    src="assets/images/skills/databases/postgresql.svg"
                    alt="PostgreSQL"
                    width="64"
                    height="64"
                    loading="lazy"
                  />
                </swiper-slide>
              </swiper-container>
            </div>
            {/* about skills */}
          </div>
          <div className="col-12 col-md-6">
            <div className="about-skills pt-25">
              <h2 className="text-center">Tools</h2>
              <swiper-container
                ref={toolsSwiperRef}
                init="false"
                className="to-left-swiper4"
                autoPlay
                loop
              >
                <swiper-slide>
                  <WebpImage
                    src="assets/images/skills/tools/git.svg"
                    alt="GIT"
                    width="64"
                    height="64"
                    loading="lazy"
                  />
                </swiper-slide>
                <swiper-slide>
                  <WebpImage
                    src="assets/images/skills/tools/github.svg"
                    alt="GitHub"
                    width="64"
                    height="64"
                    loading="lazy"
                  />
                </swiper-slide>
              </swiper-container>
            </div>
            {/* about skills */}
          </div>
        </div>
        {/* row */}
      </div>
      {/* container */}
    </section>
  );
};

export default About;
