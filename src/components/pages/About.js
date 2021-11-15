import React from "react";

export default function About() {
    return (
      <section id="about" className="about-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="box-shadow-full about">
                <div className="row">
                  <div className="col-md-6">
                    <div className="row">
                      <div className="col-sm-6 col-md-5">
                        <div className="about-img">
                          <img
                            src="assets/images/Mejpg.jpg"
                            className="img-fluid rounded b-shadow-a"
                            alt="oscar"
                          />
                        </div>
                      </div>
                      <div className="col-sm-6 col-md-7">
                        <div className="about-info">
                          <p>
                            <span className="title-s">Name: </span>
                            <span>Oscar Vizcaino</span>
                          </p>
                          <p>
                            <span className="title-s">Profile: </span>
                            <span>Full stack web developer</span>
                          </p>
                          <p>
                            <span className="title-s">Email: </span>
                            <span>oscar.a.vizcaino@icloud.com</span>
                          </p>
                          <p>
                            <span className="title-s">Phone: </span>
                            <span>210.683.4711</span>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="row skill-mf">
                      <a className = "col" id="icon-link" href="https://github.com/oscarV42" target="blank"
                        ><img src="/assets/images/icons/github.png" alt="github"
                      /></a>
                      <a
                      className = "col"
                      id="icon-link"
                      href="https://www.linkedin.com/in/oscar-vizcaino-jr-9bb562214/"
                      target="blank"
                        ><img src="/assets/images/icons/linkedin.png" alt="linkedin"
                      /></a>
                      <a
                      className = "col"
                      id="icon-link"
                      href="/assets/files/Coding-Resume (4).pdf"
                      target="blank"
                        ><img src="/assets/images/icons/FinalResumeicon.png" alt="resume"
                      /></a>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="about-me pt-4 pt-md-0">
                      <div className="title-box-2">
                        <h5 className="title-left">About me</h5>
                      </div>
                      <p className="lead">
                      I'm a hispanic web developer currently enrolled in Georgia Tech coding
                      Bootcamp. Technologies I use for web development are HTML, CSS,
                      JavaScript/JQuery, Express.js, Node.js, Sequelize, MYSQL, NoSQL, MongoDB, Mongoose, and React. I have some
                      experience in Visual Basics and C/C++ from attending Edmonds Community
                      College. Web development is an art and I love to see all the progress
                      from creating and collaborating on projects. I don't have any
                      professional work experience in this field but I'm open to new
                      opportunities.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container services-mf pt-5 route" id ="services">
                <div className="row">
                  <div className="col-sm-12">
                    <div className="title-box text-center">
                      <h3 className="title-a">Services</h3>
                      <div className="line-mf"></div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="service-box">
                      <div className="service-ico">
                        <span className="ico-circle"
                          ><i className="bi bi-briefcase"></i
                        ></span>
                      </div>
                      <div className="service-content">
                        <h2 className="s-title">Web Design</h2>
                        <p className="s-description text-center">
                        From implementing first or third party platforms to building a custom website from scratch, I develop effective systems that are flexible, intuitive, beautiful, and mobile-ready. Helping improve the consumer experience.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="service-box">
                      <div className="service-ico">
                        <span className="ico-circle"
                          ><i className="bi bi-card-checklist"></i
                        ></span>
                      </div>
                      <div className="service-content">
                        <h2 className="s-title">Web Development</h2>
                        <p className="s-description text-center">
                          Offering a wide range of technologies to develop immsersive web applications. Design, build, support, and evolve all types of web-based software with complex programming.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
               </div> 
      </section>
    )
}