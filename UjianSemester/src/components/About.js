import React from 'react';

const About = () => {
  return (
    <section id="about" className="about-mf sect-pt4 route">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="box-shadow-full">
              <div className="row">
                <div className="col-md-6">
                  <div className="row">
                    <div className="col-sm-6 col-md-5">
                      <div className="about-img">
                        <img src="img/profile.jpg" className="img-fluid rounded b-shadow-a" alt="" />
                      </div>
                    </div>
                    <div className="col-sm-6 col-md-7">
                      <div className="about-info">
                        <p><span className="title-s">Name: </span> <span>Muhammad Gus Nadir</span></p>
                        <p><span className="title-s">Profile: </span> <span>Student</span></p>
                        <p><span className="title-s">Academic Records: </span></p>
                        <p><span>SMAN1 Tenggarong </span> </p>
                        <p><span>Muhammadiyah Malang University</span> </p>
                      </div>
                    </div>
                  </div>
                  <div className="skill-mf">
                    <p className="title-s">Skill</p>
                    <span>HTML</span> <span className="pull-right">50%</span>
                    <div className="progress">
                      <div className="progress-bar" role="progressbar" style={{ width: '50%' }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <span>CSS</span> <span className="pull-right">55%</span>
                    <div className="progress">
                      <div className="progress-bar" role="progressbar" style={{ width: '55%' }} aria-valuenow="55" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <span>JAVA</span> <span className="pull-right">60%</span>
                    <div className="progress">
                      <div className="progress-bar" role="progressbar" style={{ width: '60%' }} aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <span>PHYTON</span> <span className="pull-right">25%</span>
                    <div className="progress">
                      <div className="progress-bar" role="progressbar" style={{ width: '25%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="about-me pt-4 pt-md-0">
                    <div className="title-box-2">
                      <h5 className="title-left">About me</h5>
                    </div>
                    <p className="lead">
                      I'm Muhammad Gus Nadir, born on April 19, 2002, originally from Tenggarong, East Kalimantan, and currently residing in Malang, 
                      East Java. Physically, I stand at 6 feet 2 inches with a well-fitted body, thanks to my passion for fitness.
                    </p>
                    <p className="lead">
                      Academically, I'm pursuing a degree in Informatics Engineering at Muhammadiyah Malang University, with a growing interest in data science.
                    </p>
                    <p className="lead">
                      In the grand scheme of things, my goals include excelling in my field and fulfilling my dream of traveling around the world. 
                      While they come with their challenges, I'm dedicated to making the most of these connections and experiences.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
