function App() {
  return (
    <>
      {/* <!--====== PRELOADER START ======--> */}

      <div class="preloader">
        <div class="loader_34">
          <div class="ytp-spinner">
            <div class="ytp-spinner-container">
              <div class="ytp-spinner-rotator">
                <div class="ytp-spinner-left">
                  <div class="ytp-spinner-circle"></div>
                </div>
                <div class="ytp-spinner-right">
                  <div class="ytp-spinner-circle"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!--====== PRELOADER END ======--> */}

      {/*====== HEADER PART START ======*/}
      <header id="home" className="header-area">
        <div className="navigation fixed-top">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <nav className="navbar navbar-expand-lg">
                  <a className="navbar-brand" href="index.php">
                    <img
                      src="assets/images/logo/altonsy-logo.png"
                      alt="logo not found"
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
                  <h4 className="sub-title">Hello, I’m</h4>
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
                  <img
                    src="assets/images/banner/personal_image.png"
                    alt="personal image not found"
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
                        <a href="https://www.facebook.com/adham.stunt.71/">
                          <i className="lni-facebook-filled" />
                        </a>
                      </li>
                      <li>
                        <a href="https://twitter.com/AdhamAltonsy">
                          <i className="lni-twitter-original" />
                        </a>
                      </li>
                      <li>
                        <a href="https://www.instagram.com/adhamstunt/">
                          <i className="lni-instagram-original" />
                        </a>
                      </li>
                      <li>
                        <a href="https://www.linkedin.com/in/adhamaltonsy">
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
      {/*====== HEADER PART ENDS ======*/}
      {/*====== ABOUT PART START ======*/}
      <section id="about" className="about-area py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="section-title text-center">
                <h2 className="title">About Me</h2>
                <p>
                  Adham Tonsy, an ambitious and talented software engineer at
                  the age of 18, is making waves in the tech industry with his
                  passion for coding, problem-solving, and continuous <br />
                  With three years of hands-on experience in software
                  development, Adham Tonsy, currently studying at STA Academy,
                  showcases exceptional proficiency in various programming
                  languages and frameworks, making him a valuable asset to any
                  team.
                </p>
              </div>
              {/* section title */}
            </div>
          </div>
          {/* row */}
          <div className="row">
            <div className="col-lg-6">
              <div className="about-content mt-50">
                <h5 className="about-title">Hi There! I'm Adham Tonsy</h5>
                <p>
                  Adham Tonsy is a talented and ambitious software engineer who
                  is making waves in the tech industry at the young age of 18.
                  Adham's passion for coding and problem-solving has propelled
                  him to excel in his field, and his dedication to continuous
                  learning has earned him remarkable achievements. Currently
                  studying at STA Academy, Adham has already gained an
                  impressive three years of hands-on experience in software
                  development. His portfolio showcases a diverse range of
                  projects, demonstrating his proficiency in various programming
                  languages and frameworks. Adham's commitment to delivering
                  high-quality solutions and his ability to collaborate
                  effectively make him a valuable asset to any team. With a
                  forward-thinking mindset and a hunger for innovation, Adham
                  Tonsy is poised to make a significant impact in the world of
                  software engineering.
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
                  className="mySwiper"
                  effect="cards"
                  grab-cursor="true"
                  autoPlay
                  loop
                >
                  <swiper-slide>
                    <img
                      src="assets/images/skills/programming-languages/java.svg"
                      alt="Java"
                    />
                  </swiper-slide>
                  <swiper-slide>
                    <img
                      src="assets/images/skills/programming-languages/c-sharp.svg"
                      alt="C#"
                    />
                  </swiper-slide>
                  <swiper-slide>
                    <img
                      src="assets/images/skills/programming-languages/python.svg"
                      alt="Python"
                    />
                  </swiper-slide>
                  <swiper-slide>
                    <img
                      src="assets/images/skills/programming-languages/html5.svg"
                      alt="HTML5"
                    />
                  </swiper-slide>
                  <swiper-slide>
                    <img
                      src="assets/images/skills/programming-languages/css3.svg"
                      alt="CSS3"
                    />
                  </swiper-slide>
                  <swiper-slide>
                    <img
                      src="assets/images/skills/programming-languages/javascript.svg"
                      alt="JavaScript"
                    />
                  </swiper-slide>
                  <swiper-slide>
                    <img
                      src="assets/images/skills/programming-languages/json.svg"
                      alt="JSON"
                    />
                  </swiper-slide>
                  <swiper-slide>
                    <img
                      src="assets/images/skills/programming-languages/php.svg"
                      alt="PHP"
                    />
                  </swiper-slide>
                  <swiper-slide>
                    <img
                      src="assets/images/skills/programming-languages/sql.svg"
                      alt="SQL"
                    />
                  </swiper-slide>
                  <swiper-slide>
                    <img
                      src="assets/images/skills/programming-languages/plsql.svg"
                      alt="PL/SQL"
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
                  init="false"
                  className="to-left-swiper1"
                  autoPlay
                  loop
                >
                  <swiper-slide>
                    <img
                      src="assets/images/skills/frameworks/boostrap.svg"
                      alt="Bootstrap"
                    />
                  </swiper-slide>
                  <swiper-slide>
                    <img
                      src="assets/images/skills/frameworks/flask.svg"
                      alt="Flask"
                    />
                  </swiper-slide>
                  <swiper-slide>
                    <img
                      src="assets/images/skills/frameworks/android.svg"
                      alt="Android"
                    />
                  </swiper-slide>
                  <swiper-slide>
                    <img
                      src="assets/images/skills/frameworks/jquery.svg"
                      alt="JQuery"
                    />
                  </swiper-slide>
                  <swiper-slide>
                    <img
                      src="assets/images/skills/frameworks/laravel.svg"
                      alt="Laravel"
                    />
                  </swiper-slide>
                  <swiper-slide>
                    <img
                      src="assets/images/skills/frameworks/react.svg"
                      alt="React"
                    />
                  </swiper-slide>
                  <swiper-slide>
                    <img
                      src="assets/images/skills/frameworks/vuejs.svg"
                      alt="Vue JS"
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
                  init="false"
                  className="to-left-swiper2"
                  autoPlay
                  loop
                >
                  <swiper-slide>
                    <img
                      src="assets/images/skills/editors-ides/android-studio.svg"
                      alt="Android Studio"
                    />
                  </swiper-slide>
                  <swiper-slide>
                    <img
                      src="assets/images/skills/editors-ides/eclipse.svg"
                      alt="Eclipse"
                    />
                  </swiper-slide>
                  <swiper-slide>
                    <img
                      src="assets/images/skills/editors-ides/intellij.svg"
                      alt="Intellij"
                    />
                  </swiper-slide>
                  <swiper-slide>
                    <img
                      src="assets/images/skills/editors-ides/vscode.svg"
                      alt="VS Code"
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
                  init="false"
                  className="to-left-swiper3"
                  autoPlay
                  loop
                >
                  <swiper-slide>
                    <img
                      src="assets/images/skills/databases/mysql.svg"
                      alt="MySQL"
                    />
                  </swiper-slide>
                  <swiper-slide>
                    <img
                      src="assets/images/skills/databases/oracle.svg"
                      alt="Oracle"
                    />
                  </swiper-slide>
                  <swiper-slide>
                    <img
                      src="assets/images/skills/databases/microsoft-sql-server.svg"
                      alt="Sql Server"
                    />
                  </swiper-slide>
                  <swiper-slide>
                    <img
                      src="assets/images/skills/databases/mariadb.svg"
                      alt="MariaDB"
                    />
                  </swiper-slide>
                  <swiper-slide>
                    <img
                      src="assets/images/skills/databases/postgresql.svg"
                      alt="PostgreSQL"
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
                  init="false"
                  className="to-left-swiper4"
                  autoPlay
                  loop
                >
                  <swiper-slide>
                    <img src="assets/images/skills/tools/git.svg" alt="GIT" />
                  </swiper-slide>
                  <swiper-slide>
                    <img
                      src="assets/images/skills/tools/github.svg"
                      alt="GitHub"
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
      {/*====== ABOUT PART ENDS ======*/}
      {/*====== SERVICES PART START ======*/}
      <section id="service" className="services-area gray-bg py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="section-title text-center pb-30">
                <h2 className="title">My Services</h2>
                <p>
                  My Services are Web developement, UI design, Oracle Apex,
                  Software Engineer, Database Administration, and Problem
                  Solving
                </p>
              </div>
              {/* section title */}
            </div>
          </div>
          {/* row */}
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6 col-sm-8">
              <div className="single-service text-center mt-30">
                <div className="service-icon">
                  <i className="lni-code-alt" />
                </div>
                <div className="service-content">
                  <h4 className="service-title">
                    <a href="#">Web Development</a>
                  </h4>
                  <p>
                    When it comes to web development, it's all about combining
                    technical expertise with creative problem-solving skills.
                    You need to have a deep understanding of web technologies
                    like HTML, CSS, and JavaScript, and be able to use
                    frameworks like Bootstrap. It's not just about making
                    visually appealing websites; it's about creating functional
                    and user-friendly online experiences that keep visitors
                    engaged.
                  </p>
                </div>
              </div>
              {/* single service */}
            </div>
            <div className="col-lg-4 col-md-6 col-sm-8">
              <div className="single-service text-center mt-30">
                <div className="service-icon">
                  <i className="lni-color-pallet" />
                </div>
                <div className="service-content">
                  <h4 className="service-title">
                    <a href="#contact">UI Design</a>
                  </h4>
                  <p>
                    When I work on UI design projects, I focus on the user. I
                    conduct research, gather feedback, and iterate designs to
                    ensure a seamless user experience. Collaboration is key
                    because I work closely with UX designers and developers to
                    bridge the gap between user needs, business goals, and
                    technical feasibility. It's about creating interfaces that
                    not only look good but also feel intuitive and make users'
                    lives easier.
                  </p>
                </div>
              </div>
              {/* single service */}
            </div>
            <div className="col-lg-4 col-md-6 col-sm-8">
              <div className="single-service text-center mt-30">
                <div className="service-icon">
                  <i className="lni-mobile" />
                </div>
                <div className="service-content">
                  <h4 className="service-title">
                    <a href="#">Software Engineer</a>
                  </h4>
                  <p>
                    Being a software engineer means being a problem solver at
                    heart. You have to analyze complex challenges and use your
                    programming skills to design and develop software systems.
                    It's not just about writing code; it's about creating
                    efficient and scalable solutions that meet user needs and
                    business requirements.
                  </p>
                </div>
              </div>
              {/* single service */}
            </div>
            <div className="col-lg-4 col-md-6 col-sm-8">
              <div className="single-service text-center mt-30">
                <div className="service-icon">
                  <i className="lni-vector" />
                </div>
                <div className="service-content">
                  <h4 className="service-title">
                    <a href="#">Database Adminsitration</a>
                  </h4>
                  <p>
                    As a database administrator, my role is to manage and
                    maintain databases to ensure data integrity, security, and
                    optimal performance. I work with database management systems
                    like Oracle, MySQL, or SQL Server to design and optimize
                    database structures, implement backup and recovery
                    strategies, and ensure the security of sensitive
                    information.
                  </p>
                </div>
              </div>
              {/* single service */}
            </div>
            <div className="col-lg-4 col-md-6 col-sm-8">
              <div className="single-service text-center mt-30">
                <div className="service-icon">
                  <i className="lni-website" />
                </div>
                <div className="service-content">
                  <h4 className="service-title">
                    <a href="#">Oracle Apex</a>
                  </h4>
                  <p>
                    Have you heard of Oracle Apex? It's a fantastic low-code
                    development platform that allows developers like me to build
                    powerful web applications using the Oracle database. With
                    Oracle Apex, we can create scalable and data-driven
                    applications without writing extensive code. It's a
                    time-saving solution that reduces complexity and accelerates
                    development.
                  </p>
                </div>
              </div>
              {/* single service */}
            </div>
            <div className="col-lg-4 col-md-6 col-sm-8">
              <div className="single-service text-center mt-30">
                <div className="service-icon">
                  <i className="lni-support" />
                </div>
                <div className="service-content">
                  <h4 className="service-title">
                    <a href="#">Problem Solving</a>
                  </h4>
                  <p>
                    When it comes to problem-solving, it's all about analyzing
                    complex challenges and finding effective solutions. As a
                    software engineer, I love the thrill of tackling problems
                    head-on and coming up with innovative solutions. It requires
                    logical and systematic thinking, as well as the ability to
                    break down complex problems into smaller, more manageable
                    parts.
                  </p>
                </div>
              </div>
              {/* single service */}
            </div>
          </div>
          {/* row */}
        </div>
        {/* container */}
      </section>
      {/*====== SERVICES PART ENDS ======*/}
      {/*====== CALL TO ACTION PART START ======*/}
      <section
        id="call-to-action"
        className="call-to-action py-5 bg_cover"
        style={{ backgroundImage: "url(assets/images/call-to-action.jpg)" }}
      >
        <div className="container">
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
      {/*====== CALL TO ACTION PART ENDS ======*/}
      {/*====== WORK PART START ======*/}
      {/* More Elsewedy Offer Modal */}
      <div
        className="container-fluid modal fade projects-modal"
        id="more-elsewedy-offer-project"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-scrollable" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                <img
                  className="img-thumbnail w-25"
                  src="assets/images/projects/elsewedy-offer-modal/elsewedy-offer-logo-modal.png"
                  alt="logo not found"
                />
                Offer System for Elsewedy
              </h5>
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
                  className="mySwiper"
                  scrollbar-hide="true"
                  autoPlay
                  loop="true"
                >
                  <swiper-slide>
                    <img
                      className="img-fluid rounded-4"
                      src="assets/images/projects/elsewedy-offer-modal/elsewedy-offer-dashboard.png"
                      alt="image not found"
                    />
                  </swiper-slide>
                  <swiper-slide>
                    <img
                      className="img-fluid rounded-4"
                      src="assets/images/projects/elsewedy-offer-modal/elsewedy-offer-home.png"
                      alt="image not found"
                    />
                  </swiper-slide>
                  <swiper-slide>
                    <img
                      className="img-fluid rounded-4"
                      src="assets/images/projects/elsewedy-offer-modal/elsewedy-offer-login.png"
                      alt="image not found"
                    />
                  </swiper-slide>
                  <swiper-slide>
                    <img
                      className="img-fluid rounded-4"
                      src="assets/images/projects/elsewedy-offer-modal/elsewedy-offer-register.png"
                      alt="image not found"
                    />
                  </swiper-slide>
                  <swiper-slide>
                    <img
                      className="img-fluid rounded-4"
                      src="assets/images/projects/elsewedy-offer-modal/elsewedy-offer-profile.png"
                      alt="image not found"
                    />
                  </swiper-slide>
                  <swiper-slide>
                    <img
                      className="img-fluid rounded-4"
                      src="assets/images/projects/elsewedy-offer-modal/elsewedy-offer-admin.png"
                      alt="image not found"
                    />
                  </swiper-slide>
                  <swiper-slide>
                    <img
                      className="img-fluid rounded-4"
                      src="assets/images/projects/elsewedy-offer-modal/elsewedy-offer-table.png"
                      alt="image not found"
                    />
                  </swiper-slide>
                  <swiper-slide>
                    <img
                      className="img-fluid rounded-4"
                      src="assets/images/projects/elsewedy-offer-modal/elsewedy-offer-create.png"
                      alt="image not found"
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
                  >
                    ASP.NET MVC
                  </a>
                </h2>
                <legend className="label mb-3">Description:</legend>
                <p>
                  In developing an Offer System for Elsewedy Transformers, this
                  ASP.NET MVC-based project showcases a streamlined approach to
                  modernizing and optimizing a traditionally paper-based
                  process. Built with a focus on efficiency and reliability, the
                  Offer System was designed to manage both standard and
                  non-standard offer cycles, covering each step from initial
                  client requests to final offer submissions. Key
                  stakeholders—Sales, Design, Planning, and Finance—can access a
                  centralized digital platform, enabling better coordination and
                  minimizing the risk of errors associated with manual data
                  entry and Excel sheet dependencies.
                </p>
                <legend className="label mb-3">Key Features:</legend>
                <ol className="list-group">
                  <li className="list-group-item">
                    <strong>Process Automation:</strong> Automates offer
                    creation, passing tasks seamlessly between departments.
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
                  This project highlights skills in ASP.NET MVC, process
                  analysis, and backend integration, demonstrating the ability
                  to create enterprise-level solutions that reduce
                  interdepartmental delays and enhance operational efficiency.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* More Elsewedy Offer Modal */}
      <div
        className="container-fluid modal fade projects-modal"
        id="more-credit-agricole-project"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-scrollable" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                <img
                  className="img-thumbnail w-25"
                  src="assets/images/projects/credit-agircole-modal/credit-agricole-logo-modal.png"
                  alt="logo not found"
                />
                Credit Agiricole Mobile Application
              </h5>
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
                  className="mySwiper vh-50"
                  scrollbar-hide="true"
                  loop="true"
                >
                  <swiper-slide>
                    <img
                      className="img-fluid rounded-4 obj-contain"
                      src="assets/images/projects/credit-agircole-modal/loading.png"
                      alt="image not found"
                    />
                  </swiper-slide>
                  <swiper-slide>
                    <img
                      className="img-fluid rounded-4 obj-contain"
                      src="assets/images/projects/credit-agircole-modal/login.png"
                      alt="image not found"
                    />
                  </swiper-slide>
                  <swiper-slide>
                    <img
                      className="img-fluid rounded-4 obj-contain"
                      src="assets/images/projects/credit-agircole-modal/home.png"
                      alt="image not found"
                    />
                  </swiper-slide>
                  <swiper-slide>
                    <img
                      className="img-fluid rounded-4 obj-contain"
                      src="assets/images/projects/credit-agircole-modal/transfer_money_service.png"
                      alt="image not found"
                    />
                  </swiper-slide>
                  <swiper-slide>
                    <img
                      className="img-fluid rounded-4 obj-contain"
                      src="assets/images/projects/credit-agircole-modal/internet_service.png"
                      alt="image not found"
                    />
                  </swiper-slide>
                  <swiper-slide>
                    <img
                      className="img-fluid rounded-4 obj-contain"
                      src="assets/images/projects/credit-agircole-modal/electric_service.png"
                      alt="image not found"
                    />
                  </swiper-slide>
                  <swiper-slide>
                    <img
                      className="img-fluid rounded-4 obj-contain"
                      src="assets/images/projects/credit-agircole-modal/gas_service.png"
                      alt="image not found"
                    />
                  </swiper-slide>
                  <swiper-slide>
                    <img
                      className="img-fluid rounded-4 obj-contain"
                      src="assets/images/projects/credit-agircole-modal/water_service.png"
                      alt="image not found"
                    />
                  </swiper-slide>
                  <swiper-slide>
                    <img
                      className="img-fluid rounded-4 obj-contain"
                      src="assets/images/projects/credit-agircole-modal/transactions.png"
                      alt="image not found"
                    />
                  </swiper-slide>
                  <swiper-slide>
                    <img
                      className="img-fluid rounded-4 obj-contain"
                      src="assets/images/projects/credit-agircole-modal/account.png"
                      alt="image not found"
                    />
                  </swiper-slide>
                  <swiper-slide>
                    <img
                      className="img-fluid rounded-4 obj-contain"
                      src="assets/images/projects/credit-agircole-modal/help.png"
                      alt="image not found"
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
                  >
                    Andriod Studio (Java)
                  </a>
                </h2>
                <legend className="label mb-3">Description:</legend>
                <p>
                  Based on the information provided in the screenshot, the
                  mobile application "CREDIT AGRICOLE" appears to be a financial
                  services platform offering a range of services such as
                  internet payments, water payments, gas payments, and
                  electricity payments. Users can access these services through
                  a user-friendly interface that includes features such as
                  balance checking, money transfers, and payment options using
                  VISA and PayPal. The app seems to cater to individuals looking
                  for convenient ways to manage their finances and pay bills
                  seamlessly through their mobile devices. The inclusion of the
                  fingerprint authentication option suggests a focus on security
                  and ease of use for customers. The presence of a credit card
                  with the app's name implies that "CREDIT AGRICOLE" may also
                  offer banking or credit services to its users. Overall, the
                  mobile application appears to be designed to streamline
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
                    like (Transfer Money, Pay Internet Bill, Electricity Bill,
                    Gas Bill, Water Bill, and See Transactions).
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
      <section id="work" className="work-area py-5">
        <div className="container">
          <div className="row">
            {/* section title */}
            <div className="col-lg-12">
              <div className="section-title pb-25">
                <h2 className="title">My Recent Works</h2>
                <p>
                  Here is some projects I finished them from differents majors,
                  and these were websites, systems for hospital and logastic
                  company
                </p>
              </div>
            </div>
            {/* end section title */}
            {/* single work */}
            <div className="col-lg-4 col-md-6 col-sm-12 mt-2">
              <div className="single-work text-center">
                <div className="work-image">
                  <img
                    src="assets/images/projects/englizya-logo.png"
                    className="img-fluid"
                    alt="logo not found"
                  />
                </div>
                <div className="work-overlay">
                  <div className="work-content">
                    <h3 className="work-title">Englizya Website</h3>
                    <ul>
                      <li>
                        <a
                          className="image-popup"
                          href="assets/images/projects/englizya-project.png"
                        >
                          <i className="lni-slideshare" />
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://adhamherbsh.github.io/englizya/"
                          target="_blank"
                        >
                          <i className="lni-link" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/* end single work */}
            {/* single work */}
            <div className="col-lg-4 col-md-6 col-sm-12 mt-2">
              <div className="single-work text-center">
                <div className="work-image">
                  <img
                    src="assets/images/projects/willandway-logo.jpeg"
                    className="img-fluid"
                    alt="logo not found"
                  />
                </div>
                <div className="work-overlay">
                  <div className="work-content">
                    <h3 className="work-title">WillandWay Website</h3>
                    <ul>
                      <li>
                        <a
                          className="image-popup"
                          href="assets/images/projects/willandway-project.jpg"
                        >
                          <i className="lni-slideshare" />
                        </a>
                      </li>
                      <li>
                        <a href="https://willandway.org/" target="_blank">
                          <i className="lni-link" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/* end single work */}
            {/* single work */}
            <div className="col-lg-4 col-md-6 col-sm-12 mt-2">
              <div className="single-work text-center">
                <div className="work-image">
                  <img
                    src="assets/images/projects/re-fashion-logo.png"
                    className="img-fluid"
                    alt="logo not found"
                  />
                </div>
                <div className="work-overlay">
                  <div className="work-content">
                    <h3 className="work-title">Re-fashion Website</h3>
                    <ul>
                      <li>
                        <a
                          className="image-popup"
                          href="assets/images/projects/re-fashion-project.png"
                        >
                          <i className="lni-slideshare" />
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://adhamherbsh.github.io/re-fashion/"
                          target="_blank"
                        >
                          <i className="lni-link" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/* end single work */}
            {/* single work */}
            <div
              className="col-lg-4 col-md-6 col-sm-12 mt-2 collapse"
              id="more-projects"
            >
              <div className="single-work text-center">
                <div className="work-image">
                  <img
                    src="assets/images/projects/math-logo.png"
                    className="img-fluid"
                    alt="logo not found"
                  />
                </div>
                <div className="work-overlay">
                  <div className="work-content">
                    <h3 className="work-title">MATH Website</h3>
                    <ul>
                      <li>
                        <a
                          className="image-popup"
                          href="assets/images/projects/math-project.png"
                        >
                          <i className="lni-slideshare" />
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://adhamherbsh.github.io/math/"
                          target="_blank"
                        >
                          <i className="lni-link" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/* end single work */}
            {/* single work */}
            <div
              className="col-lg-4 col-md-6 col-sm-12 mt-2 collapse"
              id="more-projects"
            >
              <div className="single-work text-center">
                <div className="work-image">
                  <img
                    src="assets/images/projects/sta-logo.png"
                    className="img-fluid"
                    alt="logo not found"
                  />
                </div>
                <div className="work-overlay">
                  <div className="work-content">
                    <h3 className="work-title">STA Website</h3>
                    <ul>
                      <li>
                        <a
                          className="image-popup"
                          href="assets/images/projects/sta-project.png"
                        >
                          <i className="lni-slideshare" />
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://adhamherbsh.github.io/sta/"
                          target="_blank"
                        >
                          <i className="lni-link" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/* end single work */}
            {/* single work */}
            <div
              className="col-lg-4 col-md-6 col-sm-12 mt-2 collapse"
              id="more-projects"
            >
              <div className="single-work text-center">
                <div className="work-image">
                  <img
                    src="assets/images/projects/elsewedy-offer-logo.png"
                    className="img-fluid"
                    alt="logo not found"
                  />
                </div>
                <div className="work-overlay">
                  <div className="work-content">
                    <h3 className="work-title">Elsewedy Offer System</h3>
                    <ul>
                      <li>
                        <a
                          className="image-popup"
                          href="assets/images/projects/elsewedy-offer-project.png"
                        >
                          <i className="lni-slideshare" />
                        </a>
                      </li>
                      <li>
                        <a
                          type="button"
                          data-toggle="modal"
                          href="#more-elsewedy-offer-project"
                          role="button"
                        >
                          <i className="lni-more" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/* end single work */}
            {/* single work */}
            <div
              className="col-lg-4 col-md-6 col-sm-12 mt-2 collapse"
              id="more-projects"
            >
              <div className="single-work text-center">
                <div className="work-image">
                  <img
                    src="assets/images/projects/aid-logo.png"
                    className="img-fluid"
                    alt="logo not found"
                  />
                </div>
                <div className="work-overlay">
                  <div className="work-content">
                    <h3 className="work-title">First Aid Web Application</h3>
                    <ul>
                      <li>
                        <a
                          className="image-popup"
                          href="assets/images/projects/aid-project.png"
                        >
                          <i className="lni-slideshare" />
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://apex.oracle.com/pls/apex/r/as12/aid/"
                          target="_blank"
                        >
                          <i className="lni-link" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/* end single work */}
            {/* single work */}
            <div
              className="col-lg-4 col-md-6 col-sm-12 mt-2 collapse"
              id="more-projects"
            >
              <div className="single-work text-center">
                <div className="work-image">
                  <img
                    src="assets/images/projects/dealwithme-logo.png"
                    className="img-fluid"
                    alt="logo not found"
                  />
                </div>
                <div className="work-overlay">
                  <div className="work-content">
                    <h3 className="work-title">Deal With Me Web Application</h3>
                    <ul>
                      <li>
                        <a
                          className="image-popup"
                          href="assets/images/projects/dealwithme-project.png"
                        >
                          <i className="lni-slideshare" />
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://apex.oracle.com/pls/apex/r/peater/deal-with-me/"
                          target="_blank"
                        >
                          <i className="lni-link" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/* end single work */}
            {/* single work */}
            <div
              className="col-lg-4 col-md-6 col-sm-12 mt-2 collapse"
              id="more-projects"
            >
              <div className="single-work text-center">
                <div className="work-image">
                  <img
                    src="assets/images/projects/hr-logo.png"
                    className="img-fluid"
                    alt="logo not found"
                  />
                </div>
                <div className="work-overlay">
                  <div className="work-content">
                    <h3 className="work-title">
                      Human Resource Management Web Application
                    </h3>
                    <ul>
                      <li>
                        <a
                          className="image-popup"
                          href="assets/images/projects/hr-project.png"
                        >
                          <i className="lni-slideshare" />
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://apex.oracle.com/pls/apex/r/as13/human-resource-management-system/"
                          target="_blank"
                        >
                          <i className="lni-link" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/* end single work */}
            {/* single work */}
            <div
              className="col-lg-4 col-md-6 col-sm-12 mt-2 collapse"
              id="more-projects"
            >
              <div className="single-work text-center">
                <div className="work-image">
                  <img
                    src="assets/images/projects/dss-logo.png"
                    className="img-fluid"
                    alt="logo not found"
                  />
                </div>
                <div className="work-overlay">
                  <div className="work-content">
                    <h3 className="work-title">DSS Company Web Application</h3>
                    <ul>
                      <li>
                        <a
                          className="image-popup"
                          href="assets/images/projects/dss-project.png"
                        >
                          <i className="lni-slideshare" />
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://apex.oracle.com/pls/apex/r/as12/dss-project/"
                          target="_blank"
                        >
                          <i className="lni-link" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/* end single work */}
            {/* single work */}
            <div
              className="col-lg-4 col-md-6 col-sm-12 mt-2 collapse"
              id="more-projects"
            >
              <div className="single-work text-center">
                <div className="work-image">
                  <img
                    src="assets/images/projects/dummies-logo.png"
                    className="img-fluid"
                    alt="logo not found"
                  />
                </div>
                <div className="work-overlay">
                  <div className="work-content">
                    <h3 className="work-title">Dummies API Web Application</h3>
                    <ul>
                      <li>
                        <a
                          className="image-popup"
                          href="assets/images/projects/dummies-project.png"
                        >
                          <i className="lni-slideshare" />
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://apex.oracle.com/pls/apex/r/as12/dummies-application/"
                          target="_blank"
                        >
                          <i className="lni-link" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/* end single work */}
            {/* single work */}
            <div
              className="col-lg-4 col-md-6 col-sm-12 mt-2 collapse"
              id="more-projects"
            >
              <div className="single-work text-center">
                <div className="work-image">
                  <img
                    src="assets/images/projects/credit-agricole-logo.png"
                    className="img-fluid"
                    alt="logo not found"
                  />
                </div>
                <div className="work-overlay">
                  <div className="work-content">
                    <h3 className="work-title">
                      Credit Agricole Mobile Application
                    </h3>
                    <ul>
                      <li>
                        <a
                          className="image-popup"
                          href="assets/images/projects/credit-agricole-project.png"
                        >
                          <i className="lni-slideshare" />
                        </a>
                      </li>
                      <li>
                        <a
                          type="button"
                          data-toggle="modal"
                          href="#more-credit-agricole-project"
                          role="button"
                        >
                          <i className="lni-more" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/* end single work */}
          </div>
          {/* row */}
          <div className="row">
            <div className="col-lg-12">
              <div className="work-more text-center mt-50">
                <a
                  className="main-btn btn btn-primary"
                  data-toggle="collapse"
                  href="#more-projects"
                  role="button"
                  aria-expanded="false"
                  aria-controls="more-projects"
                >
                  more works
                </a>
              </div>
              {/* work more */}
            </div>
          </div>
        </div>
        {/* container */}
      </section>
      {/*====== WORK PART ENDS ======*/}
      {/*====== Certificate PART START ======*/}
      <section id="certificate" className="certificate-area py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="section-title text-center pb-25">
                <h2 className="title">Certificates</h2>
                <p>
                  This is my degree in different disciplines and I am now
                  learning things that will make me get a great position in the
                  near future
                </p>
              </div>
              {/* section title */}
            </div>
          </div>
          {/* Swiper */}
          <section className="slider">
            <swiper-container
              className="mySwiper"
              scrollbar-hide="true"
              autoPlay
              loop="true"
              keyboard
            >
              <swiper-slide>
                <img
                  className="img-fluid rounded-4"
                  src="assets/images/certificates/c-1.png"
                  alt="image not found"
                />
              </swiper-slide>
              <swiper-slide>
                <img
                  className="img-fluid rounded-4"
                  src="assets/images/certificates/c-2.png"
                  alt="image not found"
                />
              </swiper-slide>
              <swiper-slide>
                <img
                  className="img-fluid rounded-4"
                  src="assets/images/certificates/c-3.png"
                  alt="image not found"
                />
              </swiper-slide>
              <swiper-slide>
                <img
                  className="img-fluid rounded-4"
                  src="assets/images/certificates/c-4.png"
                  alt="image not found"
                />
              </swiper-slide>
              <swiper-slide>
                <img
                  className="img-fluid rounded-4"
                  src="assets/images/certificates/c-5.png"
                  alt="image not found"
                />
              </swiper-slide>
              <swiper-slide>
                <img
                  className="img-fluid rounded-4"
                  src="assets/images/certificates/c-6.png"
                  alt="image not found"
                />
              </swiper-slide>
              <swiper-slide>
                <img
                  className="img-fluid rounded-4"
                  src="assets/images/certificates/c-7.png"
                  alt="image not found"
                />
              </swiper-slide>
              <swiper-slide>
                <img
                  className="img-fluid rounded-4"
                  src="assets/images/certificates/c-8.png"
                  alt="image not found"
                />
              </swiper-slide>
              <swiper-slide>
                <img
                  className="img-fluid rounded-4"
                  src="assets/images/certificates/c-9.png"
                  alt="image not found"
                />
              </swiper-slide>
              <swiper-slide>
                <img
                  className="img-fluid rounded-4"
                  src="assets/images/certificates/c-10.png"
                  alt="image not found"
                />
              </swiper-slide>
              <swiper-slide>
                <img
                  className="img-fluid rounded-4"
                  src="assets/images/certificates/c-11.png"
                  alt="image not found"
                />
              </swiper-slide>
              <swiper-slide>
                <img
                  className="img-fluid rounded-4"
                  src="assets/images/certificates/c-12.png"
                  alt="image not found"
                />
              </swiper-slide>
              <swiper-slide>
                <img
                  className="img-fluid rounded-4"
                  src="assets/images/certificates/c-13.png"
                  alt="image not found"
                />
              </swiper-slide>
              <swiper-slide>
                <img
                  className="img-fluid rounded-4"
                  src="assets/images/certificates/c-14.png"
                  alt="image not found"
                />
              </swiper-slide>
              <swiper-slide>
                <img
                  className="img-fluid rounded-4"
                  src="assets/images/certificates/c-15.png"
                  alt="image not found"
                />
              </swiper-slide>
              <swiper-slide>
                <img
                  className="img-fluid rounded-4"
                  src="assets/images/certificates/c-16.png"
                  alt="image not found"
                />
              </swiper-slide>
              <swiper-slide>
                <img
                  className="img-fluid rounded-4"
                  src="assets/images/certificates/c-17.png"
                  alt="image not found"
                />
              </swiper-slide>
              <swiper-slide>
                <img
                  className="img-fluid rounded-4"
                  src="assets/images/certificates/c-18.png"
                  alt="image not found"
                />
              </swiper-slide>
              <swiper-slide>
                <img
                  className="img-fluid rounded-4"
                  src="assets/images/certificates/c-19.png"
                  alt="image not found"
                />
              </swiper-slide>
              <swiper-slide>
                <img
                  className="img-fluid rounded-4"
                  src="assets/images/certificates/c-20.png"
                  alt="image not found"
                />
              </swiper-slide>
              <swiper-slide>
                <img
                  className="img-fluid rounded-4"
                  src="assets/images/certificates/c-21.png"
                  alt="image not found"
                />
              </swiper-slide>
            </swiper-container>
          </section>
        </div>
        {/* container */}
      </section>
      {/*====== CERTIFICATE PART ENDS ======*/}
      {/*====== CONTACT PART START ======*/}
      <section id="contact" className="contact-area py-5 gray-bg">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-11">
              <div className="section-title text-center pb-25">
                <h2 className="title">Get In Touch</h2>
                <p>
                  As a seasoned freelancer with a wealth of experience, I offer
                  my expertise to clients seeking high-quality projects and
                  exceptional results. With a proven track record of delivering
                  successful software solutions, I have honed my skills in
                  various domains, ranging from web development to desktop
                  applications. My extensive experience has equipped me with a
                  deep understanding of the intricacies of software engineering,
                  enabling me to tackle complex challenges with ease. I take
                  pride in my ability to create innovative and creative projects
                  that not only meet client requirements but also exceed their
                  expectations. With a meticulous attention to detail and a
                  strong commitment to professionalism, I ensure that every
                  project I undertake is delivered on time and to the highest
                  standard. Collaborating with me means gaining access to a
                  dedicated professional who consistently produces outstanding
                  work.
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
      {/*====== CONTACT PART ENDS ======*/}
      {/*====== FOOTER PART START ======*/}
      <footer id="footer" className="footer-area">
        <div className="footer-widget pt-130 pb-130">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="footer-content text-center">
                  <a href="index.php">
                    <img
                      className="img-fluid w-25"
                      src="assets/images/logo/logo.png"
                      alt="logo not found"
                    />
                  </a>
                  <p className="mt-">
                    I have genuinely cared about the work I have done during my
                    tenure here, and your contribution to that experience has
                    been invaluable. Your expertise, kindness, and
                    professionalism have made a significant impact on me, both
                    personally and professionally. I would like to extend my
                    heartfelt thanks for your support, encouragement, and the
                    positive environment you have fostered. Your willingness to
                    collaborate and your respectful approach has made working
                    with you a truly enjoyable experience.
                  </p>
                  <ul>
                    <li>
                      <a href="https://www.facebook.com/adham.stunt.71/">
                        <i className="lni-facebook-filled" />
                      </a>
                    </li>
                    <li>
                      <a href="https://twitter.com/AdhamAltonsy">
                        <i className="lni-twitter-original" />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/adhamstunt/">
                        <i className="lni-instagram-original" />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.linkedin.com/in/adhamaltonsy">
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
      {/*====== FOOTER PART ENDS ======*/}
    </>
  );
}

export default App;
