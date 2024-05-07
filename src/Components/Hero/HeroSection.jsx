import React from 'react';
import './hero-section.css';
const HeroSection = () => {
    return (
        <div id='hero1'>

            <section id="hero" className="hero section">

                <div className="container">
                    <div className="row gy-4">
                        <div className="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center">
                            <h1 className="flex justify-center"><span className='text-slate-900'>TKAU'ya</span><span className='ml-3'>Hoş Geldiniz</span></h1>
                            <p className="flex justify-center text-center">Yardımımız ihtiyacınız olursa aşağıda tıklayınız</p>

                            <div className="d-flex justify-center">
                                <a href="/contact" className="btn-get-started">Buraya tıklayınız</a>
                                {/* <a href="https://www.youtube.com/watch?v=LXb3EKWsInQ" className="glightbox btn-watch-video d-flex align-items-center"><i className="bi bi-play-circle"></i><span>Watch Video</span></a> */}
                            </div>
                        </div>
                        <div className="col-lg-6 order-1 order-lg-2 hero-img">
                        
                            {/* <img src="https://res.cloudinary.com/dsxndkddm/image/upload/v1714816164/hero-img_diq2nu.png" className="img-fluid animated" alt=""/> */}
                            <img src="https://cometogelisim.com/zolangee/2022/07/Universite-Programi-Nedir.jpg" style={{borderRadius:"20%"}} className="img-fluid animated" alt=""/>

                        </div>
                    </div>
                </div>

            </section>
        </div>
    )
}

export default HeroSection;
