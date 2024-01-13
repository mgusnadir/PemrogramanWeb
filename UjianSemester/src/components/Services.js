import React from 'react';

const Services = () => {
  return (
    <section id="service" className="services-mf route">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="title-box text-center">
              <h3 className="title-a">Hobby</h3>
              <div className="line-mf"></div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="service-box">
              <div className="service-ico">
                <span className="ico-circle"><i className="ion-ios-football"></i></span>
              </div>
              <div className="service-content">
                <h2 className="s-title">Football</h2>
                <p className="s-description text-center">
                  The beautiful game has become an integral part of my life. The energy on the field, the camaraderie among fans, and the sheer excitement of each match have left an indelible mark on me. 
                  Whether I'm cheering for Real Madrid or engaging in a casual kickabout with friends, football is more than a sport; it's a passion that brings joy, unity, and a sense of belonging to my life.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="service-box">
              <div className="service-ico">
                <span className="ico-circle"><i className="ion-ios-basketball"></i></span>
              </div>
              <div className="service-content">
                <h2 className="s-title">Basketball</h2>
                <p className="s-description text-center">
                  Basketball holds a special place in my heart as a sport that combines athleticism, strategy, and teamwork in an electrifying way. 
                  From the thrill of watching NBA games to shooting hoops with friends at the local court, my love for basketball has grown over the years. 
                  The fast-paced action on the court, the precision of shooting hoops, and the moments of teamwork and strategy all contribute to my deep affection for the sport.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="service-box">
              <div className="service-ico">
                <span className="ico-circle"><i className="ion-ios-musical-notes"></i></span>
              </div>
              <div className="service-content">
                <h2 className="s-title">Music</h2>
                <p className="s-description text-center">
                  From the uplifting power of orchestral compositions to the rhythmic beats of my favorite genres, music has been my constant companion. 
                  It serves as a soundtrack to my life, enhancing every moment with its emotional depth and resonance.
                  It's a source of inspiration, a vessel for emotions, and a lifelong journey of discovery that I treasure deeply.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
