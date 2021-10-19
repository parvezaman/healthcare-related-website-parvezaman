import React from 'react';
import './Service.css';

const Service = (props) => {
    console.log(props.showDetails);
    const handleShowDetails = props.showDetails;
    const {name, image, description} = props.service;
    return (
        <div className="service-card">
            <img src={image} alt="" />
            <h3>{name}</h3>
            <p>{description}</p>
            <button onClick={handleShowDetails} className="btn btn-primary">Show Details</button>
        </div>
    );
};

export default Service;