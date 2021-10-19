import React, { useEffect, useState } from 'react';
import Doctor from '../Doctor/Doctor';
import './Doctors.css';



const Doctors = () => {
    const [doctors, setDoctors] = useState([]);

    useEffect(()=>{
        fetch('doctors.json')
        .then(res => res.json())
        .then(data => setDoctors(data))
    },[])
    return (
        <div>
            <h1 className="text-center text-primary">Some of our Doctors</h1>
            <div className="doctors-container">
                {
                    doctors.map(doctor=><Doctor
                    key={doctor.id}
                    doctor={doctor}
                    ></Doctor>)
                }
            </div>
        </div>
    );
};

export default Doctors;