import React from "react";
import NavBar from "../Components/NavBar";
import Hero from "../Components/Hero";
import Footer from "../Components/Footer";
import officeImage from "../Assets/img/about1.jpg";
import Accordion from "../Components/Accordion";

const About = () => {
  const page = "about";
  return (
    <>
      <NavBar />
      <Hero page={page} />
      <div className="container mt-3">
        <div className="d-flex mt-4">
          <div className="col-lg-6">
            <img src={officeImage} alt="Office" className="img-fluid" />
          </div>
          <div className="col-lg-6 mx-3">
            <div className="accordion" id="accordionAbout">
              <Accordion
                id="One"
                title="Our Company Perspective"
                content={
                  <div>
                  To be <strong> Centre of excellent</strong> development of information technology tempered like <strong>INFORMATICS</strong>
                  </div>
                }
              />
              <Accordion
                id="Two"
                title="Our Doing"
                content={
                  <ul className="number-list">
                    <li>Training Center</li>
                    <li>Provide research room</li>
                    <li>Provide training like CCNA training and Oracle Certification.</li>
                  </ul>
                }
              />
              <Accordion
                id="Three"
                title="Lab Course"
                content={
                  <ul className="list-unstyled">
                    <li>Pemrograman Dasar</li>
                    <li>Pemrograman Lanjut</li>
                    <li>Pemrograman Berorientasi Obyek</li>
                    <li>Algoritma Pemrograman</li>
                    <li>Struktur Data</li>
                    <li>Komunikasi Data</li>
                    <li>Sistem Operasi</li>
                    <li>Basis Data</li>
                    <li>Pemrograman Web</li>
                    <li>Pemrograman Mobile</li>
                    <li>Pemrograman Fungsional</li>
                    <li>Jaringan Komputer</li>
                    <li>Piranti Cerdas</li>
                    <li>Manajemen Proyek Perangkat Lunak</li>
                    <li>Penjaminan Kualitas Perangkat Lunak</li>
                    <li>Keamanan Jaringan</li>
                    <li>Manajemen Jaringan</li>
                    <li>Penggalian Data</li>
                    <li>Machine Learning</li>
                    <li>Desain Game</li>
                    <li>Pemrograman Game Lanjut</li>
                  </ul>
                }
              />
              <Accordion
                id="Four"
                title="Lab. Schedule"
                content={
                  <>
                    Want to know the lab schedule?{' '}
                    <a
                      href="https://infotech.umm.ac.id/schedule"
                      style={{ color: 'green', textDecoration: 'none' }}
                    >
                      Click Here
                    </a>
                  </>
                }
              />
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-5">
      <h3>Welcome to "Lab Informatika UMM"</h3>
        <p className="text-secondary">
        The Laboratory of Computer Engineering serves as a practical and experimental learning center 
        used by students and provides services for engineering research and consulting, including software design for animation, 
        administration, graphics, and more.
        </p>
        <h4>Software Engineering Laboratory</h4>
        <p className="text-secondary">
        Conducting feasibility analysis for software project development, implementation, needs analysis, design, software development, 
        quality assurance, and software reengineering.
        </p>
        <h4>Network Systems and Security Laboratory</h4>
        <p className="text-secondary">
        Analyzing issues, providing solutions through engineering, development, and management, and conducting evaluations on network systems.
        </p>
        <h4>Smart Game Laboratory</h4>
        <p className="text-secondary">
        Working with a team to develop and design video games. 
        Coordinating complex tasks to create a new video game, which involves responsibilities such as designing characters, 
        levels, puzzles, art, and animation. A Software Engineer, Programmer, or 
        Computer Scientist primarily focuses on developing the underlying code for video games or related software, such as game development tools.
        </p>
        <h4>Data Science Laboratory</h4>
        <p className="text-secondary">
        Analyzing and processing data to turn it into information and knowledge.
        </p>
      </div>
      <Footer />
    </>
  );
};

export default About;

