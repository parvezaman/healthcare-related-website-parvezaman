import React from 'react';
import './Header.css';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="/home">KushtiaHealthCare</Navbar.Brand>
    <Nav className="me-auto">

      <Link className="me-3 text-decoration-none text-white" to="/home">Home</Link>
      <Link className="me-3 text-decoration-none text-white" to="/services">Services</Link>
      <Link className="me-3 text-decoration-none text-white" to="/doctors">Doctors</Link>
      <Link className="me-3 text-decoration-none text-white" to="/appointments">Appointments</Link>
      <Link className="me-3 text-decoration-none text-white" to="/login">Login</Link>
    </Nav>
    </Container>
  </Navbar>

  
            {/* <nav>
                <NavLink to="/home">Home</NavLink>
                <NavLink to="/services">Services</NavLink>
                <NavLink to="/doctors">Doctors</NavLink>
                <NavLink to="/appointments">Appoinments</NavLink>
                <NavLink to="/login">Login</NavLink>

            </nav> */}
        </div>
    );
};

export default Header;