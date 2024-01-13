import React, { useState } from 'react';

const Contact = () => {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [notification, setNotification] = useState({ type: "", message: "" });

  const baseUrl = "http://localhost:3000";

  const sendEmail = async () => {
    let dataSend = {
      email: email,
      subject: subject,
      message: message,
    };

    try {
      const res = await fetch(`${baseUrl}/email/sendEmail`, {
        method: "POST",
        body: JSON.stringify(dataSend),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });

      console.log(res);

      if (res.status > 199 && res.status < 300) {
        setNotification({ type: "success", message: "Email sent successfully!" });
      }
    } catch (error) {
      setNotification({ type: "error", message: "Error sending email. Please try again." });
      console.error("Error sending email:", error);
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    await sendEmail();
  };

  return (
    <section className="paralax-mf footer-paralax bg-image sect-mt4 route" style={{backgroundImage: 'url(img/background-overlay.jpg)'}}>
      <div className="overlay-mf"></div>
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="contact-mf">
              <div id="contact" className="box-shadow-full">
                <div className="row">
                  <div className="col-md-6">
                    <div className="title-box-2">
                      <h5 className="title-left">Send Message</h5>
                    </div>
                    <div>
                      <form onSubmit={handleFormSubmit} role="form" className="contactForm">
                        <div id="sendmessage">Your message has been sent. Thank you!</div>
                        <div id="errormessage"></div>
                        <div className="row">
                          <div className="col-md-12 mb-3">
                            <div className="form-group">
                              <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="form-control"
                                name="email"
                                id="email"
                                placeholder="Receiver Email"
                                data-rule="email"
                                data-msg="Please enter a valid email"
                              />
                              <div className="validation"></div>
                            </div>
                          </div>
                          <div className="col-md-12 mb-3">
                            <div className="form-group">
                              <input
                                type="text"
                                value={subject}
                                onChange={(e) => setSubject(e.target.value)}
                                className="form-control"
                                name="subject"
                                id="subject"
                                placeholder="Subject"
                                data-rule="minlen:4"
                                data-msg="Please enter at least 8 chars of the subject"
                              />
                              <div className="validation"></div>
                            </div>
                          </div>
                          <div className="col-md-12 mb-3">
                            <div className="form-group">
                              <textarea
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                className="form-control"
                                name="message"
                                rows="5"
                                data-rule="required"
                                data-msg="Please write something for us"
                                placeholder="Message"
                              ></textarea>
                              <div className="validation"></div>
                            </div>
                          </div>
                          <div className="col-md-12">
                            <button type="submit" className="button button-a button-big button-rouded">Send Message</button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="title-box-2 pt-4 pt-md-0">
                      <h5 className="title-left">Get in Touch</h5>
                    </div>
                    <div className="more-info">
                      <p className="lead">
                        Use the contact form beside to send me a message.
                        I promise to get back to you as soon as possible. 
                        Your thoughts and inquiries are important to me, and I'm here to assist you in any way I can.
                      </p>
                      <ul className="list-ico">
                        <li><span className="ion-ios-location"></span> Permata Hijau Blok A No 11, Malang</li>
                        <li><span className="ion-ios-telephone"></span> 0822-5058-6298</li>
                        <li><span className="ion-email"></span> mgusnadir@gmail.com</li>
                      </ul>
                    </div>
                    <div className="socials">
                      <ul>
                        <li><a href="https://web.facebook.com/M.Gusnadir/?locale=id_ID"><span className="ico-circle"><i className="ion-social-facebook"></i></span></a></li>
                        <li><a href="https://twitter.com/_pinkmatcha"><span className="ico-circle"><i className="ion-social-twitter"></i></span></a></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div>
                  {notification.type === "success" && (
                    <div className="success-message">{notification.message}</div>
                  )}
                  {notification.type === "error" && (
                    <div className="error-message">{notification.message}</div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="copyright-box">
                <p className="copyright">&copy; Copyright <strong>mgusnadir</strong>. All Rights Reserved</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Contact;

