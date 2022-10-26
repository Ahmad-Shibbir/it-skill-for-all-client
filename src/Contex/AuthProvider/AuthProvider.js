import React from 'react';
import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup } from "firebase/auth";
import { createContext } from 'react';
import app from '../../firebase/firebase.config'
import { useState } from 'react';
import { useEffect } from 'react';

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    // const provider = new GoogleAuthProvider();
    const [user, setUser] = useState(null)

    const providerLogin = (provider)=>{
        return signInWithPopup(auth, provider)
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
            console.log('user inside dtate chande', currentUser);
            setUser(currentUser)
        })
    },[])

    const info= {user, providerLogin}

    return (
        <div>
           <AuthContext.Provider value={info}>
                {children}
           </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;