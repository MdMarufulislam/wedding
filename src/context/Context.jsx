import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../Firebase/Firebase.config";
export const contextApi=createContext(null)
const auth = getAuth(app);


const Context = ({children}) => {
    const [user, setuser]=useState(null)
    const [loading, setLoading] = useState(true);
    const provider=new GoogleAuthProvider();
    const google=(auth,provider)=>{
        setLoading(true);
        console.log(auth)
        return signInWithPopup(auth, provider)
    }
    const creatUser=(email,pass)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, pass,name);
    }
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setuser(currentUser);
            setLoading(false);
            
        });
        return () => {
            unSubscribe();
        }
    }, [])
    const logout=()=>{
        setLoading(true);
        return signOut(auth);
    }
    const login=(email,password)=>{
        setLoading(true);
       return signInWithEmailAndPassword(auth, email, password)
    }

    


    const contextInfo={
        user,
        creatUser,
        logout,
        login,
        loading,
        google
    }

    return (
        <contextApi.Provider value={contextInfo}>
            {children}
        </contextApi.Provider>
    );
};

export default Context;