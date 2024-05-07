import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import BackButton from '../Components/BackButton';
import Spinner from '../Components/Spinner';
import Header from '../Components/header';

const DeleteBook = () => {
  const {id} = useParams();
  const navgate = useNavigate();
  const [loading,setLoading]= useState(false);
  const handleDeleteBook = ()=>{
    setLoading(true);
    const config = {
      headers: {
          'Content-Type': 'application/json', 
          'Authorization': `Bearer ${localStorage.getItem('token')}` 
      }
  };
    axios.delete(`http://localhost:5000/books/${id}`,config)
    .then(()=>{
      setLoading(false);
      navgate('/');
    }).catch((error)=>{
      setLoading(false)
      alert("An error happend plase check console")
      console.log(error);
    })
  }

  return (
    <>
    <Header/>
    <div className='p-4'>
      <BackButton/>
        <h1 className='text-3x1 my-4'>Delete Book</h1>
        {loading ? <Spinner/> :''}
        <div className='flex flex-col items-center border-2 border-sky-400 rounded-xl w-[600px] p-8 mx-auto'>
          <h3 className='text-2x1'>Are you Sure you want to delete this book</h3>

          <button className='p-4 bg-red-600 tex-white m-8 w-full' onClick={handleDeleteBook}>
              Yes, Delete it
          </button>
        </div>
    </div>
    </>
  )
}

export default DeleteBook