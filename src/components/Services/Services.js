import React from "react";

const Services = () => {
  return (
    <section id="service" className="services-area gray-bg py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="section-title text-center pb-30">
              <h2 className="title">My Services</h2>
              <p>
                My Services are Web developement, UI design, Oracle Apex,
                Software Engineer, Database Administration, and Problem Solving
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
                  <a
                    href="https://www.w3schools.com/whatis/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Web Development
                  </a>
                </h4>
                <p>
                  When it comes to web development, it's all about combining
                  technical expertise with creative problem-solving skills. You
                  need to have a deep understanding of web technologies like
                  HTML, CSS, and JavaScript, and be able to use frameworks like
                  Bootstrap. It's not just about making visually appealing
                  websites; it's about creating functional and user-friendly
                  online experiences that keep visitors engaged.
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
                  technical feasibility. It's about creating interfaces that not
                  only look good but also feel intuitive and make users' lives
                  easier.
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
                  <a href="#!">Software Engineer</a>
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
                  <a href="#!">Database Adminsitration</a>
                </h4>
                <p>
                  As a database administrator, my role is to manage and maintain
                  databases to ensure data integrity, security, and optimal
                  performance. I work with database management systems like
                  Oracle, MySQL, or SQL Server to design and optimize database
                  structures, implement backup and recovery strategies, and
                  ensure the security of sensitive information.
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
                  <a href="#!">Oracle Apex</a>
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
                  <a href="#!">Problem Solving</a>
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
  );
};

export default Services;
