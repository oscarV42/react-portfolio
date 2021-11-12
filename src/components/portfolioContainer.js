import React, { useState } from 'react';
import NavBar from './NavBar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

export default PortfolioContainer = () => {
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
}