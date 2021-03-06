import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(()=>{
        fetch('services.json')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    const showDetails =()=>{
        console.log('clicked');
    }
    return (
        <div >
            <h1 className="text-center text-primary">Our services</h1>
            <div className="service-container" id="services">
                {
                    services.map(service => <Service
                    key={service.id}
                    service={service}
                    showDetails={showDetails}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;