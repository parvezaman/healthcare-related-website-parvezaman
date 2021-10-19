import React from 'react';
import { ButtonGroup, Button } from 'react-bootstrap';
import useFirebase from '../../hook/useFirebase';
import './Home.css';

const Home = () => {
    const {user} =useFirebase();
    console.log(user);
    return (
        <div>
            <h1>Home</h1>
            
        </div>
    );
};

export default Home;