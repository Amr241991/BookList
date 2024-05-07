import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Card, Spinner } from 'react-bootstrap';
import BackButton from '../BackButton';
import HeaderAdmin from './HeaderAdmin';

const AllUsers = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        };

        axios.get("http://localhost:5000/api/users", config)
            .then((response) => {
                console.log(response);
                if (response.data) {
                    setUsers(response.data);
                }
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
            });
    }, []);

    return (
        <>
       
        <HeaderAdmin/>
        <div className='p-4'>
            <BackButton/>
        
        <div className="container mt-5">
            <h1>All Users</h1>

            {loading ? (
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            ) : users.length > 0 ? (
                <div className="row row-cols-1 row-cols-md-2 g-4">
                    {users.map((user, index) => (
                        <div className="col" key={index}>
                            <Card>
                                <Card.Body>
                                    <Card.Title>{user.name}</Card.Title>
                                    <Card.Text>
                                        <strong>Email:</strong> {user.email}<br />
                                        <strong>isAdmin:</strong> {user.isAdmin ? 'Yes' : 'No'}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                    ))}
                </div>
            ) : (
                <p>No users found.</p>
            )}
        </div>
        </div>
        </>
    );
}

export default AllUsers;
