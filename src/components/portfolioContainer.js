import React, { useState } from 'react';
import NavBar from './NavBar';
<<<<<<< HEAD
import Footer from './Footer'
=======
>>>>>>> parent of 072e06b (Updates)
import Home from './pages/Home';
import About from './pages/About';
import Work from './pages/Work';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Home');

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if(currentPage === "Home") {
<<<<<<< HEAD
        return (
        <main id="main">
          <Home/>
        </main>
        )
    }else if(currentPage === "About") {
        return (
        <main id="main">
          <About/>
        </main>
        )
    }else {
        return (
        <main id="main">
          <Work/>
        </main>
        )
=======
        return <Home/>
    }else if(currentPage === "About") {
        return <About/>
    }else {
        return <Work/>
>>>>>>> parent of 072e06b (Updates)
    }
  }

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      {/* Passing currentPage from state and the function to update it, handPAgeChange */}
      <NavBar currentPage = { currentPage } handlePageChange = { handlePageChange }/>
      {/* Calling the renderPage method which will return a component */}
      {renderPage()}
<<<<<<< HEAD
      <Footer />
=======
>>>>>>> parent of 072e06b (Updates)
    </div>
  );
}