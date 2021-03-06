import { useEffect, useState } from "react";
import initializeAuthentication from "../firebase/firebase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, createUserWithEmailAndPassword  } from "firebase/auth";


initializeAuthentication();

const useFirebase = ()=>{
    const [user, setUser] = useState({});
    const [error, setError] = useState("");
    const auth = getAuth();

    const googleProvider = new GoogleAuthProvider();

    const signInUsingGoogle = ()=>{
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                // const credential = GoogleAuthProvider.credentialFromResult(result);
                // const token = credential.accessToken;
                console.log(result.user);
                setUser(result.user);
            }).catch((error) => {
                setError(error.message);
            });

        }

        const signOutFromGoogle = ()=>{
            signOut(auth).then(() => {
                setUser({});
            }).catch((error) => {
                // An error happened.
              });
        }

        useEffect(()=>{
            onAuthStateChanged(auth, user=>{
                if(user){
                    setUser(user);
                }
            })
        },[])

        

        return{
            user,
            error,
            signInUsingGoogle,
            signOutFromGoogle
        }
}

export default useFirebase;