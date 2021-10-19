import React from 'react';
import './Header.css';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// import useFirebase from '../../hook/useFirebase';
import useAuth from '../../hook/useAuth';
import useFirebase from '../../hook/useFirebase';

const Header = () => {
    // const {user, signOutFromGoogle } = useAuth();
    const {user, signOutFromGoogle } = useFirebase();
    // export let userMail = user.email;
    // console.log(user);

    return (
        <div>
            <Navbar bg="dark" variant="dark" sticky="top" collapseOnSelect expand="lg">
                <Container>
                <Navbar.Brand as={Link} to="/home">KushtiaHealthCareCenter</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                <Nav.Link as={Link} to="/home">Home</Nav.Link>
                <Nav.Link as={Link} to="/services">Services</Nav.Link>
                <Nav.Link as={Link} to="/doctors">Doctors</Nav.Link>
                <Nav.Link as={Link} to="/appointments">Appointments</Nav.Link>
                <Nav.Link as={Link} to="/login">Login</Nav.Link>
                {/* {console.log(user.email)} */}
                {/* {return user.email} */}
                {user.email && <Navbar.Text>
                    Signed in as: <a href="/login">{user.displayName}</a>
                </Navbar.Text>}
                </Navbar.Collapse>
                {user.email && <button onClick={signOutFromGoogle} className="btn btn-danger">Log Out</button>}
                <Nav className="me-auto">
                
                </Nav>
                </Container>
            </Navbar>

            {/* const userMail =()=>{
                const eserEmail = user.email;
            } */}

            {/* <Navbar bg="dark" variant="dark">
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
  </Navbar> */}

  
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