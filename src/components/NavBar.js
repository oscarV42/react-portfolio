import React from "react";

const NavBar = ({ currentPage, handlePageChange }) => {
  return(
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid">
      <a className="navbar-brand mr-auto" href="#home" onClick={() => handlePageChange('Home')}>🕶️</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className = "navbar-nav ml-auto float-end mb-2 mb-lg-0">
          <li className = "nav-item">
            <a href = "#home" 
            onClick={()=> handlePageChange('Home')}
            className ={currentPage === "Home" ? 'nav-link active' : "nav-link"}
            >
              Home
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#about"
              onClick={() => handlePageChange('About')}
              // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
              className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
            >
              About
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#work"
              onClick={() => handlePageChange('Work')}
              // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
              className={currentPage === 'Work' ? 'nav-link active' : 'nav-link'}
            >
              My Work
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  )
}

export default NavBar;