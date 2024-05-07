import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import BackButton from '../Components/BackButton';
import Spinner from '../Components/Spinner';
import Header from '../Components/header';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // const submitHandler =  (e) => {
  //   e.preventDefault();
  //   setLoading(true);
  //   const data = { email, password };
  //   axios.post("http://localhost:5000/api/users/login", data,)
  //     .then((response) => {
  //       console.log(response);
  //       setLoading(false);
  //       // setError(false);
  //       navigate('/');
  //     })
  //     .catch((error) => {
  //       setLoading(false);
  //       alert("An error occurred. Please check the console.");
  //       console.log(error);
  //     });
  // };

  const submitHandler = (e) => {
    e.preventDefault();
    setLoading(true);
    const data = { email, password };
    axios.post("http://localhost:5000/api/users/login", data)
        .then((response) => {
            // console.log(response);
            const { token, isAdmin } = response.data;
            // console.log(token);
            if (token) {
                const serializedData = JSON.stringify(data);
                // console.log(serializedData);
                localStorage.setItem('token', token);
                // localStorage.setItem('userInfo', serializedData)
                setLoading(false);

                if (isAdmin) {
                    navigate('/HomeAdmin');
                } else {
                    navigate('/');
                }
            } else {
                setLoading(false);
                console.error("Token not found in response:", response.data);
                alert("An error occurred. Please check the console.");
            }
        })
        .catch((error) => {
            setLoading(false);
            console.error("Login error:", error);
            alert("An error occurred. Please check the console.");
        });
};


  return (
    <>
    <Header/>
      <div className='p-4'>
        <BackButton />
        <div className="p-7 max-w-lg mx-auto">
          <h1 className='text-3xl text-center font-semibold my-7'>Sign In</h1>
          {loading ? <Spinner /> : ''}
          <form
            className="flex flex-col gap-4"
            onSubmit={submitHandler}
          >
            <input
              type="email"
              placeholder="Email"
              value={email}
              className='bg-slate-100 p-3 rounded-lg'
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              className='bg-slate-100 p-3 rounded-lg'
              onChange={(e) => setPassword(e.target.value)}
            />
            <button disabled={loading} type="submit" className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80'>
              {loading ? 'loading...' : 'Login'}
            </button>
            <p></p>
          </form>
          <div className='flex gap-2 mt-3'>
            <p>Dont Have an account?</p>
            <Link to='/sign-up'>
              <span className='text-blue-500'>Sign up</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
