import React from "react";

export default function Work() {
    return (
     <section className="work" id="work">
      <div className="container work-content">
        <h1 className="work-title title-a text-center">My Work</h1>
        <div className="line-mf"></div>
            <div className="card">
              <img
                src={`${process.env.PUBLIC_URL}/assets/images/WeatherDash.PNG`}
                className="card-img-top"
                alt="WeatherDash"
              />
              <div className="card-body">
                <h5 className="card-title">Weather Dashboard</h5>
                <p className="card-text">
                  Search a location of your interest, and see today's weather plus
                  five day forecast.
                </p>
                <a
                  href="https://oscarv42.github.io/Weather-Dashboard/"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-danger"
                  >Web application</a
                >
                <a
                  href="https://github.com/oscarV42/Weather-Dashboard"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-danger"
                  >Repository</a
                >
              </div>
            </div>
            <div className="card">
              <img
                src={`${process.env.PUBLIC_URL}/assets/images/Workday.PNG`}
                className="card-img-top"
                alt="WorkdayScheduler"
              />
              <div className="card-body">
                <h5 className="card-title">Workday Planner</h5>
                <p className="card-text">
                  A simple calendar application that allows a user to save events
                  for each hour of the work day.
                </p>
                <a
                  href="https://oscarv42.github.io/Work-Day-Scheduler/"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-danger"
                  >Web application</a
                >
                <a
                  href="https://github.com/oscarV42/Work-Day-Scheduler"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-danger"
                  >Repository</a
                >
              </div>
            </div>
            <div className="card">
              <img
                src={`${process.env.PUBLIC_URL}/assets/images/Trail-Finder.png`}
                className="card-img-top"
                alt="TrailFinder"
              />
              <div className="card-body">
                <h5 className="card-title">Trail Finder</h5>
                <p className="card-text">
                  A collaborative project, featuring an app that helps endures of
                  the outdoors to search for hiking trails.
                </p>
                <a
                  href="https://jyothybaby.github.io/Trail-Finder/"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-danger"
                  >Web application</a
                >
                <a
                  href="https://github.com/jyothybaby/Trail-Finder"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-danger"
                  >Repository</a
                >
              </div>
            </div>
            <div className="card">
              <img
                src={`${process.env.PUBLIC_URL}/assets/images/Code-Quiz.PNG`}
                className="card-img-top"
                alt="TrailFinder"
              />
              <div className="card-body">
                <h5 className="card-title">Code Quiz</h5>
                <p className="card-text">
                  An interactive code assessment which includes mulitple-choice
                  questions and a timer that determines the users score.
                </p>
                <a
                  href="https://oscarv42.github.io/Code-Quiz/"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-danger"
                  >Web application</a
                >
                <a
                  href="https://github.com/oscarV42/Code-Quiz"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-danger"
                  >Repository</a
                >
              </div>
            </div>
            <div className="card">
              <img
                src={`${process.env.PUBLIC_URL}/assets/images/03-javascript-homework-demo.png`}
                className="card-img-top"
                alt="PasswordGen"
              />
              <div className="card-body">
                <h5 className="card-title">Password Generator</h5>
                <p className="card-text">
                  An application that enables employees to generate random passwords
                  based on criteria that they’ve selected.
                </p>
                <a
                  href="https://oscarv42.github.io/Password-Generator/"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-danger"
                  >Web application</a
                >
                <a
                  href="https://github.com/oscarV42/Password-Generator"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-danger"
                  >Repository</a
                >
              </div>
            </div>
            <div className="card">
              <img
                src={`${process.env.PUBLIC_URL}/assets/images/Note-Taker.png`}
                className="card-img-top"
                alt="NoteTaker"
              />
              <div className="card-body">
                <h5 className="card-title">Note Taker</h5>
                <p className="card-text">
                  An application that can be used to write and save notes. This
                  application will use an Express.js back end and will save and
                  retrieve note data from a JSON file.
                </p>
                <a
                  href="https://young-wave-83983.herokuapp.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-danger"
                  >Web application</a
                >
                <a
                  href="https://github.com/oscarV42/Note-Taker"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-danger"
                  >Repository</a
                >
              </div>
            </div>
            <div className="card">
              <img
                src={`${process.env.PUBLIC_URL}/assets/images/E-Commerce.png`}
                className="card-img-top"
                alt="E-Commerce"
              />
              <div className="card-body">
                <h5 className="card-title">E-Commerce Back-End</h5>
                <p className="card-text">
                  A back-end application for an e-commerce site using Sequelize and
                  MYSQL.
                </p>
                <a
                  href="https://github.com/oscarV42/E-Commerce-Back-End"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-danger"
                  >Repository</a
                >
              </div>
            </div>
            <div className="card">
              <img
                src={`${process.env.PUBLIC_URL}/assets/images/BookwormHaven.PNG`}
                className="card-img-top"
                alt="BookWorm"
              />
              <div className="card-body">
                <h5 className="card-title">Bookworm Haven</h5>
                <p className="card-text">
                  Bookworkm Haven is an online application where you can go to
                  discuss, review, and search for novels.
                </p>
                <a
                  href="https://stark-wildwood-15294.herokuapp.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-danger"
                  >Web application</a
                >
                <a
                  href="https://github.com/oscarV42/Bookworm-Haven"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-danger"
                  >Repository</a
                >
              </div>
            </div>
            <div className="card">
              <img
                src={`${process.env.PUBLIC_URL}/assets/images/WorkoutTrackerHome.PNG`}
                className="card-img-top"
                alt="WorkoutTracker"
              />
              <div className="card-body">
                <h5 className="card-title">Workout Tracker</h5>
                <p className="card-text">
                An application that tracks a users workout routine using Mongo database, Mongoose schema, and Express.
                </p>
                <a
                  href="https://quiet-sierra-15205.herokuapp.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-danger"
                  >Web application</a
                >
                <a
                  href="https://github.com/oscarV42/Nosql_Workout_Tracker"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-danger"
                  >Repository</a
                >
              </div>
            </div>
            <div className="card">
              <img
                src={`${process.env.PUBLIC_URL}/assets/images/BookSearchHome.PNG`}
                className="card-img-top"
                alt="BookSearchEngine"
              />
              <div className="card-body">
                <h5 className="card-title">Book Search Engine</h5>
                <p className="card-text">
                Refactor a fully functioning Google Books API search engine built with a RESTful API to be GraphQL API built with Apollo Server.
                </p>
                <a
                  href="https://floating-shore-13551.herokuapp.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-danger"
                  >Web application</a
                >
                <a
                  href="https://github.com/oscarV42/Book-Search-Engine"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-danger"
                  >Repository</a
                >
              </div>
            </div>
            <div className="card">
              <img
                src={`${process.env.PUBLIC_URL}/assets/images/BudgetTracker.PNG`}
                className="card-img-top"
                alt="BudgetTacker"
              />
              <div className="card-body">
                <h5 className="card-title">PWA Budget Tracker</h5>
                <p className="card-text">
                A budget tracking application with offline functionality
                </p>
                <a
                  href="https://thawing-river-72353.herokuapp.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-danger"
                  >Web application</a
                >
                <a
                  href="https://github.com/oscarV42/PWA-Budget-Tracker"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-danger"
                  >Repository</a
                >
              </div>
            </div>
            <div className="card">
              <img
                src={`${process.env.PUBLIC_URL}/assets/images/ReduxStoreShopList.PNG`}
                className="card-img-top"
                alt="ReduxStore"
              />
              <div className="card-body">
                <h5 className="card-title">Redux Store</h5>
                <p className="card-text">
                Refactor a shopping app to use Redux to manage state.
                </p>
                <a
                  href="https://dry-fjord-16375.herokuapp.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-danger"
                  >Web application</a
                >
                <a
                  href="https://github.com/oscarV42/redux_store"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-danger"
                  >Repository</a
                >
              </div>
            </div>
            
      </div>
      {/* <div className = "technologies"> 
        <div className="row">
            <div className="col-sm-12">
                <div className="title-box text-center">
                  <h3 className="title-a">Technologies</h3>
                  <div className="line-mf"></div>
                </div>
            </div>
        </div>
            <div className="row row-tech-1 align-content-center">
                <div className="col-md-3">
                    <img src = '/assets/images/cards/HTML.png'
                         alt= "HTML"
                         className = "techCard"/>
                </div>
                <div className="col-md-3">
                    <img src = '/assets/images/cards/CSS.png'
                         alt= "HTML"
                         className = "techCard"/>
                </div>
                <div className="col-md-3">
                    <img src = '/assets/images/cards/JS.png'
                         alt= "HTML"
                         className = "techCard"/>
                </div>
                <div className="col-md-3">
                    <img src = '/assets/images/cards/Jquery.png'
                         alt= "HTML"
                         className = "techCard"/>
                </div>
            </div>
            <div className="row row-tech-2">
                <div className="col-md-3">
                    <img src = '/assets/images/cards/git.png'
                         alt= "HTML"
                         className = "techCard"/>
                </div>
                <div className="col-md-3">
                    <img src = '/assets/images/cards/Node.png'
                         alt= "HTML"
                         className = "techCard"/>
                </div>
                <div className="col-md-3">
                    <img src = '/assets/images/cards/Express.png'
                         alt= "HTML"
                         className = "techCard"/>
                </div>
                <div className="col-md-3">
                    <img src = '/assets/images/cards/SQL.png'
                         alt= "HTML"
                         className = "techCard"/>
                </div>
            </div>
      </div>  */}
     </section>
    )
}