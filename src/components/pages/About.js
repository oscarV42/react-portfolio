import React from "react";

export default function About() {
    return (
      <section id="about" className="about-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="box-shadow-full">
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
                            <span>full stack developer</span>
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
        <div class="container services-mf pt-5 route" id ="services">
                <div class="row">
                  <div class="col-sm-12">
                    <div class="title-box text-center">
                      <h3 class="title-a">Services</h3>
                      <div class="line-mf"></div>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-6">
                    <div class="service-box">
                      <div class="service-ico">
                        <span class="ico-circle"
                          ><i class="bi bi-briefcase"></i
                        ></span>
                      </div>
                      <div class="service-content">
                        <h2 class="s-title">Web Design</h2>
                        <p class="s-description text-center">
                          Lorem ipsum dolor sit amet consectetur adipisicing elit.
                          Magni adipisci eaque autem fugiat! Quia, provident vitae!
                          Magni tempora perferendis eum non provident.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="service-box">
                      <div class="service-ico">
                        <span class="ico-circle"
                          ><i class="bi bi-card-checklist"></i
                        ></span>
                      </div>
                      <div class="service-content">
                        <h2 class="s-title">Web Development</h2>
                        <p class="s-description text-center">
                          Lorem ipsum dolor sit amet consectetur adipisicing elit.
                          Magni adipisci eaque autem fugiat! Quia, provident vitae!
                          Magni tempora perferendis eum non provident.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
               </div> 
      </section>
    )
}