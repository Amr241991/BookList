import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md';
import moment from 'moment';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CiSearch } from "react-icons/ci";
import HeroSection from '../Hero/HeroSection';
import Bilgiler from '../../pages/Bilgiler';
import About from '../Hero/About';
import Amr from '../Footers/Amr';
import Spinner from '../Spinner';
import HeaderAdmin from './HeaderAdmin';
// import Amr from '../Components/Footers/Amr';
// import HeroSection from '../Components/Hero/HeroSection';
// import About from '../Components/Hero/About';
// import Header from '../Components/header';
// import Bilgiler from './Bilgiler';

const HomeAdmin = () => {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState('');

    useEffect(() => {
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        };

        axios.get("http://localhost:5000/books", config)
            .then((response) => {
                setBooks(response.data.data);
                setLoading(false);
            }).catch((error) => {
                console.log(error);
                setLoading(false);
            });
    }, []);

    const determineEndDateColor = (endDate) => {
        const today = moment();
        const date = moment(endDate);

        if (date.isBefore(today)) {
            return 'red';  // Past End Date
        } else if (date.diff(today, 'days') <= 3) {
            return 'yellow';  // End Date is within the next 3 days
        }
        return 'white';  // Future Date or ongoing dates that are not close to ending
    }

    const determinePublishDateColor = (publishYear) => {
        const today = moment();
        const date = moment(publishYear);

        if (date.isBefore(today)) {
            return "green";  // Past Start Date
        } 
        return "white";    // Ongoing or future Start Date
    }

    return (
        <div>
            <HeaderAdmin/>
            <HeroSection />
            <Form className='flex flex-col items-center mt-6'>
                <InputGroup className='my-3 w-11/12 sm:w-1/4'>
                    <Form.Control
                        className='rounded-xl'
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder='Search contacts'
                    />
                    <h1 className='text-5xl text-cyan-100 bg-sky-800 text-center rounded-xl'><CiSearch /></h1>
                </InputGroup>
            </Form>


            <div className='p-4'>
                <div className='flex justify-between items-center'>
                    <h1 className='text-3xl my-8'>Üniversite Listesi</h1>
                    <Link to='/books/create'>
                        <MdOutlineAddBox className='text-sky-800 text-4xl' />
                    </Link>
                </div>


                <Bilgiler/>
                {loading ? (
                    <Spinner />
                ) : (
                    <div className='overflow-x-auto'>
                        <table className='w-full border-separate border-spacing-2'>
                            <thead>
                                <tr>
                                    <th className='border border-slate-600 rounded-md text-center'>No</th>
                                    <th className='border border-slate-600 rounded-md text-center'>Üniversite</th>
                                    <th className='border border-slate-600 rounded-md text-center'>Şehir</th>
                                    <th className='border border-slate-600 rounded-md text-center'>Başlama Tarihi</th>
                                    <th className='border border-slate-600 rounded-md text-center'>Bitiş Tarihi</th>
                                    <th className='border border-slate-600 rounded-md text-center'>Sonuç Tarihi</th>
                                    <th className='border border-slate-600 rounded-md text-center'>Geçerli Belgiler</th>
                                    <th className='border border-slate-600 rounded-md text-center'>Sıralama</th>
                                    <th className='border border-slate-600 rounded-md text-center'>Operation</th>
                                </tr>
                            </thead>
                            <tbody>
                                {books && books.filter(book => search.toLowerCase() === '' ? book :
                                book.title.toLowerCase().includes(search)).map((book, index) => (
                                    <tr key={book._id} className="h-8">
                                        <td className='border border-slate-700 rounded-md text-center'>
                                            {index + 1}
                                        </td>
                                        <td className='border border-slate-700 rounded-md text-center'>
                                            {book.title}
                                        </td>
                                        <td className='border border-slate-700 rounded-md text-center'>
                                            {book.author}
                                        </td>
                                        <td className='border border-slate-700 rounded-md text-center'
                                            style={{backgroundColor: determinePublishDateColor(book.publishYear)}}>
                                            {moment(book.publishYear).format('MM/DD/YYYY')}
                                        </td>
                                        <td className='border border-slate-700 rounded-md text-center'
                                            style={{backgroundColor: determineEndDateColor(book.endDate)}}>
                                            {moment(book.endDate).format('MM/DD/YYYY')}
                                        </td>
                                        <td className='border border-slate-700 rounded-md text-center'>
                                            {moment(book.historyResult).format('MM/DD/YYYY')}
                                        </td>
                                        <td className='border border-slate-700 rounded-md text-center'>
                                            {book.gecerliBelgiler}
                                        </td>
                                        <td className='border border-slate-700 rounded-md text-center'>
                                            {book.siralama}
                                        </td>
                                        <td className='border border-slate-700 rounded-md text-center '>
                                            <div className='flex justify-center gap-x-4'>
                                                <Link to={`/books/details/${book._id}`}>
                                                    <BsInfoCircle className='text-2x1 text-green-800' />
                                                </Link>
                                                <Link to={`/books/edit/${book._id}`}>
                                                    <AiOutlineEdit className='text-2x1 text-yellow-600' />
                                                </Link>
                                                <Link to={`/books/delete/${book._id}`}>
                                                    <MdOutlineDelete className='text-2x1 text-red-600' />
                                                </Link>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                    </div>
                )}
            </div>
            <About />
            <Amr />
        </div>
    )
}

export default HomeAdmin;
