import { signInAnonymously, signOut } from "firebase/auth"
import { auth } from "./firebase-config"

export const  signInAnonym = async () => {
    try{
    const userObj = await signInAnonymously(auth);
    console.log(userObj.user);
    return userObj.user.uid;

    }catch(e){
        console.log(e);
    }

}
export const logout = async () => await signOut(auth)

