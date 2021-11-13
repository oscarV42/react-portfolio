import React, { useState } from 'react';
import NavBar from './NavBar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Home');

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if(currentPage === "Home") {
        return <Home/>
    }else if(currentPage === "About") {
        return <About/>
    }else {
        return <Contact/>
    }
  }

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      {/* Passing currentPage from state and the function to update it, handPAgeChange */}
      <NavBar currentPage = { currentPage } handlePageChange = { handlePageChange }/>
      {/* Calling the renderPage method which will return a component */}
      {renderPage()}
    </div>
  );
}