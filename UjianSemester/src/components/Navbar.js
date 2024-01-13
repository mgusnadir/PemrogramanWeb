import React, { useEffect } from 'react';
import $ from 'jquery'; // Make sure you have jQuery included in your project

const Navbar = () => {
  useEffect(() => {
    
    $('.navbar-toggler').on('click', function () {
      if (!$('#mainNav').hasClass('navbar-reduce')) {
        $('#mainNav').addClass('navbar-reduce');
      }
    });

    $(window).trigger('scroll');

    $(window).on('scroll', function () {
      var pixels = 50;
      var top = 1200;
      if ($(window).scrollTop() > pixels) {
        $('.navbar-expand-md').addClass('navbar-reduce');
        $('.navbar-expand-md').removeClass('navbar-trans');
      } else {
        $('.navbar-expand-md').addClass('navbar-trans');
        $('.navbar-expand-md').removeClass('navbar-reduce');
      }
      if ($(window).scrollTop() > top) {
        $('.scrolltop-mf').fadeIn(1000, 'easeInOutExpo');
      } else {
        $('.scrolltop-mf').fadeOut(1000, 'easeInOutExpo');
      }
    });
  }, []); 

  return (
    <nav className="navbar navbar-b navbar-trans navbar-expand-md fixed-top" id="mainNav">
          <div className="container">
            <a className="navbar-brand js-scroll" href="#page-top">Portfolio</a>
            <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarDefault"
              aria-controls="navbarDefault" aria-expanded="false" aria-label="Toggle navigation">
              <span></span>
              <span></span>
              <span></span>
            </button>
            <div className="navbar-collapse collapse justify-content-end" id="navbarDefault">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link js-scroll active" href="#home">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link js-scroll" href="#about">About Me</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link js-scroll" href="#service">Hobby</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link js-scroll" href="#contact">Contact Us</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
  );
};

export default Navbar;



