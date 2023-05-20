import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../../Firebase/firebase.config';


const AuthContext = createContext(null);

const auth = getAuth(app);

function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);


    const signUp=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const signIn=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }

    const googleSignIn=(provider)=>{
        return signInWithPopup(auth,provider);
    }

    const logOut=()=>{
        return signOut (auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, loggedUser => {
            console.log('logged in user inside auth state observer', loggedUser);
            setUser(loggedUser);
            setLoading(false);
        })

        return () => {
            unsubscribe()
        }
    })
    const authInfo = {
        user,
        signUp,
        signIn,
        googleSignIn,
        logOut,
        loading

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )
}

export { AuthContext, AuthProvider,auth };