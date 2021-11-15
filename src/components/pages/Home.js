import React, {useEffect, useRef} from "react";
import Typed from 'typed.js';

export default function Home() {

  // Create Ref element.
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Designer", "Developer"], // Strings to display
      // Speed settings, try diffrent values untill you get good results
      startDelay: 300,
      typeSpeed: 150,
      backSpeed: 150,
      backDelay: 100,
      loop: true,
    });

    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);
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
              ref={el}
            ></span>
          </p>
        </div>
      </div>
    </div>
  </div>
  )
}