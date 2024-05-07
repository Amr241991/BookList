import React, { useState } from 'react'
import './hero-section.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Spinner from '../Spinner'
import {toast} from 'react-toastify';
import { ToastContainer  } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';


const GroubContact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [telefon, setTelfon] = useState("");
    const [subject, setSubject] = useState("");
    const [description, setdescription] = useState("");
    const [loading, setLoading] = useState("");
    const toastId = React.useRef(null)
    const navgate = useNavigate();

    const Toastobjects = {
        pauseOnFocusLoss: false,
        draggable: false,
        pauseOnHover: false,
        autoClose: 2000,
    }

    const handleCreate = (e) => {
        e.preventDefault();
        setLoading(true)
        const data = {
            name, email, telefon, subject, description
        }
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        };


        axios.post("http://localhost:5000/contact", data, config)
            .then(() => {
                setLoading(false);
                navgate('/')
                toast.success("Talebiniz alındı en kısa sürada size ulaşacağız", Toastobjects);
                  }).catch((error) => {
                setLoading(false);
                toast.error("Talebiniz Alınmadı daha sonra tekrar deniyin.", Toastobjects);
                console.log(error);
            })
            
    }

    return (
        <>
                    <ToastContainer/>
        <div className='container' id="contact">
            <section id="contact" className="contact section">

                <div className="container section-title" data-aos="fade-up">
                    <h2>Biz yerinize başvuru yapabiliriz</h2>
                    <p>Aşağadaki boşluklar doldurn <span className='text-red-600'>en kısa sürede size ulaşacağız</span></p>
                </div>

                <div className="container" data-aos="fade-up" data-aos-delay="100">

                    <div className="row gy-4">
                        <div className='col-lg-3'>

                        </div>
                       
                        <div className="col-lg-6">
                            {loading ? <Spinner /> : ''}
                            <form onSubmit={handleCreate} className="email-form">
                                <div className="row gy-4">

                                    <div className="col-md-4">
                                        <label for="name-field" className="pb-2">İsim Soyisim</label>
                                        <input type="text" name="name" className="form-control" onChange={(e) => setName(e.target.value)} required="" />
                                    </div>

                                    <div className="col-md-4">
                                        <label for="email-field" className="pb-2">Email</label>
                                        <input type="email" className="form-control" name="email" onChange={(e) => setEmail(e.target.value)} required="" />
                                    </div>

                                    <div className="col-md-4">
                                        <label for="email-field" className="pb-2">Telefon numarası</label>
                                        <input type="text" className="form-control" name="number" onChange={(e) => setTelfon(e.target.value)} required="" />
                                    </div>

                                    <div className="col-md-12">
                                        <label for="subject-field" className="pb-2">Konu</label>
                                        <input type="text" className="form-control" name="subject" onChange={(e) => setSubject(e.target.value)} required="" />
                                    </div>

                                    <div className="col-md-12">
                                        <label for="message-field" className="pb-2">Açıklama</label>
                                        <textarea className="form-control" name="message" rows="10" onChange={(e) => setdescription(e.target.value)} required=""></textarea>
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
        </div>
        </>
    )
}

export default GroubContact