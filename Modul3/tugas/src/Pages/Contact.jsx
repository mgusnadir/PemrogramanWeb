import React from "react";
import NavBar from "../Components/NavBar";
import Hero from "../Components/Hero";
import Footer from "../Components/Footer";

const Contact = () => {
  const page = "contact";
  return (
    <>
      <NavBar />
      <Hero page={page} />
      <div className="container mt-3">
        <div className="row">
        <div class="google-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3951.7500906434902!2d112.59442325045757!3d-7.921151671801264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7881f5a1288a83%3A0x2a5ec5132ddb7113!2sLaboratorium%20Informatika%20UMM!5e0!3m2!1sen!2sid!4v1698676165626!5m2!1sen!2sid"
            width="600"
            height="450"
            style={{ border: "0" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Map of Laboratorium Informatika UMM"
          >
          </iframe>
        </div>
          <div className="col d-flex mt-4">
            <div className="row">
              <h4>Get in touch</h4>
              <h5 className="text-success mt-2">
                SMS/WA/Telegram (Quick Response):
              </h5>
              <span className="text-secondary mt-2">+62 896-896-01317</span>
              <a href="https://api.whatsapp.com/send/?phone=6289689601317&text&type=phone_number&app_absent=0" className="text-success">wa.me/6289689601317</a>
            </div>
          </div>
          <div className="col d-flex mt-4">
            <div className="row">
              <h4>The Office</h4>
              <span className="text-secondary mt-2">
                <b>Address: </b>
                Jl. Raya Tlogomas No.246,Jawa Timur 65144, Indonesia
              </span>
              <span className="text-secondary">
                <b>Phone: </b>
                (0341) 464318, ext 252
              </span>
              <span className="text-secondary">
                <b>Email: </b>
                <span className="text-success">lab.informatika@umm.ac.id</span>
              </span>
            </div>
            <div className="row mx-5">
              <h4>Business Hours</h4>
              <span className="text-secondary mt-2 mx-auto">
              Monday - Friday 8am to 4pm
              </span>
              <span className="text-secondary mx-auto">
              Saturday - 8am to 12pm
              </span>
              <span className="text-secondary mx-auto">
              Sunday - Closed
              </span>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
