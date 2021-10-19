import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hook/useAuth';
import useFirebase from '../../hook/useFirebase';
// import useFirebase from '../../hook/useFirebase';
import "./Login.css";

const Login = () => {
    // const {signInUsingGoogle} = useAuth();
    const {signInUsingGoogle} = useFirebase();
    return (
        <div className="login-form">
            <h1>Please Login</h1>
            <br /><br />
            <button onClick={signInUsingGoogle} className="btn btn-secondary">Sign in with Google</button>
            <br /><br />
            ----------------------
            <br />
            <Link to="/regester">Please Regester in case of New Patient?</Link>
        </div>
    );
};

export default Login;