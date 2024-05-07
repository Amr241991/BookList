import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Spinner from '../Components/Spinner';
import Header from '../Components/header';
import BackButton from '../Components/BackButton';
import FooterHero from '../Components/Footers/Amr';
import Amr from '../Components/Footers/Amr';
// import BackButton from '../Components/BackButton';
// import Spinner from '../Components/Spinner';
// import Header from '../Components/Header';

const ShowBook = () => {
  const [book, setBook] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
      },
    };
    axios.get(`http://localhost:5000/books/${id}`, config)
      .then(response => {
        setBook(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error("Fetching error: ", error);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <Spinner />;

  return (
    <div>
      <Header />
      <div className='container mx-auto p-3'  >
        <BackButton />

        <div className='bg-white rounded-lg  mt-5 ' >
        <div className="vr"></div>

          <div className='mb-4'>
            <h1 className='text-4xl font-semibold text-gray-800'>{book.title || "Book Details"}</h1>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 shadow-lg p-16 sm:h-96  '>
            <div className='mb-4 sm:ml-20'>
              <img src={book.image} alt="Book Cover" className='rounded-md object-cover max-w-full h-full md:h-1/3' />
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2  gap-3 mt-4'>
              <div className='mb-1'>
                <ul>
                  <li className='text-xl my-2 list-disc'><span className='text-gray-600'>Şehir:</span>  {book.author}</li>
                  <li className='text-xl my-2 list-disc'><span className='text-gray-600'>Üniversite Sıralaması:</span> {book.siralama}</li>
                  <li className='text-xl my-2 list-disc'><span className='text-gray-600'>Öğretim dili:</span> {book.language}</li>
                  <li className='text-xl my-2 list-disc'><span className='text-gray-600'>Geçerli Belgiler:</span> {book.gecerliBelgiler}</li>
                </ul>
              </div>

              <div className='mb-1 '>
                <ul>
                  <li className='text-xl my-2 list-disc'><span className='text-gray-600'>Üniversite Sayfası:</span> <a target='_blank' href={`https://${book.unversiteEmail}`} className='text-blue-600 hover:text-blue-800'>Click here</a></li>
                  <li className='text-xl my-2 list-disc'><span className='text-gray-600'>Bölümler:</span> <a target='_blank' href={`https://drive.google.com/uc?id=${book.bolumlerLink}`} className='text-blue-600 hover:text-blue-800'>Click here</a></li>
                  <li className='text-xl my-2 list-disc'><span className='text-gray-600'>Harç Parası:</span> <a target='_blank' href={`https://drive.google.com/uc?id=${book.harcParasiLink}`} className='text-blue-600 hover:text-blue-800'>Click here</a></li>
                  <li className='text-xl my-2 list-disc'><span className='text-gray-600'>Başvuru Sayfası:</span> <a target='_blank' href={book.basfurLink} className='text-blue-600 hover:text-blue-800'>Click here</a></li>
                </ul>
              </div>
            </div>

          </div>

          <div className='mt-10 mb-4 shadow-lg pt-4 p-1'>
            <h2 className='text-2xl font-semibold flex justify-center'>Tanım Videosu</h2>
            <div className='flex justify-center'>
            <iframe className='sm:w-2/4 sm:h-96  w-full h-64 mt-4' src={`https://youtube.com/embed/${book.video}`} title="Video" frameBorder="0" allowFullScreen></iframe>

            </div>
            <div className='text-center'>
            <h2 className='text-2xl font-semibold mt-5'>Üniversite'nin Konumu</h2>
            <div className='flex justify-center'>
            <img src={book.logoLink} alt="University Logo" className='w-11/12 my-4 max-w-md ' />

            </div>
          </div>
          </div>
          <Amr/>
         
        </div>
      </div>
    </div>
  );
}

export default ShowBook;
