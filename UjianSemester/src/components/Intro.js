import React, { useEffect } from 'react';
import Typed from 'typed.js'; // Make sure to import the Typed library

const Intro = () => {
  useEffect(() => {
    /*--/ Star Typed /--*/
    const textSliderElement = document.querySelector('.text-slider');
    
    if (textSliderElement) {
      const typedStrings = document.querySelector('.text-slider-items').textContent;

      var typed = new Typed(textSliderElement, {
        strings: typedStrings.split(','),
        typeSpeed: 80,
        loop: true,
        backDelay: 1100,
        backSpeed: 30,
      });

      // Cleanup function to destroy Typed instance when the component is unmounted
      return () => {
        if (typed) {
          typed.destroy();
        }
      };
    }
  }, []); // Empty dependency array ensures the effect runs only once after initial render

  return (
    <div id="home" className="intro route bg-image" style={{ backgroundImage: 'url(img/intro-background.JPG)' }}>
      <div className="overlay-itro"></div>
      <div className="intro-content display-table">
        <div className="table-cell">
          <div className="container">
            <h1 className="intro-title mb-1">I am Muhammad Gus Nadir</h1>
            <p className="intro-subtitle">
              <span className="text-slider-items">Student, Data Science</span>
              <strong className="text-slider"></strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
