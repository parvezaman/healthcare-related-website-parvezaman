import React from 'react';
import { Link } from 'react-router-dom';
import "./Regester.css";

const Regester = () => {
    return (
        <div className="regestration-form">
           <h1>Regester if you don't have account with us</h1> 
           <br /><br />

           <form>
            <input type="email" name="" id="" placeholder="Your email" />
            <br />
            <input type="password" name="" id="" placeholder="Your password" />
            <br /><br />
            <input type="submit" value="Submit" className="btn btn-success"/>
           </form>
           -----------------------------------------------------
           <br />
           <Link to="/login">Please login if you are a Regestered Patient</Link>
        </div>
    );
};

export default Regester;