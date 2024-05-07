import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import ProfileTabs from './ProfileTabs';
import moment from "moment";
// import BackButton from '../Components/BackButton';
// import Spinner from '../Components/Spinner';
import './Profile.css'
import Header from '../../Components/header';
import BackButton from '../../Components/BackButton';
// import { toast } from "react-toastify";


const Profile = () => {
    useEffect(() => {
        setLoading(true);
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        };
        axios.get(`http://localhost:5000/api/users/profile`, config).then((response) => {
            setId(response.data._id);
            setName(response.data.name);
            setLoading(false);
        }).catch((error) => {
            setLoading(false);
            alert("An error happend. Plase chack console")
            console.log(error);
        })
    }, [])
    const Toastobjects = {
        pauseOnFocusLoss: false,
        draggable: false,
        pauseOnHover: false,
        autoClose: 2000,
    }

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [id, setId] = useState('');
    const [loading, setLoading] = useState(false);
    

    return (
        <>
        <Header/>
        <div className='p-4'>
        <BackButton />
    
            <div className="container mt-lg-5 mt-3 w-4/5">
                <div className="row align-items-start">
                    <div className="col-lg-4 p-0 shadow mt-5">
                        <div className="author-card pb-0 pb-md-3">
                            <div className="author-card-cover"></div>
                            <div className="author-card-profile row">
                                <div className="author-card-avatar col-md-5">
                                    <img src="https://res.cloudinary.com/dsxndkddm/image/upload/v1714580779/user_z3miv7.png" alt="userprofileimage" />
                                </div>
                                <div className="author-card-details col-md-7">
                                    <h5 className="author-card-name mb-2">
                                        <strong>{name}</strong>
                                    </h5>
                                    <span className="author-card-position">
                                        <>Joined {moment(name.createdAt).format("LL")}</>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="wizard pt-3 ">
                            <div className="d-flex align-items-start">
                                <div
                                    className="nav align-items-start flex-column col-12 nav-pills me-3 "
                                    id="v-pills-tab"
                                    role="tablist"
                                    aria-orientation="vertical"
                                >
                                    <button
                                        className="nav-link active"
                                        id="v-pills-home-tab"
                                        data-bs-toggle="pill"
                                        data-bs-target="#v-pills-home"
                                        type="button"
                                        role="tab"
                                        aria-controls="v-pills-home"
                                        aria-selected="true"
                                    // style={{display:"flex",justifyContent:"space-between"}}
                                    >
                                        Profile settings
                                    </button>
                                
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* panels */}
                    <div
                        className="tab-content col-lg-8 pb-5 pt-lg-0 pt-3"
                        id="v-pills-tabContent"
                    >
                        <div
                            className="tab-pane fade show active"
                            id="v-pills-home"
                            role="tabpanel"
                            aria-labelledby="v-pills-home-tab"
                        >
                            <ProfileTabs />
                        </div>
                        <div
                            className="tab-pane fade"
                            id="v-pills-profile"
                            role="tabpanel"
                            aria-labelledby="v-pills-profile-tab"
                        >
                            Home
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </>
    )
}

export default Profile