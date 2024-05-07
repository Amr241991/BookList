import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { ListGroup, Spinner } from 'react-bootstrap';
import BackButton from '../BackButton';
import Header from '../header';
import Amr from '../Footers/Amr';
import HeaderAdmin from './HeaderAdmin';

const AllMessage = () => {
    const [contact, setContact] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        };

        axios.get("http://localhost:5000/contact", config)
            .then((response) => {
                console.log(response);
                if (response.data && response.data) {
                    setContact(response.data);
                }
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
            });
    }, []);

        console.log(contact);
    return (
        <>
        <HeaderAdmin/>
       <div className='p-4'>
        <BackButton/>
 
        <div className="container mt-5">
            <h1 className="mb-4">All Messages</h1>

            {loading ? (
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            ) : contact.length > 0 ? (
                <ListGroup>
                    {contact.map((message, index) => (
                        <ListGroup.Item key={index} className="my-3">
                            <h4 className="mb-3">{message.name}</h4>
                            <p><strong>Email:</strong> {message.email}</p>
                            <p><strong>Telfon:</strong> {message.telefon}</p>
                            <p><strong>Subject:</strong> {message.subject}</p>
                            <p><strong>Description:</strong> {message.description}</p>
                        </ListGroup.Item>
                    ))}
                </ListGroup>
            ) : (
                <p>No messages found.</p>
            )}
        </div>
        </div>
        {/* <Amr/> */}
        </>
    );
}

export default AllMessage;
