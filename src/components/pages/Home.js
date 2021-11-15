import React from "react";

export default function Home() {
  return (
    <div
    id="hero"
    className="hero route bg-image"
    style= {{backgroundImage: "URL('/assets/images/boonk.png')"}}
  >
    <div className="overlay-itro"></div>
    <div className="hero-content display-table">
      <div className="table-cell">
        <div className="container">
          <p className="display-6 color-d">Welcome</p>
          <h1 className="hero-title mb-4">I am Oscar Vizcaino</h1>
          <p className="hero-subtitle">
            <span
              className="typed"
              data-typed-items="Designer, Developer"
            ></span>
          </p>
        </div>
      </div>
    </div>
  </div>
  )
}