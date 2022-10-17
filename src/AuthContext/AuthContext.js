import { createContext, useContext, useEffect, useState } from "react";
import {
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, 
    signOut, 
    onAuthStateChanged, 
    GoogleAuthProvider,
    signInWithPopup,
    sendPasswordResetEmail
} from 'firebase/auth'
import {auth} from '../firebase'


const UserContext = createContext(

)

export const AuthContextProvider = ({children}) =>{

    const ResetPassword =(email) =>{
        return sendPasswordResetEmail(auth, email);
    }

    const googleSignIn = () =>{
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider);
    }

    const [user, setUser] = useState({})

    const createUser =(email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    };


    const signIn =(email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)

    }

    const logout = () => {
        return signOut(auth)
    }
    

    useEffect((e) => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) =>{
            console.log(currentUser);
            setUser(currentUser);
        } )
        return () => {
            unsubscribe();
        }

    }, [])

    

    return(
        <UserContext.Provider value ={{  createUser, user, logout, signIn, googleSignIn, ResetPassword }}>
            {children}
        </UserContext.Provider>
    )    
}



export const UserAuth = () => {
    return useContext(UserContext);
}