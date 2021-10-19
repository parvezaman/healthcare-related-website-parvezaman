import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

import "./Regester.css";

const Regester = () => {
    const auth = getAuth();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState('');
    const [isLogin, setIsLogin] = useState(false);
    const handleRegestration = (e)=>{
        e.preventDefault();

        console.log(email, password);
        // if(password.length < 6){
        //     // setError("Password must be at least 6 charecters!")
        //     return;
        // }
        
        isLogin ? processLogin(email, password) : createNewUser(email, password);
    }

    const processLogin =(email, password)=>{
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log(user);
            setError("");
        })
        .catch((error) => {
            setError(error.message);
        });
    }

    const createNewUser =(email, password)=>{
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log(user);
            setError('');
        })
        .catch((error) => {
            setError(error.message);
        });
    }

    const toggleLogin=(e)=>{
        setIsLogin(e.target.checked);
        // console.log(e.target.checked);
    }

    const handleEmailChange=(e)=>{
        setEmail(e.target.value);
    }

    const handlePasswordChange = (e)=>{
        setPassword(e.target.value);
    }

   
    return (
        <div className="regestration-form mx-5">
           <h1>Regester if you don't have account with us</h1> 
           <br /><br />

           <form onSubmit={handleRegestration}>
               <h3 className="text-primary">Please {isLogin ? "Login" : "Regester"}</h3>
            <div className="row mb-3">
                <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                <div className="col-sm-10">
                <input onBlur={handleEmailChange} type="email" className="form-control" id="inputEmail3" required/>
                </div>
            </div>
            <div className="row mb-3">
                <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                <div className="col-sm-10">
                <input onBlur={handlePasswordChange} type="password" className="form-control" id="inputPassword3" required/>
                </div>
            </div>
            
            <div className="row mb-3">
                <div className="col-sm-10 offset-sm-2">
                <div className="form-check">
                    <input onChange={toggleLogin} className="form-check-input" type="checkbox" id="gridCheck1"/>
                    <label className="form-check-label" htmlFor="gridCheck1">
                    Already regestered?
                    </label>
                </div>
                </div>
            </div>
            <div className="row mb-3 text-danger">{error}</div>
            <button type="submit" className="btn btn-primary">{isLogin ? "Login" : "Regester"}</button>
            </form>

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