import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// import './hero-section.css'
import './Profile.css'
import { toast } from "react-toastify";
// import Toast from "../../LoadingError/Toast";
// import Toast from '../LoadingError/Toast';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer  } from 'react-toastify'

// import Message from "../LoadingError/Error";
// import Toast from "./../LoadingError/Toast";
// import Loading from "./../LoadingError/Loading";

const ProfileTabs = () => {
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
            setEmail(response.data.email);
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
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState("");
    const [id, setId] = useState('');
    const [loading, setLoading] = useState(false);
    // const toastId = React.useRef(null);

    const navgate = useNavigate();
    const handleEditUser = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            // console.log("Passwords do not match");
            // if (!toast.isActive(toastId.current)) {
            //     toastId.current = toast.error("Password does not match", Toastobjects);
            //   }
            toast.error("Password does not match", Toastobjects);
 
        } else {
            const data = {
                name,
                email,
                password,
            };

            setLoading(true);
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            };
            axios.put("http://localhost:5000/api/users/profile", data, config)
                .then(() => {
                    setLoading(false);
                    navgate('/');
                    console.log("Profile updated successfully");
                }).catch((error) => {
                    setLoading(false);
                    alert("An error happened. Please check console");
                    console.log(error);
                })

                toast.success("Profile Updated", Toastobjects);

                // if (!toast.isActive(toastId.current)) {
                //     toastId.current = toast.success("Profile Updated", Toastobjects);
                //   }
        }
    }
  return (
    <>
      <ToastContainer />
      <form className="row  form-container" onSubmit={handleEditUser}>
        <div className="col-md-6">
          <div className="form">
            <label for="account-fn" >USER NAME</label>
            <input
              className="form-control"
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        </div>

        <div className="col-md-6">
          <div className="form">
            <label for="account-email">EMAIL</label>
            <input
              className="form-control"
              type="email"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>
        <div className="col-md-6">
          <div className="form">
            <label for="account-pass" >NEW PASSWORD</label>
            <input
              className="form-control"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>
        <div className="col-md-6">
          <div className="form">
            <label for="account-confirm-pass" >CONFIRM PASSWORD</label>
            <input
              className="form-control"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
        </div>
        <button type="submit">UPDATE PROFILE</button>
      </form>
        </>
  );
};

export default ProfileTabs;
