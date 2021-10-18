import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <nav>
                <NavLink to="/home">Home</NavLink>
                <NavLink to="/services">Services</NavLink>
                <NavLink to="/doctors">Doctors</NavLink>
                <NavLink to="/appointments">Appoinments</NavLink>
                <NavLink to="/login">Login</NavLink>

            </nav>
        </div>
    );
};

export default Header;