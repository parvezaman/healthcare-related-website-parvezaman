import React from 'react';
import './Service.css';

const Service = (props) => {
    const {name, image, description} = props.service;
    return (
        <div className="service-card">
            <img src={image} alt="" />
            <h3>{name}</h3>
            <p>{description}</p>
        </div>
    );
};

export default Service;