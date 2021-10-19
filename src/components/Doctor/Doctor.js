import React from 'react';
import './Doctor.css';

const Doctor = (props) => {
const {name, image, especiality} = props.doctor;
    return (
        <div>
            <div className="doctor-container">
                <img src={image} alt="" />
                <h3>{name}</h3>
                <small>{especiality}</small>
            </div>
        </div>
    );
};

export default Doctor;