import React from "react";

const NavBar = ({ currentPage, handlePageChange }) => {
  return(
  <header id="header" className="fixed-top">
    <div className="container d-flex align-items-center justify-content-between">
      <h1 className="logo"><a href="#home" onClick={()=> handlePageChange('Home')}>🕶️</a></h1>
      <nav className="navbar" id= "navbar">
            <ul>
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
            <i class="bi bi-list mobile-nav-toggle"></i>
      </nav>
    </div>
  </header>
  )
}

export default NavBar;