import React from 'react';
import { ButtonGroup, Button } from 'react-bootstrap';
import useFirebase from '../../hook/useFirebase';
import './Home.css';

const Home = () => {
    const {user} =useFirebase();
    console.log(user);
    return (
        <div className="home-container">
            <h1>Kushtia Health Center</h1>
            <h3>Your reliable institution for health services</h3>
            <p>Nawab Road, 22/27 konbari, Kushtia</p>
            
        </div>
    );
};

export default Home;