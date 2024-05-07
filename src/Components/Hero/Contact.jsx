import React, { useState } from 'react'
import './hero-section.css'
import Amr from '../Footers/Amr'
import Header from '../header'
import BackButton from '../BackButton'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Spinner from '../Spinner'
import { ToastContainer  } from 'react-toastify'
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// import Toast from '../../LoadingError/Toast'

const Contact = () => {
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [telefon,setTelfon] = useState("");
    const [subject,setSubject] = useState("");
    const [description,setdescription]= useState("");
    const [loading,setLoading] = useState("");
    const navgate = useNavigate();

    const Toastobjects = {
        pauseOnFocusLoss: false,
        draggable: false,
        pauseOnHover: false,
        autoClose: 2000,
    }

    const handleCreate = (e) =>{
        e.preventDefault();
        setLoading(true)
        const data = {
            name,email,telefon,subject,description
        }
        const config = {
            headers: {
                'Content-Type': 'application/json', 
                'Authorization': `Bearer ${localStorage.getItem('token')}` 
            }
        };


        axios.post("http://localhost:5000/contact",data,config)
        .then(()=>{
            setLoading(false);
            navgate('/contact')
            toast.success("Talebiniz alındı en kısa sürada size ulaşacağız", Toastobjects);
        }).catch((error)=>{
            setLoading(false);
            toast.error("Talebiniz Alınmadı daha sonra tekrar deniyin.", Toastobjects);
            console.log(error);
        })
    }

   

    const toastId = React.useRef(null);

    return (
        <>
        <ToastContainer/>
            <Header />
            <div className='p-4'>
                <BackButton />


                <section id="contact" className="contact section">

                    <div className="container section-title" data-aos="fade-up">
                        <h2>İletişim</h2>
                        <p>Başvurunuzu yapmak için aşağıdaki boşlukları doldurunuz</p>
                    </div>

                    <div className="container" data-aos="fade-up" data-aos-delay="100">

                        <div className="row gy-4">

                            <div className="col-lg-5">

                                <div className="info-wrap">
                                    <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="200">
                                        <i className="bi bi-geo-alt flex-shrink-0"></i>
                                        <div>
                                            <h3>Ünvanı</h3>
                                            <p>Bartın Üniversitesi Kutlubey Kampüsü</p>
                                        </div>
                                    </div>

                                    <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="300">
                                        <i className="bi bi-telephone flex-shrink-0"></i>
                                        <div>
                                            <h3>Telefon</h3>
                                            <p>+90 505 268 72 34</p>
                                        </div>
                                    </div>

                                    <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="400">
                                        <i className="bi bi-envelope flex-shrink-0"></i>
                                        <div>
                                            <h3>Email Us</h3>
                                            <p>amrsarori2004@gmail.com</p>
                                        </div>
                                    </div>

                                    {/* <iframe src="https://www.google.com/maps/place//data=!4m2!3m1!1s0x409b7ab4a40a9d37:0x503bc50f823c4b15?sa=X&ved=1t:8290&ictx=111"></iframe> */}
                                    {/* <iframe src="" frameborder="0" style="border:0; width: 100%; height: 270px;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}

                                </div>
                            </div>

                            <div className="col-lg-7">
                                {loading ? <Spinner/> : ''}
                                <form onSubmit={handleCreate} className="email-form">
                                    <div className="row gy-4">

                                        <div className="col-md-4">
                                            <label for="name-field" className="pb-2">İsim Soyisim</label>
                                            <input type="text" name="name"  className="form-control" onChange={(e)=>setName(e.target.value)} required="" />
                                        </div>

                                        <div className="col-md-4">
                                            <label for="email-field" className="pb-2">Email</label>
                                            <input type="email" className="form-control" name="email"  onChange={(e)=>setEmail(e.target.value)} required="" />
                                        </div>

                                        <div className="col-md-4">
                                            <label for="email-field" className="pb-2">Telefon numarası</label>
                                            <input type="text" className="form-control" name="number" onChange={(e)=>setTelfon(e.target.value)} required="" />
                                        </div>

                                        <div className="col-md-12">
                                            <label for="subject-field" className="pb-2">Konu</label>
                                            <input type="text" className="form-control" name="subject"  onChange={(e)=>setSubject(e.target.value)} required="" />
                                        </div>

                                        <div className="col-md-12">
                                            <label for="message-field" className="pb-2">Açıklama</label>
                                            <textarea className="form-control" name="message" rows="10"  onChange={(e)=>setdescription(e.target.value)} required=""></textarea>
                                        </div>

                                        <div className="col-md-12 text-center">
                                            <div className="loading">Loading</div>
                                            <div className="error-message"></div>
                                            <div className="sent-message">Your message has been sent. Thank you!</div>

                                            <button disabled={loading} type="submit">{loading ? 'loading...' : 'Send Message'}</button>
                                        </div>

                                    </div>
                                </form>
                            </div>

                        </div>

                    </div>

                </section>
                <Amr />
            </div>
        </>
    )
}

export default Contact