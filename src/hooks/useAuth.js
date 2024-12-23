import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react"
import { auth } from "../firebase/firebase-config";


export const useAuth = () => {
    const[user,setUser] = useState(null);

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,(currentUser)=>setUser(currentUser));
        return ()=>unsubscribe();
    },[]);
    return user;
}
