import React from 'react';
import './hero-section.css';
import './icons.css'
import Amr from '../Footers/Amr';
import Header from '../header';
import BackButton from '../BackButton';

const About = () => {
  return (
    <div>
      
      <section id="team" className="team section">
        <div className="container section-title" data-aos="fade-up">
          <h2>Team</h2>
          <p>Çalışma grubumuz</p>
        </div>

        <div className="container">
          <div className="row gy-4">
            <div className="col-lg-6 col-md-12 offset-lg-3 justify-content-center" data-aos="fade-up" data-aos-delay="100">
              <div className="team-member d-flex align-items-start">
                <div className="pic"><img src="https://res.cloudinary.com/dsxndkddm/image/upload/v1714817624/WhatsApp_Image_2024-05-04_at_1.12.52_PM_vdirhi.jpg" className="img-fluid" alt="" /></div>
                <div className="member-info">
                  <h4>ENG. Amr Al-sarori</h4>
                  <span>Chief Executive Officer</span>
                  <p>Full Stack Web Developer & Computer Engineering</p>
                  <div className="social">
                    <a href="https://github.com/Amr241991"><i className="bi bi-github"></i></a>
                    <a href="https://www.facebook.com/amrahmed.sarori.9/"><i className="bi bi-facebook"></i></a>
                    <a href="https://www.instagram.com/tu_amr24/"><i className="bi bi-instagram"></i></a>
                    <a href=""> <i className="bi bi-linkedin"></i> </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-6" data-aos="fade-up" data-aos-delay="300">
              <div className="team-member d-flex align-items-start">
                <div className="pic"><img src="https://res.cloudinary.com/dsxndkddm/image/upload/v1714817776/WhatsApp_Image_2024-05-04_at_1.13.18_PM_bo3u7r.jpg" className="img-fluid" alt="" /></div>
                <div className="member-info">
                  <h4>ENG. Mohammed Al-mashdali</h4>
                  <span>CTO</span>
                  <p>Computer Engineering</p>
                  <div className="social">
                  <a href="https://github.com/MhammedAlmasdli"><i className="bi bi-github"></i></a>
                    <a href=""><i className="bi bi-facebook"></i></a>
                    <a href="https://www.instagram.com/xz_3in/"><i className="bi bi-instagram"></i></a>
                    <a href=""> <i className="bi bi-linkedin"></i> </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-6" data-aos="fade-up" data-aos-delay="400">
              <div className="team-member d-flex align-items-start">
                <div className="pic"><img src="https://res.cloudinary.com/dsxndkddm/image/upload/v1714817824/WhatsApp_Image_2024-05-04_at_1.14.33_PM_kausih.jpg" className="img-fluid" alt="" /></div>
                <div className="member-info">
                  <h4>ENG. Mohammed Al-qashar</h4>
                  <span>CTO</span>
                  <p>Computer Engineering & YouTuber</p>
                  <div className="social">
                  <a href=""><i className="bi bi-github"></i></a>
                    <a href=""><i className="bi bi-facebook"></i></a>
                    <a href="https://www.instagram.com/alqashar123/"><i className="bi bi-instagram"></i></a>
                    <a href="https://www.youtube.com/@alqashar"> <i className="bi bi-youtube"></i> </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
          </div>
  );
};

export default About;
