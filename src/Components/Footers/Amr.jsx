import React from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

import { FiFacebook, FiTwitter, FiInstagram, FiLinkedin, FiGithub } from 'react-icons/fi';
import SamallFooter from '../Hero/samallFooter';


const Amr = () => {
  return (
    <>
    <SamallFooter/>
    <footer className='text-center text-lg-start text-muted' >

      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span>Sosyal medya hesaplarımızı takip edebilirsiniz:</span>
        </div>

        <div className='flex justify-center'>
          <a href='#' className='me-4 text-reset'><FiFacebook /></a>
          <a href='#' className='me-4 text-reset'><FiTwitter /></a>
          <a href='/https://www.instagram.com/alqashar123/' className='me-4 text-reset'><FiInstagram /></a>
          <a href='#' className='me-4 text-reset'><FiLinkedin /></a>
          <a href='#' className='me-4 text-reset'><FiGithub /></a>
        </div>
      </section>  

      <section className='' style={{backgroundImage:"url(https://pngimg.com/d/world_map_PNG25.png)"}}>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md='3' lg='4' xl='3' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon color='secondary' icon='gem' className='me-3' />
                TKAU
              </h6>
              <p>
              Tüm üniversitlerinz başvurularınızı burada yapabilirsiniz yardımcımızı da isteyebilirsiniz her zaman varız
              </p>
            </MDBCol>

            <MDBCol md='2' lg='2' xl='2' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Sayfalarımız</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Home
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  About
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Contact
                </a>
              </p>
              {/* <p>
                <a href='#!' className='text-reset'>
                  Laravel
                </a>
              </p> */}
            </MDBCol>

            <MDBCol md='3' lg='2' xl='2' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Profile
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Settings
                </a>
              </p>
              {/* <p>
                <a href='#!' className='text-reset'>
                  Orders
                </a>
              </p> */}
              <p>
                <a href='#!' className='text-reset'>
                  Help
                </a>
              </p>
            </MDBCol>

            <MDBCol md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <MDBIcon color='secondary' icon='home' className='me-3' />
                 Bartın Üniversitesi Kutlubey Kampüsü
              </p>
              <p>
                <MDBIcon color='secondary' icon='envelope' className='me-3' />
                amrsarori2004@gmail.com
              </p>
                {/* <p>
                  <MDBIcon color='secondary' icon='envelope' className='me-3' />
                  mmpj076@gmail.com
                </p> */}
              <p>
                <MDBIcon color='secondary' icon='phone' className='me-3' /> +90 534 556 85 20
              </p>
              
              
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
      
      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2024 Copyright:
        <a className='text-reset fw-bold' href='https://mdbootstrap.com/'>
          Amrweb.com
        </a>
      </div>
    </footer>
    </>
  );
};

export default Amr;

