import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import BackButton from '../Components/BackButton';
import Spinner from '../Components/Spinner';
import Header from '../Components/header';

const EditBook = () => {
  const {id} = useParams();
    useEffect(()=>{
      setLoading(true);
      const config = {
        headers: {
            'Content-Type': 'application/json', 
            'Authorization': `Bearer ${localStorage.getItem('token')}` 
        }
    };
      axios.get(`http://localhost:5000/books/${id}`,config).then((response)=>{
          setTitle(response.data.title);
          setAuthor(response.data.author);
          setPublishYear(response.data.publishYear);
          setEndDate(response.data.endDate);
          setHistoryResult(response.data.historyResult);
          setImage(response.data.image);
          setSiralama(response.data.siralama);
          setUnversiteEmail(response.data.unversiteEmail);
          setLanguage(response.data.language);
          setVideo(response.data.video);
          setGecerliBelgiler(response.data.gecerliBelgiler);
          setBolumlerLink(response.data.bolumlerLink);
          setHarcParasiLink(response.data.harcParasiLink);
          setBasfurLink(response.data.basfurLink);
          SetLogoLink(response.data.logoLink);
          setLoading(false);
      }).catch((error)=>{
        setLoading(false);
        alert("An error happend. Plase chack console")
        console.log(error);
      })
    },[])

const [title ,setTitle] = useState('');
const [author,setAuthor]=useState('');
const [publishYear,setPublishYear] = useState('');
const [endDate,setEndDate] = useState("");
const [historyResult,setHistoryResult] = useState("");
const [image,setImage] = useState("");
const [siralama,setSiralama] = useState("");
const [unversiteEmail,setUnversiteEmail] = useState("");
const [language,setLanguage] = useState("");
const [video,setVideo] = useState('');
const [gecerliBelgiler,setGecerliBelgiler] = useState('');
const [bolumlerLink,setBolumlerLink] = useState('');
const [harcParasiLink,setHarcParasiLink] = useState('');
const [basfurLink,setBasfurLink] = useState('');
const [logoLink,SetLogoLink] = useState('');
const [loading,setLoading] = useState(false);
const navgate = useNavigate();
const handleEditbook =()=>{
  const data ={
    title,author,publishYear,endDate,historyResult,image,siralama,unversiteEmail,language,video,gecerliBelgiler,bolumlerLink,harcParasiLink,
    basfurLink,logoLink  };

  setLoading(true);
  const config = {
    headers: {
        'Content-Type': 'application/json', 
        'Authorization': `Bearer ${localStorage.getItem('token')}` 
    }
};
  axios.put(`http://localhost:5000/books/${id}`,data,config)
  .then(()=>{
      setLoading(false);
      navgate('/');
  }).catch((error)=>{
    setLoading(false);
    alert("an error happened plase chack console")
    console.log(error);
  })
} 
  return (
    <><Header/>
    <div className='p-4'>
      <BackButton/>
        <h1 className='text-3x1 my-4'>Edit Book</h1>
        {loading ? <Spinner/> : ''}
        <div className='flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto'>
          <div className='my-4'>
            <label className='text-xl mr-4 text-gray-500'>Title</label>
            <input 
            type="text" 
            value={title} 
            onChange={(e)=> setTitle(e.target.value)} 
            className='border-2 border-gray-500 px-4 py-2 w-full'
             />
          </div>
          <div className='my-4'>
            <label className='text-xl mr-4 text-gray-500'>Author</label>
            <input 
            type="text" 
            value={author} 
            onChange={(e)=> setAuthor(e.target.value)} 
            className='border-2 border-gray-500 px-4 py-2 w-full'
             />
          </div>
          <div className='my-4'>
            <label className='text-xl mr-4 text-gray-500'>Publish Year</label>
            <input 
            type="date" 
            value={publishYear} 
            onChange={(e)=> setPublishYear(e.target.value)} 
            className='border-2 border-gray-500 px-4 py-2 w-full'
             />
          </div>
          <div className='my-4'>
            <label className='text-xl mr-4 text-gray-500'>Bitiş Tarihi</label>
            <input 
            type="date" 
            value={endDate} 
            onChange={(e)=> setEndDate(e.target.value)} 
            className='border-2 border-gray-500 px-4 py-2 w-full'
             />
          </div>
          <div className='my-4'>
            <label className='text-xl mr-4 text-gray-500'>sonuç Tarihi</label>
            <input 
            type="date" 
            value={historyResult} 
            onChange={(e)=> setHistoryResult(e.target.value)} 
            className='border-2 border-gray-500 px-4 py-2 w-full'
             />
          </div>
          <div className='my-4'>
            <label className='text-xl mr-4 text-gray-500'>image</label>
            <input 
            type="text" 
            value={image} 
            onChange={(e)=> setImage(e.target.value)} 
            className='border-2 border-gray-500 px-4 py-2 w-full'
             />
          </div>
          <div className='my-4'>
            <label className='text-xl mr-4 text-gray-500'>Ünversitenin sıralaması</label>
            <input 
            type="number" 
            value={siralama} 
            onChange={(e)=> setSiralama(e.target.value)} 
            className='border-2 border-gray-500 px-4 py-2 w-full'
             />
          </div>
          <div className='my-4'>
            <label className='text-xl mr-4 text-gray-500'>Ünversitenin Sayfası</label>
            <input 
            type="url" 
            value={unversiteEmail} 
            onChange={(e)=> setUnversiteEmail(e.target.value)} 
            className='border-2 border-gray-500 px-4 py-2 w-full'
             />
          </div>
          <div className='my-4'>
            <label className='text-xl mr-4 text-gray-500'>Öğretim Dili</label>
            <input 
            type="text" 
            value={language} 
            onChange={(e)=> setLanguage(e.target.value)} 
            className='border-2 border-gray-500 px-4 py-2 w-full'
             />
          </div>
          <div className='my-4'>
            <label className='text-xl mr-4 text-gray-500'>Tantım Videosu</label>
            <input 
            type="text" 
            value={video} 
            onChange={(e)=> setVideo(e.target.value)} 
            className='border-2 border-gray-500 px-4 py-2 w-full'
             />
          </div>
          <div className='my-4'>
            <label className='text-xl mr-4 text-gray-500'>Gecerli Bilgiler</label>
            <input 
            type="text" 
            value={gecerliBelgiler} 
            onChange={(e)=> setGecerliBelgiler(e.target.value)} 
            className='border-2 border-gray-500 px-4 py-2 w-full'
             />
          </div>
          <div className='my-4'>
            <label className='text-xl mr-4 text-gray-500'>Ünversite'nin bölümleri</label>
            <input 
            type="url" 
            value={bolumlerLink} 
            onChange={(e)=> setBolumlerLink(e.target.value)} 
            className='border-2 border-gray-500 px-4 py-2 w-full'
             />
          </div>
          <div className='my-4'>
            <label className='text-xl mr-4 text-gray-500'>Harç parası</label>
            <input 
            type="url" 
            value={harcParasiLink} 
            onChange={(e)=> setHarcParasiLink(e.target.value)} 
            className='border-2 border-gray-500 px-4 py-2 w-full'
             />
          </div>
          <div className='my-4'>
            <label className='text-xl mr-4 text-gray-500'>Başvur Linki</label>
            <input 
            type="url" 
            value={basfurLink} 
            onChange={(e)=> setBasfurLink(e.target.value)} 
            className='border-2 border-gray-500 px-4 py-2 w-full'
             />
          </div>
          <div className='my-4'>
            <label className='text-xl mr-4 text-gray-500'>Unversite yeri</label>
            <input 
            type="text" 
            value={logoLink} 
            onChange={(e)=> SetLogoLink(e.target.value)} 
            className='border-2 border-gray-500 px-4 py-2 w-full'
             />
          </div>
          <button className='p-2 bg-sky-300 m-8' onClick={handleEditbook}>Save</button>
        </div>
      </div>
      </>
  )
}

export default EditBook